import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    storedClients: []
  },

  mutations: {
    MUTATE_ITEMS: (state, items) => {
      state.storedClients = items;
    }
  },

  actions: {
    loadItems: (context, items) => {
      context.commit('MUTATE_ITEMS', items);
    }
  },

  getters: {
    getStoredClients(state){
      return state.storedClients
    }

  }
})

export default store

