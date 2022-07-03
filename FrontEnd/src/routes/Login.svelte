<script>
    import {
      Auth0Context,
      Auth0LoginButton,
      Auth0LogoutButton,
      authError,
      authToken,
      idToken,
      isAuthenticated,
      isLoading,
      login,
      logout,
      userInfo,
    } from '@dopry/svelte-auth0';
    import Typewriter from 'svelte-typewriter';
    import {Link,navigate} from "svelte-routing";
</script>



    <Auth0Context domain="dev-0ysv1h3e.us.auth0.com" client_id="KnOiQpWa9cs04SkQNukLPTzKPEuUKnig">
        <div class="container">
        <Typewriter delay=1000 interval=60>
            <h1>¡Welcome to CryptoFinder App!</h1>
            <p>Please login for continue.</p>
        </Typewriter> 
    </div>
    <div class="button-container">
        <Auth0LoginButton class="login-btn">Login</Auth0LoginButton>
    </div>
    </Auth0Context>
    {#if $isAuthenticated}
        {navigate('/Home',{replace:true})}
    {/if}


    <!-- <pre>isLoading: {$isLoading}</pre>
    <pre>isAuthenticated: {$isAuthenticated}</pre>
    <pre>authToken: {$authToken}</pre>
    <pre>idToken: {$idToken}</pre>
    <pre>userInfo: {JSON.stringify($userInfo, null, 2)}</pre>
    <pre>authError: {$authError}</pre> -->
<!-- <Auth0LogoutButton class="btn">Logout</Auth0LogoutButton> -->



<style>
    h1{
        color: aliceblue;
        font-size: 70px;
        text-align: center;
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
    }
    p{
        color: aliceblue;
        font-size: 70px;
        text-align: center;
        font-family:Georgia, 'Times New Roman', Times, serif
    }
    .container{
        margin-top: 10%;
        align-items: center;
        justify-content: center;
    }
    .button-container{
        text-align: center;

    }

    @media screen and (max-width:445px){
        h1{
            font-size: 50px;
            margin-bottom: 10px;
        }

        p{
            font-size:50px
        }
    }
    @media screen and (max-width:320px){
        h1{
            font-size: 30px;
            margin-bottom: 10px;
        }

        p{
            font-size:30px
        }
    }
</style>
