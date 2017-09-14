<template lang="html">
  <a class="weui-tabbar__item" href="javascript:;" :class="{'weui-bar__item_on': $parent.index === currentIndex, 'v-tabbar-simple': simple}" @click="onItemClick(true)">
		<div v-if="!simple" class="weui-tabbar__icon" :class="[iconClass || $parent.iconClass, {'v-reddot': showDot}]">
		  <slot name="icon"></slot>
      <badge v-if="badge" :text="badge"></badge>
		</div>
		<p class="weui-tabbar__label">
		  <slot name="label"></slot>
		</p>
	</a>
</template>

<script>
import { childMixin } from '../../mixins/multi-mixins'
import Badge from '../badge'
export default {
  components: {
    Badge
  },
  mixins: [childMixin],
  props: {
    showDot: {
      type: Boolean,
      default: false
    },
    badge: String,
    link: [String, Object],
    iconClass: String
  },
  beforeMount () {
    if (!this.$slots.icon) {
      this.simple = true
    }
  },
  data () {
    return {
      simple: false
    }
  }
}
</script>

<style lang="less">
  .v-reddot {
    position: relative;
  }
  .v-reddot:after {
    content: '';
    position: absolute;
    display: block;
    width: .6rem;
    height: .6rem;
    background-color: #f74c31;
    border-radius: 50%;
    right: -3px;
    top: 0px;
    background-clip: padding-box;
}
</style>
