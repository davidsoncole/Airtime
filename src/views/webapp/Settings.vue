<template>
  <div class="settings">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-toolbar flat>
              <v-toolbar-title>Settings</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <div class="profile">
                <v-avatar style="width: 100px; height: 100px; margin-bottom: 10px;">
                  <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                  >
                </v-avatar>
              </div>
              <h3>Unogu Ikenna Davidson</h3>
              <span>unoguikenna@airtimeflip.com</span>
            </v-card-text>
            <v-card-text>
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>Profile</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-row>
                      <v-col md="6" lg="6">
                        <v-card flat>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-subtitle>Name</v-list-item-subtitle>
                              <v-list-item-title>Unogu Ikenna Davidson</v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-card>
                        <v-card flat>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-subtitle>Number Number</v-list-item-subtitle>
                              <v-list-item-title>08166092467</v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-card>
                      </v-col>
                      <v-col md="6" lg="6">
                        <v-card flat>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-subtitle>Date of Birth</v-list-item-subtitle>
                              <v-list-item-title>24 Nov 2019</v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-card>
                        <v-card flat>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-subtitle>Email</v-list-item-subtitle>
                              <v-list-item-title>Unoguikenna@airtimeflip.com</v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>Bank Account</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-card flat>
                      <v-list-item>
                        <v-list-item-content>
                          <h3>No bank account available</h3>
                        </v-list-item-content>
                      </v-list-item>
                      <v-card-actions>
                        <v-btn color="orange" class="white--text">Add New Bank Account</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>Notification</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-row>
                      <v-col md="6" lg="6">
                        <v-card flat>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-title>Transactions</v-list-item-title>
                              <v-list-item-subtitle>withdrawal and transfer</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-spacer></v-spacer>
                            <v-switch color="orange" flat v-model="switch1"></v-switch>
                          </v-list-item>
                        </v-card>
                        <v-card flat>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-title>Topups</v-list-item-title>
                              <v-list-item-subtitle>Airtime and data</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-spacer></v-spacer>
                            <v-switch color="orange" flat v-model="switch2"></v-switch>
                          </v-list-item>
                        </v-card>
                      </v-col>
                      <v-col md="6" lg="6">
                        <v-card flat>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-title>Newsletter</v-list-item-title>
                              <v-list-item-subtitle>Promotions and other information</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-spacer></v-spacer>
                            <v-switch color="orange" flat v-model="switch3"></v-switch>
                          </v-list-item>
                        </v-card>
                        <v-card flat>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-title>Push Notification</v-list-item-title>
                              <v-list-item-subtitle>Get information on new update and Promotions</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-spacer></v-spacer>
                            <v-switch color="orange" flat v-model="switch4"></v-switch>
                          </v-list-item>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>Security</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-row>
                      <v-col md="6" lg="6">
                        <v-card flat>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-title>Setup PIN</v-list-item-title>
                              <v-list-item-subtitle>This 4 digit pin is used to authorize all transactions</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-spacer></v-spacer>
                            <v-btn class="white--text" color="orange">Setup</v-btn>
                          </v-list-item>
                        </v-card>
                        <v-card flat>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-title>Reset PIN</v-list-item-title>
                              <v-list-item-subtitle>Forget your 4 digit pin? You can reset it now!</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-spacer></v-spacer>
                            <v-btn class="white--text" color="orange">Reset</v-btn>
                          </v-list-item>
                        </v-card>
                      </v-col>
                      <v-col md="6" lg="6">
                        <v-card flat>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-title>Reset Password</v-list-item-title>
                              <v-list-item-subtitle>To sign in, your password is required</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-spacer></v-spacer>
                            <v-btn class="white--text" color="orange">Reset</v-btn>
                          </v-list-item>
                        </v-card>
                        <v-card flat>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-title>Delete Account</v-list-item-title>
                              <v-list-item-subtitle>We do our best to give you a great experience we’ll be sad to see you leave us</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-spacer></v-spacer>
                            <v-btn class="white--text" color="orange">Delete</v-btn>
                          </v-list-item>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>Verification</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-row>
                      <v-col md="6" lg="6">
                        <v-card flat>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-title>Email Verification</v-list-item-title>
                              <v-list-item-subtitle>Add basic account security</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-spacer></v-spacer>
                            <v-checkbox color="success" v-model="checkbox1"></v-checkbox>
                          </v-list-item>
                        </v-card>
                        <v-card flat>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-title>Add Bank Account</v-list-item-title>
                              <v-list-item-subtitle>Add primary bank account</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-spacer></v-spacer>
                            <v-checkbox color="success" v-model="checkbox2"></v-checkbox>
                          </v-list-item>
                        </v-card>
                      </v-col>
                      <v-col md="6" lg="6">
                        <v-card flat>
                          <v-list-item>
                            <v-list-item-content>
                              <v-list-item-title>Add BVN Number</v-list-item-title>
                              <v-list-item-subtitle>Link BVN to your account</v-list-item-subtitle>
                            </v-list-item-content>
                            <v-spacer></v-spacer>
                            <v-checkbox color="success" v-model="checkbox3"></v-checkbox>
                          </v-list-item>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-text>
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
        switch1: true,
        switch2: false,
        switch3: true,
        switch4: false,
        checkbox1: true,
        checkbox2: true,
        checkbox3: false,
      }
    },
  }
</script>

<style scoped>

</style>