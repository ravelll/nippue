import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/views/Hello.vue'
import PostList from '@/views/PostList.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/', component: Hello
    },
    {
      path: '/posts', component: PostList
    }
  ]
})
