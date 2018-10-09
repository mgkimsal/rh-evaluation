import Vue from "vue";
import Vuex from "vuex";
import fetchJSON from "./fetchJSON";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    userUpdater(state) {
      fetchJSON("https://jsonplaceholder.typicode.com/users").then(result => {
        state.users = result;
      });
    }
  }
});

store.commit("userUpdater");

export default store;
