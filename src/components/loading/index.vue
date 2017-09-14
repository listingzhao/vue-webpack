<template lang="html">
  <div class="weui-loading_toast" v-show="show">
    <div class="weui-mask_transparent"></div>
    <div class="weui-toast" v-bind:style="{position: position}">
      <i class="weui-loading weui-icon_toast"></i>
      <p class="weui-toast__content">{{text}}<slot></slot></p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: 'Loading'
    },
    position: String
  },
  created () {
    this.show = this.value
  },
  data () {
    return {
      show: false
    }
  },
  watch: {
    value (val) {
      this.show = val
    },
    show (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="less">
  @import '../../styles/weui/widget/weui-tips/weui-mask';
  @import '../../styles/weui/widget/weui-tips/weui-toast';
  @import '../../styles/weui/widget/weui-loading/weui-loading';
  .weui-icon_toast.weui-loading {
    margin: 30px 0 0;
    width: 38px;
    height: 38px;
    vertical-align: baseline;
    display: inline-block;
  }
</style>
