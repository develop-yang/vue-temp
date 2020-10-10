// 导航守卫
import router from './index'


/**
 * 全局前置守卫
 * to 即将要进入的目标 路由对象
 * from 当前当行正要离开的路由
 * next: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数
 *      next(): 进行管道中的下一个钩子，如果钩子全部执行完了，则导航状态就是confirmed
 *      next(false): 中断当前导航。如果浏览器的URL改变了，，会重置到from路由对应的地址
 *      next('/') or next({ path: '/' }) 
 */
router.beforeEach((to, from, next) => {
  // 打印参数
  console.log('++++++++++++++++++++++++++++++全局前置守卫++++++++++++++++++++++++++++++++++++++')
  console.log('to: \n' + to)
  console.log('from \n' + from)
  console.log('next \n' + next) 
})

/**
 * 全局后置钩子
 */
router.afterEach((to, from) => {
  
})