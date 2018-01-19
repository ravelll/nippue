<template>
  <div>
    <input type="button" value="Add post" v-if="isLoggedIn">
    <div v-for="post in posts">
      <h4>{{ post.date }}</h4>
      <div>{{ post.content }}</div>
    </div>
  </div>
</template>

<script>
import posts from '../fixtures/posts.js'

export default {
  data () {
    return {
      'allPosts': []
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.isLoggedIn
    },
    currentUser () {
      return this.$store.state.currentUser
    },
    posts () {
      if (this.$route.path === '/posts') {
        return this.allPosts
      } else {
        return this.allPosts.filter(post => post.userid === this.currentUser.id)
      }
    }
  },
  beforeMount () {
    this.allPosts = posts
  }
}
</script>
