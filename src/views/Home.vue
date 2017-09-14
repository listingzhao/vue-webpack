<template lang="html">
  <div class="container">
    <div class="hd">
        <h1 class="page_title">Vue</h1>
        <p class="page_desc">基于Vue.js的Web UI</p>
    </div>
    <div class="bd">
      <grids>
        <grid-cell :link="{ path: '/button' }" label="Button">
          <i class="icon icon_button"></i>
        </grid-cell>
        <grid-cell :link="{ path: '/cell' }" label="Cell">
          <i class="icon icon_cell"></i>
        </grid-cell>
        <grid-cell :link="{ path: '/toast' }" label="Toast">
          <i class="icon icon_toast"></i>
        </grid-cell>
        <grid-cell :link="{ path: '/dialog' }" label="Dialog">
          <i class="icon icon_dialog"></i>
        </grid-cell>
        <grid-cell :link="{ path: '/spinner'}" label="Spinner">
          <i class="icon icon_panel"></i>
        </grid-cell>
        <grid-cell :link="{ path: '/tab'}" label="Tab">
          <i class="icon icon_tab"></i>
        </grid-cell>
        <grid-cell :link="{ path: '/input'}" label="Input">
          <i class="icon icon_tab"></i>
        </grid-cell>
        <grid-cell :link="{ path: '/selector'}" label="Selector">
          <i class="icon icon_tab"></i>
        </grid-cell>
        <grid-cell :link="{ path: '/flexbox'}" label="Flexbox">
          <i class="icon icon_tab"></i>
        </grid-cell>
        <grid-cell :link="{ path: '/textarea'}" label="Textarea">
          <i class="icon icon_tab"></i>
        </grid-cell>
        <grid-cell :link="{ path: '/countdown'}" label="Countdown">
          <i class="icon icon_tab"></i>
        </grid-cell>
        <grid-cell :link="{ path: '/switch'}" label="Switch">
          <i class="icon icon_tab"></i>
        </grid-cell>
        <grid-cell :link="{ path: '/badge'}" label="Badge">
          <i class="icon icon_tab"></i>
        </grid-cell>
        <grid-cell :link="{ path: '/tabbar'}" label="Tabbar">
          <i class="icon icon_tab"></i>
        </grid-cell>
        <grid-cell :link="{ path: '/products'}" label="Product">
          <i class="icon icon_tab"></i>
        </grid-cell>
      </grids>
      <ul>
        <li v-for="(item, index) in someObject">
          {{parentMessage}} - {{index}} - {{item.message}}
        </li>
      </ul>
      <toast :show="show" v-on:hide="onHide">
        处理完成
      </toast>
    </div>
  </div>
</template>

<script>
import {Grids, GridCell, VHeader, Toast} from 'components'

/* eslint-disable */
export default {
  name: 'home',
  data: function () {
    return {
      show: false,
      parentMessage: 'Parent',
      gridData: {},
      someObject: [],
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ]
    }
  },
  components: {
    Grids,
    GridCell,
    VHeader,
    Toast
  },
  beforeCreate () {
    console.log('beforeCreate')
    console.log(this.someObject)
    console.log(this.$el)
  },
  created () {
    console.log('created')
    console.log(this.someObject)
    console.log(this.$el)
  },
  beforeMount () {
    console.log('beforeMount')
    console.log(this.someObject)
    console.log(this.$el)
  },
  mounted () {
    console.log('mounted')
    this.getCustomers()
    this.$http.get('/static/test.json').then(response => {
      console.log(response)
    })
    console.log(this.someObject)
    console.log(this.$el)
  },
  beforeUpdate () {
    console.log('beforeUpdate')
    console.log(this.someObject)
    console.log(this.$el)
  },
  updated () {
    console.log('updated')
    console.log(this.someObject)
    console.log(this.$el)
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
  },
  methods: {
    onShow () {
      this.show = true
    },
    onHide () {
      this.show = false
    },
    getCustomers: function () {
         this.$http.get('static/test.json')
            .then((response) => {
              console.log('response')
              console.log(this)
              this.someObject =  Object.assign({}, this.someObject, response.data)
              console.log(this.someObject)
              // this.$set(this.gridData,'gridData', response.data)
            })
    }
  }
}
</script>

<style scoped>

</style>
