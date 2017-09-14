<template lang="html">
  <div class="v-tab-item"
  :class="[currentSelected ? activeClass : '', {'v-tab-selected': currentSelected, 'v-tab-disabled' : disabled}]"
  :style="style" @click="onItemClick">
    <slot></slot>
  </div>
</template>

<script>
import {
  childMixin
} from '../../mixins/multi-mixins'
export default {
  mixins: [childMixin],
  props: {
    activeClass: String,
    disabled: Boolean
  },
  computed: {
    style () {
      return {
        borderWidth: this.$parent.lineWidth + 'px',
        borderColor: this.$parent.activeColor,
        color: this.currentSelected ? this.$parent.activeColor : this.disabled ? this.$parent.disabledColor : this.$parent.defaultColor,
        border: this.$parent.animate ? 'none' : 'auto'
      }
    }
  }
}
</script>
