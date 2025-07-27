import { defineConfig } from 'vite'
import injectHTML from 'vite-plugin-html-inject'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { ViteMinifyPlugin } from 'vite-plugin-minify'

export default defineConfig({
	root: './src',
	base: './',
	server: {
		port: 3000,
	},
	publicDir: './src/assets',
	define: {
		__VUE_I18N_FULL_INSTALL__: true,
		__VUE_I18N_LEGACY_API__: true,
		__INTLIFY_PROD_DEVTOOLS__: false,
	},
	build: {
		outDir: '../dist',
		emptyOutDir: true,
		minify: false,
		rollupOptions: {
			input: {
				index: './src/index.html',
				account: './src/account.html',
				faq: './src/faq.html',
				payments: './src/payments.html',
				promo: './src/promo.html',
				rates: './src/rates.html',
				settings: './src/settings.html',
				support: './src/support.html',
				statistics: './src/statistics.html',
				blog: './src/blog.html',
				article: './src/article.html',
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
