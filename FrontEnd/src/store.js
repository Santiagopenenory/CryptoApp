import {writable} from 'svelte/store'

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true';
let loadCoins = async ()=>{
    const res = await fetch(url);
    coins.set(await res.json());
}
loadCoins(); 

export const coins = writable([])
console.log(coins)


