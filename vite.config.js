import { defineConfig } from 'vite'
import injectHTML from 'vite-plugin-html-inject'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
	root: './src',
	base: '/vpntype/',
	server: {
		port: 3000,
	},
	publicDir: './src/assets',
	build: {
		outDir: '../dist',
		emptyOutDir: true,
		minify: false,
		rollupOptions: {
			input: {
				main: './src/index.html',
				register: './src/register.html',
				account: './src/account.html',
				news: './src/news.html',
				singleNews: './src/single-news.html',
				404: './src/404.html',
			},
		},
	},
	plugins: [
		injectHTML(),
		ViteMinifyPlugin(),
		ViteImageOptimizer({
			png: {
				quality: 80,
			},
			jpg: {
				quality: 80,
			},
		}),
	],
})
