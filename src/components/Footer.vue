<template>
  <footer id="Footer">
    <p>&copy; {{ copyright }}, {{ year() }}</p>
  </footer>
</template>


<script>

export default {
  name: 'Footer',
  data() {
    return ({
      copyright: "KingLemar",
      year: function () {
        let time = new Date()
        return `2021 - ${(time.getFullYear())}`
      }
    }
    )
  },

}



</script>

<style scoped>
footer {
  border-bottom: 1px #ecedef solid;
  border-top: 1px #ecedef solid;
  padding: 1rem .5rem;
  margin-top: 3rem;
  font-weight: 600;
  color: #2c3e50;
}

@media screen and (max-width:499px) {
  footer {
    margin-top: 2rem;
    padding-bottom: 6rem;
  }
}
</style>