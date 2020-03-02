import Vue from "vue"
import Button from "./Button"
import ButtonGroup from "./ButtonGroup"
import Input from "./Input"
import Row from './Row'
import Col from './Col'

Vue.component("g-button", Button)
Vue.component("g-button-group", ButtonGroup)
Vue.component("g-input", Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
new Vue({
  el: "#app",
  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
      value: ""
    }
  },
  methods: {
    input(value) {console.log(value)},
    change(value) {console.log(value)},
    focus(value) {console.log(value)}
  }
})

