import Button from '../package/button/index.js';

// for register
const components = [
    Button
];

function install(Vue, opts = {}) {
    for(let component of components){
        Vue.component(component.name, component)
    }
}

if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue)
}

module.exports = {
    install,
    Button
};

module.exports.default = module.exports;
