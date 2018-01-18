import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../components/Hello.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '*',
      component: Hello
    }
  ]
})
