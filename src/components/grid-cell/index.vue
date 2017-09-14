<template lang="html">
  <a href="javascript:;" class="weui-grid" @click="onClick">
      <div class="weui-grid__icon">
          <slot></slot>
      </div>
      <p class="weui-grid__label" v-if="label">
          {{label}}
      </p>
  </a>
</template>

<script>
import {go} from '../../libs/router'
export default {
  props: {
    label: String,
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
  @import '../../styles/weui/widget/weui-grid/weui-grid';
</style>
