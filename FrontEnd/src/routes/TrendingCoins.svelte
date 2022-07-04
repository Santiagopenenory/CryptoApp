<script>
    import GridTrending from '../components/GridTrending.svelte';
    import {isAuthenticated} from '@dopry/svelte-auth0';

</script>
<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
</svelte:head>

{#if $isAuthenticated}    
    <section class="trending-coins">
        <div class="container-trending-title">
            <h1 class="trending-title" >
                Trending Coins
            </h1>
        </div>
        <GridTrending/>
    </section> 
{/if}



<style>
    .trending-coins{
        height: 100vh;
    }

    .container-trending-title{
        padding-top: 5%;
        margin-left: 20px;
    }
    .trending-title{
        font-family: sans-serif bold;
        font-size: 70px;
        color: #000000;
    }
</style>