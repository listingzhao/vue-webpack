<template lang="html">
  <v-dialog v-model="showValue"
  :mask-transition="maskTransition"
  :dialog-transition="dialogTransition"
  :hide-on-blur="hideOnBlur"
  @on-hide="$emit('on-hide')"
  @on-show="$emit('on-show')">
    <div class="weui-dialog__hd"><strong class="weui-dialog__title">{{title}}</strong></div>
    <div class="weui-dialog__bd"><slot><div v-html="content"></div></slot></div>
    <div class="weui-dialog__ft">
      <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" @click="onCancel">{{cancelText}}</a>
      <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="onConfirm">{{confirmText}}</a>
    </div>
  </v-dialog>
</template>

<script>
import VDialog from '../v-dialog'

export default {
  components: {
    VDialog
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    hideOnBlur: {
      type: Boolean,
      defalut: false
    },
    title: String,
    confirmText: {
      type: String,
      default: '确认'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    maskTransition: {
      type: String,
      default: 'v-fade'
    },
    dialogTransition: {
      type: String,
      default: 'v-dialog'
    },
    content: String
  },
  data () {
    return {
      showValue: false
    }
  },
  created () {
    this.showValue = this.show
    if (this.value) {
      this.showValue = this.value
    }
  },
  watch: {
    value (val) {
      this.showValue = val
    },
    showValue (val) {
      this.$emit('input', val)
    }
  },
  methods: {
    onConfirm () {
      this.showValue = false
      this.$emit('on-confirm')
    },
    onCancel () {
      this.showValue = false
      this.$emit('on-cancel')
    }
  }
}
</script>

<style lang="less">
@import '../../styles/transition.less';
@import '../../styles/weui/widget/weui-tips/weui-mask';
@import '../../styles/weui/widget/weui-tips/weui-dialog';
</style>
