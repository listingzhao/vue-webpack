<template lang="html">
  <div>
    <group>
      <cell is-link title="Tabbar" link="/tabbar"></cell>
    </group>
    <tabbar>
      <tabbar-item>
        <span slot="label">微信</span>
      </tabbar-item>
      <tabbar-item badge="3">
        <span slot="label">消息</span>
      </tabbar-item>
      <tabbar-item selected link="/">
        <span slot="label">主页</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <span slot="label">我</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import {Tabbar, TabbarItem, Group, Cell} from 'components'

export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  }
}
</script>

<style lang="less">
</style>
