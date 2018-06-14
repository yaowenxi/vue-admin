<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Home from './components/page/Home'

export default {
  name: 'App',
  comments: {Home}
}
</script>

<style>
  .fa-icon {
    height: 1em;
    width: 1em;
    bottom: -0.125em;
    position: relative;
  }
</style>
