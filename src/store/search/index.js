//search模块的仓库
import { reqGetSearchInfo } from "@/api";
const state = {
    searchList :{}
};
const actions = {
    async getSearchList({commit}, params){
        let result = await reqGetSearchInfo(params);
        if(result.code==200){
            commit('GETSEARCHLIST', result.data);
        }
    }
};
const mutations = {
    GETSEARCHLIST(state, searchList){
        state.searchList = searchList;
    }
};
const getters = {
    //当前的state是当前仓库的state
    goodsList(state){
        return state.searchList.goodsList || [];
    },
    trademarkList(state){
        return state.searchList.trademarkList || [];
    },
    attrsList(state){
        return state.searchList.attrsList || [];
    },
    totalData(state){
        return state.searchList.total || [];
    }
};

export default {
    state,
    actions,
    mutations,
    getters
}