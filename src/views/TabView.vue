<template lang="html">
  <div class="container">
    <div class="hd">
      <h1 class="page_title">Tab</h1>
    </div>
    <div class="bd spacing">
      <tab>
        <tab-item selected>已发货</tab-item>
        <tab-item>未发货</tab-item>
        <tab-item>全部订单</tab-item>
      </tab>
      <br>
      <br>
      <divider>定制bar颜色</divider>
      <tab style="width:100%;" bar-active-color="#668599" :line-width="1">
        <tab-item>已发货</tab-item>
        <tab-item selected>未发货</tab-item>
        <tab-item>全部订单</tab-item>
        <tab-item>全部订单</tab-item>
      </tab>
      <br>
      <br>
      <divider>定制不同的选中颜色</divider>
      <tab :animate="false">
        <tab-item active-class="active-6-1">已发货</tab-item>
        <tab-item active-class="active-6-2" selected>未发货</tab-item>
        <tab-item active-class="active-6-3">全部订单</tab-item>
      </tab>
      <br>
      <br>
      <divider>不使用过渡动画</divider>
      <tab :animate="false">
        <tab-item>已发货</tab-item>
        <tab-item selected>未发货</tab-item>
        <tab-item>全部订单</tab-item>
      </tab>
      <br>
      <br>
      <divider>禁用项</divider>
      <tab>
        <tab-item selected>已发货</tab-item>
        <tab-item>未发货</tab-item>
        <tab-item disabled>Disabled</tab-item>
      </tab>
      <br>
      <br>

      <!-- <tab :index="index">
        <tab-item v-for="item in items" :selected="item.iscur" v-on:on-item-click="updIndex">{{item.name}}</tab-item>
      </tab>

      <tab :animate="false" :index="index2">
        <tab-item v-for="item in items2" :active-class="item.activeClass" :selected="item.iscur" v-on:on-item-click="updIndex2">{{item.name}}</tab-item>
      </tab> -->
    </div>
  </div>
</template>

<script>
import {Tab, TabItem, Divider} from 'components'
export default {
  data: function () {
    return {
      index: 0,
      index2: 0,
      items: [
        {
          id: '1',
          name: 'tab1',
          iscur: true
        },
        {
          id: '2',
          name: 'tab2',
          iscur: false
        },
        {
          id: '3',
          name: 'tab3',
          iscur: false
        }
      ],
      items2: [
        {
          id: '1',
          name: '通过',
          activeClass: 'active-6-1',
          iscur: true
        },
        {
          id: '2',
          name: '不通过',
          activeClass: 'active-6-2',
          iscur: false
        },
        {
          id: '3',
          name: '全部',
          activeClass: 'active-6-3',
          iscur: false
        }
      ]
    }
  },
  methods: {
    updIndex (val) {
      this.index = val
      this.items.map(function (v, i) {
        i === val ? v.iscur = true : v.iscur = false
      })
    },
    updIndex2 (val) {
      this.index2 = val
      this.items2.map(function (v, i) {
        i === val ? v.iscur = true : v.iscur = false
      })
    }
  },
  components: {
    Tab,
    TabItem,
    Divider
  }
}
</script>

<style lang="less">
@import '../styles/1px.less';

.active-6-1 {
  color: rgb(252, 55, 140) !important;
  border-color: rgb(252, 55, 140) !important;
}
.active-6-2 {
  color: #04be02 !important;
  border-color: #04be02 !important;
}
.active-6-3 {
  color: rgb(55, 174, 252) !important;
  border-color: rgb(55, 174, 252) !important;
}
</style>
