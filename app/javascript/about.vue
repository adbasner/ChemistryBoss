<template>
  <div id="about">
    <navbar></navbar>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  data: function () {
    return {
      message: "Hello About!"
    }
  },
  components: {
    Navbar
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
