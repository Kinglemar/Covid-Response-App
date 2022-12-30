<template>
  <div>
    <div class="card">
      <h3>{{methods.apiData()}}</h3>
      <h3>{{this.scroll}}</h3>
    </div>

    <div class="card">
      <h3></h3>
    </div>
  </div>
</template>

<script>

export default {
  name: "Statistics",
  data(){
    return {
      
    }
  }
}

</script>

<style scoped>
  body{
    margin: 0;
    padding: 0;
    color: #3df4;
  }
</style>