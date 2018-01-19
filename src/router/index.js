import Vue from 'vue'
import VueRouter from 'vue-router'
import PostList from '@/views/PostList.vue'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/', component: PostList
    },
    {
      path: '/user/:id/posts', component: PostList
    },
    {
      path: '/login', component: Login
    }
  ]
})
