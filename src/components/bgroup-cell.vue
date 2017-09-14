<template lang="html">
    <button class="weui-btn" :class="classes">
      <slot></slot>
    </button>
</template>

<script>
  export default {
    props: {
      type: {
        default: ''
      },
      active: Boolean,
      plan: Boolean,
      mini: Boolean
    },
    computed: {
      classes () {
        return [{
          'weui-btn_disabled': this.disabled,
          'weui-btn_mini': this.mini,
          active: this.active
        },
          `weui-btn_${this.type}`,
          this.plan ? `weui-btn_plain_${this.type}` : ''
        ]
      }
    }
  }
</script>
