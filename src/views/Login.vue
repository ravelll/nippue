<template>
  <div>
    <div>
      <div>User ID</div>
      <input type="text" v-model="userId">
    </div>
    <div>
      <div>Password</div>
      <input type="password" v-model="password">
    </div>
    <input type="button" value="submit" @click.prevent="login">
    <div v-if="isLoggedIn">
      <p>Now you logged in!</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userId: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login')
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.isLoggedIn
    }
  }
}
</script>
