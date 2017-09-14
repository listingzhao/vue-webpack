<template lang="html">
  <div>
    <group title="一般使用">
      <v-switch title="默认false"></v-switch>
      <v-switch title="默认true" :inline-desc="value + ''" v-model="value"></v-switch>
    </group>

    <group title="禁用">
      <v-switch title="默认false" disabled></v-switch>
      <v-switch title="默认ture" :value="true" disabled></v-switch>
    </group>

    <group title="html title">
      <v-switch disabled title="<span style='color:red'>我是红色</span>"></v-switch>
    </group>
  </div>
</template>

<script>
import { VSwitch, Group } from 'components'

export default {
  components: {
    VSwitch,
    Group
  },
  data () {
    return {
      value: true
    }
  }
}
</script>
