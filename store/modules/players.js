import fb from '~/plugins/firebaseInit';

export default {
  state: {
    players: [],
    filter: {
      games: ['World of Warcraft', 'League of Legends', 'PUBG', 'CS:GO']
    },
    isLoading: false,
  },

  getters: {
    getPlayers(state) {
      return state.players;
    },
    getGames(state) {
      return state.filter.games;
    }
  },

  mutations: {
    GET_PLAYERS(state, payload) {
      state.players = payload;
    }
  },

  actions: {
    getPlayers({commit}) {
      commit('CLEAR_PLAYERS');
      fb.ref('players').once('value').then(function (snapshot) {
        commit('GET_PLAYERS', snapshot.val())
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
