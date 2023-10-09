<script type="ts">
import { loadImage } from 'canvas';
  import { grid, gridTypes, terrain, terrainTypes,start, path,locations } from '../../lib/map';
  import ToggleContent from "../ui/ToggleContent.svelte";
  import Start from '../generators/crawl/Start.svelte';

  function saveTile(e) {
    console.log(e.detail);
    const tile = e.detail.tile;

    $locations[tile.id] = tile;
    $path.push(tile.id);
    $start = tile;

    localStorage.start = JSON.stringify($start);
    localStorage.path = JSON.stringify($path);
    localStorage.locations = JSON.stringify($locations);
  }

  function clear() {
    $start = null;
    $path = [];
    $locations = {};
    localStorage.removeItem('start');
    localStorage.removeItem('path');
    localStorage.removeItem('locations');
  }

</script>

<main class="md:flex">
  <div class="mx-auto w-full">
    <ToggleContent hide={false}>
      <span slot="title">Random Map Crawl</span>
      <label for="grid">
        <select bind:value={$grid} class="border py-2 px-3 w-full mb-2 capitalize">
          {#each gridTypes as type}
          <option value={type}>{type.name}</option>
          {/each}
        </select>
      </label>
      <label for="terrain">
        <select bind:value={$terrain} class="border py-2 px-3 w-full mb-2 capitalize">
          {#each terrainTypes as type}
          <option value={type}>{type.name}</option>
          {/each}
        </select>
      </label>
      {#if $start === null}
        <Start on:create-tile={saveTile}/>
      {:else}
      <button type="submit" class="border py-2 px-3 mb-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800" on:click={clear}>Clear All</button>
      {/if}

    </ToggleContent>
  </div>
</main>
