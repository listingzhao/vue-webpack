<template lang="html">
  <div>
    <group>
      <cell is-link title="Tabbar Simple" link="/tabbar-simple"></cell>
    </group>
    <tabbar>
      <tabbar-item>
        <img slot="icon" src="../assets/icon_nav_button.png">
        <span slot="label">微信</span>
      </tabbar-item>
      <tabbar-item badge="3">
        <img slot="icon" src="../assets/icon_nav_msg.png">
        <span slot="label">消息</span>
      </tabbar-item>
      <tabbar-item selected link="/">
        <img slot="icon" src="../assets/icon_nav_article.png">
        <span slot="label">文章</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="../assets/icon_nav_cell.png">
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
