import { sveltekit } from '@sveltejs/kit/vite';
import preprocess from "svelte-preprocess";

/** @type {import('vite').UserConfig} */
const config = {
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
	plugins: [sveltekit()],
	vite: {
		server: {
			hmr: {
					host: 'localhost',
					port: 15000,
					protocol: 'ws'
				}
		}
	}
}

export default config
