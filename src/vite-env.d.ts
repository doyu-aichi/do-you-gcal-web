/// <reference types="vite/client" />

declare module '*.postcss';

declare module '*.svelte' {
	import type { Component } from 'svelte';

	const component: Component<Record<string, unknown>>;
	export default component;
}
