<template lang="html">
  <span v-text="text" :class="['weui-badge','v-badge', {'v-badge-single': text.length === 1}]"></span>
</template>

<script>
export default {
  props: {
    text: [String, Number],
    showDot: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less">
  @import '../../styles/variable.less';

  .weui-tabbar .v-badge {
    position: absolute;
    top: -2px;
    right: -13px;
  }
</style>
