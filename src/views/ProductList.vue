<template lang="html">
    <group title="product-list">
      <cell v-for="p in products" :key="uuid" is-link>
        <span slot="after-title">{{ p.title }} - {{ p.price}}</span>
      </cell>
    </group>
</template>

<script>
import Base from '../libs/base'
import { Group, Cell } from 'components'
import { mapGetters } from 'vuex'

export default {
  components: {
    Group,
    Cell
  },
  mixins: [Base],
  computed: mapGetters({
    products: 'allProducts'
  }),
  created () {
    this.$store.dispatch('getAllProducts')
  }
}
</script>
