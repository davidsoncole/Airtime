<template>
  <div class="bill">
    <v-container>
      <v-row>
        <v-col md="8" lg="8">
          <v-card>
            <v-toolbar flat>
              <v-toolbar-title>Pay Bills</v-toolbar-title>
            </v-toolbar>
            <v-tabs color="orange">
              <v-tab>
                Cable Payment
              </v-tab>
              <v-tab>
                Internet Subscription
              </v-tab>
              <v-tab>
                Power Bill
              </v-tab>

              <v-tab-item>
                <v-card flat>
                  <v-form>
                    <v-card-text>
                      <p>Select Provider</p>
                      <div class="form__checks">
                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="dstv" name="radio" value="dstv" checked="checked">
                            <label class="form__checks-label" for="dstv">DSTV</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="boxoffice" name="radio" value="boxoffice">
                            <label class="form__checks-label" for="boxoffice">Box Office</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="startime" name="radio" value="startime">
                            <label class="form__checks-label" for="startime">Startime</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="gotv" name="radio" value="gotv">
                            <label class="form__checks-label" for="gotv">GOTV</label>
                          </div>
                      </div>
                      <br> <br>

                      <v-row>
                        <v-col cols="12" md="6" lg="6">
                          <v-text-field
                            label="Input Smart Card Number"
                            outlined
                          ></v-text-field>
                        </v-col>
                      </v-row>

                      <p>Select Bill Amount</p>
                      <div id="bill_one" class="form__checks">
                        <div class="form__group">
                          <input class="form__checks-input" type="radio" id="nova_1day" name="radio" value="nova-1day">
                          <label class="form__checks-label" for="nova_1day">NOVA - 1Day</label>
                        </div>

                        <div class="form__group">
                          <input class="form__checks-input" type="radio" id="nova_1week" name="radio" value="nova-1week">
                          <label class="form__checks-label" for="nova_1week">NOVA - 1Week</label>
                        </div>

                        <div class="form__group">
                          <input class="form__checks-input" type="radio" id="nova_1month" name="radio" value="nova-1month">
                          <label class="form__checks-label" for="nova_1month">NOVA - 1Month</label>
                        </div>

                        <div class="form__group">
                          <input class="form__checks-input" type="radio" id="basic_1day" name="radio" value="basic-1day">
                          <label class="form__checks-label" for="basic_1day">BASIC - 1Day</label>
                        </div>

                        <div class="form__group">
                          <input class="form__checks-input" type="radio" id="nova_1week" name="radio" value="nova-1week">
                          <label class="form__checks-label" for="nova_1week">BASIC - 1Week</label>
                        </div>
                      </div>
                      
                      <div id="bill_two" class="form__checks hide">
                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1day" name="radio" value="nova-1day">
                            <label class="form__checks-label" for="nova_1day">NOVA2 - 1Day</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1week" name="radio" value="nova-1week">
                            <label class="form__checks-label" for="nova_1week">NOVA2 - 1Week</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1month" name="radio" value="nova-1month">
                            <label class="form__checks-label" for="nova_1month">NOVA2 - 1Month</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="basic_1day" name="radio" value="basic-1day">
                            <label class="form__checks-label" for="basic_1day">BASIC2 - 1Day</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1week" name="radio" value="nova-1week">
                            <label class="form__checks-label" for="nova_1week">BASIC2 - 1Week</label>
                          </div>
                      </div>
                      <div id="bill_three" class="form__checks hide">
                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1day" name="radio" value="nova-1day">
                            <label class="form__checks-label" for="nova_1day">NOVA - 1Day</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1week" name="radio" value="nova-1week">
                            <label class="form__checks-label" for="nova_1week">NOVA - 1Week</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1month" name="radio" value="nova-1month">
                            <label class="form__checks-label" for="nova_1month">NOVA - 1Month</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="basic_1day" name="radio" value="basic-1day">
                            <label class="form__checks-label" for="basic_1day">BASIC - 1Day</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1week" name="radio" value="nova-1week">
                            <label class="form__checks-label" for="nova_1week">BASIC - 1Week</label>
                          </div>
                      </div>
                      <div id="bill_four" class="form__checks hide">
                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1day" name="radio" value="nova-1day">
                            <label class="form__checks-label" for="nova_1day">NOVA - 1Day</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1week" name="radio" value="nova-1week">
                            <label class="form__checks-label" for="nova_1week">NOVA - 1Week</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1month" name="radio" value="nova-1month">
                            <label class="form__checks-label" for="nova_1month">NOVA - 1Month</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="basic_1day" name="radio" value="basic-1day">
                            <label class="form__checks-label" for="basic_1day">BASIC - 1Day</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1week" name="radio" value="nova-1week">
                            <label class="form__checks-label" for="nova_1week">BASIC - 1Week</label>
                          </div>
                      </div>
                      <br> <br>
                      <v-row>
                        <v-col cols="12">
                          <v-btn class="white--text" color="orange" @click="submit">Proceed</v-btn>
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
                      <p>Select Provider</p>
                      <div class="form__checks">
                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="dstv" name="radio" value="dstv" checked="checked">
                            <label class="form__checks-label" for="dstv">DSTV</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="boxoffice" name="radio" value="boxoffice">
                            <label class="form__checks-label" for="boxoffice">Box Office</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="startime" name="radio" value="startime">
                            <label class="form__checks-label" for="startime">Startime</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="gotv" name="radio" value="gotv">
                            <label class="form__checks-label" for="gotv">GOTV</label>
                          </div>
                      </div>
                      <br> <br>

                      <v-row>
                        <v-col cols="12" md="6" lg="6">
                          <v-text-field
                            label="Input Smart Card Number"
                            outlined
                          ></v-text-field>
                        </v-col>
                      </v-row>

                      <p>Select Bill Amount</p>
                      <div id="bill_one" class="form__checks">
                        <div class="form__group">
                          <input class="form__checks-input" type="radio" id="nova_1day" name="radio" value="nova-1day">
                          <label class="form__checks-label" for="nova_1day">NOVA - 1Day</label>
                        </div>

                        <div class="form__group">
                          <input class="form__checks-input" type="radio" id="nova_1week" name="radio" value="nova-1week">
                          <label class="form__checks-label" for="nova_1week">NOVA - 1Week</label>
                        </div>

                        <div class="form__group">
                          <input class="form__checks-input" type="radio" id="nova_1month" name="radio" value="nova-1month">
                          <label class="form__checks-label" for="nova_1month">NOVA - 1Month</label>
                        </div>

                        <div class="form__group">
                          <input class="form__checks-input" type="radio" id="basic_1day" name="radio" value="basic-1day">
                          <label class="form__checks-label" for="basic_1day">BASIC - 1Day</label>
                        </div>

                        <div class="form__group">
                          <input class="form__checks-input" type="radio" id="nova_1week" name="radio" value="nova-1week">
                          <label class="form__checks-label" for="nova_1week">BASIC - 1Week</label>
                        </div>
                      </div>
                      
                      <div id="bill_two" class="form__checks hide">
                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1day" name="radio" value="nova-1day">
                            <label class="form__checks-label" for="nova_1day">NOVA2 - 1Day</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1week" name="radio" value="nova-1week">
                            <label class="form__checks-label" for="nova_1week">NOVA2 - 1Week</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1month" name="radio" value="nova-1month">
                            <label class="form__checks-label" for="nova_1month">NOVA2 - 1Month</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="basic_1day" name="radio" value="basic-1day">
                            <label class="form__checks-label" for="basic_1day">BASIC2 - 1Day</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1week" name="radio" value="nova-1week">
                            <label class="form__checks-label" for="nova_1week">BASIC2 - 1Week</label>
                          </div>
                      </div>
                      <div id="bill_three" class="form__checks hide">
                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1day" name="radio" value="nova-1day">
                            <label class="form__checks-label" for="nova_1day">NOVA - 1Day</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1week" name="radio" value="nova-1week">
                            <label class="form__checks-label" for="nova_1week">NOVA - 1Week</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1month" name="radio" value="nova-1month">
                            <label class="form__checks-label" for="nova_1month">NOVA - 1Month</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="basic_1day" name="radio" value="basic-1day">
                            <label class="form__checks-label" for="basic_1day">BASIC - 1Day</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1week" name="radio" value="nova-1week">
                            <label class="form__checks-label" for="nova_1week">BASIC - 1Week</label>
                          </div>
                      </div>
                      <div id="bill_four" class="form__checks hide">
                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1day" name="radio" value="nova-1day">
                            <label class="form__checks-label" for="nova_1day">NOVA - 1Day</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1week" name="radio" value="nova-1week">
                            <label class="form__checks-label" for="nova_1week">NOVA - 1Week</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1month" name="radio" value="nova-1month">
                            <label class="form__checks-label" for="nova_1month">NOVA - 1Month</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="basic_1day" name="radio" value="basic-1day">
                            <label class="form__checks-label" for="basic_1day">BASIC - 1Day</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1week" name="radio" value="nova-1week">
                            <label class="form__checks-label" for="nova_1week">BASIC - 1Week</label>
                          </div>
                      </div>
                      <br> <br>
                      <v-row>
                        <v-col cols="12">
                          <v-btn class="white--text" color="orange" @click="submit">Proceed</v-btn>
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
                      <p>Select Provider</p>
                      <div class="form__checks">
                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="dstv" name="radio" value="dstv" checked="checked">
                            <label class="form__checks-label" for="dstv">DSTV</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="boxoffice" name="radio" value="boxoffice">
                            <label class="form__checks-label" for="boxoffice">Box Office</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="startime" name="radio" value="startime">
                            <label class="form__checks-label" for="startime">Startime</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="gotv" name="radio" value="gotv">
                            <label class="form__checks-label" for="gotv">GOTV</label>
                          </div>
                      </div>
                      <br> <br>

                      <v-row>
                        <v-col cols="12" md="6" lg="6">
                          <v-text-field
                            label="Input Smart Card Number"
                            outlined
                          ></v-text-field>
                        </v-col>
                      </v-row>

                      <p>Select Bill Amount</p>
                      <div id="bill_one" class="form__checks">
                        <div class="form__group">
                          <input class="form__checks-input" type="radio" id="nova_1day" name="radio" value="nova-1day">
                          <label class="form__checks-label" for="nova_1day">NOVA - 1Day</label>
                        </div>

                        <div class="form__group">
                          <input class="form__checks-input" type="radio" id="nova_1week" name="radio" value="nova-1week">
                          <label class="form__checks-label" for="nova_1week">NOVA - 1Week</label>
                        </div>

                        <div class="form__group">
                          <input class="form__checks-input" type="radio" id="nova_1month" name="radio" value="nova-1month">
                          <label class="form__checks-label" for="nova_1month">NOVA - 1Month</label>
                        </div>

                        <div class="form__group">
                          <input class="form__checks-input" type="radio" id="basic_1day" name="radio" value="basic-1day">
                          <label class="form__checks-label" for="basic_1day">BASIC - 1Day</label>
                        </div>

                        <div class="form__group">
                          <input class="form__checks-input" type="radio" id="nova_1week" name="radio" value="nova-1week">
                          <label class="form__checks-label" for="nova_1week">BASIC - 1Week</label>
                        </div>
                      </div>
                      
                      <div id="bill_two" class="form__checks hide">
                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1day" name="radio" value="nova-1day">
                            <label class="form__checks-label" for="nova_1day">NOVA2 - 1Day</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1week" name="radio" value="nova-1week">
                            <label class="form__checks-label" for="nova_1week">NOVA2 - 1Week</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1month" name="radio" value="nova-1month">
                            <label class="form__checks-label" for="nova_1month">NOVA2 - 1Month</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="basic_1day" name="radio" value="basic-1day">
                            <label class="form__checks-label" for="basic_1day">BASIC2 - 1Day</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1week" name="radio" value="nova-1week">
                            <label class="form__checks-label" for="nova_1week">BASIC2 - 1Week</label>
                          </div>
                      </div>
                      <div id="bill_three" class="form__checks hide">
                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1day" name="radio" value="nova-1day">
                            <label class="form__checks-label" for="nova_1day">NOVA - 1Day</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1week" name="radio" value="nova-1week">
                            <label class="form__checks-label" for="nova_1week">NOVA - 1Week</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1month" name="radio" value="nova-1month">
                            <label class="form__checks-label" for="nova_1month">NOVA - 1Month</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="basic_1day" name="radio" value="basic-1day">
                            <label class="form__checks-label" for="basic_1day">BASIC - 1Day</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1week" name="radio" value="nova-1week">
                            <label class="form__checks-label" for="nova_1week">BASIC - 1Week</label>
                          </div>
                      </div>
                      <div id="bill_four" class="form__checks hide">
                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1day" name="radio" value="nova-1day">
                            <label class="form__checks-label" for="nova_1day">NOVA - 1Day</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1week" name="radio" value="nova-1week">
                            <label class="form__checks-label" for="nova_1week">NOVA - 1Week</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1month" name="radio" value="nova-1month">
                            <label class="form__checks-label" for="nova_1month">NOVA - 1Month</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="basic_1day" name="radio" value="basic-1day">
                            <label class="form__checks-label" for="basic_1day">BASIC - 1Day</label>
                          </div>

                          <div class="form__group">
                            <input class="form__checks-input" type="radio" id="nova_1week" name="radio" value="nova-1week">
                            <label class="form__checks-label" for="nova_1week">BASIC - 1Week</label>
                          </div>
                      </div>
                      <br> <br>
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
          <v-card class="overview">
            <v-list-item three-line>
              <v-list-item-content class="text-right">
                <p>NOVA-1Day</p>
                <span class="caption grey--text">Plan</span>
                <br>
                <p>&#x20A6; 20,000.00</p>
                <span class="caption grey--text">Amount</span>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-icon color="orange">mdi-qrcode</v-icon>
                  <span> Payment Method</span>
                </v-col>
                <v-col class="text-right" cols="12">
                  <span>Naira</span>
                </v-col>
                <v-col cols="12">
                  <v-icon color="orange">mdi-checkbox-multiple-marked</v-icon>
                  <span> Available</span>
                </v-col>
                <v-col class="text-right" cols="12">
                  <span>Instantly</span>
                </v-col>
                <v-col cols="12">
                  <v-icon color="orange">mdi-cart</v-icon>
                  <span> Purchasing for</span>
                </v-col>
                <v-col class="text-right" cols="12">
                  <span>13293903984</span>
                </v-col>
              </v-row>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-row>
                <v-col cols="6">
                  <span>Total Payout</span>
                </v-col>
                <v-col cols="6" class="text-right">
                  <span>&#x20A6; 20,000.00</span>
                </v-col>
              </v-row>
            </v-card-actions>
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
  };
</script>

<style scoped>

@media only screen and (max-width: 959px) {

  .spacing {
    height: 10vh;
  }

  .form__checks .form__group {
    margin-right: .2rem;
    padding: .5rem 0;
    display: inline;
  }


}

@media only screen and (min-width: 959px) {

  .form__checks .form__group {
    margin-right: 1rem;
    display: inline;
}


}

.overview {
  padding: 10px;
}

.form__checks .form__checks-label {
    display: inline-block;
    padding: 10px;
    border: solid .1rem gray;
    border-radius: .8rem;
    transition: all 0.3s;
    color: gray;
    font-size: .8rem;
}

.form__checks .form__checks-input[type="radio"] {
    display: none;
    padding-top: 5px;
    padding-bottom: 5px;
}

.form__checks .form__checks-input[type="radio"]:checked + label {
    border: solid 2px orange;
    color: orange;
}

.hide {
  display: none;
}
</style>