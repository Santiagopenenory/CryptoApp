<script>
export let coindata = [];
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
</svelte:head>




<div class="card bg-dark">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <div class="imagen">
        <img class="card-img-top" src="{coindata.large}" alt="">
    </div>
    <div class="card-body">
        <span class="text-light text-muted">{coindata.symbol}</span>
      <h5 class="card-title text-light">{coindata.name}</h5>
      <p class="card-text text-light">Precio: {coindata.price_btc} BTC</p>
    </div>
  </div>

  <style>
        img{
            height: 100px;
            width: 100px;
        }
        .imagen{
            margin: auto;
            padding-top: 10px;
        }


        .card{
            margin: 50px !important;
            border-radius: 12px !important;
        }
  </style>