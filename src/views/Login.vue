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
    <div v-if="errorMessage">
      <p>{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userId: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    login () {
      const inputs = { name: this.userId, password: this.password }

      this.$store.dispatch('login', inputs)
        .then((loggedInUser) => {
          this.$router.push(`/users/${loggedInUser.id}/posts`)
        }).catch((errorMessage) => {
          this.errorMessage = errorMessage
        })
    }
  }
}
</script>
