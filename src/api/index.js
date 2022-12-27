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
});

//获取验证码
export const reqGetCode = (phone) => requests({
    url: `/api/user/passport/sendCode/${phone}`,
    method: 'get'
});

//注册
export const reqUserRegister = (data) => requests({
    url: `/api/user/passport/register/`,
    data,
    method: 'post'
});

//登录
export const reqUserLogin = (data) => requests({
    url: '/api/user/passport/login',
    data,
    method: 'post'
});

//获取用户信息（需要带着token去向服务器要数据）
export const reqUserInfo = () => requests({
    url: '/api/user/passport/auth/getUserInfo',
    method: 'get'
});

//退出登录
export const reqUserLogout = () => requests({
    url: '/api/user/passport/logout',
    method: 'get'
});

//获取用户地址信息
export const reqAddressInfo = () => requests({
    url: '/api/user/userAddress/auth/findUserAddressList',
    method: 'get'
});

//获取商品清单
export const reqOrderInfo = () => requests({
    url: '/api/order/auth/trade',
    method: 'get'
});

//提交订单的接口
export const reqSubmitOrder = (tradeNo, data) => requests({
    url: `/api/order/auth/submitOrder?tradeNo=${tradeNo}`,
    data,
    method: 'post'
});

//获取支付订单信息的接口
export const reqPayInfo = (orderId) => requests({
    url: `/api/payment/weixin/createNative/${orderId}`,
    method: 'get'
})