import Vue from 'vue'
import Alert from 'components'

describe('Alert', () => {
  // Inspect the raw component options
  // 检测原始组件选项
  it('has a created hook', () => {
    expect(typeof Alert.created).toBe('function')
  })

  // Evaluate the results of functions in
  // the raw component options
  // 计算在原始组件选项里的函数运行结果
  it('sets the correct default data', () => {
    expect(typeof Alert.data).toBe('function')
    const defaultData = Alert.data()
    expect(defaultData.showValue).toBe(false)
  })

  // Inspect the component instance on mount
  // 检测已经装载的组件实例
  it('correctly sets the message when created', () => {
    const vm = new Vue(Alert).$mount()
    expect(vm.showValue).toBe(false)
  })

  // Mount an instance and inspect the render output
  // 装载一个实例，检测渲染的输出结果
  it('renders the correct message', () => {
    const Alert = Vue.extend(Alert)
    const vm = new Alert({title: '标题'}).$mount()
    expect(vm.$data.title).toBe('标题')
  })
})
