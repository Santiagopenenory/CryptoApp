
<script>
    import {Link} from "svelte-routing";
</script>



  <nav class="navbar">
    <div class="nav-title"> CryptoFinder </div>
    <div class="nav-links">
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="AllCoins">All Coins</Link>
        <Link to="UserCoins">My Coins</Link>
        <Link to="CoinPlotter">Coin Plotter</Link>
    </div>
  </nav>


<style>

.navbar{
    display: flex;
    justify-content: space-between ;
    align-items: center;
    background-color: black;
    color:aliceblue;
}
.nav-links{
    display: block;
}
.nav-title{
    font-size: 1.5rem;
    margin: .5rem;
    font-style: bold;

}

</style>