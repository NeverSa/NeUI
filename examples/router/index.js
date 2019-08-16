import Vue from 'vue'
import Router from 'vue-router'
import layout from "../components/layout"
Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    //看板管理
    {
      path: '/',
      component: layout,
      redirect: '/radio',
      children: [{
        path: 'radio',
        name: 'radio',
        component: () => import('../components/radio'),
      }]
    },
  ]
})



