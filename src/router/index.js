import Vue from 'vue'
import Router from 'vue-router'
import income from '@/views/income'

import admin from '../views/admin'
import notfind from '../views/notfind'
import edits from '../views/edits/edits'
import show from '../views/edits/show'
import manage from '../views/admins/manage'
import talentsEdit from '../views/talents/talentsEdit'
import change from '../views/talents/change'
import job from '../views/talents/job'

Vue.use(Router)

 const router = new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      name: 'income',
      component: income,
      alias:'收入模式',
    },
    {
      path: '/talents',
      name: 'talents',
      component: income, //因为我的所有导航菜单是在income页面下的
      alias:'人才管理',
      children:[
        {path:'talentsEdit',name:'talentsEdit',component:talentsEdit,hidden:true,alias:'人才编辑'},
        {path:'change',name:'change',component:change,hidden:true,alias:'人才修改'},
        {path:'job',name:'job',component:job,hidden:true,alias:'员工'},
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: income,
      alias:'管理员',
      children:[
        {path:'manage',name:'manage',component:manage,hidden:true,alias:'管理'},
      ]
    },
    {
      path: '/edits',
      name: 'edits',
      component: income,
      alias:'人才编辑',
      children:[
        {path:'edits',name:'edits',component:edits,hidden:true,alias:'人才'},
        {path:'show',name:'show',component:show,hidden:true,alias:'人才展示'},
      ]
    },
    {
      path: '*',
      name: 'notfind',
      component: notfind,
      alias:'404'
    },
  ]
})
export default router
