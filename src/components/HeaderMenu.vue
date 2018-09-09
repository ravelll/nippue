<template>
  <header class="header-menu">
    <router-link class="link-item" to="/">Home</router-link>
    <router-link class="link-item" to="/login">Login</router-link>
  </header>
</template>

<script>
export default {
  name: 'HeaderMenu'
}
</script>

<style lang="scss" scoped>
.header-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3vh;
  background-color: #24292e;
}

.link-item {
  font-weight: bold;
  color: #fff;
  text-decoration: none;

  &:first-child {
    padding-right: 3rem;
  }

  &:hover {
    opacity: 0.75;
  }
}
</style>
