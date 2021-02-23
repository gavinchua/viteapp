<template>
  <header>
    <div class="flex items-center justify-between container">
      <img
        src="../../assets/img/logo.png"
        class="logo"
        loading="lazy"
      >
      <nav>
        <router-link :to="{ name: 'Home' }">
          Home
        </router-link>
        <router-link :to="{ name: 'About' }">
          About
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style lang="stylus">
header
  .logo
    width 50px
  nav
    a
      @apply ml-2
</style>
