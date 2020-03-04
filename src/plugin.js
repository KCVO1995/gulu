import Toast from "./Toast"

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message) {
      const toast = new Toast()
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}