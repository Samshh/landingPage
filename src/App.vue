<script setup>
import firstpage from "./components/firstpage.vue";
// import hero2 from "./components/hero2.vue";
import secondpage from "./components/secondpage.vue";
import cursor from "./components/cursor.vue";
import footermain from "./components/footermain.vue";
import technologies from "./components/technologies.vue";
// import projects from "./components/projects.vue";
import { onMounted } from "vue";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Lenis from "@studio-freight/lenis";

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

onMounted(() => {
  gsap.registerPlugin(TextPlugin);
  gsap.to(".welcome", {
    delay: 1,
    duration: 2,
    text: "hello!",
    ease: "power1.inOut",
    onComplete: () => {
      gsap.to(".preloader", {
        y: "-100%",
        duration: 2,
        ease: "expo.inOut",
      });
    },
  });
});
</script>

<template>
  <div class="preloader" ref="preloader">
    <div class="welcome">こんにちは!</div>
  </div>
  <div>
    <div class="background"></div>
    <cursor />
    <firstpage />
    <!-- <hero2 /> -->
    <secondpage />
    <technologies />
    <!-- <projects /> -->
    <footermain />
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
  z-index: 100;
}

.welcome {
  color: #e7e7e7;
  font-size: clamp(50px, 14vw, 250px);
}
</style>
