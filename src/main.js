import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import store from './store'
import { BootstrapVue } from "bootstrap-vue"
import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'

/* "components section"
we define the components globally we can separate them into another
file but in our case we don't need to do so as the app is not big
*/
import Home from "./components/views/Home.vue"
import NavBar from "./components/shared/NavBar.vue"
import Footer from "./components/shared/Footer.vue"
import RssChannel from "./components/RssChannel.vue"

Vue.component("home-page", Home);
Vue.component("navbar", NavBar);
Vue.component("v-footer", Footer);
Vue.component("rss-channel", RssChannel);

/*uses
vue instance will not work only by importing the files we need
we should ask to use them 
*/
Vue.use(BootstrapVue);
Vue.use(VueAxios, axios);
Vue.use(SequentialEntrance);


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
