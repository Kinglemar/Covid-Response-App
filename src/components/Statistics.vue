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
import { COVID19API } from "@evrimfeyyaz/covid-19-api";

export default {
  name: "Statistics",
  data: function () {
    return {
      scroll: "",
      methods: {
        apiData(){
          const api = new COVID19API();

          console.warn(api)

          api.init().
          then(() => console.warn("Initialized."));


          api.getDataByLocation("France")
          .then((data) => {
          console.warn(data.location); // -> Turkey
          this.scroll = data
          console.warn(data.values[0].confirmed); // -> 0
          });
        }
      }
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