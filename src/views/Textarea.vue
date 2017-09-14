<template lang="html">
  <div>
    <group title="textarea">
      <v-textarea :max="20" placeholder="请填写详细信息"></v-textarea>
    </group>

    <group title="和input一起使用">
      <v-input placeholder="标题"></v-input>
      <v-textarea :max="200" name="detail" placeholder="请填写详细信息"></v-textarea>
    </group>

    <group title="不显示计数器">
      <v-textarea :max="200" name="detail" placeholder="请填写详细信息" :show-counter="false"></v-textarea>
    </group>

    <group title="set height=200">
      <v-textarea :max="200" placeholder="请填写详细信息" :show-counter="false" :height="200" :rows="8" :cols="30"></v-textarea>
    </group>

    <group title="autosize">
      <v-textarea placeholder="Type something" :show-counter="false" :rows="1" ref="autosize"></v-textarea>
    </group>
  </div>
</template>

<script>
import { VTextarea, Group, VInput } from 'components'
import Autosize from 'autosize'

export default {
  components: {
    VTextarea,
    Group,
    VInput
  },
  mounted () {
    Autosize(this.$refs.autosize.$refs.textarea)
  },
  beforeDestroy () {
    Autosize.destroy(this.$refs.autosize.$refs.textarea)
  }
}
</script>
