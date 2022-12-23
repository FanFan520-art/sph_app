//home模块的仓库
import { reqCategoryList,reqGetBannerList,reqGetFloorList } from "@/api";
const state = {
    categoryList: [],
    bannerList: [],
    floorList: []
};
const actions = {
    //通过API里面的接口函数调用，发送请求获取数据
    async categoryList({commit}){
        let result = await reqCategoryList();
        if(result.code==200){
            commit('GETCATEGORYLIST', result.data);
        }
    },
    async getBannerList({commit}){
        let result = await reqGetBannerList();
        if(result.code==200){
            commit('GETBANNERLIST',result.data);
        }
    },
    async getFloorList({commit}){
        let result = await reqGetFloorList();
        if(result.code==200){
            commit('GETFLOORLIST', result.data);
        }
    }
};
const mutations = {
    GETCATEGORYLIST(state,categoryList){
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state, bannerList){
        state.bannerList = bannerList;
    },
    GETFLOORLIST(state, floorList){
        state.floorList = floorList;
    }
};
const getters = {};

export default {
    state,
    actions,
    mutations,
    getters
}