<template lang="html">
  <div class="container">
    <div class="hd">
        <h1 class="page_title">Grid</h1>
    </div>
    <div class="bd">
      <grids>
        <grid-cell :link="{ path: '/home/button' }">
          <i slot="icon" class="icon icon_button"></i>
          Button
        </grid-cell>
        <grid-cell :link="{ path: '/home/button' }">
          <i slot="icon" class="icon icon_cell"></i>
          Cell
        </grid-cell>
        <grid-cell :link="{ path: '/home/dialog' }">
          <i slot="icon" class="icon icon_toast"></i>
          Toast
        </grid-cell>
        <grid-cell :link="{ path: '/home/dialog' }">
          <i slot="icon" class="icon icon_dialog"></i>
          Dialog
        </grid-cell>
        <grid-cell>
          <i slot="icon" class="icon icon_panel"></i>
          Panel
        </grid-cell>
        <grid-cell>
          <i slot="icon" class="icon icon_tab"></i>
          Tab
        </grid-cell>
      </grids>
    </div>
  </div>
</template>

<script>
import Grids from '../components/grids'
import GridCell from '../components/grid-cell'
export default {
  methods: {},
  components: {
    Grids,
    GridCell
  }
}
</script>

<style lang="css">
</style>
