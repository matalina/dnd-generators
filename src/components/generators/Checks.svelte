<script lang="ts">
  import { DiceRoll } from '@dice-roller/rpg-dice-roller';
  import ToggleContent from '../ui/ToggleContent.svelte';
  import { getRandomKeywords } from '../../lib/keywords';
  import Answer from '../ui/Answer.svelte';

  let target = 12;
  let advantage = false;
  let disadvantage = false;
  let modifier = 0;
  let oldTarget = '0';
  let oldModifier ='0';
  let question = '';
  let oldQuestion = '';
  let roll = undefined;
  let answer = '';

  function answerQuestion(value: number) {
    let string = '';
    if (value >= parseInt(target.toString()) + 5) {
      string += '<strong>Success</strong>';
      string += ' and ' + getRandomKeywords().join(', ');
    }else if (value >= parseInt(target.toString()) && value < parseInt(target.toString() + 5)) {
      string += '<strong>Success</strong>';
    } else if (value < parseInt(target.toString()) - 1 && value >= 2){
      string += `<strong>Fail</strong>`;
      string += ' but '+ getRandomKeywords().join(', ');
    } else {
      string += `<strong>Fail</strong>`;
      string += ' and ' + getRandomKeywords().join(', ');
    }

    if (value === 1) {
      string += `<br/><strong>Critical Fail</strong>`;
    }
    if (value === 20) {
      string += '<br/><strong>Critical Success</strong>';
    }
    return `${string}`;
  }

  function generate() {
    answer = '';
    oldQuestion = question;
    oldTarget = target.toString();
    oldModifier = modifier.toString();
    let formula = '1d20';
    if (advantage) formula = '2d20d1';
    if (disadvantage) formula = '2d20dh1';
    roll = new DiceRoll(`${formula}+${modifier}`);
    answer = answerQuestion(roll.total);
    // clear input fields
    question = '';
    modifier = 0;
  }
</script>

<ToggleContent hide={false}>
  <span slot="title">Checks</span>
  <form class="flex flex-col" on:submit|preventDefault={generate}>
    <label for="question">
      Task:
      <input
        type="text"
        id="question"
        bind:value={question}
        class="border py-2 px-3 w-full mb-2"
      />
    </label>
    <div class="flex gap-3">
      <label for="target">
        DC:
        <input
          type="number"
          id="level"
          bind:value={target}
          class="border py-2 px-3 w-full mb-2"
        />
      </label>
      <label for="modifier">
        Modifier:
        <input
          type="number"
          id="modifier"
          bind:value={modifier}
          class="border py-2 px-3 w-full mb-2"
        />
      </label>
    </div>
    <div class="flex justify-center gap-3">  
      <label for="advantage" class="flex gap-3 items-center">
        <span class="py-2 px-3 w-full mb-2">Advantage?</span>
        <input
          type="checkbox"
          id="advantage"
          bind:value={advantage}
          class="border py-2 px-3 w-full mb-2"
        />
      </label>
      <label for="disadvantage" class="flex gap-3 items-center">
        <span class="py-2 px-3 w-full mb-2">Disadvantage?</span>
        <input
          type="checkbox"
          id="disadvantage"
          bind:value={disadvantage}
          class="border py-2 px-3 w-full mb-2"
        />
      </label>
    </div>
    <div class="flex justify-center">
      <button
        type="submit"
        class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
        >Answer</button
      >
    </div>
  </form>

  {#if answer}
  <Answer answer={`<em><strong>Q:</strong> ${oldQuestion} (${oldTarget})</em><br />
    <small class="text-xs text-blue-500">(${roll.output})</small><br />
    ${answer}`}/>
  {/if}
</ToggleContent>
