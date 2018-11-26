import Vue from 'vue';
import Vuex, { StoreOptions, GetterTree, MutationTree, ActionTree } from 'vuex';

Vue.use(Vuex);

interface CounterState {
  counter: number;
}

const state: CounterState = {
  counter: 1,
};

const getters: GetterTree<CounterState, CounterState> = {
  current(state: CounterState): number {
    return state.counter;
  },
};

const mutations: MutationTree<CounterState> = {
  increment(state: CounterState): void {
    state.counter++;
  },
};

const actions: ActionTree<CounterState, CounterState> = {};

const store: StoreOptions<CounterState> = {
  state,
  getters,
  mutations,
  actions,
};
// export default new Vuex.Store({
//   state: {

//   },
//   mutations: {

//   },
//   actions: {

//   },
// });
export default new Vuex.Store<CounterState>(store);
