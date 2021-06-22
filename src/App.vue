<template>
  <div id="app">
    <!-- **************************Header and Nav*************************** -->

    <Header />

    <!-- *******************************Injected page*************************** -->

    <router-view />

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
  padding-left: 0;
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
