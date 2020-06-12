import Loader from './loader.vue'
import loaderDirective from './directive.js'
import Vue from 'vue'

let LoaderConstructor = Vue.extend(Loader)
let fullScreenInstance
let defaultOptions = {
  fullScreen: true,
}

LoaderConstructor.prototype.close = function () {
  if (this.fullScreen) {
    fullScreenInstance = undefined
  }
  this.visible = false
  if (this.$el && this.$el.parentNode) {
    this.$el.parentNode.removeChild(this.$el)
  }
  this.$destroy()
}

function loading(opts = {}) {
  if (Vue.prototype.$isServer) return
  opts = Object.assign({}, defaultOptions, opts)
  if (typeof opts.target === 'string') {
    opts.target = document.querySelector(opts.target)
  }
  if (opts.target) {
    opts.fullScreen = false
  } else {
    opts.target = document.body
  }
  if (opts.fullScreen && fullScreenInstance) return fullScreenInstance

  let instance = new LoaderConstructor({
    el: document.createElement('div'),
    data: opts, //区别于$data
  })
  opts.target.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.visible = true
  })
  if (opts.fullScreen) {
    fullScreenInstance = instance
  }
  return instance
}

function close() {
  if (fullScreenInstance !== undefined) {
    fullScreenInstance.close()
  }
}

function install(Vue) {
  Vue.use(loaderDirective)
}

export default {
  loading, close, install,
}
