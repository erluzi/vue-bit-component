import {getStyle} from '../../src/utils/utils'
import Loader from './loader.vue'
import Vue from 'vue'

let LoaderConstructor = Vue.extend(Loader)

let loaderDirective = {
  install(Vue) {
    if (Vue.prototype.$isServer) return
    let toggleLoading = (el, binding) => {
      if (binding.value) {
        Vue.nextTick(() => {
          insertDom(binding.modifiers.full ? document.body : el, el, binding)
        })
      } else {
        el.domVisible = false
        el.instance.visible = false
      }
    }
    let insertDom = (parent, el, binding) => {
      if (!el.domVisible && getStyle(el, 'display') !== 'none' && getStyle(el, 'visibility') !== 'hidden') {
        el.domVisible = true
        if (!el.domInserted) {
          parent.appendChild(el.instance.$el)
        }
        el.instance.visible = true
        el.domInserted = true
      }
    }
    Vue.directive('erloader', {
      bind(el, binding) {
        el.instance = new LoaderConstructor({
          el: document.createElement('div'),
          data: {
            fullScreen: binding.modifiers.full,
          },
        })
        binding.value && toggleLoading(el, binding)
      },
      update(el, binding) {
        if (binding.oldValue !== binding.value) {
          toggleLoading(el, binding)
        }
      },
      unbind(el, binding) {
        if (el.domInserted) {
          el.instance.$el &&
          el.instance.$el.parentNode &&
          el.instance.$el.parentNode.removeChild(el.instance.$el)
          toggleLoading(el, {value: false, modifiers: binding.modifiers})
        }
      },
    })
  },
}

export default loaderDirective
