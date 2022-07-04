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
    import {userCoins} from '../store.js'

    //TODO: Ver como resolver el problema de carga
    // const timeout = ()=>{navigate('/Home',{replace:true})}
    // setTimeout(timeout,5000)

    let loadUserCoins = async()=>{
        const urlUser = `${import.meta.env.VITE_API_SERVER}/get-coins?email=${$userInfo.email}`;
        const res = await fetch(urlUser);
        userCoins.set(await res.json());
    } 

    let addUser = async()=>{
        const newUser = {
                    name: $userInfo.name,
                    email:$userInfo.email,
                    coins:[]
            }
            const addUser = await fetch(`${import.meta.env.VITE_API_SERVER}/add-user`,{
                mode:"cors",
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            })  
    }

    let loadUser = async()=>{
        const res = await fetch(`${import.meta.env.VITE_API_SERVER}/check-user?name=${$userInfo.name}&email=${$userInfo.email}`);
        const result = await res.json();
        if(!result.exists){
            addUser();
        }
        loadUserCoins();
        navigate('/Home',{replace:true})
    }
</script>
        <Auth0Context domain={import.meta.env.VITE_DOMAIN} client_id={import.meta.env.VITE_CLIENT_ID}>
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
            {loadUser()}
        {/if}


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
