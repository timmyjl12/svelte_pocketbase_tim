<script>
  import { page } from '$app/stores';
  import { navItems } from '$lib/stores/nav.js'
  import { loading, loader } from '$lib/stores/loading.js'
  import { navigating } from '$app/stores'
  import { onMount } from 'svelte'

  loading.set(true)
  onMount(async () => {
    if (!$navigating) {
      loading.set(false)
    }
	})
</script>
<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost btn-circle md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-60 md:menu-horizontal md:mt-0 md:p-0 md:shadow-none md:rounded-none md:w-auto">
        {#each $navItems as item}
        <li class="">
          <a class="" class:active={$page?.url?.pathname === item.href} href={item.href}>{item.label}</a>
        </li>
        {/each}
        <!-- {#each $navItemsAuth as item} -->
        <li class="">
          {#if $loading}
          {@html $loader}
          {:else}
            {#if $page?.data?.is_logged_in}
            <div>
              <form action="/auth/logout" method="POST">
                <button>Logout</button>
              </form>
            </div>
            <!-- <a class="" href="/" on:click={() => logout() && this.classList.add("active")}>Logout</a> -->
            {:else}
              <a class="" class:active={$page?.url?.pathname === "/auth/login"} href="/auth/login">Login</a>
              <!-- <a class="" class:active={$page?.url?.pathname === "/auth/signup"} href="/auth/signup">Signup</a> -->
            {/if}
          {/if}
        </li>

        <!-- {/each} -->
      </ul>
    </div>
  </div>
  <div class="navbar-center">
    <a class="outline-double rounded-full p-2 normal-case">$Collections</a>
  </div>
  <div class="navbar-end">
    {#if $page?.data?.is_logged_in}
    <a href="/auth">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  </a>
    {/if}
    <!-- <button class="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button> -->
    <!-- <button class="btn btn-ghost btn-circle">
      <div class="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span class="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button> -->
  </div>
</div>

<style>
  @media (min-width: 768px) {
    .dropdown .dropdown-content {
      visibility: visible;
      position: relative;
      z-index: 50;
      opacity: 1;
    }
  }
</style>