<template>
  <p class="my-4">
    Counter: {{ count }}
  </p>
  <button
    class="bg-blue-400 hover:bg-blue-300 font-bold py-2 px-4 rounded text-white"
    @click="inCrement"
  >
    Increase counter by 1
  </button>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Counter',
  setup() {
    const store = useStore()
    const count = computed(
      () => store.state.products.count
    )
    const inCrement = () => store.commit('products/increment')

    return {
      count,
      inCrement
    }
  }
}
</script>
