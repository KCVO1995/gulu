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
import Tabs from "./Tabs"
import TabsHead from "./TabsHead"
import TabsBody from "./TabsBody"
import TabsItem from "./TabsItem"
import TabsPane from "./TabsPane"
import plugin from "./plugin"
import Popover from "./Popover"

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
Vue.component("g-tabs", Tabs)
Vue.component("g-tabs-head", TabsHead)
Vue.component("g-tabs-body", TabsBody)
Vue.component("g-tabs-item", TabsItem)
Vue.component("g-tabs-pane", TabsPane)
Vue.component("g-popover", Popover)
Vue.use(plugin)
new Vue({
  el: "#app",
  data() {
    return {
      selectedTab: "Europe"
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
      })
    }
  }
})

