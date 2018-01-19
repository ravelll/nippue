import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/views/Hello.vue'
import PostList from '@/views/PostList.vue'
import Login from '@/views/Login.vue'

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
    },
    {
      path: '/users/:id/posts', component: PostList
    },
    {
      path: '/login', component: Login
    }
  ]
})
