<template>
  <div>
    <v-toolbar flat>
      <v-toolbar-title>
          <img src="../../assets/img/airtimefllip-w.png" alt="airtimeflip-logo">
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn v-for="link in links" :key="link.text" route :to="link.route" text>{{ link.text}}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>

export default {
    data() {
        return {
            links: [
                {text: 'Home', route: '/'},
                {text: 'About', route: '/about'},
                {text: 'Faq', route: '/faq'},
                {text: 'Charges', route: '/charges'},
                {text: 'Services', route: '/services'},
                {text: 'Datapin', route: '/datapin'},
                {text: 'Contact', route: '/contact'},
                {text: 'Sign in', route: '/signin'},
            ]
        }
    }
  
};
</script>
