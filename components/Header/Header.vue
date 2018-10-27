<template>
  <header class="header">
    <div class="container">
      <div class="header-topline">
        <nuxt-link to="/">
          <Logo/>
        </nuxt-link>
        <div class="header-socials">
          <a href="#"><img src="~/static/icons/vk.svg" alt="" class="header-social"></a>
          <a href="#"><img src="~/static/icons/twitter.svg" alt="" class="header-social"></a>
        </div>
      </div>

      <div class="header-nav">
        <div class="header-menu">
          <nuxt-link to="/" class="header-menu-link">Новости</nuxt-link>
          <nuxt-link to="search" class="header-menu-link">Поиск</nuxt-link>
          <nuxt-link to="/" class="header-menu-link">Стримы</nuxt-link>
          <nuxt-link to="/" class="header-menu-link">О сайте</nuxt-link>
        </div>
        <nuxt-link to="/" class="header-login">Войти на сайт</nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>
  import Logo from "../Logo";

  export default {
    name: "Header",
    components: {Logo},
  }
</script>
