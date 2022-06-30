<script>
//Atributos foto,nombre,simbolo,precio, 

export let coindata = [];
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
</svelte:head>




<div class="card bg-dark">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img class="card-img-top" src="{coindata.large}" alt="">
    <div class="card-body">
      <h5 class="card-title text-light">Card title</h5>
      <p class="card-text text-light">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text text-light"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>

  <style>
        img{
            height: 100px;
            width: 100px;
        }

        .card{
            margin: 15px !important;
        }
  </style>