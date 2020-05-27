<template>
  <div id="app">
    <HeaderBar />
    <div class="main-section columns">
      <main class="column">
        <Dashboard />
      </main>
    </div>
  </div>
</template>

<script>
  import HeaderBar from '@/components/header-bar';
  import Heroes from '@/components/heroes';
  import Dashboard from '@/dashboard/Dashboard';

  export default {
    name: 'App',
    components: { HeaderBar, Heroes, Dashboard }
  };
</script>

<style lang="scss">
  @import '@/design/index.scss';
</style>