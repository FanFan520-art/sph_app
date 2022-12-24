import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from "@/api";

const state = {
    cartList: []
};
const mutations = {
    GETCARTLIST(state, cartList){
        state.cartList = cartList;
    }
};
const actions = {
    //获取购物车列表数据
    async getCartList({commit}){
        let result = await reqCartList();
        if(result.code == 200){
            commit('GETCARTLIST', result.data);
        }
    },
    async deleteCartListBySkuId({commit}, skuId){
        let result = await reqDeleteCartById(skuId);
        if(result.code == 200){
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    async updateCheckedById({commit}, {skuId, isChecked}){
        let result = await reqUpdateCheckedById(skuId, isChecked);
        if(result.code==200){
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    deleteAllCheckedCart({dispatch, getters}){
        //获取购物车中全部的产品
        let promiseAll = [];
        getters.cartList.cartInfoList.forEach(item => {
            let result = item.isChecked==1 ? dispatch('deleteCartListBySkuId', item.skuId) : '';
            promiseAll.push(result);
        });
        return Promise.all(promiseAll);
    },
    updateAllCartIsChecked({dispatch, getters}, isChecked){
        let promiseAll = [];
        getters.cartList.cartInfoList.forEach((item) => {
            let promise = dispatch('updateCheckedById', {skuId: item.skuId, isChecked});
            promiseAll.push(promise);
        });
        return Promise.all(promiseAll);
    }
};
const getters = {
    cartList(state){
        return state.cartList[0] || {}
    },

};
export default {
    state,
    mutations,
    actions,
    getters
}