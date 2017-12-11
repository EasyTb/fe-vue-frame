import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    
    token: '',
    name: '',
    avatar: '',
   
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
   
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    
  },

  actions: {
    // 用户名登录
    LoginByUsername({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        
          const data = userInfo;
          setToken(data.username);
          commit('SET_TOKEN', data.username);
          // 做假登录和测试
          commit('SET_NAME', data.username);
          commit('SET_AVATAR', '');
          resolve();
        
      })
    },

    // 获取用户信息
    GetUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
       
          if (!response.data) { // 由于mockjs 不支持自定义状态码只能这样hack
            reject('error')
          }
          const data = response.data;
          commit('SET_NAME', data.name);
          commit('SET_AVATAR', data.avatar);
          resolve(response);
        
      })
    },



    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        
          commit('SET_TOKEN', '');
          removeToken();
          resolve();
        
      });
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },

  }
}

export default user
