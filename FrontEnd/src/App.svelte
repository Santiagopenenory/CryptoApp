<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/Home.svelte";
  import About from "./routes/About.svelte";
  import CoinPlotter from "./routes/CoinPlotter.svelte";
  import AllCoins from "./routes/AllCoins.svelte";
  import UserCoins from "./routes/UserCoins.svelte";
  import Navbar from "./components/Navbar.svelte";

  export let url = "";
</script>

<body>
  <main>
    <!-- definicion de rutas para el Navbar -->
    <Router url="{url}">
      <Navbar/>
      <div>
        <Route path="/"><Home /></Route>
        <Route path="about" component="{About}"/>
        <Route path="CoinPlotter" component="{CoinPlotter}"/>
        <Route path="AllCoins" component="{AllCoins}"/>
        <Route path="UserCoins" component="{UserCoins}"/>
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
