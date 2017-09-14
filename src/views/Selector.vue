<template lang="html">
  <div>
    <group :title="'no placeholder, the current value is : ' + defaultValue">
      <selector title="省份" :options="list" v-model="defaultValue"></selector>
    </group>

    <group title="placeholder">
      <selector placeholder="请选择省份" title="省份" :options="list" @on-change="onChange"></selector>
    </group>

    <group title="没有 title">
      <selector placeholder="请选择省份" :options="list"></selector>
    </group>

    <group title="set value=北京">
      <selector v-model="value1" title="省份" :options="pList"></selector>
    </group>

    <group title="readonly">
      <selector readonly value="20000" title="省份" :options="list"></selector>
    </group>

    <group title="使用普通的选项">
      <selector value="a" title="Selector" :options="list1" @on-change="onChange"></selector>
    </group>
  </div>
</template>

<script>
import { Selector, Group } from 'components'
export default {
  components: {
    Group,
    Selector
  },
  data () {
    return {
      defaultValue: '',
      pList: ['北京', '上海'],
      list: [{key: '20000', value: '北京'}, {key: '20001', value: '上海'}],
      value1: '北京',
      list1: ['a', 'b', 'c']
    }
  },
  methods: {
    onChange (val) {
      console.log(val)
    }
  }
}
</script>
