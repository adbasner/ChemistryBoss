<template>
  <div>
    <nav-bar></nav-bar>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  data: function () {
    return {
      message: "Hello App page!"
    }
  },
  components: {
    'nav-bar': Navbar
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
