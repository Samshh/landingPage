<script setup>
import firstpage from "./components/firstpage.vue";
import secondpage from "./components/secondpage.vue";
import cursor from "./components/cursor.vue";
import footerpage from "./components/footerpage.vue";
import footermain from "./components/footermain.vue";
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';

let isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.to('.welcome', {
      delay: 2,
      duration: 3,
      text: 'hello!',
      ease: "power1.inOut",
      onComplete: () => {
        isLoading.value = false;
      }
    });
  });
});

onUnmounted(() => {
  isLoading.value = false;
});
</script>

<template>
  <div v-if="isLoading" class="preloader">
    <div class="welcome">こんにちは!</div>
  </div>
  <div v-else>
    <div class="background"></div>
    <cursor />
    <firstpage />
    <secondpage />
    <footermain />
    <footerpage />
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

.preloader {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #161616;
}

.welcome {
  color: #e7e7e7;
  font-size: clamp(50px, 14vw, 250px);
}
</style>
