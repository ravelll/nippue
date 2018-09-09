<template>
  <div class="login-block">
    <div class="login-forms">
      <div class="user-block">
        <div class="form-label">User ID</div>
        <el-input class="input" type="text" v-model="userId"/>
      </div>
      <div class="password-block">
        <div class="form-label">Password</div>
        <el-input class="input" type="password" v-model="password"/>
      </div>
      <div class="submit-block">
        <el-button>Login</el-button>
      </div>
      <div v-if="errorMessage">
        <p>{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
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
          this.$router.push(`/user/${loggedInUser.id}/posts`)
        }).catch((errorMessage) => {
          this.errorMessage = errorMessage
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-block {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.password-block {
  padding: 2.4rem 0 4rem;
}

.form-label {
  color: #8a8a8a;
}

.input {
  width: 30rem;
}

.submit-block {
  display: flex;
  justify-content: center;
}
</style>
