<script>
    let valor = "Follow"
    function cambiar(){valor = "hola"}
</script>


<div>
    <button>
        <span on:click={cambiar} class="button_top"> {valor}
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
 color: rgb(145, 145, 145);
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