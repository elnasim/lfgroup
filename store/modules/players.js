import fb from '~/plugins/firebaseInit';

export default {
  state: {
    players: [],
    filter: {
      games: ['World of Warcraft', 'League of Legends', 'PUBG', 'CS:GO']
    },
    isLoading: true,
  },

  getters: {
    getPlayers(state) {
      return state.players;
    },
    getGames(state) {
      return state.filter.games;
    },
    isLoading(state) {
      return state.isLoading;
    }
  },

  mutations: {
    GET_PLAYERS(state, payload) {
      state.players = payload;
    },
    CHANGE_IS_LOADING(state, payload) {
      state.isLoading = payload;
    }
  },

  actions: {
    getPlayers({commit}) {
      commit('CHANGE_IS_LOADING', true);
      fb.ref('players').once('value').then(function (snapshot) {
        commit('GET_PLAYERS', snapshot.val());
        commit('CHANGE_IS_LOADING', false)
      });
    },

    newPlayer({commit}, payload) {
      fb.ref('players').push({
        nickname: payload.nickname,
        litera: payload.litera,
        lfgstatus: true,
        playtime: payload.playtime,
        description: payload.description,
        games: payload.games,
        socialLinks: {
          vk: payload.socialLinks.vk,
          twitter: payload.socialLinks.twitter
        }
      })
    }
  }
}
