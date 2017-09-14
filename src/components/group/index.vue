<template lang="html">
  <div>
    <div class="weui-cells__title" v-if="title" :style="{color:titleColor}" v-html="title"></div>
    <div class="weui-cells" :class="{'v-no-group-title':!title}" :style="{marginTop: gutter}">
      <slot name="after-title"></slot>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    titleColor: String,
    labelWidth: String,
    labelAlign: String,
    labelMarginRight: String,
    gutter: String
  }
}
</script>

<style lang="less">

@import '../../styles/weui/widget/weui-cell/weui-access';

@import '../../styles/weui/widget/weui-cell/weui-cell_global';

@import '../../styles/blank.less';

.v-no-group-title {
  margin-top:15px;
}

</style>
