import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import App from '@/App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/ja'

Vue.use(ElementUI, { locale })

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
