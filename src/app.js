import Vue from 'vue'
import Button from './Button'
import Icon from './Icon'
import ButtonGroup from './ButtonGroup'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
new Vue({
  el: '#app',
  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
    }
  }
})


import chai from 'chai'

const {expect} = chai
// 单元测试

{
  const vm = new Button({
    propsData: {
      icon: 'i-setting'
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector("use")
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-setting')
  vm.$el.remove()
  vm.$destroy()
}
{
  const vm = new Button({
    propsData: {
      icon: 'i-setting',
      loading: true
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector("use")
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#i-loading')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const vm = new Button({
    propsData: {
      icon: 'i-setting',
      iconPosition: 'left'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const vm = new Button({
    propsData: {
      icon: 'i-setting',
      iconPosition: 'right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}
{
  const vm = new Button({
    propsData: {
      icon: 'i-setting',
      iconPosition: 'right',
    }

  })
  vm.$mount()
  vm.$on('click', function () {

  })
  let button = vm.$el
  button.click()
}
