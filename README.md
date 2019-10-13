# elementui-vue

地址：[Element UI Vue](https://element.eleme.cn/#/zh-CN/component/quickstart)

## 完整引入 ##

    import Vue from 'vue';
    import ElementUI from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';
    import App from './App.vue';
    
    Vue.use(ElementUI);
    
    new Vue({
      el: '#app',
      render: h => h(App)
    });
    
## 按需引入 ##

安装`babel-plugin-component`：

    npm install babel-plugin-component -D
    
新建`.babelrc`：

    {
      "presets": [["es2015", { "modules": false }]],
      "plugins": [
        [
          "component",
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          }
        ]
      ]
    }
    
使用：
    
    import Vue from 'vue';
    import { Button, Select } from 'element-ui';
    import App from './App.vue';
    
    Vue.component(Button.name, Button);
    Vue.component(Select.name, Select);
    /* 或写为
     * Vue.use(Button)
     * Vue.use(Select)
     */
    
    new Vue({
      el: '#app',
      render: h => h(App)
    });
    
## 全局配置 ##

完整引入 `Element`：

    import Vue from 'vue';
    import Element from 'element-ui';
    Vue.use(Element, { size: 'small', zIndex: 3000 });
    
按需引入 `Element`：

    import Vue from 'vue';
    import { Button } from 'element-ui';
    
    Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
    Vue.use(Button);