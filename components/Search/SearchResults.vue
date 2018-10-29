<template>
  <div class="search-results">
    <div class="search-results-players">
      <PlayerCard
              v-for="player in getPlayers"
              :key="player.nickname"
              :nickname="player.nickname"
              :lfgstatus="player.lfgstatus"
              :playtime="player.playtime"
              :description="player.description"
              :games="player.games"
              :socialLinks="player.socialLinks"
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
  import PlayerCard from '~/components/Search/PlayerCard';
  import {mapGetters} from 'vuex';

  export default {
    name: "SearchResults",
    components: {
      PlayerCard
    },
    computed: {
      ...mapGetters([
        'getPlayers',
      ])
    }
  }
</script>
