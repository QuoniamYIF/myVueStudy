import Vue from 'vue'
import counter from './couter.vue'
import store from './store'

new Vue({
  el: '#app',
  store,
  render: h => h(counter)
})
