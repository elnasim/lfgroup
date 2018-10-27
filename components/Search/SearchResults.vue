<template>
  <div class="search-results">
    <div class="search-results-players">
      <PlayerCard
              v-for="player in players"
              :key="player.nickname"
              :nickname="player.nickname"
              :lfgstatus="player.lfgstatus"
              :playtime="player.playtime"
              :description="player.description"
              :games="player.games"
              :sociallinks="player.sociallinks"
      />
    </div>
    <div class="pagination">
      <a href="#" class="pagination-item active">1</a>
      <a href="#" class="pagination-item">2</a>
      <a href="#" class="pagination-item">3</a>
    </div>
  </div>
</template>

<script>
  import PlayerCard from '~/components/Search/Playercard'

  export default {
    name: "SearchResults",
    components: {
      PlayerCard
    },
    data() {
      return {
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
      }
    }
  }
</script>
