<script>
    import { onMount } from 'svelte';
    import Chart from 'chart.js/auto/auto.js';


    //Component props//
    export let dataArray;
    export let width;
    export let height;
    let portfolio;

    


    let labels = Array.from(Array(168).keys());
    let data = {
    labels: labels,
    datasets: [{
        data: dataArray,
        fill: false,
        borderColor: 'rgb(0, 0, 1)',
        tension: 0.1,
        pointStyle:'line'
    }]
    };
    let config = {
            type: 'line',
            data: data,
            options: {
                plugins: {
                    legend: {
                        display: false,
                    }
                },
                scales: {
                x: {
                    display: false
                    },
                y: {
                    display: false
                    }
                 }   
            }           
    }

    onMount(()=> {
      let ctx = portfolio.getContext('2d');
      let myChart = new Chart(ctx, config);
      // Initialize chart using default config set
    })
    
  </script>
    
    <div>
        <canvas bind:this={portfolio}/>
    </div>
  <style>
    div{
        width: 800px;
        height: 800px;
        margin: auto;
        margin: 0;
    }
  </style>