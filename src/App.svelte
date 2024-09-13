<script>
  import { Router, Route, Link } from 'svelte-routing';
  import Home from './components/pages/Home.svelte';
  import Disclaimer from './components/ui/Disclaimer.svelte';
  import ChangeLog from './components/pages/ChangeLog.svelte';
  import Explorers from './components/pages/Explorers.svelte';
  import Solo from './components/pages/Solo.svelte';
  import Story from './components/pages/Story.svelte';

  import table from './assets/table.svg';
  import openBook from './assets/open-book.svg';
  import d20 from './assets/d20.svg';
  import magicBook from './assets/magic-book.svg';
  import Dnd from './components/pages/Dnd.svelte';

  export let url = '';
</script>

<div id="app" class="lg:w-1/3 mx-auto">
  <Router {url}>
    <nav class="flex items-center w-full p-3">
      <div class="flex-grow flex text-lg">
        <Link to="/solo">
          <div
            class="py-2 px-3 border border-gray-900 text-gray-900 mr-2 focus:bg-gray-200 hover:bg-gray-200"
          >
          <img src={openBook} alt="Story Mode" class="h-4"/>
          </div>
        </Link>
        <Link to="/solo/dnd">
          <div
            class="py-2 px-3 border border-gray-900 text-gray-900 mr-2 focus:bg-gray-200 hover:bg-gray-200"
          >
          <img src={magicBook} alt="D&amp;D Solo" class="h-4"/>
          </div>
        </Link>
        <Link to="/solo/cypher-system">
          <div
            class="py-2 px-3 border border-gray-900 text-gray-900 mr-2 focus:bg-gray-200 hover:bg-gray-200"
          >
          <img src={d20} alt="CS Solo" class="h-4"/>
          </div>
        </Link>
        <Link to="/all">
          <div
            class="py-2 px-3 border border-gray-900 text-gray-900 mr-2 focus:bg-gray-200 hover:bg-gray-200"
          >
          <img src={table} alt="All Tools" class="h-4"/>
          </div>
        </Link>
      </div>
      <Link class="text-xs text-gray-500 p-2" to="/change-log">
        v1.240913.01
      </Link>
    </nav>
    <section>
      <Route path="/" component={Dnd} />
      <Route path="/solo" component={Story} />
      <Route path="/solo/cypher-system" component={Solo} />
      <Route path="/solo/dnd" component={Dnd} />
      <Route path="/all" component={Home} />
      <Route path="/change-log" component={ChangeLog} />
    </section>
  </Router>
</div>

<style lang="postcss">
  .active {
    @apply bg-gray-700 text-gray-100 border-gray-100;
  }
</style>
