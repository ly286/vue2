import router  from "@/router/index";

//配置导航守卫
router.beforeEach((to, from, next) => {
    // if (to.meta.isLogin && !localStorage.getItem('user')) {
    if (to.meta.isLogin){
        next('/login')
    } else {
        next()
    }
})