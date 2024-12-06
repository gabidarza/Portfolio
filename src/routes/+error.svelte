<script lang="ts">
	import { page } from '$app/stores';
</script>

{#if $page.status === 404}
	<h1>Page not found</h1>
{:else}
	<h1>{$page.status}: {$page.error?.message}</h1>
{/if}
