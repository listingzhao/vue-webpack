<template lang="html">
<div class="button">
  <div class="hd">
    <h1 class="page_title">Button</h1>
  </div>
  <div class="bd spacing">
      <divider>default</divider>
      <v-button>默认</v-button>
      <v-button type="primary">按钮</v-button>
      <v-button type="warn">警告</v-button>

      <divider>action type</divider>
      <v-button type="primary" action-type="button">确认</v-button>
      <v-button type="warn" action-type="reset">重置</v-button>

      <divider>loading</divider>
      <v-button type="default" show-loading>按钮</v-button>
      <v-button type="primary" show-loading>按钮</v-button>
      <v-button type="warn" show-loading>按钮</v-button>

      <divider>mini</divider>
      <v-button mini>mini button</v-button>
      <v-button type="primary" mini>mini button</v-button>
      <v-button type="warn" mini>small button</v-button>

      <divider>plain</divider>
      <v-button plan>button</v-button>
      <v-button type="primary" plan>button</v-button>

      <divider>custom styles</divider>
      <v-button plan type="primary" style="border-radius:100px;">primary</v-button>
      <v-button plan type="primary" style="border-radius:100px;border-color:#CE3C39;color:#CE3C39;">primary</v-button>

      <divider>disabled</divider>
      <v-button disabled>disabled default</v-button>
      <v-button type="primary" disabled>disabled primary</v-button>
      <v-button type="warn" disabled>disabled warn</v-button>

      <divider>:text :disabled</divider>
      <v-button :text="submit" :disabled="disable" @click.native="processButton001" type="primary"></v-button>
  </div>
  <!-- <div class="hd">
    <h1 class="page_title">Button Group</h1>
  </div>
  <div class="bd spacing">
    <b-group>
      <bgroup-cell type="primary" plan mini>Button 1</bgroup-cell>
      <bgroup-cell type="primary" plan mini>Button 2</bgroup-cell>
    </b-group>
    <b-group>
      <bgroup-cell type="warn" plan mini>Button 1</bgroup-cell>
      <bgroup-cell type="warn" plan mini>Button 2</bgroup-cell>
    </b-group>
    <b-group>
      <bgroup-cell type="primary" plan mini active>Button 1</bgroup-cell>
      <bgroup-cell type="primary" plan mini>Button 2</bgroup-cell>
      <bgroup-cell type="primary" plan mini>Button 3</bgroup-cell>
    </b-group>
    <b-group>
      <bgroup-cell type="primary" plan mini round>Button 1</bgroup-cell>
      <bgroup-cell type="primary" plan mini round>Button 2</bgroup-cell>
    </b-group>
    <b-group>
      <bgroup-cell type="primary" plan mini round>Button 1</bgroup-cell>
      <bgroup-cell type="primary" plan mini round active>Button 2</bgroup-cell>
    </b-group>
    <b-group>
      <bgroup-cell type="primary" plan>Button 1</bgroup-cell>
      <bgroup-cell type="primary" plan>Button 2</bgroup-cell>
    </b-group>
    <b-group>
      <bgroup-cell type="primary" plan>Button 1</bgroup-cell>
      <bgroup-cell type="primary" plan>Button 2</bgroup-cell>
      <bgroup-cell type="primary" plan>Button 3</bgroup-cell>
    </b-group>
    <b-group>
      <bgroup-cell type="primary" plan active>Button 1</bgroup-cell>
      <bgroup-cell type="primary" plan>Button 2</bgroup-cell>
      <bgroup-cell type="primary" plan>Button 3</bgroup-cell>
    </b-group>

    <b-group>
      <bgroup-cell type="primary" mini>Button 1</bgroup-cell>
      <bgroup-cell type="primary" mini>Button 2</bgroup-cell>
    </b-group>
    <b-group>
      <bgroup-cell type="primary" mini>Button 1</bgroup-cell>
      <bgroup-cell type="primary" mini>Button 2</bgroup-cell>
      <bgroup-cell type="primary" mini active>Button 3</bgroup-cell>
    </b-group>
    <b-group>
      <bgroup-cell type="warn" mini>Button 1</bgroup-cell>
      <bgroup-cell type="warn" mini>Button 2</bgroup-cell>
    </b-group>
    <b-group>
      <bgroup-cell type="primary">Button 1</bgroup-cell>
      <bgroup-cell type="primary">Button 2</bgroup-cell>
    </b-group>
  </div> -->
</div>
</template>

<script>
import { Divider, VButton, BGroup, BgroupCell } from 'components'

export default {
  components: {
    Divider,
    VButton,
    BGroup,
    BgroupCell
  },
  methods: {
    change (value) {
      console.log('change:', value)
    },
    processButton001 () {
      this.submit = 'processing'
      this.disable = true
    }
  },
  data () {
    return {
      submit: 'click me',
      disable: false
    }
  }
}
</script>
