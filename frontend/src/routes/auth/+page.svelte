<script>
	// /auth
    import { onMount } from 'svelte'
    import { routeToPage } from '$lib/stores/nav.js'
	import { page } from '$app/stores'

	onMount(async () => {
		// await tryAutoLogin()
		if (!$page?.data?.is_logged_in) {
			routeToPage("/", true)
		}
	})

</script>

<svelte:head>
	<title>Collections - Profile</title>
	<meta name="description" content="User Profile" />
</svelte:head>

<div class="flex justify-center mt-4">
    <p> Profile / Settings</p>
</div>
