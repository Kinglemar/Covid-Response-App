<template>
  <div>
    <h1 style="font-size: 28px; padding: 1rem">Trending news</h1>
    <div class="size">
      <div>
        <div class="gallery" v-if="!preloader">
          <NewsCard
            v-for="(info, index) in news"
            :key="index"
            :jpegUrl="info?.media"
            :title="info?.title"
            :date="info?.published_date"
            :content="info?.summary"
          />
        </div>


          <div class="gallery" v-if="preloader">
            <Skeleton v-for="(loader, index) in loaders" :key="index" />
          </div>
      </div>
    </div>

    <div class="mt-5" v-if="true">
      <b-pagination
        @change="nextPage"
        pills
        align="center"
        :total-rows="rows"
        v-model="page"
        :per-page="perPage"
        :limit="5"
      ></b-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NewsCard from "../components/NewsCard.vue";
import Skeleton from "../components/Skeleton.vue";
export default {
  name: "Guidelines",
  components: { NewsCard, Skeleton },
  data() {
    return {
      news: [],
      preloader: true,
      loaders: [1, 2, 3, 5],
      page: 1,
      perPage: 10,
      rows: 220,
      currentPage: 1,
    };
  },
  mounted() {
    this.getLatestNews();
  },
  methods: {
    async getLatestNews() {
      this.preloader = true;
      let url = `https://coronavirus-smartable.p.rapidapi.com/news/v1/US/${this.currentPage}`;

      const options = {
        method: "GET",
        url: "https://covid-19-news.p.rapidapi.com/v1/covid",
        params: {
          q: "covid",
          lang: "en",
          media: "True",
          page: this.currentPage,
          page_size: 20
        },
        headers: {
          "X-RapidAPI-Key":
            "45e2dfa1camsh523c84837050448p17a1d2jsn6a6b6c138e88",
          "X-RapidAPI-Host": "covid-19-news.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);
        console.log(response.data?.articles);
        this.news = response?.data?.articles || []
        this.preloader = false;
      } catch (error) {
        console.error(error);
        this.preloader = false
      }
    },

    nextPage(e) {
      this.currentPage = e;
      this.getLatestNews();
    },
  },
};
</script>

<style scoped>
.gallery {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}

h1 {
  font-size: 24px;
}

.size {
  max-width: 1024px;
  margin: 0 auto;
  min-height: 30rem;
}
</style>
