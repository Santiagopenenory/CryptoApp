import {writable} from 'svelte/store'


//Fetching de las cryptomonedas en general//
const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=7d';
let loadCoins = async ()=>{
    const res = await fetch(url);
    coins.set(await res.json());
}
loadCoins(); 
export const coins = writable([]);


//Fetching de las criptomonedas del usuario//
const urlUser = 'api url';
let loadUserCoins = async ()=>{
    const res = await fetch(url);
    userCoins.set(await res.json());
}
loadUserCoins(); 

export const userCoins = writable([]);



