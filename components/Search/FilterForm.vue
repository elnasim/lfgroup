<template>
  <form class="filter-form" @input.prevent>
    <div class="filter-form-title">Фильтр игроков</div>

    <div class="filter-form-block">
      <div class="filter-form-type-title">Игра</div>

      <label class="filter-form-change" v-for="game in getGames" :key="game.id">
        <Checkbox class="filter-form-chbox" v-model="filterGames" name='filterGames'/>
        {{game}}
      </label>

    </div>

    <button class="search-form-btn" @click.prevent="getPlayers">Найти</button>
  </form>
</template>

<script>
  import Checkbox from "./Checkbox";
  import {mapGetters, mapActions} from 'vuex';

  export default {
    name: "FilterForm",
    components: {Checkbox},
    data() {
      return {
        filterGames: '',
      }
    },
    computed: {
      ...mapGetters(['getGames'])
    },
    methods: {
      ...mapActions(['getPlayers'])
    }
  }
</script>
