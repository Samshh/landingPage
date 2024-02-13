<script setup>
import { gsap } from "gsap";
import { onMounted, onUnmounted, ref, watchEffect } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BGchangeColor,
  animateText,
  changeColor,
  cursorChange,
} from "./animations.js";

const currentTime = ref(new Date().toLocaleTimeString());

watchEffect(() => {
  const intervalId = setInterval(() => {
    currentTime.value = new Date().toLocaleTimeString();
  }, 1000);

  onUnmounted(() => {
    clearInterval(intervalId);
  });
});

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  animateText(".contacts", ".outterWrapper", "contact me.", 2);
  BGchangeColor(".outterWrapper", "#161616");
  cursorChange(".outterWrapper", "#e7e7e7");
  changeColor(
    ".contacts",
    "#e7e7e7",
    ".outterWrapper",
    "top center",
    "bottom center"
  );
  changeColor(
    ".contact",
    "#e7e7e7",
    ".outterWrapper",
    "top center",
    "bottom center"
  );
  changeColor(
    ".time p",
    "#e7e7e7",
    ".outterWrapper",
    "top center",
    "bottom center"
  );
});

onUnmounted(() => {
  gsap.killTweensOf(".outterWrapper", ".contacts");
});
</script>

<template>
  <div class="outterWrapper">
    <div class="innerWrapper">
      <div class="contwrap">
        <div class="contacts">お問い合わせはこちら。</div>
        <a class="contact linkedin" target="_blank" href="https://www.linkedin.com/in/samshh/" style="cursor: none">
          <i class="fab fa-linkedin"></i> LinkedIn
        </a>
        <a class="contact github" target="_blank" href="https://github.com/Samshh" style="cursor: none">
          <i class="fab fa-github"></i> GitHub
        </a>
        <a class="contact google" target="_blank" href="https://developers.google.com/profile/u/samshh"
          style="cursor: none">
          <i class="fab fa-google"></i> Google
        </a>
        <a class="contact bento" target="_blank" href="https://bento.me/samshh" style="cursor: none">
          <i class="fas fa-utensils"></i> Bento
        </a>
      </div>
    </div>
    <div class="time" style="width: 250px">
      <p>{{ currentTime }}</p>
    </div>
  </div>
</template>

<style scoped>
.outterWrapper {
  width: 100vh;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.innerWrapper {
  display: flex;
}

.contwrap {
  margin-bottom: 0px;
  padding-bottom: clamp(10px, 1.7vw, 20px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: clamp(22px, 5.7vw, 45px);
  padding-top: clamp(10px, 1.7vw, 20px);
}

.contacts {
  font-size: clamp(22.5px, 2.7vw, 45px);
  font-weight: 400px;
  margin: 0;
  text-align: left;
  color: #161616;
}

.contact {
  margin: 0;
  font-size: clamp(15px, 1.7vw, 30px);
  font-weight: 400;
  text-align: center;
  padding: clamp(7.5px, 1.7vw, 15px);
  text-decoration: none;
  position: relative;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  z-index: 1;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #161616;
}

.time p {
  font-size: clamp(15px, 1.7vw, 30px);
  font-weight: 400;
  text-align: center;
  padding-left: clamp(40px, 1.7vw, 108px);
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 1;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #161616;
  margin: 0;
  padding-bottom: clamp(30px, 1.7vw, 60px);
  white-space: nowrap;
}

.contact i {
  margin-right: clamp(5px, 1.7vw, 10px);
}

.contact:hover {
  background-color: #e7e7e7;
  color: #161616 !important;
}

.contact:hover::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@media (max-width: 430px) {
  .outterWrapper {
    display: none;
  }
}
</style>
