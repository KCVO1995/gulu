import Button from "../src/Button"

const expect = chai.expect
import Vue from "vue"
import Toast from "../src/Toast"

Vue.config.productionTip = false
Vue.config.devtools = false

describe("Toast 存在", () => {
  it("存在.", () => {
    expect(Toast).exist
  })
  describe("props", () => {
    it("接受 autoClose", (done) => {
      const div = document.createElement("div")
      document.body.appendChild(div)
      const vm = new Toast({
        propsData: {
          autoClose: 1
        }
      }).$mount(div)
      vm.$on("close", () => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      })
    })
    it("接受 enableHtml`", () => {
      const vm = new Toast({
        propsData: {
          enableHtml: true
        }
      })
      vm.$slots.default = ["<strong id=\"hi\">hi</strong>"]
      vm.$mount()
      const strong = vm.$el.querySelector("#hi")
      expect(strong).exist
    })
    it("接受 closeButton`", () => {
      const callback = sinon.fake()
      const vm = new Toast({
        propsData: {
          closeButton: {
            text: "关闭",
            callback
          }
        }
      }).$mount()
      const close = vm.$el.querySelector(".close")
      close.click()
      expect(close.textContent.trim()).to.eq("关闭")
      expect(callback).to.have.been.called
    })
    it("接受 position", () => {
      const vm = new Toast({
        propsData: {
          position: "middle"
        }
      }).$mount()
      expect(vm.$el.classList.contains("position-middle")).to.eq(true)
    })
  })

})