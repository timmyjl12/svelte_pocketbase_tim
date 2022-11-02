<script>
	import {SITE_TITLE, PAGE_DESCRIPTION} from './seo.js'
	import {SITE_URL, MY_TWITTER_HANDLE} from '$lib//helpers/siteDetails.js'

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
<div class="content">
	<h1 class="underline">About</h1>

	<p class="text-justify ml-10">
		This website is for sharing your collections and collectables.
	</p>
</div>

<style>
	.content {
		width: 100%;
		min-height: 80vh;
		/* max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto; */
	}
</style>
