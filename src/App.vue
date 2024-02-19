<script setup>
import firstpage from "./components/firstpage.vue";
import secondpage from "./components/secondpage.vue";
import cursor from "./components/cursor.vue";
import footerpage from "./components/footerpage.vue";
import thirdpage from "./components/thirdpage.vue";
import footermain from "./components/footermain.vue";
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { TextPlugin } from 'gsap/TextPlugin';

let isLoading = ref(true);

onMounted(() => {
  const loadPromises = [];
  const images = [
    "@/assets/SamGoogle.png",
    "@/assets/samlogo1.png",
    "@/assets/image-0.png",
    "@/assets/image-1.png",
    "@/assets/image-3.png",
    "@/assets/image-6.png",
    "@/assets/image-9.png"
  ];

  images.forEach((src) => {
    const image = new Image();
    const promise = new Promise((resolve) => {
      image.onload = resolve;
    });
    image.src = src;
    loadPromises.push(promise);
  });

  Promise.all(loadPromises).then(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.to('.welcome', {
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
    <thirdpage />
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
  position: fixed;
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
