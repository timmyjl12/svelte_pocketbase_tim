
<script>
	import '../app.css';
	import Navbarv3 from '$lib/components/nav/navbar.svelte'
	import Toast from '$lib/components/alerts/toast.svelte'
	import Footer from '$lib/components/footer/Footer.svelte'
	import Analytics from '$lib/ga_analytics/ga_analytics.svelte'
	import LoadingBar from '$lib/components/loading/LoadingBar.svelte'
	import { onMount } from 'svelte'


</script>
<Analytics />
<LoadingBar />
<Toast />
<Navbarv3 />
<main class="border-t border-black border-dotted md:min-h-[80vh] sm:min-h-[100vh]">
	<slot />
</main>
<Footer />

<style>
	/* :global(body) {
		background-color: #161614 !important;
	} */

</style>
