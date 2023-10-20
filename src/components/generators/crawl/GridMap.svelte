<script>
  import Square from "./Square.svelte";
  import { current } from "../../../lib/map";
</script>

<div class="map">
  <div class="row">
    <Square number={0}/>
    <Square number={2} tileId={$current.exits[2]}/>
    <Square number={0}/>
  </div>
  <div class="row">
    <Square number={5} tileId={$current.exits[5]}/>
    <Square number={1} tileId={$current.id}/>
    <Square number={3} tileId={$current.exits[5]}/>
  </div>
  <div class="row">
    <Square number={0}/>
    <Square number={4} tileId={$current.exits[4]}/>
    <Square number={0}/>
  </div>
</div>

<style>
  .map {
    height: 312px;
  }
  .row {
    display: flex;
  }
</style>