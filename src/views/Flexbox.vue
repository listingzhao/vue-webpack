<template lang="html">
  <div class="button">
    <div class="hd">
      <h1 class="page_title">Flexbox</h1>
    </div>
    <div class="bd spacing">
      <divider>Horizontal</divider>
      <flexbox>
        <flexbox-item><div class="flex-demo">1</div></flexbox-item>
        <flexbox-item><div class="flex-demo">2</div></flexbox-item>
      </flexbox>
      <br>
      <flexbox>
        <flexbox-item><div class="flex-demo">1</div></flexbox-item>
        <flexbox-item><div class="flex-demo">2</div></flexbox-item>
        <flexbox-item><div class="flex-demo">3</div></flexbox-item>
      </flexbox>
      <br>
      <flexbox>
        <flexbox-item><div class="flex-demo">1</div></flexbox-item>
        <flexbox-item><div class="flex-demo">2</div></flexbox-item>
        <flexbox-item><div class="flex-demo">3</div></flexbox-item>
        <flexbox-item><div class="flex-demo">4</div></flexbox-item>
      </flexbox>
      <divider>Horizontal no gutter</divider>
      <flexbox :gutter="0">
        <flexbox-item><div class="flex-demo">1</div></flexbox-item>
        <flexbox-item><div class="flex-demo">2</div></flexbox-item>
        <flexbox-item><div class="flex-demo">3</div></flexbox-item>
        <flexbox-item><div class="flex-demo">4</div></flexbox-item>
      </flexbox>
      <br>
      <divider>Vertical</divider>
      <flexbox orient="vertical">
        <flexbox-item><div class="flex-demo">1</div></flexbox-item>
        <flexbox-item><div class="flex-demo">2</div></flexbox-item>
      </flexbox>
      <divider>Vertical no gutter</divider>
      <flexbox orient="vertical" :gutter="0">
        <flexbox-item><div class="flex-demo">1</div></flexbox-item>
        <flexbox-item><div class="flex-demo">2</div></flexbox-item>
      </flexbox>
      <divider>12 columns</divider>
      <flexbox>
         <flexbox-item :span="4"><div class="flex-demo">1/3</div></flexbox-item>
         <flexbox-item><div class="flex-demo">2/3</div></flexbox-item>
       </flexbox>
       <br>
       <flexbox>
          <flexbox-item :span="6"><div class="flex-demo">6/12</div></flexbox-item>
          <flexbox-item :span="2"><div class="flex-demo">2/12</div></flexbox-item>
          <flexbox-item><div class="flex-demo">4/12</div></flexbox-item>
        </flexbox>
        <br>
        <flexbox :gutter="0">
          <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
          <flexbox-item :span="1/6"><div class="flex-demo">1/6</div></flexbox-item>
          <flexbox-item :span="1/8"><div class="flex-demo">1/8</div></flexbox-item>
          <flexbox-item :span="1/8"><div class="flex-demo">1/8</div></flexbox-item>
          <flexbox-item><div class="flex-demo">sx</div></flexbox-item>
        </flexbox>
        <divider>flex grid</divider>
        <flexbox :gutter="0">
          <flexbox-item :span="1/3" :order="4"><div class="flex-demo">1</div></flexbox-item>
          <flexbox-item :span="1/6" :order="3"><div class="flex-demo">2</div></flexbox-item>
          <flexbox-item :span="1/8" :order="2"><div class="flex-demo">3</div></flexbox-item>
          <flexbox-item :span="1/8" :order="1"><div class="flex-demo">4</div></flexbox-item>
          <flexbox-item :order="-99"><div class="flex-demo">5</div></flexbox-item>
        </flexbox>
        <divider>flex-wrap</divider>
        <flexbox :gutter="0" wrap="wrap">
          <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
          <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
          <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
          <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
          <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
          <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
          <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
          <flexbox-item :span="1/3"><div class="flex-demo">1/3</div></flexbox-item>
        </flexbox>
      <br>
    </div>
  </div>
</template>

<script>
import {Divider, Flexbox, FlexboxItem} from 'components'
export default {
  components: {
    Divider,
    Flexbox,
    FlexboxItem
  }
}
</script>

<style lang="less">
@import '../styles/1px.less';
.flex-demo {
  text-align: center;
  color: #fff;
  background-color: #20b907;
  border-radius: 4px;
  background-clip: padding-box;
}
</style>
