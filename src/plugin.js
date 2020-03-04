import Toast from "./Toast"

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, options) {
      const toast = new Toast({
        propsData: options
      })
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}