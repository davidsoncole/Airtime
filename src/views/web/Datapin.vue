<template>
  <div class="datapin">
    <v-container>
      <v-row>
        <v-col sm="12" md="8" lg="8" class="datapin_note">
          <h2 class="main_title display-1">{{ title }}</h2>
          <br>
          <div class="datapin_text">
                <p class="data_text body-1 font-weight-light">{{ datatext }}</p>
                <p class="data_link body-1 font-weight-light">{{ linktext }}</p>
          </div>
        </v-col>
        <v-col sm="12" md="4" lg="4">
          <v-card>
            <v-toolbar flat>
              <v-toolbar-title>Data PIN</v-toolbar-title>
            </v-toolbar>
              <v-form>
                <v-container fluid>
                  <v-row>
                    <v-col cols="12">
                      <v-select
                      :items="items"
                      label="Select Network"
                      outlined
                      ></v-select>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                          v-model="datapin"
                          label="Data PIN"
                          outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                          v-model="number"
                          label="Phone Number"
                          outlined
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-btn class="mr-4 white--text" color="orange" @click="submit">Recharge</v-btn>
                      <br> <br>
                      <span>Check your data balance *233*1#</span>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  data () {
    return {
        title: 'Lorem ipsum dolor sit amet, Data PIN',
        datatext: 'Lorem ipsum dolor sit amet, ipsum pulvinar suscipit, etiam interdum mattis eget nulla, duis ultricies consectetuer tellus justo, vel odio volutpat nec sodales luctus torquent. Sit vitae dolor. Massa wisi tellus pellentesque tortor.',
        linktext: 'Become a merchant',
        items: ['MTN', 'GLO', '9mobile', 'Airtel'],
    }
  },
};
</script>

<style>

.datapin {
  padding-top: 5vh;
  padding-bottom: 20vh; 
}

.datapin_note {
  padding-top: 15vh;
}

</style>