<template lang="html">
  <div class="vux-x-dialog">
    <transition :name="dialogTransition">
      <div class="weui-dialog" v-show="currentValue">
        <slot></slot>
      </div>
    </transition>
    <input style="display:none" v-model="currentValue">
    <transition :name="maskTransition">
      <div class="weui-mask" v-show="currentValue" @click="hideOnBlur && (currentValue = false)">
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentValue: false
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    maskTransition: {
      type: String,
      default: 'v-fade'
    },
    dialogTransition: {
      type: String,
      default: 'v-dialog'
    },
    hideOnBlur: Boolean,
    scroll: {
      type: Boolean,
      default: true
    }
  },
  created () {
    if (typeof this.value !== 'undefined') {
      this.currentValue = this.value
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (val) {
      // let modal = this.$el.querySelector('.modal')
      // let margin = -Math.round(modal.offsetHeight / 2) + 'px'
      // this.modalClass.marginTop = margin
      this.$emit(val ? 'on-show' : 'on-hide')
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="less">
@import '../../styles/transition.less';
@import '../../styles/weui/widget/weui-tips/weui-mask';
@import '../../styles/weui/widget/weui-tips/weui-dialog';
</style>
