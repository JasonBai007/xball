import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 添加事件总线
Vue.prototype.$Bus = new Vue()

new Vue({
  render: h => h(App),
}).$mount('#app')