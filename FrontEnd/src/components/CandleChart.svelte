  <script>
  // @ts-ignore
  import { chart } from "svelte-apexcharts";
  export let input = [];
  export let title = "";
    let options = {
      series: [{
        data: input
        }],
          chart: {
          type: 'candlestick',
          height: 450
        },
        title: {
          text: title.toLocaleUpperCase(),
          align: 'left',
          style:{
            color:'black',
            fontSize: '25px'
          }
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          tooltip: {
            enabled: true
          }
        }
      };
  </script>


<div use:chart={options}/>
