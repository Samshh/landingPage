<script setup>
import firstpage from './components/firstpage.vue'
import secondpage from './components/secondpage.vue'
import cursor from './components/cursor.vue'
import footerpage from './components/footerpage.vue'
import Lenis from '@studio-freight/lenis'
import thirdpage from './components/thirdpage.vue'
import footermain from './components/footermain.vue'

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

</script>

<template>
    <div class="background"></div>
    <cursor/>
    <firstpage/>
    <secondpage/>
    <thirdpage/>
    <footermain/>
    <footerpage/>
</template>

<style scoped>
.background{
  width: 100vw;
  height: 100vh;
  z-index: -1;
  position: fixed;
  background-color: #e7e7e7;
}
</style>
