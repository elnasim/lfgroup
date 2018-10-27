import Vue from 'vue';
import Vuex from 'vuex';
import players from './modules/players';

Vue.use(Vuex);

const store = () => new Vuex.Store({
  modules: {
    players,
  }
});

export default store
