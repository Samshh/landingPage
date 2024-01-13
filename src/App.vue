<script setup>
import firstpage from './components/firstpage.vue'
// import navigation from './components/navigation.vue'
import secondpage from './components/secondpage.vue'
import cursor from './components/cursor.vue'
import footerpage from './components/footerpage.vue'
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

</script>

<template>
    <cursor/>
    <firstpage/>
    <secondpage/>
    <footerpage/>
    
</template>

<style scoped>

</style>
