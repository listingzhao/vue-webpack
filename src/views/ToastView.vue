<template lang="html">
  <div class="toast">
    <div class="hd">
      <h1 class="page_title">Toast</h1>
    </div>
    <div class="bd spacing">
        <v-button :value="show1" type="primary" @click.native="onShow1">按钮</v-button>

        <v-button :value="show2" type="primary" @click.native="onShow2">文本提示</v-button>

        <v-button :value="show6" type="primary" @click.native="onShow6">长文本提示</v-button>

        <v-button :value="show3" type="primary" @click.native="onShow3">设置出现时间</v-button>

        <v-button :value="show4" type="warn" @click.native="onShow4">提示取消</v-button>

        <v-button :value="show5" type="warn" @click.native="onShow5">提示禁止</v-button>

        <toast v-model="show1" @on-hide="onHide1">
          处理完成
        </toast>
        <toast v-model="show2" type="text" @on-hide="onHide2">
          处理完成
        </toast>

        <toast v-model="show3" :time="1000">
          1s关闭
        </toast>

        <toast v-model="show4" type="cancel">
          取消操作
        </toast>

        <toast v-model="show5" type="warn">
          禁止操作
        </toast>

        <toast v-model="show6" type="text" width="20em">Talk is cheap, show me the code.</toast>
    </div>
  </div>
</template>

<script>
import Toast from '../components/toast'
import VButton from '../components/v-button'
export default {
  data: function () {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false
    }
  },
  methods: {
    onShow1 () {
      this.show1 = true
    },
    onHide1 () {
      this.show1 = false
    },
    onShow2 () {
      this.show2 = true
    },
    onHide2 () {
      this.show2 = false
    },
    onShow3 () {
      this.show3 = true
    },
    onHide3 () {
      this.show3 = false
    },
    onShow4 () {
      this.show4 = true
    },
    onShow5 () {
      this.show5 = true
    },
    onShow6 () {
      this.show6 = true
    }
  },
  components: {
    Toast,
    VButton
  }
}
</script>

<style lang="less">

</style>
