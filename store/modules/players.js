export default {
  state: {
    players: [{
      "nickname": "Elnasim",
      "lfgstatus": true,
      "playtime": "18:00 - 24:00",
      "avatar": null,
      "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum nostrum blanditiis voluptate non, accusantium, ipsa repellat quae vitae dolor expedita quibusdam obcaecati nulla consequatur? Molestiae cupiditate delectus voluptates in enim molestias veritatis recusandae vero ipsum odio quos ipsam, quidem sunt? Deleniti consequatur itaque iusto eligendi omnis sequi ullam eveniet laudantium. ",
      "games": {
        "wow": true,
        "pubg": false
      },
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
        "games": {
          "wow": true,
          "pubg": false
        },
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
        "games": {
          "wow": true,
          "pubg": false
        },
        "socialLinks": {
          "vk": "id0",
          "twitter": "idTwitter"
        }
      }
    ]
  },
  mutations: {},
  getters: {
    getPlayerInfo: state => {
      return state.players;
    }
  }
}
