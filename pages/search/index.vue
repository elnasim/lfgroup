<template>
  <div class="container">
    <div class="search-page">
      <FilterForm/>
      <SearchResults/>
    </div>
  </div>
</template>

<script>
  import FilterForm from "../../components/Search/FilterForm";
  import SearchResults from "../../components/Search/SearchResults";
  
  export default {
    name: "index",
    components: {
      FilterForm,
      SearchResults
    }
  }
</script>
