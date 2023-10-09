<script type="ts">
  import { createEventDispatcher } from "svelte";
  import { terrain, grid, generateExits, MapTile, generateLandmark, generateRandomString } from "../../../lib/map";
  import { rollOnTable } from "../../../lib/tables";

  let entrance = 1;
  const dispatch = createEventDispatcher();

  function generate() {
    let tile:MapTile = {
      id: generateRandomString(6),
      grid: $grid,
      terrain: rollOnTable($terrain.table).description,
      landmark: generateLandmark(),
      exits: {},
    };
    tile = generateExits(tile, entrance, null);
    dispatch('create-tile', {tile});
  }
</script>

<form on:submit|preventDefault={generate} class="flex flex-col">
  <button type="submit" class="border py-2 px-3 mb-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800">
    Begin
  </button>
</form>
