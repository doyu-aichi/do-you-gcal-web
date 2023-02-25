import { sveltekit } from '@sveltejs/kit/vite';
import * as path from 'path';
import { defineConfig } from 'vite';
export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$lib: path.resolve('./src/lib'),
			$components: path.resolve('./src/components'),
		},
	},
	define: {
		'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()),
		'__APP_VERSION__': JSON.stringify(process.env.npm_package_version),
	},
	ssr: {
		noExternal: []
	}
});
