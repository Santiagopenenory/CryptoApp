
<script>
    export let coindata = [];
</script>
<div class="Card" style={coindata.price_change_percentage_7d_in_currency > 0
    ? "background-color:#00b300;":"background-color:#ff4d4d;"}>
<!-- TODO: configurar el color de fondo segun porcentaje  bg-danger bg-success-->
    <div class="card-body ">
        <h1 class="card-title-1">{coindata.symbol.toUpperCase()}</h1>
        <p class="Card-title-2">{Math.round(coindata.price_change_percentage_7d_in_currency*10)/10} %</p>
        <p class="price">Precio: {coindata.current_price} BTC</p>
        <div class="image-container">
            <img class="img"  src={coindata.image} alt="Card image cap">
        </div>
    </div>
  </div>


<style>

    .Card{
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: solid 1.5px black !important;
        width: 14rem;
        height: 19rem;
        background-color: rgb(255, 68, 68);
    }
    
    h1{
        text-align: center;
        font-size: 40px;
        color: aliceblue;
    }
    
    
    p{
        text-align: center;
        font-size: 30px;
        color: aliceblue;
    }
    .price{
        text-align: center;
        font-size: 20px;
        color: aliceblue;
    }
    .img{
        height: 100px;
        width: 100px;
        margin: auto;
    }

    .image-container{
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 768px){
        .Card{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: auto;
        }
    }
</style>