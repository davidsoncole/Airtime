<template>
  <div class="data">
    <v-container fluid>
      <v-row>
        <v-col md="8" lg="8">
          <v-card>
            <v-toolbar flat>
              <v-toolbar-title>Buy Data</v-toolbar-title>
            </v-toolbar>
            <v-tabs color="orange">
              <v-tab>
                Pay with Wallet
              </v-tab>
              <v-tab>
                Data PIN Recharge
              </v-tab>

              <v-tab-item>
                <v-card flat>
                  <v-form>
                    <v-card-text>
                      <v-row>
                        <v-col cols="12">
                          <p>Network</p>
                          <div class="cc-selector">
                            <input id="mtn" type="radio" name="credit-card" value="mtn" />
                            <label class="drinkcard-cc mtn" for="mtn"></label>
                            <input id="glo" type="radio" name="credit-card" value="glo" />
                            <label class="drinkcard-cc glo" for="glo"></label>
                            <input id="airtel" type="radio" name="credit-card" value="airtel" />
                            <label class="drinkcard-cc airtel" for="airtel"></label>
                            <input id="nine_mobile" type="radio" name="credit-card" value="nine_mobile" />
                            <label class="drinkcard-cc nine" for="nine_mobile"></label>
                          </div>
                        </v-col>
                        <v-col cols="12" md="6" lg="6">
                          <v-text-field
                            label="Mobile Number"
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6" lg="6"></v-col>
                        <v-col cols="12" md="6" lg="6">
                          <v-text-field
                            label="Select Plan"
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6" lg="6"></v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <v-btn class="white--text" color="orange" @click.stop="dialog = true">Proceed</v-btn>
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
                        <v-col cols="12">
                          <p>Network</p>
                          <div class="cc-selector">
                            <input id="mtn" type="radio" name="credit-card" value="mtn" />
                            <label class="drinkcard-cc mtn" for="mtn"></label>
                            <input id="glo" type="radio" name="credit-card" value="glo" />
                            <label class="drinkcard-cc glo" for="glo"></label>
                            <input id="airtel" type="radio" name="credit-card" value="airtel" />
                            <label class="drinkcard-cc airtel" for="airtel"></label>
                            <input id="nine_mobile" type="radio" name="credit-card" value="nine_mobile" />
                            <label class="drinkcard-cc nine" for="nine_mobile"></label>
                          </div>
                        </v-col>
                        <v-col cols="12" md="6" lg="6">
                          <v-text-field
                            label="Mobile Number"
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6" lg="6"></v-col>
                        <v-col cols="12" md="6" lg="6">
                          <v-text-field
                            label="Data PIN"
                            outlined
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6" lg="6"></v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <v-btn class="white--text" color="orange" @click="submit">Proceed</v-btn>
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
                  <h3>MTN Nigeria</h3>
                  <span>#00947845</span>
                </v-col>
                <v-col class="text-right" cols="6">
                  <h4 class="green--text">20GB</h4>
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
          <v-card-title class="headline">
            <v-icon>mdi-tablet-android</v-icon>
          </v-card-title>

          <v-card-text>
            <h4 class="green--text">2.5 GB</h4>
            <p class="caption">MTN Service</p>
            <v-text-field
            label="pin"
            hint="Enter your transaction pin"
            persistent-hint
            outlined
          ></v-text-field>
          </v-card-text>

          <v-card-actions>
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

.cc-selector input {
  margin: 0;
  padding: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.mtn {
  background-image: url(../../assets/svg/mtn_logo.svg);
}

.nine {
  background-image: url(../../assets/svg/9mobile.svg);
}

.airtel {
  background-image: url(../../assets/svg/airtel_logo.svg);
}

.glo {
  background-image: url(../../assets/svg/glo_logo.svg);
}

.cc-selector input:active +.drinkcard-cc {
  opacity: .9;
}

.cc-selector input:checked +.drinkcard-cc {
  -webkit-filter: none;
  -moz-filter: none;
  filter: none;
}

.drinkcard-cc {
  cursor: pointer;
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
  width: 100px;
  height: 70px;
  -webkit-transition: all 100ms ease-in;
  -moz-transition: all 100ms ease-in;
  transition: all 100ms ease-in;
  -webkit-filter: brightness(1.8) grayscale(1) opacity(.7);
  -moz-filter: brightness(1.8) grayscale(1) opacity(.7);
  filter: brightness(1.8) grayscale(1) opacity(.7);
}

.drinkcard-cc:hover {
  -webkit-filter: brightness(1.2) grayscale(.5) opacity(.9);
  -moz-filter: brightness(1.2) grayscale(.5) opacity(.9);
  filter: brightness(1.2) grayscale(.5) opacity(.9);
}


/* Extras */

a:visited {
  color: #888
}

a {
  color: #444;
  text-decoration: none;
}

p {
  margin-bottom: 1em;
}
.v-card {
  border-radius: 10px;
}
</style>