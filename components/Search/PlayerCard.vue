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
      <div class="player-card-game-img"><img src="~/static/games-img/wow.png" alt=""></div>
      <div class="player-card-game-img"><img src="~/static/games-img/wow.png" alt=""></div>
      <div class="player-card-game-img"><img src="~/static/games-img/wow.png" alt=""></div>
      <div class="player-card-game-img"><img src="~/static/games-img/wow.png" alt=""></div>
    </div>

    <div class="player-card-links">
      <a href="#" class="player-card-link" target="_blank"><img src="~/static/icons/vk.svg" alt=""></a>
      <a href="#" class="player-card-link" target="_blank"><img src="~/static/icons/twitter.svg" alt=""></a>
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
      "sociallinks"
    ],
    methods: {
      getABC() {
        return this.nickname.slice(0, 1);
      }
    }
  };
</script>
