import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Oauth from '@/components/Oauth'
import Home from '@/components/Home'

Vue.use(Router)
Vue.use(VueResource)
//开启JSON支持
Vue.http.options.emulateJSON = true;
//加入表单支持
Vue.http.options.headers = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
};

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/login',
      component: Oauth
    },
    {
    	path: '/home',
    	component: Home
    },
  ]
})
