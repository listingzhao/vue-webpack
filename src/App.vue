<template>
<div style="height:100%;">
  <loading v-model="isLoading"></loading>
  <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
    <v-header slot="header" style="width:100%;position:absolute;left:0;top:0;z-index:100;" :left-options="leftOptions" :title="title"
      @on-click-title="scrollTop"
      default-back-link="/"
    ></v-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <tabbar slot="bottom" class="" v-show="!isTabbarDemo" icon-class="v-center">
      <tabbar-item :link="{path:'/'}" :selected="route.path === '/'">
        <span class="" slot="icon">
          <img slot="icon" src="./assets/logo.png">
        </span>
        <span slot="label">Home</span>
      </tabbar-item>
      <tabbar-item badge="3">
        <img slot="icon" src="./assets/icon_nav_msg.png">
        <span slot="label">message</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="./assets/icon_nav_cell.png">
        <span slot="label">我</span>
      </tabbar-item>
    </tabbar>
  </view-box>
</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import {
  VContent,
  VHeader,
  Toast,
  Spinner,
  Loading,
  ViewBox,
  Tabbar,
  TabbarItem
} from 'components'

export default {
  name: 'app',
  components: {
    VContent,
    Toast,
    Spinner,
    Loading,
    ViewBox,
    VHeader,
    Tabbar,
    TabbarItem
  },
  computed: {
    ...mapState({ // 将 store 中的 state 映射到局部计算属性
      route: state => state.route,
      path: state => state.route.path,
      demoTop: state => state.demoScrollTop,
      isLoading: state => state.isLoading,
      direction: state => state.direction
    }),
    ...mapGetters([ // 将 store 中的 getters 映射到局部计算属性
      'doneTodos'
    ]),
    leftOptions () {
      return {
        showBack: this.route.path !== '/' && this.route.path !== '/home'
      }
    },
    componentName () {
      console.log(this.route)
      const parts = this.route.path && this.route.path.split('/')
      if (this.route.path && parts[1]) return parts[1]
    },
    isTabbarDemo () {
      return /tabbar/.test(this.route.path)
    },
    title () {
      if (this.route.path === '/') {
        return 'Home'
      }
      console.log(this.componentName)
      return this.componentName ? `Demo/${this.componentName}` : 'Demo/~~'
    }
  },
  methods: {
    ...mapActions([
      'updateDemoPosition'
    ]),
    ...mapActions({
      updDemo: 'updateDemoPosition' // 映射 this.updDemo() 为 this.$store.dispatch('updateDemoPosition')
    }),
    scrollTop () {
      this.$refs.viewBox.scrollTo(0)
    }
  }
}
</script>

<style lang="less">
@import './styles/index';
@import './styles/weui/base/reset';
@import './styles/example';

body {
    background-color: #fbf9fe;
}
</style>
