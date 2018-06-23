import Vue from 'vue'
import App from './App'
import AnimateWhenVisible from './components/AnimateWhenVisible'

import './directives/validity'

import './styles/app.scss'

Vue.component('AnimateWhenVisible', AnimateWhenVisible)
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: h => h(App),
});
