import {writable,derived} from 'svelte/store'


//Fetching de las cryptomonedas en general//
const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=true&price_change_percentage=7d';
let loadCoins = async ()=>{
    const res = await fetch(url);
    coins.set(await res.json());
}
loadCoins(); 
export const coins = writable([]);


//Fetching de las criptomonedas del usuario//
// const urlUser = 'api url';
// let loadUserCoins = async ()=>{
//     const res = await fetch(url);
//     userCoins.set(await res.json());
// }
// loadUserCoins(); 
// export const userCoins = writable([]);

const urlAllCoins = 'https://api.coingecko.com/api/v3/coins/list'

let allCoinsvalues = async()=>{
    const res = await fetch(urlAllCoins)
    allCoins.set(await res.json());

}
allCoinsvalues();
export const allCoins = writable([])




//Auth0 Autentication//
export const isAuthenticated = writable(false);
export const user = writable({});
export const popupOpen = writable(false);
export const error = writable();

export const tasks = writable([]);

export const user_tasks = derived([tasks, user], ([$tasks, $user]) => {
  let logged_in_user_tasks = [];

  if ($user && $user.email) {
    logged_in_user_tasks = $tasks.filter((task) => task.user === $user.email);
  }

  return logged_in_user_tasks;
});