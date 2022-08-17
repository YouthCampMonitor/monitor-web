import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { join } from 'path';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		Components({
			resolvers: [AntDesignVueResolver()],
		}),
	],
	// 软链接
	resolve: {
		alias: {
			'@': join(__dirname, '/src'),
		},
	},
	build: {
		commonjsOptions: { transformMixedEsModules: true },
	},
});
