<template lang="html">
  <div class="v-flexbox" :class="{'v-flex-col': orient === 'vertical', 'v-flex-row': orient === 'horizontal'}" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    gutter: {
      type: Number,
      default: 8
    },
    orient: {
      type: String,
      default: 'horizontal'
    },
    justify: String,
    align: String,
    wrap: String,
    direction: String
  },
  computed: {
    styles () {
      return {
        'justify-content': this.justify,
        '-webkit-justify-content': this.justify,
        'align-items': this.align,
        '-webkit-align-items': this.align,
        'flex-wrap': this.wrap,
        '-webkit-flex-wrap': this.wrap,
        'flex-direction': this.direction,
        '-webkit-flex-direction': this.direction
      }
    }
  }
}
</script>

<style lang="less">
.v-flexbox{
  width: 100%;
  text-align: left;
  display: flex;
  display: -webkit-flex;
  box-align: center;
  align-items: center;
}
.v-flexbox .v-flexbox-item {
  flex: 1;
  -webkit-flex: 1;
  min-width: 20px;
  width: 0%;
}
.v-flexbox-item > .v-flexbox {
  width: 100%;
}
.v-flexbox .v-flexbox-item:first-child{
  margin-left: 0!important;
  margin-top: 0!important;
}
.v-flex-col {
  box-orient: vertical;
  flex-direction: column;
}
.v-flex-col > .v-flexbox-item {
  width: 100%;
}
.v-flex-row {
  box-direction: row;
  box-orient: horizontal;
  flex-direction: row;
}
</style>
