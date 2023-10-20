<script type="ts">
  import { terrain, grid, generateExits, MapTile, generateLandmark, generateRandomString, current, start, locations, path } from "../../../lib/map";
  import { rollOnTable } from "../../../lib/tables";

  let entrance = 1;

  function generate() {
    let tile:MapTile = {
      id: generateRandomString(6),
      grid: $grid,
      terrain: rollOnTable($terrain.table).description,
      landmark: generateLandmark(),
      exits: {},
    };
    tile = generateExits(tile, entrance, null);
    
    $current = tile;
    $start = tile;
    $locations[tile.id] = tile;
    $path.push(tile.id);

    localStorage.start = JSON.stringify($start);
    localStorage.current = JSON.stringify($current);
    localStorage.path = JSON.stringify($path);
    localStorage.locations = JSON.stringify($locations);
  }
</script>

<form on:submit|preventDefault={generate} class="flex flex-col">
  <button type="submit" class="border py-2 px-3 mb-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800">
    Begin
  </button>
</form>
