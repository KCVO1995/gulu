import Toast from "./Toast"

let currentToast
export default {
  install(Vue) {
    Vue.prototype.$toast = function (message, options) {
      if (currentToast) {
        console.log(2)
        currentToast.close()
      }
      currentToast = createToast(message, options)
    }
  }
}

const createToast = (message, options) => {
  const toast = new Toast({
    propsData: options
  })
  toast.$slots.default = [message]
  toast.$mount()
  toast.$on("close", () => {currentToast = null})
  const app = document.querySelector("#app")
  app.appendChild(toast.$el)
  return toast
}
