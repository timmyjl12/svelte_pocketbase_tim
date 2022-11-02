import adapter from '@sveltejs/adapter-node';
// import adapter from '@sveltejs/adapter-static';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
	kit: {
        adapter: adapter({
            out: 'build'
        }),
	},
	//Use this for static builds
	// kit: {
    //     // SET THE PATHS HERE
    //     paths: { assets: "", base: "" },
    //     adapter: adapter({
	// 		out: 'build',
    //         fallback: 'app.html',
    //         precompress: false,
    //     })
    // }
};

export default config;
