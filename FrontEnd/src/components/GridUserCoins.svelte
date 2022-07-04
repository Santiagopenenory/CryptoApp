<script>
    import {userCoins,coins} from '../store.js'
    import CardUserCoins from './CardUserCoins.svelte';


    let getCoinsData = (element)=>{
        for (let index = 0; index < $coins.length; index++) {
           if($coins[index].symbol === element){
                return $coins[index];
           }
        }
    }
</script>

<div class="container">
    {#each $userCoins as symbol}      
        <CardUserCoins coindata={getCoinsData(symbol)}/>        
    {/each}
</div>



<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
</svelte:head>

<style>
    .container{
        display: grid !important;
        grid-template-columns: repeat(auto-fill,minmax(300px,1fr))!important;
        grid-auto-rows: minmax(200px,auto);
        grid-gap: 20px !important;
        padding: 20px !important;
    }
</style>