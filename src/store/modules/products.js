import APIClient from '@api/APIClient'

const state = () => ({
  count: 0,
  posts: []
})

const getters = {
  postLists: state => state.posts
}

const actions = {
  async getPosts({ commit }) {
    try {
      const response = await APIClient.getPosts()
      const posts = Object.freeze(response.data)

      commit('setPosts', posts)
    } catch (error) {
      if (error.response) {
        console.log(error.response)
      } else if (error.request) {
        console.log(error.request)
      } else {
        console.log('Error', error.message)
      }
    }
  }
}

const mutations = {
  increment(state) {
    state.count++
  },
  setPosts: (state, payload) => {
    state.posts = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
