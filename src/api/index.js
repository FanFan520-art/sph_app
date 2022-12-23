//进行统一的API接口管理
import requests from "./ajax";
import mockRequests from "./mockAjax";

//三级联动接口
export const reqCategoryList = () => requests({
        url:'/api/product/getBaseCategoryList',
        method: 'get'
    });

export const reqGetBannerList = () => mockRequests({
    url: '/banner',
    method: 'get'
});

export const reqGetFloorList = () => mockRequests.get('/floor');

export const reqGetSearchInfo = (params) => requests({
    url: 'api/list',
    method: 'post',
    data: params
})

export const reqGoodsInfo = (skuId) => requests({
    url: `/api/item/${skuId}`,
    method: 'get'
})