<template>
  <div>
    <h1 style="font-size: 28px; padding: 1rem;">Trending news</h1>
    <div class="size">
      <div class="gallery">

          <NewsCard v-if="!preloader" v-for="(info, index) in news" :key="index" :jpegUrl="info.urlToImage" :title="info.title"
            :date="info.pubDate" :content="info.content" />


          <Skeleton v-if="preloader" v-for="(loader, index) in loaders" :key="index" />
      </div>
    </div>

    <b-pagination @change="nextPage" pills align="center" :total-rows="rows" v-model="page" :per-page="perPage"
      :limit="5"></b-pagination>
  </div>
</template>

<script>
import axios from 'axios'
import NewsCard from '../components/NewsCard.vue'
import Skeleton from '../components/Skeleton.vue'
export default {
  name: 'Guidelines',
  components: { NewsCard, Skeleton },
  data() {
    return {
      news: [],
      preloader: true,
      loaders: [1, 2 ,3, 5],
      page: 1,
      perPage: 10,
      rows: 220,
      currentPage: 1
    }
  },
  mounted() {
    this.getLatestNews()
  },
  methods: {
    async getLatestNews() {
      this.preloader = true
      let url = `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-coronavirus-news/${this.currentPage}`

      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '45e2dfa1camsh523c84837050448p17a1d2jsn6a6b6c138e88',
          'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
        }
      };
      let response = await axios(url, options)
      console.log(response.data.news)
      this.news = response.data.news

      this.preloader = false
    },

    nextPage(e) {
      this.currentPage = e
      this.getLatestNews()
    }
  }
}
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