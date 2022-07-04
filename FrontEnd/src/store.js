import {writable} from 'svelte/store';

//Fetching de las cryptomonedas en general//
const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=7d';
let loadCoins = async ()=>{
    const res = await fetch(url);
    coins.set(await res.json());
}
loadCoins(); 
export const coins = writable([]);



//Fetching de las criptomonedas del usuario//
export const userCoins = writable([]);




//Fetching allCoins
const urlAllCoins = 'https://api.coingecko.com/api/v3/coins/list'
let allCoinsvalues = async()=>{
    const res = await fetch(urlAllCoins)
    allCoins.set(await res.json());

}
allCoinsvalues();
export const allCoins = writable([])
