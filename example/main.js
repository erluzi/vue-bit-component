// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// method 1: 引入全部组件
// import Compo from '../src/index';
// Vue.use(Compo);

// method 2: 引入部分组件
// import { Button } from '../src/index';
// Vue.use(Button);

// method 3: 从库引入组件
import { Button } from '../lib/index';
Vue.use(Button);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
