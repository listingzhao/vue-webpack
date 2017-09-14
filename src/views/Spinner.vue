<template lang="html">
  <div>
    <divider>华丽分割线</divider>
    <group>
      <cell primary="content" v-for="type in types" :key="uuid" :title="type">
        <spinner :type="type"></spinner>
      </cell>
    </group>
  </div>
</template>

<script>
import Base from '../libs/base'
import {Group, Cell, Divider, Spinner} from 'components'

export default {
  mixins: [Base],
  data: function () {
    return {
      types: ['android', 'ios', 'ios-small', 'bubbles', 'circles', 'crescent', 'dots', 'lines', 'ripple', 'spiral']
    }
  },
  components: {
    Group,
    Cell,
    Divider,
    Spinner
  }
}
</script>
