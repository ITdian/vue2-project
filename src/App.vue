<template>
  <div id="app">
    <Login />
  </div>
</template>

<script>
import Login from './pages/Login.vue'
export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style lang="scss">
@import './style/index.scss';
</style>
