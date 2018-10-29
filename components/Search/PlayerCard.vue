<template>
  <div class="player-card">

    <div class="player-card-head">

      <div class="player-card-head-column">
        <div class="player-card-lfg-status" v-if="lfgstatus">
          <div class="player-card-lfg-status-icon" style="background: #1abc9c"></div>
          Ищу группу
        </div>
        <div class="player-card-lfg-status" v-if="!lfgstatus">
          <div class="player-card-lfg-status-icon" style="background: #e74c3c"></div>
          Не ищу группу
        </div>
        <div class="player-card-playtime">
          <div>
            Время игры:
          </div>
          <div>
            {{playtime}}
          </div>
        </div>
      </div>

      <div class="player-card-head-column">
        <div class="player-card-nick-wrapper">
          <div class="player-card-img">{{getABC()}}</div>
          <div class="player-card-nickname">{{nickname}}</div>
        </div>
      </div>

    </div>

    <div class="player-card-description">{{description}}</div>

    <div class="player-card-games">
      <div class="player-card-game-img" v-for="game in getGames()" :key="game.id">
        <img :src="getGameImg(game)" :alt=(game)>
      </div>
    </div>

    <div class="player-card-links">
      <a :href="`${socialLinks.vk}`" class="player-card-link" target="_blank"><img src="~/static/icons/vk.svg" alt=""></a>
      <a :href="`${socialLinks.twitter}`" class="player-card-link" target="_blank"><img src="~/static/icons/twitter.svg" alt=""></a>
    </div>

  </div>
</template>

<script>
  export default {
    name: "PlayerCard",
    props: [
      "nickname",
      "lfgstatus",
      "playtime",
      "description",
      "games",
      "socialLinks"
    ],
    methods: {
      getABC() {
        return this.nickname.slice(0, 1);
      },
      getGames() {
        return this.games;
      },
      getGameImg(game) {
        return require(`@/static/games-img/${game}.png`)
      }
    }
  };
</script>
