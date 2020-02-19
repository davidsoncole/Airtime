<template>
  <div class="withdrawal">
    <v-container fluid>
      <v-row>
        <v-col md="8" lg="8">
          <v-card>
            <v-toolbar flat>
              <v-toolbar-title>Issue Withdrawal</v-toolbar-title>
            </v-toolbar>
            <v-tabs color="orange">
              <v-tab>
                My Bank
              </v-tab>
              <v-tab>
                To another Bank
              </v-tab>

              <v-tab-item>
                <v-card flat>
                  <v-form>
                    <v-card-text>
                      <v-row>
                        <v-col cols="12" md="6" lg="6">
                          <v-text-field
                            label="Account Number"
                            outlined
                            hint="Enter your account number"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6" lg="6">
                          <v-text-field
                            label="Bank Name"
                            outlined
                            hint="Enter your bank name"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6" lg="6">
                          <v-text-field
                            label="Amount"
                            outlined
                            hint="Enter the amount you want to transfer"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col col="12">
                          <v-btn class="white--text" color="orange" @click.stop="dialog = true">Proceed</v-btn>
                          <br> <br>
                          <p>&#x20A6; 50 charge on every withdrawal</p>
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
                            label="Account Number"
                            outlined
                            hint="Enter the account you want to transfer to"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6" lg="6">
                          <v-text-field
                            label="Bank Name"
                            outlined
                            hint="Enter the bank name"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6" lg="6">
                          <v-text-field
                            label="Amount"
                            outlined
                            hint="Enter the amount you want to transfer"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col col="12">
                          <v-btn class="white--text" color="orange" @click.stop="dialog = true">Proceed</v-btn>
                          <br> <br>
                          <p>&#x20A6; 50 charge on every withdrawal</p>
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
                  <h4 class="green--text">N 10,000.00</h4>
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
      <v-dialog
        v-model="dialog"
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline"><v-icon>mdi-lock-outline</v-icon></v-card-title>

          <v-card-text>
            <h4 class="green--text">N 10,000</h4>
            <span class="caption">Femi Adebayo Sunday</span>
            <p class="caption">First Bank</p>
            <v-text-field
            label="pin"
            hint="Enter your transaction pin"
            persistent-hint
            outlined
          ></v-text-field>
          </v-card-text>

          <v-card-actions class="text-center">
            <v-btn
              color="orange"
              class="white--text"
              @click="submit"
            >
              Send
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
    <div class="spacing"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
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