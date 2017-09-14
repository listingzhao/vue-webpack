<template lang="html">
  <div class="v-selector weui-cell" :class="{'weui-cell_select':!readonly, 'weui-cell_select-after':title}">
      <div class="weui-cell__hd" v-if="title">
        <label for="" class="weui-label" :style="{width: $parent.labelWidth, textAlign: $parent.labelAlign, marginRight: $parent.labelMarginRight}">{{title}}</label>
      </div>
      <div class="weui-cell__bd" v-if="!readonly">
        <select class="weui-select" v-model="currentValue" :style="{direction: direction}">
          <option value="" v-if="!value && placeholder" :selected="!value && placeholder">{{placeholder}}</option>
          <option disabled v-if="!placeholder && !value && isIOS && title"></option>
          <option :value="one.key" v-for="one in processOptions">{{one.value}}</option>
        </select>
      </div>
      <div class="weui-cell__ft v-selector-readonly" v-else>
        {{value | findByKey(processOptions)}}
      </div>
    </div>
</template>

<script>
import find from 'array-find'

const findByKey = function (key, options) {
  const rs = find(options, item => {
    return item.key === key
  })
  return rs ? rs.value : key
}
export default {
  data () {
    return {
      currentValue: '',
      isIOS: /iPad|iPhone|iPod/.test(window.navigator.userAgent)
    }
  },
  props: {
    title: String,
    direction: String,
    options: {
      type: Array,
      required: true
    },
    name: String,
    placeholder: String,
    readonly: Boolean,
    value: [String, Number, Object]
  },
  created () {
    if (this.value) {
      this.currentValue = this.value
    }
  },
  computed: {
    processOptions () {
      if (this.options.length && Object.hasOwnProperty.call(this.options[0], 'key')) {
        return this.options
      } else {
        return this.options.map(function (item) {
          return {
            key: item,
            value: item
          }
        })
      }
    }
  },
  filters: {
    findByKey
  },
  watch: {
    value (val) {
      this.currentValue = val
    },
    currentValue (val) {
      this.$emit('on-change', val)
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="less">
@import '../../styles/weui/widget/weui-cell/weui-access';
@import '../../styles/weui/widget/weui-cell/weui-cell_global';
@import '../../styles/weui/widget/weui-cell/weui-form/weui-form_common';
@import '../../styles/weui/widget/weui-cell/weui-form/weui-select';

.v-selector-no-padding {
  padding-left: 0;
}
.v-selector.weui-cell_select {
  padding: 0;
}
.v-selector.weui-cell_select-after {
  padding-left: 15px;
}
.v-selector-readonly {
  width: 100%;
}
</style>
