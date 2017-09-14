<template lang="html">
  <div class="container">
    <div class="hd">
      <h1 class="page_title">Dialog</h1>
    </div>
    <div class="bd spacing">
      <v-button type="primary" :value="show" @click.native="onShow">alert</v-button>

      <v-button type="primary" :value="showConfirm" @click.native="onShowConfirm">confirm</v-button>

      <alert v-model="show" title="恭喜您" button-text="我知道了" @on-show="onShowHandler" @on-hide="onHide1">
        <p style="text-align:center;">中大奖了！99999元只要转4000元手续费</p>
      </alert>

      <confirm v-model="showConfirm" title="弹框标题"
      @on-show="onShowHandler2"
      @on-hide="onHide2"
      @on-cancel="onCancel"
      @on-confirm="onConfirm">
        <p style="text-align:center;">弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</p>
      </confirm>
    </div>
  </div>
</template>

<script>
import {Divider, VButton, Alert, Confirm} from 'components'

export default {
  data () {
    return {
      show: false,
      showConfirm: false
    }
  },
  methods: {
    onShow () {
      this.show = true
    },
    onShowConfirm () {
      this.showConfirm = true
    },
    onShowHandler () {
      console.log('onShowHandler')
    },
    onShowHandler2 () {
      console.log('onShowHandler2')
    },
    onHide1 () {
      console.log('onHide1')
    },
    onHide2 () {
      console.log('onHide2')
    },
    onCancel () {
      console.log('onCancel')
    },
    onConfirm () {
      console.log('onConfirm')
    }
  },
  components: {
    Alert,
    Confirm,
    Divider,
    VButton
  }
}
</script>

<style scoped>
</style>
