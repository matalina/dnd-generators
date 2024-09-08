<script lang="ts">
  import DiceRoller from '../generators/DiceRoller.svelte';
  import Hex from '../generators/Hex.svelte';
  import Checks from '../generators/Checks.svelte';
  import Keywords from '../generators/Keywords.svelte';
  import NoGmiOracle from '../generators/NoGmiOracle.svelte';
</script>

<main class="md:flex">
  <div class="mx-auto w-full">
    <Keywords />
    <NoGmiOracle />
    <DiceRoller />
    <Checks />
    <Hex />
  </div>
</main>
