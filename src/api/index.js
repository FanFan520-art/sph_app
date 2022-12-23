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
});

export const reqGoodsInfo = (skuId) => requests({
    url: `/api/item/${skuId}`,
    method: 'get'
});

//将产品添加到购物车中（或者更新某一个产品的个数）
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({
    url: `api/cart/addToCart/${ skuId }/${ skuNum }`,
    method: 'post'
});

//获取购物车列表数据
export const reqCartList = () => requests({
    url: '/api/cart/cartList',
    method: 'get'
});

//删除购物车产品
export const reqDeleteCartById = (skuId) => requests({
    url: `/api/cart/deleteCart/${skuId}`,
    method: 'delete'
});

//修改购物车产品的勾选状态
export const reqUpdateCheckedById = (skuId, isChecked)=> requests({
    url: `/api/cart/checkCart/${skuId}/${isChecked}`,
    method: 'get'
})