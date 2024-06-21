<script lang="ts">
  import { onMount, afterUpdate } from 'svelte';
  import { format } from 'timeago.js';
  import TurndownService from 'turndown';
  TurndownService.prototype.escape = (text) => text;
  import { createEventDispatcher } from 'svelte';

  export let content;

  const dispatch = createEventDispatcher();
  const turndown= new TurndownService();
  let element;
  $: empty = Object.keys($content).length > 0;

  function classStyle(type: string) {
    return `${type}-mode`;
  } 

  afterUpdate(() => {
    scrollToBottom(element);
  });
  onMount(() => {
    scrollToBottom(element)
  });

  const scrollToBottom = async (node) => {
    node.scroll({ top: node.scrollHeight, behavior: 'smooth' });
  }; 

  function clearSession() {
    localStorage.removeItem('content');
    $content = {};
  }

  function copySession() {
    if (navigator.clipboard) {
      const textContent = element.getHTML();
      const copy = turndown.turndown(textContent, {
        headingStyle: 'atx',
        bulletListMarker: '*',
        codeBlockedStyle: 'fenced',
        emDelilmiter: '_',
        strongDelimiter: '**',
      });
      navigator.clipboard.writeText(copy);
    }
  }

  function startSession() {
    dispatch('start');
  }

</script>

<div bind:this={element} style="overflow:auto; height:400px;">
  {#each Object.keys($content) as key}
    <div class={`entry ${classStyle($content[key].type)}`}>
      {@html $content[key].output}
      <br/><small>{format(parseInt(key))}</small>
    </div>
  {/each}
</div>
<div class="flex justify-end gap-2 mt-2">
  <button 
    disabled={empty}
    class="py-2 px-3 border bg-orange-300 border-orange-900 text-orange-900 hover:bg-orange-400 focus:bg-orange-400"
    class:disable={empty} 
    on:click={startSession}
  >Start Session</button>
  <button 
    disabled={!empty}
    class="py-2 px-3 border bg-orange-300 border-orange-900 text-orange-900 hover:bg-orange-400 focus:bg-orange-400" 
    class:disable={!empty} 
    on:click={clearSession}
  >Clear</button>
  <button 
    disabled={!empty}
    class:disable={!empty} 
    class="py-2 px-3 border bg-orange-300 border-orange-900 text-orange-900 hover:bg-orange-400 focus:bg-orange-400" 
    on:click={copySession}
  >Copy</button>
</div>

<style lang="postcss">
  .disable {
    @apply disabled:bg-orange-100 disabled:border-orange-700 disabled:text-orange-700 disabled:cursor-not-allowed;
  }
  .entry {
    @apply mb-2 border-b;
  }
  .input-mode {
    
  }
  .oracle-mode {
    
  }
  .task-mode {
    
  }
  .roll-mode {

  }
  .start-mode {
    
  }
</style>