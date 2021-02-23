import { getAliases } from 'vite-aliases'
import WindiCSS from 'vite-plugin-windicss'
import vue from '@vitejs/plugin-vue'

const aliases = getAliases();

/**
 * @type {import('vite').UserConfig}
 */
export default {
  resolve: {
    alias: aliases
  },
  plugins: [
    WindiCSS(
      {
        safelist: ''
      }
    ),
    vue()
  ]
}
