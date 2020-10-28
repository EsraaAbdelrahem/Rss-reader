import Vue from "vue";
import axios from "axios";

Vue.prototype.$http = axios;

export default {
  namespaced: true,
  state: {
    readerData: {},
  },
  getters: {
    readerData(state) {
      return state.readerData;
    },
  },
  mutations: {
    ["SET_READER_DATA"](state, readerData) {
      state.readerData = readerData.data;

      return readerData;
    },
  },
  actions: {
    getData({ commit }) {
      axios
        .get(
          "https://api.rss2json.com/v1/api.json?rss_url=http://rss.cnn.com/rss/edition.rss"
        )
        .then((response) => {
          commit("SET_READER_DATA", response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
