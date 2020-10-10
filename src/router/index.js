const { default: VueRouter } = require("vue-router")


// 组件
const routes = [
  {
    path: '/test01',
    component: () => import('../pages/test/test01.vue'),
    name: 'test01'
  },
  {
    path: '/test02/:id', // 动态路径参数
    name: 'test02', // 命令路由
    component: () => import('../pages/test/test02.vue')
  },
  {
    path: '/test03',
    name: 'test03',
    // redirect: '/test01',
    // redirect: { name: 'test01' },
    redirect: to => {
      console.log(to)
      return 'test01' // 返回重定向的 字符串/路径对象
    },
    component: () => import('../pages/test/test03.vue')
  },
  {
    path: '/test04',
    alias: '/test03',
    component: () => import('../pages/test/test01.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../pages/home/index.vue')
  },
  {
    path: '*',
    component: () => import('../components/404/NotFoundComponent.vue')
  }
];
// 路由
const router = new VueRouter({
  mode: 'hash',
  routes
});

export default router;
