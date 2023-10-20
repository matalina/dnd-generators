<script type="ts">
  import { generateLandmark, generateRandomString, grid, terrain, MapTile, generateExits, current, path, locations } from "../../../lib/map";
  import { rollOnTable } from "../../../lib/tables";

  export let number: number|null = null;
  export let tileId: string|null = null;

  const entrance = {
    1: 3,
    2: 4,
    3: 1,
    4: 2,
  };

  function generate() {
    let tile:MapTile = {
      id: generateRandomString(6),
      grid: $grid,
      terrain: rollOnTable($terrain.table).description,
      landmark: generateLandmark(),
      exits: {},
    };
    tile = generateExits(tile, entrance[number], $current.id);

    $locations[tile.id] = tile;
    localStorage.locations = JSON.stringify($locations);

    return tile;
  }

  function goTo() {
    const tile = generate();
    $current = tile;
    localStorage.current = JSON.stringify($current);
    $path.push(tile.id);
    localStorage.path = JSON.stringify($path);
  }
</script>

{#if number}
<div class="square"  on:click={goTo} on:keypress={goTo}>
  {number}
</div>
{:else}
<div class="empty"></div>
{/if}

<style>
  .empty {
    width: 104px;
    height: 104px;
  }
  .square {
    width: 104px;
    height: 104px;
    background: #6C6;
    margin: 1px;
    display: flex;
    justify-content: center;
    place-items: center;
  }
</style>