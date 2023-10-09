<script>
  import { Router, Route, Link } from 'svelte-routing';
  import Home from './components/pages/Home.svelte';
  import Disclaimer from './components/ui/Disclaimer.svelte';
  import ChangeLog from './components/pages/ChangeLog.svelte';
  import Crawl from './components/pages/Crawl.svelte';

  export let url = '';
</script>

<div id="app" class="md:w-96 mx-auto">
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
        <Link to="/crawl">
          <div
            class="py-2 px-3 border border-gray-900 text-gray-900 mr-2 focus:bg-gray-200 hover:bg-gray-200"
          >
            <i class="fa-solid fa-map" />
          </div>
        </Link>
      </div>
      <Link class="text-xs text-gray-500 p-2" to="/change-log">
        v1.231009.04
      </Link>
    </nav>
    <section>
      <Route path="/" component={Home} />
      <Route path="/crawl" component={Crawl} />
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
