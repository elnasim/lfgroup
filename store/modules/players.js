export default {
  state: {
    players: [{
      "nickname": "Elnasim",
      "lfgstatus": true,
      "playtime": "18:00 - 24:00",
      "avatar": null,
      "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum nostrum blanditiis voluptate non, accusantium, ipsa repellat quae vitae dolor expedita quibusdam obcaecati nulla consequatur? Molestiae cupiditate delectus voluptates in enim molestias veritatis recusandae vero ipsum odio quos ipsam, quidem sunt? Deleniti consequatur itaque iusto eligendi omnis sequi ullam eveniet laudantium. ",
      "games": ['wow', 'pubg', 'lol', 'csgo'],
      "socialLinks": {
        "vk": "id0",
        "twitter": "idTwitter"
      }
    },
      {
        "nickname": "KTyH",
        "lfgstatus": false,
        "playtime": "Любое время",
        "avatar": null,
        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum nostrum blanditiis voluptate non, accusantium, ipsa repellat quae vitae dolor expedita quibu",
        "games": ['wow', 'pubg'],
        "socialLinks": {
          "vk": "id0",
          "twitter": "idTwitter"
        }
      },
      {
        "nickname": "KTyH",
        "lfgstatus": false,
        "playtime": "Любое время",
        "avatar": null,
        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum nostrum blanditiis voluptate non, accusantium, ipsa repellat quae vitae dolor expedita quibu",
        "games": ['wow', 'pubg'],
        "socialLinks": {
          "vk": "id0",
          "twitter": "idTwitter"
        }
      }
    ]
  },
  mutations: {
    newPlayer(state, payload) {
      state.players.push({
        'nickname': payload.nickname,
        lfgstatus: payload.lfgstatus,
        playtime: payload.playtime,
        avatar: null,
        description: payload.description,
        games: ['wow', 'pubg', 'lol', 'csgo'],
        socialLinks: {
          "vk": payload.socialLinks.vk,
          "twitter": payload.socialLinks.twitter
        }
      })
    }
  },
  getters: {
    getPlayers(state) {
      return state.players;
    }
  },
  actions: {}
}
