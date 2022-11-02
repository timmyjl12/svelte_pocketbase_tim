<script>
    import { routeToPage } from '$lib/stores/nav.js'
    import { onMount } from 'svelte'
    import { message, defaultMessage } from '$lib/stores/messaging.js'
    import { enhance, applyAction } from '$app/forms';
    import { invalidateAll } from '$app/navigation';
	import { invalid } from '@sveltejs/kit';
	import { stringify } from 'postcss';
	import {SITE_TITLE, PAGE_DESCRIPTION} from './seo.js'
	import {SITE_URL, MY_TWITTER_HANDLE} from '$lib//helpers/siteDetails.js'
	import { page } from '$app/stores'

    // /** @type {import('./$types').PageData} */
    // export let data
    /** @type {import('./$types').ActionData} */
    export let form
    // console.log(form)

    let error = false
    // let email = ''
    // let password = ''
    let scopedMessage = ''
    export let timeout = 10000
    	// let noteColor = '#FF5555';
	$: cssVarStyles = `--timeout:${timeout};`;

</script>
<!--  -->
<svelte:head>
	<title>{SITE_TITLE}</title>
	<meta name="description" content={PAGE_DESCRIPTION} />
	<title>{SITE_TITLE}</title>
	<link rel="canonical" href={SITE_URL} />
	<!-- <link rel="alternate" type="application/rss+xml" href={SITE_URL + '/rss.xml'} /> -->
	<meta property="og:url" content={SITE_URL} />
	<meta property="og:type" content="website" /> <!-- google different og:types -->
	<meta property="og:title" content={SITE_TITLE} />
	<meta name="Description" content={PAGE_DESCRIPTION} />
	<meta property="og:description" content={PAGE_DESCRIPTION} />
	<!-- <meta property="og:image" content={DEFAULT_OG_IMAGE} /> -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content={'@' + MY_TWITTER_HANDLE} />
	<meta name="twitter:title" content={SITE_TITLE} />
	<meta name="twitter:description" content={PAGE_DESCRIPTION} />
	<!-- <meta name="twitter:image" content={DEFAULT_OG_IMAGE} /> -->
</svelte:head>
<!--  -->
{#if !$page?.data?.is_logged_in}
<div class="relative flex flex-col justify-center min-h-screen overflow-hidden shadow">
  <div class="w-full p-6 m-auto bg-white border-t-4 border-teal-400 rounded-md shadow-md border-top lg:max-w-md">
        <h1 class="text-3xl font-semibold text-center text-teal-500">Login</h1>
<!-- <form id="login-form" class="mt-6" method="POST" action="?/login"
        >
        <div>
          <label for="email" class="block text-sm text-gray-800">Email</label>
          <input type="email" name="email" id="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{`{2,4}`}$"
            class="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-teal-400 focus:ring-teal-300 focus:outline-none focus:ring focus:ring-opacity-40">
        </div>
        <div class="mt-4">
          <div>
            <label for="password" class="block text-sm text-gray-800">Password</label>
            <input type="password" name="password" id="password" required
              class="block w-full px-4 py-2 mt-2 text-teal-500 bg-white border rounded-md focus:border-teal-400 focus:ring-teal-300 focus:outline-none focus:ring focus:ring-opacity-40">
          </div>
          <a href="/auth/forgotPassword" class="text-xs text-gray-600 hover:underline">Forget Password?</a>
          <div class="mt-6">
            <button
                type="submit"
              class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-teal-500 rounded-md hover:bg-teal-400 focus:outline-none focus:bg-teal-400">
              Login
            </button>
          </div>
          <p class:error id="error-message" class="text-center opacity-100" style="--timeout: {timeout}ms">{scopedMessage}</p>
      </form>
      <p class="mt-8 text-xs font-light text-center text-gray-700"> Don't have an account? <a href="/auth/signup"
          class="font-medium text-teal-400 hover:underline">Sign up</a></p> -->

		<form method="POST" action="?/gAuth"
>
		  <div class="flex justify-center mt-8">
		<button
		type="submit"
	  class="w-46 px-4 py-2 tracking-wide text-black transition-colors duration-200 transform border-t-red-600 border-b-red-600 border-r-blue-600 border-l-blue-600 border-2 bg-white rounded-md hover:bg-gray-300 focus:outline-2 focus:bg-bg-gray-500 hover:text-black"
	  >
	  Google Login
	</button>
	</div>
	</form>
</div>

</div>

{:else}
<div class="content">
<h1 class="text-3xl font-semibold text-center text-teal-500">Login</h1>
<p class="text-2xl font-bold text-center mt-10">
    You are already logged in.
</p>
</div>
{/if}

<style>
.error {
    color: red;
    opacity: 0 !important;
    transition-timing-function: cubic-bezier(0, 0, 5, 2);
    transition-duration: var(--timeout);
    transition-property: opacity;
    /* visibility: visible !important; */
    /* transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); */
}
</style>