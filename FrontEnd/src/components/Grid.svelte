<script>
    import { onMount } from "svelte";
    import Card from "./Card.svelte";
    const url  = 'https://api.coingecko.com/api/v3/search/trending'
    let trendingCoins = []; 
    
    onMount(async ()=>{
        const res = await fetch(url);
        trendingCoins =  (await res.json()).coins;
        console.log(trendingCoins[0].item)
        trendingCoins = trendingCoins.map((item,index,coindata)=>{
                        return item.item;
                    })
        })

</script>

<div class="card-columns">            
    <div class="card-group">
        <Card coindata={trendingCoins[0]}/>
        <Card coindata={trendingCoins[1]}/>
        <Card coindata={trendingCoins[2]}/>
    </div>
    <div class="card-group">
        <Card coindata={trendingCoins[3]}/>
        <Card coindata={trendingCoins[4]}/>
        <Card coindata={trendingCoins[5]}/>
    </div>
</div>


<style>
</style>

