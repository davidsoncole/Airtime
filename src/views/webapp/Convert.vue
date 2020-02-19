<template>
  <div class="convert">
    <div class="text-center" style="padding: 0px;">
      <h2>Convert Airtime</h2>
      <span>Vel odio volutpat nec sodales luctus torquent. Sit vitae dolor.</span>
      <div style="padding: 0px;">
        <v-stepper v-model="e1" class="elevation-0" style="padding: 0px;">
          <v-stepper-header class="elevation-0" tyle="padding: 0px;">
            <v-stepper-step color="orange" :complete="e1 > 1" step="1"></v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step color="orange" :complete="e1 > 2" step="2"></v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step color="orange" :complete="e1 > 3" step="3"></v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step color="orange" step="4"></v-stepper-step>
          </v-stepper-header>

          <v-stepper-items>
            <v-form action="">
            <v-stepper-content step="1">
              <h3>Select Network</h3>
              <p>Commodo venenatis eu, semper sit justo curabitur eleifend, pede lacus, dui enim mauris convallis vitae hdujha udjjd idd nullam.</p>
              <v-card
                class="mb-12 form_box"
                flat
              >
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
              </v-card>

              <v-btn
                color="orange"
                class="white--text"
                @click="e1 = 2"
              >
                Continue
              </v-btn>

              <v-btn text>Cancel</v-btn>
            </v-stepper-content>

            <v-stepper-content step="2">
              <h3>Amount</h3>
              <p>Commodo venenatis eu, semper sit justo curabitur eleifend, pede lacus, dui enim mauris convallis vitae hdujha udjjd idd nullam.</p>
              <v-card
                class="mb-12 form_box"
                flat
              >
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    placeholder="Enter the amount"
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>
              </v-card>

              <v-btn
                color="orange"
                class="white--text"
                @click="e1 = 3"
              >
                Continue
              </v-btn>

              <v-btn text @click="e1 = 1">Cancel</v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <h3>Amount to receive</h3>
              <p>Commodo venenatis eu, semper sit justo curabitur eleifend, pede lacus, dui enim mauris convallis vitae hdujha udjjd idd nullam.</p>
              <v-card
                class="mb-12 form_box"
                flat
              >
              <span class="orange--text headline">0.05% </span> <span class="green--text headline">&#x20A6; 4000</span>
              </v-card>

              <v-btn
                color="orange"
                class="white--text"
                @click="e1 = 4"
              >
                Continue
              </v-btn>

              <v-btn text @click="e1 = 2">Cancel</v-btn>
            </v-stepper-content>

            <v-stepper-content step="4">
              <h3>Mobile Number</h3>
              <p>Commodo venenatis eu, semper sit justo curabitur eleifend, pede lacus, dui enim mauris convallis vitae hdujha udjjd idd nullam.</p>
              <v-card
                class="mb-12 form_box"
                flat
              >
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    placeholder="Enter the mobile number"
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>
              </v-card>

              <v-btn
                color="orange"
                class="white--text"
                @click.stop="dialog = true"
              >
                Finish
              </v-btn>

              <v-btn text @click="e1 = 3">Cancel</v-btn>
            </v-stepper-content>
            </v-form>
          </v-stepper-items>
        </v-stepper>
      </div>
    </div>
    
    <v-dialog
        v-model="dialog"
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline green--text"><v-icon size="40px;">mdi-refresh</v-icon></v-card-title>

          <v-card-text>
            <h4 class="green--text">N 10,000</h4>
            <p class="caption">MTN Service</p>
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
            >
              Send
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    <div class="spacing"></div>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        e1: 0,
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

@media only screen and (min-width: 959px) {

  .form_box {
    margin-left: 20vw;
    margin-right: 20vw;
  }

}

.convert {
  margin: 5vw 0px;
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
div {padding: 1em;}
</style>