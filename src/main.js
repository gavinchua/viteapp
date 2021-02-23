import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

import 'windi.css'
import '@stylus/index.stylus'

if (process.env.NODE_ENV === 'development')  {
  console.log(import.meta.env.VITE_APP_TITLE);
}

const init = () => {
  createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
}

init()
