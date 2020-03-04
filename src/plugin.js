import Toast from "./Toast"

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, options) {
      const toast = new Toast({
        propsData: options
      })
      toast.$slots.default = [message]
      toast.$mount()
      const app = document.querySelector("#app")
      app.appendChild(toast.$el)
    }
  }
}