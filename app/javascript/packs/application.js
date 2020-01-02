// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("@rails/activestorage").start()


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router/dist/vue-router.js'
import App from '../app.vue'
import About from '../about.vue'

Vue.use(VueRouter)

document.addEventListener('DOMContentLoaded', () => {
  const router = new VueRouter({
    routes: [
      { path: "/", component: App },
      { path: "/about", component: About },
    ],
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 };
    }
  });

  let app = new Vue({
    el: '#app',
    router
  });
});