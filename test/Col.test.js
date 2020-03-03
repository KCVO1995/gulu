const expect = chai.expect
import Vue from "vue"
import Col from "../src/Col"

Vue.config.productionTip = false
Vue.config.devtools = false

describe("Col", () => {
  it("存在.", () => {
    expect(Col).exist
  })
  it("接受 span 属性", () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new Col({propsData: {span: '12'}}).$mount(div)
    expect(vm.$el.classList.contains('col-12')).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it("接受 offset 属性", () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new Col({propsData: {offset: '12'}}).$mount(div)
    expect(vm.$el.classList.contains('offset-12')).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it("接受 ipad 属性", () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new Col({propsData: {ipad: {span: 12, offset: 12}}}).$mount(div)
    expect(vm.$el.classList.contains('col-ipad-12')).to.eq(true)
    expect(vm.$el.classList.contains('offset-ipad-12')).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it("接受 narrow-pc 属性", () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new Col({propsData: {narrowPc: {span: 12, offset: 12}}}).$mount(div)
    expect(vm.$el.classList.contains('col-narrow-pc-12')).to.eq(true)
    expect(vm.$el.classList.contains('offset-narrow-pc-12')).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it("接受 pc 属性", () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new Col({propsData: {pc: {span: 12, offset: 12}}}).$mount(div)
    expect(vm.$el.classList.contains('col-pc-12')).to.eq(true)
    expect(vm.$el.classList.contains('offset-pc-12')).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
  it("接受 widePc 属性", () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new Col({propsData: {widePc: {span: 12, offset: 12}}}).$mount(div)
    expect(vm.$el.classList.contains('col-wide-pc-12')).to.eq(true)
    expect(vm.$el.classList.contains('offset-wide-pc-12')).to.eq(true)
    vm.$el.remove()
    vm.$destroy()
  })
})
