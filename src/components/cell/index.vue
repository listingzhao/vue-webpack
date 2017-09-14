<template lang="html">
  <div class="weui-cell" :class="{'v-tap-active': isLink || !!link, 'weui-cell_access': isLink || !!link}" @click="onClick">
    <div class="weui-cell__hd">
      <slot name="icon"></slot>
    </div>
    <div class="weui-cell__bd" :class="{'v-cell-primary':primary==='title'}">
      <p>
        {{title}}
        <slot name="after-title"></slot>
      </p>
      <inline-desc>{{inlineDesc}}</inline-desc>
    </div>
    <div class="weui-cell__ft" :class="{'v-cell-primary':primary==='content'}">
      {{value}}
      <slot name="value"></slot>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import InlineDesc from '../inline-desc'
import {go} from '../../libs/router'

export default {
  components: {
    InlineDesc
  },
  props: {
    title: String,
    value: String,
    isLink: Boolean,
    inlineDesc: String,
    primary: {
      type: String,
      default: 'title'
    },
    link: {
      type: [String, Object]
    }
  },
  methods: {
    onClick () {
      go(this.link, this.$router)
    }
  }
}
</script>

<style lang="less">
  @import '../../styles/weui/base/mixin/setArrow.less';
  @import '../../styles/weui/widget/weui-cell/weui-cell_global';

  .v-tap-active {
    tap-highlight-color: rgba(0,0,0,0);
  }

  .v-tap-active:active {
    background-color: #ECECEC;
  }

  .v-cell-primary {
    flex: 1;
  }
</style>
