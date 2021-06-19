import { ViteAliases } from 'vite-aliases'
import WindiCSS from 'vite-plugin-windicss'
import vue from '@vitejs/plugin-vue'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [
    WindiCSS(
      {
        safelist: ''
      }
    ),
    ViteAliases(),
    vue(),
  ]
}
