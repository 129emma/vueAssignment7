import Vue from 'vue'
import App from './App.vue'
// register a global eventbus
export const serverBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
