import axios from 'axios'
import NProgress from 'nprogress'

import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_HOSTNAME
})

apiClient.interceptors.request
  .use(
    config => {
      NProgress.start()
      return config
    }
  )

apiClient.interceptors.response
  .use(
    response => {
      NProgress.done()
      return response
    }
  )

export default {
  getPosts() {
    return apiClient.get('posts')
  }
}
