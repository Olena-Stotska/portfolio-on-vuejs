import Vue from 'vue'
import App from './App'
import AnimateWhenVisible from './components/AnimateWhenVisible'

import addPolyfills from './polyfills'
import './directives/validity'
import './styles/app.scss'

Vue.component('AnimateWhenVisible', AnimateWhenVisible)
Vue.config.productionTip = false;

addPolyfills().then(() => {
  new Vue({
    el: '#app',
    render: h => h(App),
  });
})
