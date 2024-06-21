<script>
  import { Router, Route, Link } from 'svelte-routing';
  import Home from './components/pages/Home.svelte';
  import Disclaimer from './components/ui/Disclaimer.svelte';
  import ChangeLog from './components/pages/ChangeLog.svelte';
  import Explorers from './components/pages/Explorers.svelte';
  import Solo from './components/pages/Solo.svelte';
  import Story from './components/pages/Story.svelte';

  export let url = '';
</script>

<div id="app" class="lg:w-1/3 mx-auto">
  <Router {url}>
    <nav class="flex items-center w-full p-3">
      <div class="flex-grow flex">
        <Link to="/">
          <div
            class="py-2 px-3 border border-gray-900 text-gray-900 mr-2 focus:bg-gray-200 hover:bg-gray-200"
          >
            <i class="fa-solid fa-house" />
          </div>
        </Link>
        <Link to="/explorers">
          <div
            class="py-2 px-3 border border-gray-900 text-gray-900 mr-2 focus:bg-gray-200 hover:bg-gray-200"
          >
          <i class="fa-sharp fa-regular fa-hexagon-image"></i>
          </div>
        </Link>
        <Link to="/solo">
          <div
            class="py-2 px-3 border border-gray-900 text-gray-900 mr-2 focus:bg-gray-200 hover:bg-gray-200"
          >
          <i class="fa-regular fa-dice-d20"></i>
          </div>
        </Link>
        <Link to="/story">
          <div
            class="py-2 px-3 border border-gray-900 text-gray-900 mr-2 focus:bg-gray-200 hover:bg-gray-200"
          >
          <i class="fa-light fa-book-open-cover"></i>
          </div>
        </Link>
      </div>
      <Link class="text-xs text-gray-500 p-2" to="/change-log">
        v1.240621.01
      </Link>
    </nav>
    <section>
      <Route path="/" component={Home} />
      <Route path="/explorers" component={Explorers} />
      <Route path="/solo" component={Solo} />
      <Route path="/story" component={Story} />
      <Route path="/change-log" component={ChangeLog} />
    </section>
    <Disclaimer />
  </Router>
</div>

<style lang="postcss">
  .active {
    @apply bg-gray-700 text-gray-100 border-gray-100;
  }
</style>
