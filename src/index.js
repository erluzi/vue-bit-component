import Button from '../package/button/index.js'
import Loader from '../package/loader/index.js'
import Prompt from '../package/prompt/index.js'

const components = [
  Button,
]

function install(Vue) {
  for (let component of components) {
    Vue.component(component.name, component)
  }
  Vue.use(Loader)
  Vue.prototype.$erprompt = Prompt.prompt
  Vue.prototype.$erconfirm = Prompt.confirm
  Vue.prototype.$erconfirm_ = Prompt.confirm_
}

export default {
  install,
}

export {
  Button,
  Loader,
  Prompt,
}
