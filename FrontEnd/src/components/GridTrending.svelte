<script>
    import { onMount } from "svelte";
    import CardTrending from "./CardTrending.svelte";
    const url  = 'https://api.coingecko.com/api/v3/search/trending'
    let trendingCoins = []; 
    
    onMount(async ()=>{
        const res = await fetch(url);
        trendingCoins =  (await res.json()).coins;
        trendingCoins = trendingCoins.map((item,index,coindata)=>{
                        return item.item;
                    })
        })

</script>

<div class="card-columns">            
    <div class="card-group">
        <CardTrending coindata={trendingCoins[0]}/>
        <CardTrending coindata={trendingCoins[1]}/>
        <CardTrending coindata={trendingCoins[2]}/>
    </div>
    <div class="card-group">
        <CardTrending coindata={trendingCoins[3]}/>
        <CardTrending coindata={trendingCoins[4]}/>
        <CardTrending coindata={trendingCoins[5]}/>
    </div>
</div>


<style>
</style>

