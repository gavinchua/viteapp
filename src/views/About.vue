<template>
  <h1>
    About
  </h1>
  <p class="mt-5">
    My name is {{ name }}
  </p>
</template>

<script>
import { computed, reactive, toRefs } from 'vue'
export default {
  name: 'PageAbout',
  setup() {
    const state = reactive({
      firstname: 'John',
      lastname: 'Chan',
      age: 34,
      name: computed(
        () => {
          return `${state.firstname} ${state.lastname}`
        }
      )
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>
