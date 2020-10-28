import Vue from "vue";
import Vuex from "vuex";
import Reader from "./Reader"

Vue.use(Vuex);

/*here is the entry point of all stores that we need when we want
to define a new store we can include it here "modules"
*/
export default new Vuex.Store({
  modules: {
    Reader
  },
});
