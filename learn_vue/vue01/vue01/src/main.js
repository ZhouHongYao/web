// 导入Vue.js
import Vue from 'vue'

//导入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

// //导入vue-router
// import router from 'Vue-router';
// Vue.use(router);

//创建全局组件
//导入子组件
import greeting from "./components/greeting";
Vue.component('greeting', greeting);


//导入vue router对象
import router from "./router";


// 导入App.vue根组件
import App from './App.vue'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),  // 渲染App根组件
}).$mount('#app');
