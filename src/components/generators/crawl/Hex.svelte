<script type="ts">
  import { generateLandmark, generateRandomString, grid, terrain, MapTile, generateExits, current, path, locations } from "../../../lib/map";
  import { rollOnTable } from "../../../lib/tables";

  export let number: number|null = null;
  export let tileId: string|null = null;
  let tile: MapTile = $locations?.[tileId];
  
  $: generated = !!tile?.id;

  const entrance = {
    1: 4,
    2: 5,
    3: 6,
    4: 1,
    5: 2,
    6: 3,
  };


  function generate() {
    if(tileId) return;
    tile = {
      id: generateRandomString(6),
      grid: $grid,
      terrain: rollOnTable($terrain.table).description,
      landmark: generateLandmark(),
      exits: {},
    };

    tile = generateExits(tile, entrance[number], $current.id);

    $locations[tile.id] = tile;
    localStorage.locations = JSON.stringify($locations);
  }

  function goTo() {
    console.log(tile);
    console.log(generated);
    generate();
    $current = tile;
    localStorage.current = JSON.stringify($current);
    $path.push(tile.id);
    localStorage.path = JSON.stringify($path);
  }
</script>

<div class="hex" class:generated on:click={goTo} on:keypress={goTo}>
  <div class="top"></div>
  <div class="middle">{number}</div>
  <div class="bottom"></div>
</div>

<style>
.hex {
  float: left;
  margin-left: 3px;
  margin-bottom: -26px;
}
.hex .top {
  width: 0;
  border-bottom: 30px solid #6C6;
  border-left: 52px solid transparent;
  border-right: 52px solid transparent;
}
.hex .middle {
  width: 104px;
  height: 60px;
  background: #6C6;
  display: flex;
  justify-content: center;
  place-items: center;
}
.generated {
  color: white;
}
.hex .bottom {
  width: 0;
  border-top: 30px solid #6C6;
  border-left: 52px solid transparent;
  border-right: 52px solid transparent;
}
.hex-row {
  clear: left;
}
.hex-row.even {
  margin-left: 53px;
}
</style>