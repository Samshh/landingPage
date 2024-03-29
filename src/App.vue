<script setup>

</script>

<template>
  <div id="app">
    <div class="background"></div>
    <router-link to="/"></router-link>
    <!-- <router-link to="/email-me"></router-link> -->
    <router-view />
  </div>
</template>

<style scoped>
.background {
  width: 100vw;
  height: 100vh;
  z-index: -1;
  position: fixed;
  background-color: #e7e7e7;
}
</style>