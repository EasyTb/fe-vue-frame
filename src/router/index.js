import Vue from 'vue'
import Router from 'vue-router'
import layout from '../views/layout/Layout'

Vue.use(Router);
const _import = require('./_import_development') //+ process.env.NODE_ENV)

export const constantRouterMap =[
    {
      path: '/',
     
      component: layout,
      redirect : "/index",
      noDropdown: true,
      children : [
      	{path : 'index',component:_import('home/index'), name: '首页',}
      ]
    },
    {
    	path : '/login',
    	name : '登录',
    	hidden : true,
    	component : _import('login/index')
    },
    {
	    path: '/firsttest',
	    redirect : "firsttest/index",
	    component: layout,
	    name : '第一测试菜单',
	    children: [
	        { path: 'index', component: _import('firsttest/index'), name: '第一测试菜单' }


	    ]
  	}

  ];

export default new Router({
    mode: 'history', //后端支持可开
    scrollBehavior: () => ({ y: 0 }),
  	routes: constantRouterMap
})


