<script>
    import { message } from '$lib/stores/messaging.js'
    import { fade } from 'svelte/transition';
</script>

{#if $message.message != ''}
<div class="toast toast-end z-50 min-w-[20%]" transition:fade>
    <div class="alert {$message.class}">
      <div>
        <span>{$message.message}</span>
      </div>
    </div>
  </div>
{/if}