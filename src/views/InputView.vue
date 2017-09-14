<template lang="html">
  <div>
    <group title="禁用内置验证及显示成功或者错误样式">
      <v-input title="禁用验证" placeholder="请输入内容" novalidate :icon-type="iconType" :show-clear="false" @on-blur="onBlur"></v-input>
    </group>
    <br>
    <v-button type="default" @click.native="iconType = 'success'">success</v-button>
    <v-button type="default" @click.native="iconType = 'error'">error</v-button>
    <v-button type="default" @click.native="iconType = ''">empty</v-button>

    <group title="is-type传入function">
      <v-input title="必须输入123456" placeholder="请输入内容" :is-type="fn123456"></v-input>
    </group>

    <group title="max 输入最大长度">
      <v-input title="max=5" :max="5" @on-change="change" v-model="maxValue"></v-input>
    </group>

    <group title="disabled">
      <v-input title="disabled" disabled v-model="disabledValue"></v-input>
    </group>

    <group title="html title">
      <v-input :title='`<span style="${style}">hello</span>`' placeholder="请输入内容"></v-input>
    </group>

    <group title="Default">
      <v-input title="message" placeholder="Please enter a message"></v-input>
    </group>

    <group title="debounce = 1000">
      <v-input title='debounce' :debounce="1000" @on-change="change" v-model="debounceValue"></v-input>
    </group>

    <group title="不显示清除按钮">
      <!-- autocapitalize 字母大写规则 words 每个单词开头字母会自动大写 characters 每个字母都会大写 sentences 每句开头字母自动大写 -->
      <v-input title="message" required placeholder="placeholder" :show-clear="false" autocapitalize="characters"></v-input>
    </group>

    <group title="onFocus">
      <v-input title="focus-handler" placeholder="focus here" :show-clear="true" @on-focus="onFocus"></v-input>
    </group>

    <group title="is-type=china-name">
      <v-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name"></v-input>
    </group>

    <group title="keyboard=number is-type=china-mobile">
      <v-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></v-input>
    </group>

    <group title="is-type=email">
      <v-input title="邮箱" name="email" placeholder="请输入邮箱地址" is-type="email"></v-input>
    </group>

    <group title="min=2 and max=5">
      <v-input title="2-5个字符" placeholder="" :min="2" :max="5"></v-input>
    </group>

    <group title="确认输入">
      <v-input title="请输入6位数字" placeholder="请输入6位数字" v-model="password" :min="6" :max="6" @on-change="change"></v-input>
      <v-input title="请确认6位数字" placeholder="请确认6位数字" v-model="password2" :equal-with="password"></v-input>
    </group>

    <group title="验证value required===true">
      <v-input title="message" placeholder="I'm placeholder" ref="input01" required></v-input>
      <cell title="点击验证value" :value="'$valid value:' + valid1" @click.native="getValid1"></cell>
    </group>
    <group>
      <v-input title="message" placeholder="I'm placeholder" ref="input02" :required="false" @click.native="getValid2"></v-input>
      <cell title="点击验证value" :value="'$valid value:' + valid2" @click.native="getValid2"></cell>
    </group>
  </div>
</template>

<script>
import { VInput, Group, VButton, Cell } from '../components'
export default {
  components: {
    VInput,
    Group,
    VButton,
    Cell
  },
  data () {
    return {
      password: '123456',
      password2: '',
      valid1: false,
      valid2: false,
      iconType: '',
      fn123456: function (value) {
        return {
          valid: value === '123456',
          msg: 'Must be 123456'
        }
      },
      style: '',
      disabledValue: 'hello world',
      debounceValue: '',
      maxValue: ''
    }
  },
  methods: {
    getValid1 () {
      this.valid1 = this.$refs.input01.valid
    },
    getValid2 () {
      this.valid2 = this.$refs.input02.valid
    },
    change (val) {
      console.log(val)
    },
    onBlur (val) {
      console.log('on blur', val)
    },
    onFocus (val) {
      console.log('on focus', val)
    }
  }
}
</script>

<style scoped>
.weui_cell_ft .weui_btn {
  margin-left: 5px;
  vertical-align: middle;
  display: inline-block;
}
.red {
  color: red;
}
.green {
  color: green;
}
</style>
