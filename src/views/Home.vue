<template>
  <h1>
    Home
  </h1>
  <Counter :text="'Increase my counter'" />
  <Posts />
</template>

<script>
import Counter from '@components/Counter.vue'
import Posts from '@components/Posts.vue'

export default {
  name: 'PageHome',
  components: {
    Counter,
    Posts
  }
}
</script>
