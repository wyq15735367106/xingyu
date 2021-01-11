import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import block from '@/components/block'
import Transaction from '@/components/Transaction'
import Token from '@/components/Token'
import records from '@/components/records'
import New from '@/components/New'
import AddressDetails from '@/components/AddressDetails'
import zhanwu from '@/components/zhanwu'
import BlackHole from '@/components/BlackHole'
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new Router({
  scrollBehavior(to, from, saveTop) {
    if (saveTop) {
      return saveTop;
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
})
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/block',
      name: 'block',
      component: block
    },
    {
      path: '/records',
      name: 'records',
      component: records
    },
    {
      path: '/Token',
      name: 'Token',
      component: Token
    },
    {
      path: '/Transaction',
      name: 'Transaction',
      component: Transaction
    },
    {
      path: '/New',
      name: 'New',
      component: New
    },
    {
      path: '/zhanwu',
      name: 'zhanwu',
      component: zhanwu
    },
    {
      path: '/AddressDetails',
      name: 'AddressDetails',
      component: AddressDetails
    },
    {
      path: '/BlackHole',
      name: 'BlackHole',
      component: BlackHole
    }
  ]
})
