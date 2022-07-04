<script>
    import {isAuthenticated} from '@dopry/svelte-auth0';
    import GridUserCoins from '../components/GridUserCoins.svelte';
</script>


{#if $isAuthenticated}
    <div>
        <h1>My Coins</h1>
    </div>
    <GridUserCoins/>
{/if}

<style>
    h1{
        margin: 50px;
        margin-bottom: 70px;
        font-family:sans-serif bold;
        font-size: 70px;
        color: rgb(0, 0, 0);
    }

</style>

