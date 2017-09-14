<template>
  <i :class="className"></i>
</template>

<script>
export default {
  props: {
    type: String
  },
  computed: {
    className () {
      return `weui-icon weui-icon-${this.type}`
    }
  }
}
</script>

<style lang="less">
@import '../../styles/weui/icon/weui-icon_font';
.icon_big:before {
  font-size: 104px;
}
.icon_small:before {
  font-size: 12px;
}
</style>
