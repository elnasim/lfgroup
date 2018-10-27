<template>
  <div class="page-wrapper">
    <Header/>
    <div class="content">
      <nuxt/>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Header from "../components/Header/Header";
  import Footer from "../components/Footer/Footer";

  export default {
    components: {Footer, Header}
  }
</script>
