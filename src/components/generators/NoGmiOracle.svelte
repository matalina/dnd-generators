<script lang="ts">
import { getRandomKeywords } from "../../lib/keywords";
import { DiceRoll } from '@dice-roller/rpg-dice-roller';
import ToggleContent from "../ui/ToggleContent.svelte";
import Answer from "../ui/Answer.svelte";

const oracle = [
  [1, 2, 'No, and'],
  [3, 7, 'No'],
  [8, 9, 'No, but'],
  [10, 10, 'Maybe'],
  [11, 12, 'Yes, but'],
  [13, 18, 'Yes'],
  [19, 20, 'Yes, and'],
];

let question = '';
let oldQuestion = question;
let answer = '';
let roll;
let ask;
let isAndOrBut = false;
let keywords = [];

function getAnswer() {
  reset();
  oldQuestion = question;
  question = '';
  const notation = `1d20`;
  roll = new DiceRoll(notation);
  ask = roll.total;
  if (ask < 0) {
    return 'No, and';
  }
  if (ask > 20) return 'Yes, and';
  for (let i in oracle) {
    const range = oracle[i];
    if(ask >= range[0] && ask <= range[1]) answer = range[2].toString();
  }
  if (answer.includes('and') || answer.includes('but') || answer.toLowerCase().includes('maybe')) {
    isAndOrBut = true;
    keywords = [...getRandomKeywords()];
  }
  return answer;
}

function reset() {
  answer = '';
  oldQuestion = '';
  roll = 0;
  ask = 0;
  keywords = [];
  isAndOrBut = false;
}
</script>

<ToggleContent hide={false}>
  <span slot="title">Oracle</span>

  <form on:submit|preventDefault={getAnswer} class="flex flex-col">
    <label for="question">
      <input type="text" id="question" bind:value={question} class="border py-2 px-3 w-full mb-2" />
    </label>
  </form>

  <div class="justify-center w-full">
    {#if answer}
    <Answer answer={`<em><strong>Q:</strong> ${oldQuestion}</em><br/>
      <small class="text-xs text-blue-500">(${roll.output})</small><br/>
      <strong>${answer}</strong> 
      ${isAndOrBut ? `${keywords.join(', ')}<br/>`: ''}
      `} />
    {/if}
  </div>
  <div class="flex justify-center">
    <button on:click={getAnswer} class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800">Generate</button>
    <button on:click={reset} class="border py-2 px-3 mb-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800">Reset</button>
  </div>
</ToggleContent>
