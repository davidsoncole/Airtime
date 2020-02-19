<template>
  <div class="wallet">
    <v-container fluid>
      <v-row>
        <v-col md="8" lg="8">
          <v-card>
            <v-toolbar flat>
              <v-toolbar-title>Wallet</v-toolbar-title>
            </v-toolbar>
            <v-tabs color="orange">
              <v-tab>
                Bank Transfer
              </v-tab>
              <v-tab>
                ATM Card
              </v-tab>

              <v-tab-item>
                <v-card flat>
                  <v-form>
                    <v-card-text>
                      <v-row>
                        <v-col cols="12" md="6" lg="6">
                          <v-select
                            :items="banks.bank_name"
                            label="Bank Name"
                            outlined
                          ></v-select>
                        </v-col>
                        <v-col cols="12" md="6" lg="6"></v-col>
                        <v-col cols="12" md="6" lg="6">
                          <v-text-field
                            label="Amount"
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6" lg="6"></v-col>
                        <v-col cols="12" md="6" lg="6">
                          <v-text-field
                            label="4 Digit PIN"
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6" lg="6"></v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <v-btn class="white--text" color="orange">Proceed</v-btn>
                          <br> <br>
                          <span>1.5% will be charged for this transaction</span>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-form>
                </v-card>
              </v-tab-item>
              <v-tab-item>
                <v-card flat>
                  <v-form>
                    <v-card-text>
                      <v-row>
                        <v-col cols="12" md="6" lg="6">
                          <v-text-field
                            label="Bank Name"
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6" lg="6">
                          <v-text-field
                            label="ATM Number"
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6" lg="6">
                          <v-text-field
                            label="Amount"
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6" lg="6">
                          <v-text-field
                            label="Card Expiring Date"
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6" lg="6">
                          <v-text-field
                            label="4 Digit PIN"
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6" lg="6">
                          <v-text-field
                            label="CCV"
                            outlined
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <v-btn class="white--text" color="orange">Proceed</v-btn>
                          <br> <br>
                          <span>or Fund with Airtime</span>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-form>
                </v-card>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </v-col>
        <v-col md="4" lg="4">
          <v-card class="mx-auto">
            <v-list-item three-line>
              <v-list-item-content class="text-right">
                <v-list-item-title class="headline mb-1">&#x20A6; {{ user.wallet }}</v-list-item-title>
                <v-list-item-subtitle class="orange--text">Available Balance</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
          <br>

          <v-card>
            <v-toolbar flat>
              <v-toolbar-title>Recent Transactions</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <h3>Bank Transfer</h3>
                  <span>#00947845</span>
                </v-col>
                <v-col class="text-right" cols="6">
                  <h4 class="green--text">&#x20A6; 10,000.00</h4>
                  <span>Nov 06</span>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card flat class="text-center">
              <v-btn color="orange" route to="/webapp/history" text>View more</v-btn>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div class="spacing"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    computed: {
      user() {
        return this.$store.state.user;
      },
      banks() {
        return this.$store.state.banks;
      }
    },
  }
</script>


<style scoped>

@media only screen and (max-width: 959px) {

  .spacing {
    height: 10vh;
  }

}

.v-card {
  border-radius: 10px;
}
</style>