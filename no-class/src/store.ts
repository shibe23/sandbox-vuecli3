import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  getters: {
    current(state): number {
      return state.counter;
    },
  },
  state: {
    counter: 1,
  },
  mutations: {
    increment(state): void {
      state.counter++;
    },
  },
  actions: {

  },
});
