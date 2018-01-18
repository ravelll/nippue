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
      console.log("do login process")
    }
  }
}
</script>
