<script>
    import {isAuthenticated,userInfo} from '@dopry/svelte-auth0';
    import {userCoins} from '../store.js'
</script>

{#if $isAuthenticated}
    <h1>HOLA ESTOY EN MY COINS {JSON.stringify($userCoins)}</h1>
    
{/if}

