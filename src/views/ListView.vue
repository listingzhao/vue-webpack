<template lang="html">
  <div>
    <list>
      <item v-for="ite in items" :key="uuid" :options="{showArrows: true}" :link="ite.itemLink">
        {{ite.itemText}}
      </item>
    </list>
    <group>
      <cell title="My Account" value="Protected" primary="content" is-link></cell>
      <cell title="My Phone" value="Protected" primary="content" @click="click"></cell>
    </group>
  </div>
</template>

<script>
import Base from '../libs/base'
import {Group, Cell} from 'components'

export default {
  mixins: [Base],
  data: function () {
    return {
      items: [{itemText: 'button', itemLink: { path: '/home/button' }},
      {itemText: 'from', itemLink: { path: '/home/from' }},
      {itemText: 'dialog', itemLink: { path: '/home/dialog' }},
      {itemText: 'list', itemLink: { path: '/home/list' }},
      {itemText: 'spinner', itemLink: { path: '/home/spinner' }}]
    }
  },
  components: {
    Group,
    Cell
  }
}
</script>
