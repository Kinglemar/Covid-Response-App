<template>
  <div id="app">
    <Header />
    <div class="contain">
      <transition name="myCustom" mode="out-in">
        <router-view />
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
  @import './assets/css/style.css';
</style>


