import Vue from 'vue'
import Router from 'vue-router'
import Web from './views/Web.vue'
import Signin from './views/Signin.vue'
import Signup from './views/Signup.vue'
import Webapp from './views/Webapp.vue'

import Home from './views/web/Home.vue'
import About from './views/web/About.vue'
import Faq from './views/web/Faq.vue'
import Services from './views/web/Services.vue'
import Charges from './views/web/Charges.vue'
import Datapin from './views/web/Datapin.vue'
import Contact from './views/web/Contact.vue'

import Dashboard from './views/webapp/Dashboard.vue'
import Convert from './views/webapp/Convert.vue'
import Wallet from './views/webapp/Wallet.vue'
import Withdrawal from './views/webapp/Withdrawal.vue'
import Transfer from './views/webapp/Transfer.vue'
import Airtime from './views/webapp/Airtime.vue'
import Data from './views/webapp/Data.vue'
import Bills from './views/webapp/Bills.vue'
import History from './views/webapp/History.vue'
import Settings from './views/webapp/Settings.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Web',
      component: Web,
      children: [
        {path: '', component: Home},
        {path: 'About', component: About},
        {path: 'Faq', component: Faq},
        {path: 'Services', component: Services},
        {path: 'Charges', component: Charges},
        {path: 'Datapin', component: Datapin},
        {path: 'Contact', component: Contact},
      ]
    },
    {
      path: '/Signin',
      name: 'Signin',
      component: Signin,
    },
    {
      path: '/Signup',
      name: 'Signup',
      component: Signup,
    },
    {
      path: '/Webapp',
      name: 'Webapp',
      component: Webapp,
      children: [
        {path: '', component: Dashboard},
        {path: 'Convert', component: Convert},
        {path: 'Wallet', component: Wallet},
        {path: 'Withdrawal', component: Withdrawal},
        {path: 'Transfer', component: Transfer},
        {path: 'Airtime', component: Airtime},
        {path: 'Data', component: Data},
        {path: 'Bills', component: Bills},
        {path: 'History', component: History},
        {path: 'Settings', component: Settings},
      ]
    }
  ]
})
