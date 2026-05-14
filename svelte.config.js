import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			edge: false
		}),
		prerender: {
			crawl: true,
			entries: ['*'],
			handleHttpError: 'warn'
		}
	},
	outDir: 'build'
};

export default config;
