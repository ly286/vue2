export default {
    namespaced: true,//开启命名空间
    state: {
        userinfo: {
            username: '',
            isLogin: false,
            token: ''
        }
    },
    mutations: {
        //设置用户名称
        setUser(state, payload) {
            state.userinfo = payload
        },
        //删除用户
        deleteUser(state) {
            state.userinfo = {
                username: '',
                isLogin: false,
                token: ''
            }
        }
    },
    actions: {

    }
}