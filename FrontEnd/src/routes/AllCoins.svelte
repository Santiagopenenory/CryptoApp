<script>
    import Table from '../components/Table.svelte';
    import {isAuthenticated} from '@dopry/svelte-auth0';
</script>
      
<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
</svelte:head>
{#if $isAuthenticated}
  <Table/>
{/if}

<style>
</style>