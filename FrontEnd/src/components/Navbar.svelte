
<script>
    import { onMount } from "svelte";
    import {Link,navigate} from "svelte-routing";
    import {isAuthenticated} from '@dopry/svelte-auth0';

    let showMobileMenu = false;
  

    const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu);
  

    const mediaQueryHandler = e => {
      if (!e.matches) {
        showMobileMenu = false;
      }
    };

  

    onMount(() => {
      const mediaListener = window.matchMedia("(max-width: 767px)");
  
      mediaListener.addListener(mediaQueryHandler);
    });
  </script>
  
  <nav>
        <div on:click={handleMobileIconClick} class=      {`mobile-icon${showMobileMenu ? ' active' : ''}`}>
            <div class="middle-line"></div>
        </div>
        <div class="nav-title"> CryptoFinder </div>
        <div class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>

          {#if !$isAuthenticated}
              <Link to="/">Login</Link>
            {:else}
              <Link to="Home">Home</Link>
              <Link to="AllCoins">All Coins</Link>
              <Link to="CoinPlotter" >Coin Plotter</Link>
              <Link to="UserCoins">My Coins</Link>
              <Link to="TrendingCoins">Trending Coins</Link>
          {/if}

        </div>
  </nav>
  
  <style>
    nav {
        display: flex;
        background-color: rgba(0, 0, 0, 1);
        font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        height: 60px;
        align-items: center;
        justify-content: space-between;
  }
  
  .nav-title{
    color: #fff;
    position: center;
    font-size: 1.8rem;
     margin: .5rem;
    font-style: bold;
  }

  .mobile-icon {
    width: 25px;
    height: 14px;
    position: relative;
    cursor: pointer;
  }

  .mobile-icon:after,
  .mobile-icon:before,
  .middle-line {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #fff;
    transition: all 0.4s;
    transform-origin: center;
  }

  .mobile-icon:before,
  .middle-line {
    top: 0;
  }

  .mobile-icon:after,
  .middle-line {
    bottom: 0;
  }

  .mobile-icon:before {
    width: 66%;
  }

  .mobile-icon:after {
    width: 33%;
  }

  .middle-line {
    margin: auto;
  }

  .mobile-icon:hover:before,
  .mobile-icon:hover:after,
  .mobile-icon.active:before,
  .mobile-icon.active:after,
  .mobile-icon.active .middle-line {
    width: 100%;
    
  }

  .mobile-icon.active:before,
  .mobile-icon.active:after {
    top: 50%;
    transform: rotate(-45deg);
  }

  .mobile-icon.active .middle-line {
    transform: rotate(45deg);
  }

  .navbar-list {
    display: none;
    justify-content: space-between;
    text-align: right;
  }

  .navbar-list.mobile {
    background-color: rgba(0, 0, 0, 1);
    position: fixed;
    display: block;
    height: calc(100% - 45px);
    bottom: 0;
    left: 0;
    z-index: 1 !important;
  }
  @media only screen and (min-width: 767px) {
    .mobile-icon {
      display: none;
    }

    .navbar-list {
      display: flex;
      padding: 0;
    }
    
    .navbar-list a {
        display: inline-flex;
    }
}

@media (max-width: 767px) {
    .navbar-list{
        width: 100%;
    }
    nav{
        justify-content: unset;
    }

}
  
  </style>