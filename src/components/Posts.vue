<template>
  <h2 class="mt-6">
    All Posts from Vuex
  </h2>
  <div
    v-for="{ id, title, author } in getPosts"
    :key="id"
    class="mt-2"
  >
    <h3>
      Title: {{ title }}
    </h3>
    <h4>
      Author: {{ author }}
    </h4>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Posts',
  setup() {
    const store = useStore()
    const getPosts = computed(
      () => store.getters['products/postLists']
    )

    return {
      getPosts
    }
  }
}
</script>
