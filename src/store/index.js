import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: null // 存储用户信息，初始值为null表示未登录
    },
    mutations: {
        setUser(state, user) {
            state.user = user; // 更新用户信息
        }
    },
    actions: {
        async fetchUser({ commit }, token) {
            try {
                const response = await axios.post('/token', { token });
                const user = response.data.user; // 后端返回的数据中包含用户信息
                commit('setUser', user);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        }
    }
});
