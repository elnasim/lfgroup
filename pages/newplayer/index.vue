<template>
  <div class="container">
    <div class="newplayer-page">

      <div class="newplayer-title">Новый игрок</div>

      <div class="newplayer-section">
        <div class="newplayer-section-title">Ник</div>
        <input type="text" class="newplayer-textinput" v-model="nickname">
      </div>

      <div class="newplayer-section">
        <div class="newplayer-section-title">Время игры</div>
        <div class="newplayer-playtime-inputs-wrapper">
          с
          <input type="text" class="newplayer-textinput newplayer-playtime-input" v-model="playtimeFromHour">
          <input type="text" class="newplayer-textinput newplayer-playtime-input" v-model="playtimeFromMin">
          до
          <input type="text" class="newplayer-textinput newplayer-playtime-input" v-model="playtimeToHour">
          <input type="text" class="newplayer-textinput newplayer-playtime-input" v-model="playtimeToMin">
        </div>
      </div>

      <div class="newplayer-section">
        <div class="newplayer-section-title">Краткое описание</div>
        <textarea rows="10" class="newplayer-textarea" v-model="description"></textarea>
      </div>

      <div class="newplayer-section">
        <div class="newplayer-section-title">Игры</div>

        <div class="newplayer-games">

          <label class="newplayer-game-label">
            <input type="checkbox" class="newplayer-game-chbox" v-model="games" value="wow">
            <span class="newplayer-game-custom-chbox">
              <img class="newplayer-game-img" src="~/static/games-img/wow.png" alt="wow">
            </span>
          </label>

          <label class="newplayer-game-label">
            <input type="checkbox" class="newplayer-game-chbox" v-model="games" value="pubg">
            <span class="newplayer-game-custom-chbox">
              <img class="newplayer-game-img" src="~/static/games-img/pubg.png" alt="pubg">
            </span>
          </label>

          <label class="newplayer-game-label">
            <input type="checkbox" class="newplayer-game-chbox" v-model="games" value="lol">
            <span class="newplayer-game-custom-chbox">
              <img class="newplayer-game-img" src="~/static/games-img/lol.png" alt="lol">
            </span>
          </label>

          <label class="newplayer-game-label">
            <input type="checkbox" class="newplayer-game-chbox" v-model="games" value="csgo">
            <span class="newplayer-game-custom-chbox">
              <img class="newplayer-game-img" src="~/static/games-img/csgo.png" alt="csgo">
            </span>
          </label>

        </div>

      </div>

      <div class="newplayer-section">
        <div class="newplayer-section-title">Связь</div>
        <label class="newplayer-socials-label">
          Вконтакте:
          <input type="text" class="newplayer-textinput" v-model="socialLinks.vk">
        </label>
      </div>

      <button class="newplayer-btn" @click.prevent="newPlayer">Добавить</button>

    </div>
  </div>
</template>

<script>
  import Checkbox from "../../components/Search/Checkbox";
  import {mapMutations} from 'vuex';

  export default {
    name: "index",
    data() {
      return {
        nickname: '',
        lfgstatus: true,
        playtimeFromHour: '',
        playtimeFromMin: '',
        playtimeToHour: '',
        playtimeToMin: '',
        avatar: null,
        description: '',
        games: [],
        socialLinks: {
          vk: '',
          twitter: ''
        }
      }
    },
    components: {Checkbox},
    methods: {
      newPlayer() {
        let playtime = this.playtimeFromHour + ':' + this.playtimeFromMin + ' - ' + this.playtimeToHour + ':' + this.playtimeToMin;
        let litera = this.nickname.slice(0, 1);
        console.log('-->', litera);
        this.$store.dispatch('newPlayer', {
          nickname: this.nickname,
          litera: litera,
          lfgstatus: true,
          playtime: playtime,
          avatar: null,
          description: this.description,
          games: this.games,
          socialLinks: {
            vk: this.socialLinks.vk,
            twitter: this.socialLinks.twitter
          }
        })
      }
    }
  }
</script>
