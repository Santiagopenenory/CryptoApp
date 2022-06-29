<script>
import {coins} from '../store';
import {get} from 'svelte/store';
import Button from './Button.svelte';


let headings = ["#", "Coin", "Price", "Price Change", "24h Volume","Followed"];
//Copy store value//
let precios = get(coins);
console.log(precios);
</script>


<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
</svelte:head>

<main class='container p-4'>
  <div>
    <input type="text" name="text" class="input" placeholder="Search">
  </div>

  <div class="table-responsive border border-dark border-6 ">
    <table class="table table-dark table-hover ">
      <thead>
        <tr>
          {#each headings as heading}
            <th>{heading}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each $coins as coin, i}
          <tr>
            <td class="text-muted">{i}</td>
            <td>
              <img
                src={coin.image}
                alt={coin.name}
                style="width: 2rem"
                class="img-fluid"
              />
              <span>
                {coin.name}
              </span>
              <span class="ms-3 text-muted text-uppercase">
                {coin.symbol}
              </span>
            </td>
            <td>
              ${coin.current_price.toLocaleString()}
            </td>
            <td
              class={coin.price_change_percentage_24h > 0
                ? "text-success"
                : "text-danger"}
            >
              {coin.price_change_percentage_24h}
            </td>
            <td>
              {coin.total_volume.toLocaleString()}
            </td>
            <td style="width: 10px; height: 10px">
              <Button/>
            </td>
          </tr>
        {/each}
      </tbody>
    </table> 
  </div>
</main>



<style>
  div{
    padding-bottom: 20px;
  }
  .input {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
  font-weight: 500;
  font-size: 1.1vw;
  color: rgb(0, 238, 255);
  background-color: rgb(28,28,30);
  box-shadow: 0 0 .4vw rgba(0,0,0,0.5), 0 0 0 .15vw transparent;
  border-radius: 0.4vw;
  border: none;
  outline: none;
  padding: 0.4vw;
  width: 100%;
  height: 50px;
  transition: .4s;
}

.input:hover {
  box-shadow: 0 0 0 .15vw rgba(135, 207, 235, 0.186);
}

.input:focus {
  box-shadow: 0 0 0 .15vw skyblue;
}


thead{
  color: rgb(255, 255, 255);
}
</style>