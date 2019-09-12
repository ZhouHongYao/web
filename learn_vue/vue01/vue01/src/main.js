// 导入Vue.js
import Vue from 'vue'

// 导入App.vue根组件
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),  // 渲染App根组件
}).$mount('#app')
