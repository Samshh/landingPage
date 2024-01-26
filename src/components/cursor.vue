<template>
  <div v-if="smallscreen" class="custom-cursor" :style="{ top: cursorY + 'px', left: cursorX + 'px' }"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from '@studio-freight/lenis';

const smallscreen = ref(window.innerWidth > 1024);

const updateScreenSize = () => {
  smallscreen.value = window.innerWidth > 1024;
};

const cursorX = ref(0);
const cursorY = ref(0);

const updateCursorPosition = (event) => {
  cursorX.value = event.clientX;
  cursorY.value = event.clientY;
};

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  document.addEventListener('mousemove', updateCursorPosition);
  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)
});

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', updateCursorPosition);
});
</script>

<style scoped>
.custom-cursor {
  position: fixed;
  width: 13px;
  height: 13px;
  background-color: #161616;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  cursor: none;
}

@media (max-width: 430px) {
  .custom-cursor {
    display: none;
  }
}

</style>
