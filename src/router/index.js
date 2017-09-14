import Vue from 'vue'
import Router from 'vue-router'

import {
  Home,
  ButtonView,
  Badge,
  ToastView,
  DialogView,
  Spinner,
  CellView,
  Countdown,
  TabView,
  Tabbar,
  TabbarSimple,
  InputView,
  Selector,
  VSwitch,
  Flexbox,
  Textarea,
  ProductList
} from '../views'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    }, {
      path: '/home',
      component: Home
    }, {
      path: '/toast',
      component: ToastView
    }, {
      path: '/dialog',
      component: DialogView
    }, {
      path: '/button',
      component: ButtonView
    }, {
      path: '/spinner',
      component: Spinner
    }, {
      path: '/cell',
      component: CellView
    }, {
      path: '/tab',
      component: TabView
    }, {
      path: '/input',
      component: InputView
    }, {
      path: '/selector',
      component: Selector
    }, {
      path: '/flexbox',
      component: Flexbox
    }, {
      path: '/textarea',
      component: Textarea
    }, {
      path: '/countdown',
      component: Countdown
    }, {
      path: '/switch',
      component: VSwitch
    }, {
      path: '/badge',
      component: Badge
    }, {
      path: '/tabbar',
      component: Tabbar
    }, {
      path: '/tabbar-simple',
      component: TabbarSimple
    }, {
      path: '/products',
      component: ProductList
    }
  ]
})
