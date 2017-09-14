<template lang="html">
  <div class="v-tab" :class="{'v-tab-no-animate' : !animate}">
    <slot></slot>
    <div v-if="animate" class="v-tab-ink-bar" :class="barClass" :style="barStyle"></div>
  </div>
</template>

<script>
import { parentMixin } from '../../mixins/multi-mixins'
export default {
  mixins: [parentMixin],
  mounted () {
    setTimeout(() => {
      this.hasReady = true
    }, 0)
  },
  props: {
    lineWidth: {
      type: Number,
      default: 3
    },
    activeColor: String,
    barActiveColor: String,
    defaultColor: String,
    disabledColor: String,
    animate: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      direction: 'forward',
      right: '100%',
      hasReady: false
    }
  },
  watch: {
    currentIndex (newIndex, oldIndex) {
      this.direction = newIndex > oldIndex ? 'forward' : 'backward'
      this.$emit('on-inde-change', newIndex, oldIndex)
    }
  },
  computed: {
    barLeft () {
      console.log('this.currentIndex' + this.currentIndex)
      return `${this.currentIndex * (100 / this.number)}%`
    },
    barRight () {
      return `${(this.number - this.currentIndex - 1) * (100 / this.number)}%`
    },
    barStyle () {
      return {
        left: this.barLeft,
        right: this.barRight,
        display: 'block',
        backgroundColor: this.barActiveColor || this.activeColor,
        height: this.lineWidth + 'px',
        transation: !this.hasReady ? 'none' : null
      }
    },
    barClass () {
      return {
        'v-tab-ink-bar-transition-forward': this.direction === 'forward',
        'v-tab-ink-bar-transition-backward': this.direction === 'backward'
      }
    }
  }
}
</script>

<style lang="less">
@import '../../styles/variable.less';

@prefixClass: v-tab;
@easing-in-out: cubic-bezier(0.35, 0, 0.25, 1);
@effect-duration: 0.3s;

.@{prefixClass} {
    &-ink-bar {
        position: absolute;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: @tab-bar-active-color;

        &-transition-forward {
            transition: right @effect-duration @easing-in-out, left @effect-duration @easing-in-out @effect-duration * 0.3;
        }
        &-transition-backward {
            transition: right @effect-duration @easing-in-out @effect-duration * 0.3, left @effect-duration @easing-in-out;
        }
    }
}
.v-tab {
  display: flex;
  background-color: #fff;
  height: 44px;
  position: relative;
}
.v-tab button {
  padding: 0;
  border: 0;
  outline: 0;
  background: 0 0;
  appearance: none;
}
.v-tab .v-tab-item {
  display: block;
  flex: 1;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: linear-gradient(180deg, #e5e5e5, #e5e5e5, rgba(229, 229, 229, 0)) bottom left no-repeat;
  background-size: 100% 1px;
  font-size: 14px;
  text-align: center;
  line-height: 44px;
  color: @tab-text-default-color;
}
.v-tab .v-tab-item.v-tab-selected {
  color: @tab-text-active-color;
  border-bottom: 3px solid @tab-text-active-color;
}

.v-tab .v-tab-item.v-tab-disabled {
  color: @tab-text-disabled-color;
}

.v-tab.v-tab-no-animate .v-tab-item.v-tab-selected {
  background: 0 0;
}
</style>
