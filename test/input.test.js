const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/Input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('input', () => {
  it('存在.', () => {
    expect(Input).exist
  })
  describe('props', () => {
    let vm
    afterEach(() => {vm.$destroy()})
    it('接受 value', () => {
      vm = new Input({propsData: {value: 'hi'}}).$mount()
      const input = vm.$el.querySelector('input')
      expect(input.value).to.eq('hi')
    })
    it('接受 placeholder', () => {
      vm = new Input({propsData: {placeholder: 'hi'}}).$mount()
      const input = vm.$el.querySelector('input')
      expect(input.placeholder).to.eq('hi')
    })
    it('接受 disabled', () => {
      vm = new Input({propsData: {disabled: true}}).$mount()
      const input = vm.$el.querySelector('input')
      expect(input.disabled).to.eq(true)
    })
    it('接受 readonly', () => {
      vm = new Input({propsData: {readonly: true}}).$mount()
      const input = vm.$el.querySelector('input')
      expect(input.readOnly).to.eq(true)
    })
    it('接受 error', () => {
      vm = new Input({propsData: {error: 'error'}}).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.eq('#i-error')
      const errorMessage = vm.$el.querySelector('.errorMessage')
      expect(errorMessage.innerHTML).to.eq('error')
    })
  })
})