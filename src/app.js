import Vue from "vue"
import Button from "./Button"
import ButtonGroup from "./ButtonGroup"
import Input from "./Input"
import Row from "./Row"
import Col from "./Col"
import Layout from "./Layout"
import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"
import Sider from "./Sider"
import plugin from "./plugin"

Vue.component("g-button", Button)
Vue.component("g-button-group", ButtonGroup)
Vue.component("g-input", Input)
Vue.component("g-row", Row)
Vue.component("g-col", Col)
Vue.component("g-layout", Layout)
Vue.component("g-header", Header)
Vue.component("g-content", Content)
Vue.component("g-sider", Sider)
Vue.component("g-footer", Footer)
Vue.use(plugin)
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
    focus(value) {console.log(value)},
    showToast() {
      this.$toast("我是message", {
        autoClose: 500,
        closeButton: {text: "我知道了", callback: () => {console.log("我知道了")}},
        position: "middle",
      })
    }
  }
})

