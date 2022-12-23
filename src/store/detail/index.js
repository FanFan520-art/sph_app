import { reqGoodsInfo } from "@/api"
const state = {
    goodInfo: {}
}
const actions = {
    async getGoodInfo({commit}, skuId){
        let result = await reqGoodsInfo(skuId);
        if(result.code == 200){
            commit('GETGOODINFO', result.data);
        }
    }
}
const mutations = {
    GETGOODINFO(state, goodInfo){
        state.goodInfo = goodInfo;
    }
}
const getters = {
    //路径导航简化的数据
    categoryView(state){
        return state.goodInfo.categoryView || {};
    },
    //简化产品信息的数据
    skuInfo(state){
        return state.goodInfo.skuInfo || {};
    },
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList || [];
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}