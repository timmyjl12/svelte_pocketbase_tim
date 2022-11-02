<script>
	import { loadingPage, loaderPage, checkNavigating } from '$lib/stores/loading.js'
	$: checkNavigating()
</script>

{#if $loadingPage}
	{@html $loaderPage}
{/if}