<script lang="ts">
  import { current } from "../../../lib/map";
  import Hex from "./Hex.svelte";
</script>

<div class="map">
  <div class="hex-row">
    <Hex number={2} tileId={$current.exits[2]}/>
    <Hex number={3} tileId={$current.exits[3]}/>
  </div>
  <div class="hex-row even">
    <Hex number={7} tileId={$current.exits[7]}/>
    <Hex number={1} tileId={$current.id}/>
    <Hex number={4} tileId={$current.exits[4]}/>
  </div>
  <div class="hex-row">
    <Hex number={6} tileId={$current.exits[6]}/>
    <Hex number={5} tileId={$current.exits[5]}/>
  </div>
</div>

<style>
  .map {
    margin-left: 53px;
    height: 312px;
  }
  .hex-row {
    clear: left;
  }
  .hex-row.even {
    margin-left: -53px;
  }
</style>