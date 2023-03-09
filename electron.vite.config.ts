import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineConfig({
	main: {
		plugins: [externalizeDepsPlugin()]
	},
	preload: {
		plugins: [externalizeDepsPlugin()]
	},
	renderer: {
		resolve: {
			alias: {
				'@renderer': resolve('src/renderer/src'),
				// 'vue-i18n': 'vue-i18n/dist/vue-i18n.esm-bundler.js',
				'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js'
			}
		},
		plugins: [
			vue(),
			AutoImport({
				resolvers: [ElementPlusResolver()]
			}),
			Components({
				resolvers: [ElementPlusResolver()]
			}),
			VueI18nPlugin({
				include: [resolve(__dirname, './src/renderer/src/i18n/locales/**')]
			})
		]
	}
})
