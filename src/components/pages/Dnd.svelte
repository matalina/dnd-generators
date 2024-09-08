<script lang="ts">
  import DiceRoller from '../generators/DiceRoller.svelte';
  import SimpleOracle from '../generators/SimpleOracle.svelte';
  import Hex from '../generators/Hex.svelte';
  import Checks from '../generators/Checks.svelte';
  import Keywords from '../generators/Keywords.svelte';
</script>

<main class="md:flex">
  <div class="mx-auto w-full">
    <Keywords />
    <SimpleOracle />
    <DiceRoller />
    <Checks />
    <Hex />
  </div>
</main>
