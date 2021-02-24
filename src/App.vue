<template>
  <AppHeader />
  <main class="p-5">
    <div class="prose container">
      <router-view />
    </div>
  </main>
  <AppFooter />
</template>

<script>
import AppHeader from '@components/header/AppHeader.vue'
import AppFooter from '@components/footer/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  created() {
    this.$store.dispatch('products/getPosts')
  }
}
</script>
