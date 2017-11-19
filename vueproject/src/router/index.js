import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Newlist from '@/components/newlist'
import Hot from '@/components/hot'
import Catlog from '@/components/catlog'
import Me from '@/components/me'
import Detail from '@/components/detail'
import Goodinfo from '@/components/goodinfo'
import Register from '@/components/register'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      children:[
          {
            path: 'hot',
            component: Hot    
          },
          {
            path: 'newlist',
            component: Newlist
          },
          {
            path:'/',
            redirect:'/home/hot'
          }
      ]
    },
    {
      path:'/catlog',
      component: Catlog
    },
    {
      path:'/me',
      component: Me              
    },

    {
        path:'/register',
        component:Register
    },

    {
      path:'/detail/:id',
      component:Detail
    },
    {
      path:'/goodinfo',
      component:Goodinfo
    },
    {
      path: '*',
      redirect:'/home/hot'
    }
  ]
})
