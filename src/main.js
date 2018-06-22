import Vue from 'vue'
import App from './App.vue'
import './directives/validity.js'
import './styles/app.scss'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App),
});
