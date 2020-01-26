<template>
  <div class="home">
    <v-container fluid>
      <v-row>
        <v-col class="banner_text" sm="12" md="6" lg="6">
          <span class="home_title-caption headline">{{ subtitle }}</span>
          <h1 class="home_title display-2">{{ title }}</h1>
        </v-col>
        <v-col class="banner_img" sm="12" md="6" lg="6">
          <img width="100%" :src="image" alt="">
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  data () {
    return {
      subtitle: 'welcome to airtimeflip',
      title: 'we make it easier for you to convert airtime to cash',
      image: require('../../assets/svg/skateboard.svg')
    }
  },
};
</script>

<style scoped>

.home {
  padding: 0 2vw;
}

.banner_text {
  padding-top: 15vh;
}

.banner_img {
  padding-top: 5vh;
}

</style>