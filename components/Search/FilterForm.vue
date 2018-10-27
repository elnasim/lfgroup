<template>
  <form class="filter-form" @input.prevent>
    <div class="filter-form-title">Фильтр игроков</div>
    <div class="filter-form-type-title">Игра</div>
    <label class="filter-form-change">
      <Checkbox class="filter-form-chbox"/>
      World of Warcraft
    </label>
    <label class="filter-form-change">
      <Checkbox class="filter-form-chbox"/>
      League of Legends
    </label>
    <button class="search-form-btn" @click.prevent>Найти</button>
  </form>
</template>

<script>
  import Checkbox from "./Checkbox";

  export default {
    name: "FilterForm",
    components: {Checkbox}
  }
</script>
