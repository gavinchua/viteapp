<template>
  <p class="my-4">
    Counter: {{ count }}
  </p>
  <button
    class="bg-blue-400 hover:bg-blue-300 font-bold py-2 px-4 rounded text-white"
    @click="inCrement"
  >
    {{ text }} by 1
  </button>
</template>

<script>
import { computed, watchEffect } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Counter',
  props: {
    text: {
      type: String,
      required: true
    }
  },
  setup(props, ctx) {
    console.log('props: ', props, 'ctx: ', ctx);

    const store = useStore()
    const count = computed(
      () => store.state.products.count
    )
    const inCrement = () => store.commit('products/increment')

    watchEffect(
      () => console.log(count.value)
    )

    return {
      count,
      inCrement
    }
  }
}
</script>
