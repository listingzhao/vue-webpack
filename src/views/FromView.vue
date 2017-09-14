<template lang="html">
  <divider>华丽分割线</divider>
  <!-- group -->
  <group title="I'm group title">
    <div class="mui-input-row">
      <label>Input</label>
      <input type="text" placeholder="普通输入框">
    </div>
  </group>
</template>

<script>
import Divider from '../components/Divider'
import Group from '../components/Group'
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {
    Divider,
    Group
  }
}
</script>

<style lang="css">
</style>
