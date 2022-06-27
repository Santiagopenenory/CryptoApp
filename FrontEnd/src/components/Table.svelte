<script>
// @ts-nocheck
import {Datatable,SearchInput,PaginationButtons,PaginationRowCount} from 'svelte-simple-datatables';
import {coins} from '../store';
const settings = { 
    columnFilter: true, 
    rowsPerPage: 25,
    blocks: {
        searchInput: false, 
        paginationButtons: false,
        paginationRowCount: false,
    }
}
let rows;

</script>


<!-- svelte strap  -->
<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
</svelte:head>



<section>
    <aside>
        {#if $rows}
        <SearchInput id={'my-table'}/>
        {/if}
    </aside>
    
   
    <div>
        <Datatable {settings} data={$coins} bind:dataRows={rows} id={'my-table'}>
            <thead>
                <th data-key="#">#</th>
                <th data-key="Coin_name">Coin Name</th>
                <th data-key="Price">Price</th>
                <th data-key="Price_Change">Price Change</th>
                <th data-key="Volume">24h Volume</th>
                <th data-key="last_7_days">Last 7 days</th>
            </thead>
            <tbody>
            {#if rows}
                {#each $rows as row,i}
                <tr>
                    <td>{i}</td>
                    <td>
                        <img
                        src={row.image}
                        alt={row.name}
                        style="width: 1.5rem"
                        class="img-fluid"
                      />
                      <span>
                        {row.name}
                      </span>
                      <span class="ms-3 text-muted text-uppercase">
                        {row.symbol}
                      </span>
                    </td>
                    <td>${row.current_price.toLocaleString()}</td>
                    <td
                    class={row.price_change_percentage_24h > 0
                      ? "text-success"
                      : "text-danger"}
                  >
                    {row.price_change_percentage_24h}
                  </td>
                  <td>
                    {row.total_volume.toLocaleString()}
                  </td>
                  <td>
                    {console.log("Das")}
                  </td>
                </tr>
                {/each}
            {/if}
            </tbody>
        </Datatable>
    </div>
    
    <aside>
        {#if $rows}
            <PaginationButtons id={'my-table'}/>
            <PaginationRowCount id={'my-table'}/>
        {/if}
    </aside>
</section>

<style>
    section{padding:24px 48px;background:#eee;border-radius:8px;}
    aside{display:flex;justify-content:space-between;padding:8px 16px;background:#fff;border-radius:8px;margin:8px 0;}
    div{padding:8px 0;height:400px;background:#fff;border-radius:8px;}
    td{text-align:center;padding:4px 8px;white-space:nowrap;}
</style>
