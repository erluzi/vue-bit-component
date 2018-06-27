import Button from '../package/button/index.js';
import Loader from '../package/loader/index.js';
import Prompt from '../package/prompt/index.js';

// for register
const components = [
    Button
];

function install(Vue, opts = {}) {
    for(let component of components){
        Vue.component(component.name, component)
    }

    Vue.use(Loader);

    Vue.prototype.$prompt = Prompt.prompt;
    Vue.prototype.$confirm = Prompt.confirm;
    Vue.prototype.$confirm_ = Prompt.confirm_;
}

if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue)
}

module.exports = {
    install,
    Button,
    Loader,
    Prompt
};

module.exports.default = module.exports;
