

<script>
import Grid from '../components/Grid.svelte';
import Typewriter from 'svelte-typewriter';

</script>



<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
</svelte:head>


<section class="app-presentation">
    <div class="container">
        <div class="text">
                <Typewriter cascade delay=500 interval=70>
                    <h1 class='title'>CryptoFinder App</h1>
                    <p class='description'>Descripcion de la app</p>
                </Typewriter>
            </div>
            <img src="../public/assets/images/crypto2.png" class="img" alt="">
        </div>
    </section>
    
    
    <section class="trending-coins">
        <div class="container-trending-title">
            <h1 class="trending-title" >
                Trending Coins
            </h1>
        </div>
        <div class="container">
        </div>
        <Grid/>
    </section> 
    

<style>
    .app-presentation{
        padding-top: 100px;
        height: 100vh;

    }
    .trending-title{
        font-family: sans-serif bold;
        font-size: 70px;
        color: #000000;
    }
    .container-trending-title{
        padding-bottom: 5%;
        margin-left: 20px;
    }
    .container{
        width: 95%;
        display:flex;
        align-items: center;
        margin: auto;
        justify-content: space-around;
        
    }

    .img{
        display: block;
        height: 500px;
        object-fit: cover;
        width: auto;
        margin-left: 200px;
    }

    .text{
        width: 50%;
        color:aliceblue
    }
    .title{
        font-size: 80px;
        font-family: sans-serif;
    }
    .description{
        font-size: 30px;
        font-family:'Courier New', Courier, monospace;
    }


    @media screen and (max-width:1380px){
        .img{
            height: 390px;
        }
    }
    @media screen and (max-width:1220px){
        .img{
            height: 390px;
            margin-left: 150px;
        }
        .title{
            font-size: 60px;
        }
        .description{
            font-size: 20px;
        }
    }
    @media screen and (max-width:1000px){
        .img{
            height: 350px;
            margin-left: 100px;
        }
        .title{
            font-size: 50px;
        }
        .description{
            font-size: 20px;
        }
    }
    @media screen and (max-width:830px){
        .img{
            height: 280px;
            margin-left: 50px;
        }
        .title{
            font-size: 40px;
        }
        .description{
            font-size: 15px;
        }
    }
    @media screen and (max-width:680px){
        .img{
            height: 190px;
            margin-left: 0px;
        }
        .title{
            font-size: 45px;
        }
        .description{
            font-size: 15px;
        }
    }
    @media screen and (max-width:450px){
        .img{
            height: 260px;
            margin-left: none;
        }
        .text{
            width: 100%;
        }
        .title{
            font-size: 60px;
        }
        .description{
            font-size: 25px;
        }

        .container{
            width: 100%;
            flex-wrap: wrap;
            justify-content: center;
        }

        .trending-title{
            font-size: 50px;
        }
    }
</style>
