import Vue from "vue"
import Button from "./Button"
import Icon from "./Icon"
import ButtonGroup from "./ButtonGroup"
import Input from './Input'

Vue.component("g-button", Button)
Vue.component("g-icon", Icon)
Vue.component("g-button-group", ButtonGroup)
Vue.component('g-input', Input)
new Vue({
  el: "#app",
  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
      value: ''
    }
  },
  methods: {
    input(value) {console.log(value)},
    change(value) {console.log(value)},
    focus(value) {console.log(value)}
  }
})

