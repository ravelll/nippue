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
export default {
  data () {
    return {
      'posts': [
        {
          id: 1,
          date: '2018/01/01',
          content: '新年明けましておめでとうございます'
        },
        {
          id: 2,
          date: '2018/01/02',
          content: '宝徳稲荷大社に初詣に行ってきました'
        },
        {
          id: 3,
          date: '2018/01/03',
          content: '東京 🚅  新潟'
        }
      ]
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.isLoggedIn
    }
  }
}
</script>
