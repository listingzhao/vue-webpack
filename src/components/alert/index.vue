<template>
  <v-dialog v-model="showValue"
          :mask-transition="maskTransition"
          :dialog-transition="dialogTransition"
          @on-hide="$emit('on-hide')"
          @on-show="$emit('on-show')">
    <div class="weui-dialog__hd">
      <strong class="weui-dialog__title">{{title}}</strong>
    </div>
    <div class="weui-dialog__bd">
        <slot></slot>
    </div>
    <div class="weui-dialog__ft">
      <a href="javascript:;"
        class="weui-dialog__btn weui-dialog__btn_primary"
        @click="onHide">{{buttonText || $t('button_text')}}</a>
    </div>
  </v-dialog>
</template>

<script>
import VDialog from '../v-dialog'
export default {
  props: {
    value: Boolean,
    title: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      default: 'OK'
    },
    maskTransition: {
      type: String,
      default: 'v-fade'
    },
    dialogTransition: {
      type: String,
      default: 'v-dialog'
    }
  },
  data () {
    return {
      showValue: false
    }
  },
  created () {
    if (typeof this.value !== 'undefined') {
      this.showValue = this.value
    }
  },
  methods: {
    onHide () {
      this.showValue = false
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
  components: {
    VDialog
  }
}
</script>
<style lang="less">
@import '../../styles/transition.less';
@import '../../styles/weui/widget/weui-tips/weui-mask';
@import '../../styles/weui/widget/weui-tips/weui-dialog';
</style>
