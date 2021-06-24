<template>
  <div id="app">
    <!-- **************************Header and Nav*************************** -->

    <Header />

    <!-- *******************************Injected page*************************** -->
    <transition name="myCustom" mode="out-in">

    <router-view />
    
    </transition>
    <!-- **************************Footer**************************** -->

    <Footer />

    <!-- ************************************************************ -->
  </div>
</template>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
}

#app {
  font-family: "Poppins", sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 0.5rem;
  padding-left: 0rem;
}

h1,h2,h3{
  margin: 1rem 0;
}

template {
  padding: 0;
  margin: 0;
}
p {
  margin: 0;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
  text-decoration: underline;
}


.myCustom-enter-active,
.myCustom-leave-active{
  transition: opacity .4s, transform .4s;
}

.myCustom-enter,
.myCustom-leave-to{
  opacity: 0;
  transform: translateX(-30);
}
</style>

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
