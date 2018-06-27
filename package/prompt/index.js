import Vue from 'vue';
import Prompt from './prompt.vue';

let PromptConstructor = Vue.extend(Prompt);
let promptInstance, confirmInstance, confirm_Instance;
let promptTimer;

const instanceMapping = {
    prompt: promptInstance,
    confirm: confirmInstance,
    confirm_: confirm_Instance,
};

function atomFunc(opts, type) {
    if(Vue.prototype.$isServer) return;
    if(typeof opts.message !== 'string' || opts.message.trim() === '') return;

    let instance;
    if(instanceMapping[type] === undefined){
        instanceMapping[type] = new PromptConstructor({
            el: document.createElement('div'),
            data: opts
        });
        instance = instanceMapping[type];
    }else{
        instance = instanceMapping[type];
        let originData = PromptConstructor.options.data();
        instance.message = opts.message || originData.message;
        instance.confirmText = opts.confirmText || originData.confirmText;
        instance.cancelText = opts.cancelText || originData.cancelText;
    }
    instance.type = type;

    if(!instance.domInserted){
        document.body.appendChild(instance.$el);
        instance.domInserted = true;
    }
    Vue.nextTick(() => {
        instance.visible = true;
        if(type === 'prompt'){
            clearTimeout(promptTimer);
            promptTimer = setTimeout(() => {
                instance.visible = false;
            }, 3000)
        }
    });

    return instance
}

function prompt(opts = {}) {
    return atomFunc(opts, 'prompt')
}

function confirm(opts = {}) {
    return atomFunc(opts, 'confirm')
}

function confirm_(opts = {}) {
    return atomFunc(opts, 'confirm_')
}

function close() {
    if(promptInstance !== undefined){
        promptInstance.$el &&
        promptInstance.$el.parentNode &&
        promptInstance.$el.parentNode.removeChild(promptInstance.$el)
    }
    if(confirmInstance !== undefined){
        confirmInstance.$el &&
        confirmInstance.$el.parentNode &&
        confirmInstance.$el.parentNode.removeChild(confirmInstance.$el)
    }
}

function install(Vue) {
    Vue.prototype.$prompt = prompt;
    Vue.prototype.$confirm = confirm;
    Vue.prototype.$confirm_ = confirm_;
}

export default {
    prompt, confirm, confirm_, close, install
}