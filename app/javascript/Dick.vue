<template>
  <div id="dick">
    <navbar></navbar>
    <p>{{ message2 }}</p>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  data: function () {
    return {
      message2: "Hello Dick!"
    }
  },
  components: {
    Navbar
  }
}
</script>

<style scoped>
p {
  font-size: 4em;
  text-align: center;
}
</style>
