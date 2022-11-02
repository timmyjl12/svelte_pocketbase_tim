<script>
		import { page } from '$app/stores'
	    import { onMount } from 'svelte'

		let formButton
		onMount(async () => {
			formButton.click()
		})

</script>


<form method="POST" action="?/gAuthRedirect"
>
		  <div class="flex justify-center mt-8">
		<button
		bind:this={formButton}
		type="submit"
	  class="w-46 px-4 py-2 tracking-wide text-black transition-colors duration-200 transform border-t-red-600 border-b-red-600 border-r-blue-600 border-l-blue-600 border-2 bg-white rounded-md hover:bg-gray-300 focus:outline-2 focus:bg-bg-gray-500 hover:text-black"
	  >
	  Google Login
	</button>
	</div>
	</form>
