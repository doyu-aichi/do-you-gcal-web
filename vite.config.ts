import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString()),
		__APP_VERSION__: JSON.stringify(process.env.npm_package_version)
	},
	ssr: {
		noExternal: []
	}
});
