<script>
    import {isAuthenticated} from '@dopry/svelte-auth0';

</script>

{#if $isAuthenticated}
    <h1>HOLA ESTOY EN MY COINS</h1>
    
{/if}

