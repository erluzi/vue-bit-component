### 引入组件(全部或者按需)
```javascript
// 1.全部引入
// import VueBitComponents from 'vue-bit-component'

// 2.按需引入 - 配合插件 babel-plugin-component
import { Button, Prompt, Loader } from 'vue-bit-component'

// Vue.use(VueBitComponents)
Vue.use(Button)
Vue.use(Prompt)
Vue.use(Loader)
```

```javascript
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  "plugins": [
    ["component",
      {
        "libraryName": "vue-bit-component",
        "style": false
      }
    ]
  ]
}
```

### 引入样式
```javascript
import 'vue-bit-component/lib/index_less.css'
```
