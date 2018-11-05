// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import iview from 'iview'

import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(iview);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App},
  //render template两种写法目的都是为了在根元素#app下实例化一个App组件
  template: '<App/>'
  //render: h => h(App)
  // render : function (h) {
  //   return h(App)
  // }
})
