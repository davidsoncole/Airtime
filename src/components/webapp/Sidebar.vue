<template>
  <v-card>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      app
      dark
    >
      <v-list-item v-for="profile in profiles" :key="profile.avatar">
        <v-list-item-avatar style="width: 45px; margin-top: 20px;">
          <img :src="profile.avatar">
        </v-list-item-avatar>

        <v-list-item-title class="pt-4"><v-img :src="profile.logo"></v-img></v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-list class="mt-5 pt-5">
        <v-list-item
          v-for="link in links"
          :key="link.title"
          router :to="link.route"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-link-variant</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
            <v-dialog
              v-model="dialog"
              width="500"
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  text
                  v-on="on"
                  class="text-capitalize share_btn"
                >
                  Share
                </v-btn>
              </template>

              <v-card>
                <v-card-title
                  class="headline"
                  primary-title
                >
                  Referral Link
                </v-card-title>

                <v-card-text>
                  <v-col cols="12">
                    <v-text-field
                      label="link"
                      outlined
                      readonly
                      value="http://www.airtimeflip.com/tekjfjf240jdf0008ndjndf07e-@jhjd"
                    ></v-text-field>
                  </v-col>
                  <div class="text-center">
                    <v-btn class="mx-4" fab small>
                    <v-icon>mdi-facebook</v-icon>
                    </v-btn>
                    <v-btn class="mx-4" fab small>
                      <v-icon>mdi-linkedin</v-icon>
                    </v-btn>
                    <v-btn class="mx-4" fab small>
                      <v-icon>mdi-whatsapp</v-icon>
                    </v-btn>
                    <v-btn class="mx-4" fab small>
                      <v-icon>mdi-twitter</v-icon>
                    </v-btn>
                    <v-btn class="mx-4" fab small>
                      <v-icon>mdi-google</v-icon>
                    </v-btn>
                  </div>
                </v-card-text>

                <v-card-actions >
                  
                </v-card-actions>
              </v-card>
            </v-dialog>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      
    </v-navigation-drawer>
  </v-card>
</template>


<script>
  export default {
    data () {
      return {
        drawer: true,
        profiles:[
          { avatar: require('../../assets/img/flip2.png'), logo: require('../../assets/img/flip3.png'), position: 'cooperative head'}
        ],
        links: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard-outline', route: '/webapp' },
          { title: 'Convert-Airtime', icon: 'mdi-cached', route: '/webapp/convert' },
          { title: 'Wallet', icon: 'mdi-wallet', route: '/webapp/wallet' },
          { title: 'Withdrawal', icon: 'mdi-cash-multiple', route: '/webapp/withdrawal'},
          { title: 'Transfer', icon: 'mdi-account-convert', route: '/webapp/transfer' },
          { title: 'Airtime Topup', icon: 'mdi-cellphone-android', route: '/webapp/airtime' },
          { title: 'Buy Data', icon: 'mdi-access-point-network', route: '/webapp/data'},
          { title: 'Pay Bills', icon: 'mdi-shopping', route: '/webapp/bills' },
          { title: 'History', icon: 'mdi-history', route: '/webapp/history' },
          { title: 'Settings', icon: 'mdi-settings-outline', route: '/webapp/settings' },
        ],
        mini: false,
      }
    },
  }
</script>

<style scoped>
.v-card {
  border-radius: 0px;
}

.v-application--is-ltr .v-list-item__avatar:first-child {
  margin-right: 14px;
}

.share_btn {
  padding: 0px !important;
  margin-left: -10px !important;
}

.share_btn:hover {
  background-color: rgba(0, 0, 0, .1)
}

</style>
