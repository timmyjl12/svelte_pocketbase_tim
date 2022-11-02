<script>
    import { routeToPage } from '$lib/stores/nav.js'
    import { setUserCollectionSingle, getImageData} from '$lib/stores/collections.js'
    import { page } from '$app/stores'

    export let collection = null
    export let isPublicView = true
    export let redirectURL = "/auth/collections"
    export let hideViewButton = false
    const redirectPage = async (collectionScoped, redirectURLScoped=redirectURL) => {
      setUserCollectionSingle(collectionScoped)
        routeToPage(`${redirectURL}/edit/${collectionScoped.id}`)
    }
</script>

<div class="flex justify-center mt-10">
<div class="card w-[26rem] bg-base-100 shadow-xl p-4 border-gray-200 border-2">
  {#if collection.filename}
    <figure><img src="{getImageData(collection['@collectionId'], collection.id, collection.filename)}" alt="User Collection Image - {collection.name}" class="w-[100%] rounded-box" /></figure>
    {:else}
    <!-- <figure><img src="" alt="Blank Picture" /></figure> -->
    <div class="bg-slate-200 h-48"></div>
    {/if}
    <div class="card-body mb-0 pb-0">
      <h2 class="text-3xl text-center font-bold">{collection.title}</h2>
      <h3 class="text-center text-sm">{collection.name}</h3>
      <p class="mt-20">{collection.description==null ? "" : collection.description}</p>
      <!-- <button class="btn btn-primary" href="/auth/collections/edit/{collection.id}" on:click="{redirectPage(collection)}"> -->

        {#if $page?.data?.profile && !isPublicView}
        <div class="card-actions flex justify-between mb-0">
        <button class="btn btn-primary" on:click={redirectPage(collection)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 p-0 m-0">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
              </svg>
          </button>
          {#if !hideViewButton}
          <a class="btn btn-primary" href="{redirectURL}/{collection.id}/{collection.name}">View</a>
          {/if}
        </div>
          {:else}
            {#if !hideViewButton}
            <div class="card-actions flex justify-around mb-0">
              <a class="btn btn-primary" href="{redirectURL}/{collection.id}/{collection.name}  ">View</a>
            </div>
            {/if}

          {/if}
    </div>
  </div>
</div>

