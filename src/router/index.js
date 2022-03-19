import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

// import FooterGuide from '../components/FooterGuide.vue'
import Home from '../pages/Home/Home.vue'
import Mine from '../pages/Mine/Mine.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'


export default new VueRouter({
  routes: [{
    path: "/",
    redirect: "/home",
  }, {
    path: "/home",
    component: Home,
    meta: {
      footerShow: true
    }
  }, {
    path: "/mine",
    component: Mine,
    meta: {
      footerShow: true
    }
  }, {
    path: "/order",
    component: Order,
    meta: {
      footerShow: true
    }
  }, {
    path: "/search",
    component: Search,
    meta: {
      footerShow: true
    }
  }, {
    path: "/login",
    component: Login
  }]
})

