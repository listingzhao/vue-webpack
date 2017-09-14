<template lang="html">
    <span class="v-spinner" :class="className"></span>
</template>

<script>
import Spinner from './spinner'
const types = ['android', 'ios', 'ios-small', 'bubbles', 'circles', 'crescent', 'dots', 'lines', 'ripple', 'spiral']

export default {
  mounted () {
    Spinner(this.$el, this.type)
  },
  props: {
    type: {
      type: String,
      default: 'ios'
    }
  },
  computed: {
    className () {
      let rs = {}
      for (var i = 0; i < types.length; i++) {
        rs[`v-spinner-${types[i]}`] = this.type === types[i]
      }
      return rs
    }
  }
}
</script>

<style lang="css">
.v-spinner {
  stroke: #444;
  fill: #444;
  vertical-align: middle;
  display: inline-block;
  width: 28px;
  height: 28px;
}
.v-spinner svg {
  width: 28px;
  height: 28px;
}
.v-spinner.v-spinner-inverse {
  stroke: #fff;
  fill: #fff;
}
.v-spinner-android {
  stroke: #4b8bf4;
}
.v-spinner-ios, .v-spinner-ios-small {
  stroke: #69717d;
}
.v-spinner-spiral .stop1 {
  stop-color: #fff;
  stop-opacity: 0;
}
.v-spinner-spiral.v-spinner-inverse .stop1 {
  stop-color: #000;
}
.v-spinner-spiral.v-spinner-inverse .stop2 {
  stop-color: #fff;
}
</style>
