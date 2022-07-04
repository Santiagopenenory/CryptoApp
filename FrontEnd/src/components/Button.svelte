<script>
  import {userCoins} from '../store.js'
  import {userInfo} from '@dopry/svelte-auth0';
  export let description;
  export let coin;


  let checkCoin = ()=>{return $userCoins.includes(coin)}

  let addUserCoin = async()=>{
                               userCoins.set([...$userCoins,coin])
                              const addcoin = await fetch(`${import.meta.env.VITE_API_SERVER}/add-coin`,{
                              mode:"cors",
                              method: "PUT",
                              headers:{
                                  "Content-Type": "application/json"
                              },
                              body: JSON.stringify({email:$userInfo.email,
                                                    coin:coin})
                          })
    }

  let removeUserCoin = async()=>{
                            userCoins.update(userCoins =>{return userCoins.filter(e=>coin!==e)})
                            const addcoin = await fetch(`${import.meta.env.VITE_API_SERVER}/remove-coin`,{
                              mode:"cors",
                              method: "PUT",
                              headers:{
                                  "Content-Type": "application/json"
                              },
                              body: JSON.stringify({email:$userInfo.email,
                                                    coin:coin})
                          });
                        }

  //TODO: Implementar interaccion con la api para mantener persistencia//
    let changeDescription = ()=>{
    let cointainsCoin = checkCoin()    
    if(description === "Follow" && !cointainsCoin){
          description = "Unfollow";
          addUserCoin();
      }else{
        if(description==="Unfollow" && cointainsCoin){
          description= "Follow";
          removeUserCoin();
        }
      }
  }
</script>
<div>
    <button>
        <span on:click={changeDescription} class="button_top"> {description}
        </span>
      </button>
</div>



<style>
    button {
  /* Variables */
 --button_radius: 0.75em;
 --button_color: #000000;
 --button_outline_color: #4d4d4d;
 font-size: 13px;
 font-weight: bold;
 border: none;
 border-radius: var(--button_radius);
 background: var(--button_outline_color);
}

.button_top {
 display: block;
 box-sizing: border-box;
 border: 2px solid var(--button_outline_color);
 border-radius: var(--button_radius);
 padding: 0.75em 1.5em;
 background: var(--button_color);
 color: rgb(255, 255, 255);
 transform: translateY(-0.2em);
 transition: transform 0.1s ease;
}

button:hover .button_top {
  /* Pull the button upwards when hovered */
 transform: translateY(-0.33em);
}

button:active .button_top {
  /* Push the button downwards when pressed */
 transform: translateY(0);
}

</style>