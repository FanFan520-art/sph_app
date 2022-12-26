import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo, reqUserLogout } from "@/api"
import {getToken, setToken, removeToken} from '@/utils/token'
const state = {
    code: "",
    token: getToken(),
    userInfo: {}
}
const actions = {
    //获取验证码
    async getCode({commit}, phone){
        let result = await reqGetCode(phone);
        console.log(result);
        if(result.code == 200){
            commit('GETCODE', result.data);
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    //用户注册
    async userRegister({commit}, userData){
        let result = await reqUserRegister(userData);
        if(result.code == 200){
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    //用户登录
    async userLogin({commit}, loginData){
        let result = await reqUserLogin(loginData);
        if(result.code==200){
            commit('USERLOGIN', result.data.token);
            //本地持久化token
            setToken(result.data.token);
            return 'ok'
        }else{
            return Promise.reject(new Error('faile'));
        }
    },

    //获取用户信息
    async userInfo({commit}){
        let result = await reqUserInfo();
        if(result.code==200){
            commit('GETUSERINFO', result.data);
        }
    },

    //退出登录
    async userLogout({commit}){
       let result = await reqUserLogout();
       if(result.code==200){
           commit('CLEARUSERINFO');
           return 'ok';
       }else{
           return Promise.reject(new Error('faile'));
       }
    }
}
const mutations = {
    GETCODE(state, code){
        state.code = code;
    },
    USERLOGIN(state, token){
        state.token = token;
    },
    GETUSERINFO(state, userInfo){
        state.userInfo = userInfo;
    },
    CLEARUSERINFO(state){
        state.token = '';
        state.userInfo = '';
        removeToken();
    }
}
const getters = {
    loginName(state){
        return state.userInfo.loginName;
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}