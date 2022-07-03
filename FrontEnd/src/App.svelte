<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import CoinPlotter from "./routes/CoinPlotter.svelte";
  import AllCoins from "./routes/AllCoins.svelte";
  import TrendingCoins from './routes/TrendingCoins.svelte'
  import UserCoins from "./routes/UserCoins.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Login from "./routes/Login.svelte";

  export let url = "";
</script>

<body>
  <main>
    <!-- definicion de rutas para el Navbar -->
    <Router url="{url}">
      <Navbar/>
      <div>
        <Route path="/"><Login /></Route>
        <Route path="Home"><Home /></Route>
        <Route path="CoinPlotter" component="{CoinPlotter}"/>
        <Route path="AllCoins" component="{AllCoins}"/>
        <Route path="UserCoins" component="{UserCoins}"/>
        <Route path="TrendingCoins" component="{TrendingCoins}"/>
      </div>
    </Router>
  </main>
  <!-- TODO: agregar footer todo negro  -->
</body>

<style>
      main{
        max-width: 100%;
      }
</style>
