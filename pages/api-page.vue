<template>
  <div>

  </div>
</template>

<script >
import axios from 'axios'
export default {

  created() {
    games = response.data
  },

  asyncData ({ params, error }) {
    return axios.get(`https://fakestoreapi.com/products/`)
      .then((res) => {
        return {
          games: res.data
        }
      })
      .catch((e) => {
        console.log(e)
      })
  },

  data() {
    return {
      games: []
    }
  },
}
</script>

<style>

</style>
