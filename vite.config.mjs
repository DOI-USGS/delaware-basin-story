import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default ({mode}) => {

  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    publicPath: "./",
    outputDir: "dist",
    assetsDir: "static",
    plugins: [
      vue(), 
      svgLoader({
        svgo: false
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      }
    },
    base: `/${process.env.VITE_APP_ASSET_URL}/${process.env.VITE_APP_TITLE}/`
  });
}
