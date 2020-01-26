<template>
  <v-footer
    padless
    absolute
  >
    <v-card
      flat
      tile
      class="text-center"
      width="100%"
    >
      <v-card-text class="social_icon">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-2"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text>
        <span>Copyright airtimeflip &#169;</span> {{ new Date().getFullYear() }} — <span>All rights reserved</span>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<style scoped>

.social_icon {
  padding: 0 !important;
}

</style>