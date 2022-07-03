<script>
    import CandleChart from '../components/CandleChart.svelte';
    import {allCoins} from '../store';
    import {isAuthenticated} from '@dopry/svelte-auth0';
    //error number
    const error = -1;

    let coinName = '';
    let coinId;
    let days;
    let vsCurrency;
    let data = [];
    let graficar = false;
    let url;

    //Chart ref
    let ref;
    let input;


    let getCoinid = ()=>{
       for (let index = 0; index < $allCoins.length; index++) {
            if($allCoins[index].name.toUpperCase() === coinName.toUpperCase()){
                return $allCoins[index].id;
            }
       }
       return error;
    }

    let loadChart = async() =>{
        console.log("estoy en load")
        coinId = getCoinid()
        if(coinId !== error){
            url = `https://api.coingecko.com/api/v3/coins/${coinId}/ohlc?vs_currency=${vsCurrency}&days=${days}`
            const res = await fetch(url);
            data = await res.json();
            graficar = true;
        }

    }
    let removeChart = ()=>{graficar = false;ref.parentNode.removeChild(ref);}

</script>
<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
</svelte:head>

{#if $isAuthenticated}    
    <h1>Make A Candlestick Chart</h1>
    <div class="container">
        <div class="container-inputs" bind:this={input}>
            <input type="text" bind:value={coinName}  class="input" placeholder="Coin Name">
            <input type="text" bind:value={days} name="text" class="input" placeholder="Data up to number of days ago(1..365)">
            <input type="text" bind:value={vsCurrency} name="text" class="input" placeholder="The target currency of market data (usd, eur, jpy, etc.)">
        </div>
        <div class="container-buttons">
            <button on:click={loadChart}  > Add Chart </button>
            <button on:click={removeChart}  > Remove Chart </button>
        </div>
    </div>
    <div class="container-chart">
        {#if graficar}
            <CandleChart bind:this={ref} input={data} title={coinId}/{vsCurrency} />
        {/if}
    </div>
{/if}


<style>

    h1{
        margin: 50px;
        margin-bottom: 70px;
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 70px;
        color: #000;
    }

    .container{
        margin-top: 30px;
    }
    .container-chart{
        margin: auto;
        margin-top: 5%;
        max-width: 1400px;
        background-color: rgb(255, 255, 255);
        
    }

    .container-inputs{
        display: inline-block;
    }
    .container{
        display: flex    !important;;
        justify-content: space-between !important;
    }
    
    
    @media screen and (max-width:1400px){
        button{
            margin: 20px;
        }
        
        .container-buttons{
            align-items: center;
            margin: auto;
            margin-top: 20px;
        }
        
        .container{
            flex-wrap: wrap; 
            justify-content: center !important;
        }
        button{
            margin-top: 12px;

        }
    }
    @media screen and (max-width:991px){
        .container-inputs{
            margin: auto;
            justify-content: center;
            align-items: center;
        }
        .input{
            max-width: 200px !important;
        }
    }
    @media screen and (max-width:768px){
        .input{
            max-width: 150px !important;
            height: 50px !important;
            border-radius: 12px !important;
        }
    }

    @media screen and (max-width:490px){
        .container-inputs{
            flex-wrap: wrap;
            margin: auto !important;;
            
        }

        .container{
            margin: auto !important;
            justify-content: center !important;
            align-items: center !important;
        }
        .input{
            max-width: 100% !important;
            margin: 20px;
        }

        button{
            margin: auto;
            padding: 1rem 1rem;
        }

        h1{
            font-size: 50px;
        }
    }
    @media screen and (max-width:385px){
    
        button{
            margin-top: 14px;
        }
        h1{
            font-size: 40px;
        }


    }




    /* input style */
.input {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
  font-weight: 300;
  font-size: 18px;
  color: #fff;
  background-color: rgb(28,28,30);
  box-shadow: 0 0 .4vw rgba(0,0,0,0.5), 0 0 0 .15vw transparent;
  border-radius: 0.4vw;
  border: none;
  outline: none;
  padding: 0.4vw;
  max-width: 270px;
  transition: .4s;
  padding: 14px;
}

.input:hover {
  box-shadow: 0 0 0 .15vw rgba(135, 207, 235, 0.186);
}

.input:focus {
  box-shadow: 0 0 0 .15vw skyblue;
}


/* button style */
button {
  padding: 1.3em 3em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

button:hover {
  background-color: #000000;
  color: #fff;
}
</style>