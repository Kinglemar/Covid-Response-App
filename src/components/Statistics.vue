<template>
  <div>
    <div class="card">
      <h3>{{ space }}</h3>
      <h3></h3>
    </div>

    <div class="card">
      <h3></h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Statistics",
  data: function () {
    return {
      space: "Statistics",
      info: fetch("https://api.github.com/users/Kinglemar"),

      test: fetch(
        "https://who-covid-19-data.p.rapidapi.com/api/data?region=European%20Region&cases=35000&reportDate=2020-03-25",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "who-covid-19-data.p.rapidapi.com",
          },
        }
      )
        .then((Response) => Response.json)
        .catch((err) => {
          console.error(err);
        }),
    };
  },
};
</script>

<style lang="scss" scoped></style>
