<template>
  <div class="dashboard">
    <v-container fluid>
      <v-row>
        <v-col md="8" lg="8">
          <v-card
            class="mx-auto complete_note"
          >
            <v-list-item three-line>
              <v-list-item-content>
                <v-row>
                  <v-col cols="8">
                    <v-list-item-title class="title mb-1">Welcome Unogu</v-list-item-title>
                    <v-list-item-subtitle class="body-2">Lorem ipsum dolor sit amet, ipsum pulvinar suscipit, etiam interdum mattis eget nulla, duis ultricies consectetuer tellus justo, vel odio volutpat nec sodales luctus torquent. Sit vitae dolor.</v-list-item-subtitle>
                  </v-col>
                  <v-col cols="4">
                    <img class="complete_img" src="../../assets/svg/finish_line.svg" alt="">
                  </v-col>
                </v-row>
              </v-list-item-content>
            </v-list-item>
          </v-card>
          <v-row>
            <v-col md="4" lg="4" v-for="card in cards" :key="card.icon">
              <v-card
                :color="card.color"
              >
                <v-card-text class="white--text">
                  <v-row>
                    <v-col cols="4">
                      <v-btn
                        class="mx-2 overview"
                        icon
                      >
                        <v-icon :color="card.color" size="24px">{{ card.icon }}</v-icon>
                      </v-btn>
                    </v-col>
                    <v-col class="text-right" cols="8">
                      <h3>{{ card.number }}</h3>
                      <span class="body-2">{{ card.label }}</span>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          
        </v-col>
        <v-col md="4" lg="4">
          <v-card
            class="mx-auto complete_note"
          >
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="display-1 font-weight-medium mb-1"><span>&#x20A6;</span> 35,506.50</v-list-item-title>
                <v-list-item-subtitle>Available Balance</v-list-item-subtitle>
                  <v-card-actions>
                    <v-row>
                      <v-col cols="4"
                      v-for="link in links"
                      :key="link.icon"
                      class="text-center"
                    >
                      <v-btn
                        class="mx-2 quicky"
                        icon
                      >
                        <v-icon size="24px" color="white">{{ link.icon }}</v-icon>
                      </v-btn>
                      <p class="body-2">{{ link.label }}</p>
                    </v-col>
                    </v-row>
                  </v-card-actions>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
        <v-col md="8" lg="8">
          <v-row>
            <v-col md="5" lg="5">
              <v-card class="security">
                <v-card-text>
                  <div>
                    <v-icon class="overview_bar" size="24px">mdi-lock-outline</v-icon>
                  </div>
                </v-card-text>

                <v-card-actions class="secritybtn">
                  <v-btn
                    color="white"
                    class="blue--text text-capitalize"
                  >
                    Add Funds
                    <v-icon class="iconright">mdi-chevron-right</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col md="7" lg="7">
              <v-card class="flipbox">
                <v-row>
                  <v-col cols="6">
                    <img class="flipimg" src="../../assets/svg/i_can_fly.svg" alt="">
                  </v-col>
                  <v-col cols="6">
                    <h3 class="orange--text">Flip airtime to cash</h3>
                    <p class="body-2">A quick and easy way to convert your airtime to cash</p>
                    <v-btn
                      color="orange"
                      class="white--text text-capitalize"
                    >
                      Flip Now
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col md="4" lg="4">
          <v-row>
            <v-col md="4" lg="4" v-for="payment in payments" :key="payment.image">
              <v-card class="text-center">
                <img style="margin: 40px 5px;" :src="payment.image" alt="">
                <p style="padding-bottom:5px;" class="body-2">{{ payment.label }}</p>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col md="8" lg="8">
          <v-card>
            <v-toolbar flat>
              <v-toolbar-title>Recent Transactions</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn
                class="mx-2"
                icon
              >
              <v-icon size="15px">mdi-arrow-right</v-icon>
              </v-btn>
            </v-toolbar>
            <div>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Date</th>
                      <th class="text-left">Time</th>
                      <th class="text-left"><v-icon color="orange" size="5px">mdi-checkbox-blank-circle</v-icon> Transaction</th>
                      <th class="text-left">Transaction ID</th>
                      <th class="text-left">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in table" :key="item.name">
                      <td>{{ item.date }}</td>
                      <td>{{ item.time }}</td>
                      <td>{{ item.transaction }}</td>
                      <td>{{ item.id }}</td>
                      <td>&#x20A6; {{ item.amount }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              
            </div>
          </v-card>
        </v-col>
        <v-col md="4" lg="4">
          <v-card>
            <v-toolbar flat>
              <v-toolbar-title>Complete Profile</v-toolbar-title>
              <v-spacer></v-spacer>
              <span>2/3</span>
            </v-toolbar>
            <v-card flat>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="body-2 orange--text">Confirm your email</v-list-item-title>
                  <v-list-item-subtitle class="caption">Add basic account security</v-list-item-subtitle>
                </v-list-item-content>
                <v-spacer></v-spacer>
                <v-checkbox color="success" v-model="checkbox1"></v-checkbox>
              </v-list-item>
            </v-card>
            <v-card flat>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="body-2 orange--text">Add bank account</v-list-item-title>
                  <v-list-item-subtitle class="caption">Add a primary account</v-list-item-subtitle>
                </v-list-item-content>
                <v-spacer></v-spacer>
                <v-checkbox color="success" v-model="checkbox1"></v-checkbox>
              </v-list-item>
            </v-card>
            <v-card flat>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="body-2 orange--text">Add BVN number</v-list-item-title>
                  <v-list-item-subtitle class="caption">Link BVN to account</v-list-item-subtitle>
                </v-list-item-content>
                <v-spacer></v-spacer>
                <v-checkbox color="success" v-model="checkbox1"></v-checkbox>
              </v-list-item>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        {icon: 'mdi-cash-multiple', number: '19', label: 'Completed Transactions', color: '#3FBBC2'},
        {icon: 'mdi-alarm', number: '134', label: 'Pending Transactions', color: '#AC8EDC'},
        {icon: 'mdi-close-circle-outline', number: '12', label: 'Declined Transactions', color: '#ED5A86'},
      ],

      links: [
        {icon: 'mdi-wallet-giftcard', label: 'Transfer'},
        {icon: 'mdi-wallet-membership', label: 'Withdrawal'},
        {icon: 'mdi-wallet-travel', label: 'Wallet'},
      ],

      payments: [
        {image: require('../../assets/svg/9mobile.svg'), label: 'Buy Airtime'},
        {image: require('../../assets/svg/dstv.svg'), label: 'Pay Bills'},
        {image: require('../../assets/svg/9mobile.svg'), label: 'Buy Data'},
      ],

      table: [
          {
            date: '05.11.2019',
            time: '03:39 PM',
            transaction: 'Bill Payment',
            id: '#8274644',
            amount: '10,000',
          },
          {
            date: '05.11.2019',
            time: '03:39 PM',
            transaction: 'Withdrawal',
            id: '#8274644',
            amount: '10,000',
          },
        ],
    }),
  }
</script>

<style scoped>
.dashboard {
  padding: 50px 0;
}
.complete_note {
  position: relative;
}

.complete_img {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(0,-30%);
  width: 15vw;
}

.flipimg {
  width: 70%;
}

.flipbox {
  padding: 10px;
}

.quicky {
  background-color: orange;
  border-radius: 10px;
  margin-bottom: 10px;
}


.overview {
  background-color: #fff;
  border-radius: 10px;
  margin-bottom: 10px;
}

.iconright {
  margin-left: 2vw;
}

.secritybtn {
  margin-top: 80px;
  padding-bottom: 20px;
  padding-left: 20px;
}

.v-card {
  border-radius: 10px;
}

</style>
