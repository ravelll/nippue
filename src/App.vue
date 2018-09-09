<template>
  <div id="app">
    <header-menu/>
    <router-view/>
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu.vue'

export default {
  components: { HeaderMenu }
}
</script>

<style lang="scss">
*,
*::after,
*::before {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.4rem;
  font-weight: normal;
  font-family: 'ヒラギノ角ゴ ProN W3', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'Yu Gothic', YuGothic, Verdana, Helvetica, 'ＭＳ Ｐゴシック', sans-serif;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5 {
  margin: 0;
}

a {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>
