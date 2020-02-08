<template>
  <div class="airtime">
    <v-container fluid>
      <v-row>
        <v-col md="8" lg="8">
          <v-card>
            <v-toolbar flat>
              <v-toolbar-title>Purchase Airtime</v-toolbar-title>
            </v-toolbar>
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
                      label="Amount"
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
                  <h4 class="green--text">N 1,000.00</h4>
                  <span>Nov 06</span>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card flat class="text-center">
              <v-btn color="orange" text>View more</v-btn>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
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