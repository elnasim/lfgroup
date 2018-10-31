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
    NEW_PLAYER(state, payload) {
      state.players.push({
        nickname: payload.nickname,
        lfgstatus: payload.lfgstatus,
        playtime: payload.playtime,
        avatar: null,
        description: payload.description,
        games: ['wow', 'pubg', 'lol', 'csgo'],
        socialLinks: {
          vk: payload.socialLinks.vk,
          twitter: payload.socialLinks.twitter
        }
      })
    },

    CLEAR_PLAYERS(state, payload) {
      state.players = []
    },

    GET_PLAYERS(state, payload) {
      state.players.push(payload);
    }
  },

  actions: {
    getPlayers({commit}) {
      commit('CLEAR_PLAYERS');
      fb.collection('players').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          commit('GET_PLAYERS', doc.data())
        });
      });
    },

    newPlayer({commit}, payload) {
      fb.collection('players').add({
        nickname: payload.nickname,
        litera: payload.litera,
        lfgstatus: true,
        playtime: payload.playtime,
        description: payload.description,
        games: ['wow', 'pubg', 'lol', 'csgo'],
        socialLinks: {
          vk: payload.socialLinks.vk,
          twitter: payload.socialLinks.twitter
        }
      })
    }
  }
}
