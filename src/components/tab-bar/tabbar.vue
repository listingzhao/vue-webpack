<template lang="html">
  <div class="weui-tabbar">
    <slot></slot>
  </div>
</template>

<script>
import { parentMixin } from '../../mixins/multi-mixins'
export default {
  mixins: [parentMixin],
  props: {
    iconClass: String
  }
}
</script>

<style lang="less">
@import '../../styles/weui/widget/weui-tab/weui-tabbar';
@import '../../styles/weui/widget/weui-tips/weui-badge';

.weui-tabbar__icon {
  position: relative;
}
.weui-tabbar__icon > sup {
  position: absolute;
  top: -8px;
  left: 100%;
  transform: translateX(-50%);
  z-index: 101;
}
.weui-tabbar__item.v-tabbar-simple {
  padding: 0;
  height: 50px;
  line-height: 50px;
}
.v-tabbar-simple .weui-tabbar__label {
  font-size: 14px;
  line-height: 50px;
}
</style>
