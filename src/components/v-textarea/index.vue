<template lang="html">
  <div class="weui-cell">
    <div class="weui-cell__bd">
      <textarea class="weui-textarea"
      v-model="currentValue"
      :style="textareaStyle"
      :maxlength="max"
      ref="textarea"
      :autocomplete="autocomplete"
      :autocapitalize="autocapitalize"
      :placeholder="placeholder"
      :readonly="readonly"
      :name="name"
      :rows="rows"
      :cols="cols"
      ></textarea>
      <div class="weui-textarea-counter" v-show="showCounter && max">
        <span>{{count}}</span>/{{max}}
      </div>
    </div>
  </div>
</template>

<script>
import Base from '../../libs/base'

export default {
  minxins: [Base],
  props: {
    showCounter: {
      type: Boolean,
      default: true
    },
    max: Number,
    value: {
      type: String,
      default: ''
    },
    name: String,
    placeholder: String,
    readonly: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number,
      default: 3
    },
    cols: {
      type: Number,
      default: 30
    },
    height: Number,
    autocomplete: {
      type: String,
      default: 'off'
    },
    autocapitalize: {
      type: String,
      default: 'off'
    }
  },
  data () {
    return {
      currentValue: ''
    }
  },
  created () {
    this.currentValue = this.value
  },
  computed: {
    count () {
      let len = 0
      if (this.currentValue) {
        len = this.currentValue.replace(/\n/g, 'aa').length
      }
      return len > this.max ? this.max : len
    },
    textareaStyle () {
      if (this.height) {
        return {
          height: `${this.height}px`
        }
      }
    }
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (newVal) {
      if (this.max && newVal > this.max) {
        this.currentValue = newVal.slice(0, this.max)
      }
      this.$emit('on-change', this.currentValue)
      this.$emit('input', this.currentValue)
    }
  }
}
</script>

<style lang="less">
@import '../../styles/weui/widget/weui-cell/weui-cell_global';
@import '../../styles/weui/widget/weui-cell/weui-form/weui-form_common';
</style>
