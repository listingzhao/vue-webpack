<template lang="html">
  <div>
    <group title="auto countdown">
      <cell title="30s" v-model="value">
        <countdown v-model="time1" @on-finish="finish" v-show="show"></countdown>
      </cell>
    </group>
    <br>
    <v-button type="primary" :value="show" @click.native="onStart">开始</v-button>
    <group title="manually">
      <cell title="15s">
        <countdown slot="value" v-model="time2" :start="start" @on-finish="finish2"></countdown>
      </cell>
    </group>
  </div>
</template>

<script>
import { Countdown, Group, Cell, VButton } from 'components'

export default {
  components: {
    Countdown,
    Group,
    Cell,
    VButton
  },
  data () {
    return {
      show: true,
      time1: 30,
      time2: 30,
      value: '',
      start: false
    }
  },
  methods: {
    finish (index) {
      this.show = false
      this.value = 'completed'
      console.log('current index:', index)
    },
    onStart () {
      this.start = true
    },
    finish2 (index) {
      this.start = false
      this.time = 20
    }
  }
}
</script>

<style lang="css">
</style>
