<template>
  <div class="post-list">
    <input type="button" value="Add post" v-if="isLoggedIn">
    <div class="post-items">
      <div class="post-item" v-for="post in posts">
        <label class="post-label">{{ post.date }}</label>
        <div class="post-content">{{ post.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import posts from '../fixtures/posts.js'

export default {
  name: 'PostList',
  data () {
    return {
      'allPosts': []
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.isLoggedIn
    },
    posts () {
      if (this.$route.path === '/') {
        return this.allPosts
      } else {
        return this.allPosts.filter(
          post => post.userid == Number(this.$route.params.id)
        )
      }
    }
  },
  beforeMount () {
    this.allPosts = posts
  }
}
</script>

<style lang="scss" scoped>
.post-list {
  display: flex;
  justify-content: center;
}

.post-items {
  padding-top: 10rem;
  width: 80rem;
}

.post-item {
  &:not(:first-child) {
    padding-top: 2.4rem;
  }
}

.post-label {
  color: #8a8a8a;
  font-size: 3.2rem;
  padding-left: 0.8rem;
}

.post-content {
  padding: 0.8rem;
  color: #444;
  border: 1px solid #fafafa;
  border-radius: 2px;
  background-color: #fafafa;
}
</style>
