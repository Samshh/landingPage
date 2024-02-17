<script setup>
import { gsap } from "gsap";
import { onMounted, onUnmounted, ref, watchEffect } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BGchangeColor,
  animateText,
  changeColor,
  cursorChange,
  pulse,
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
  animateText(".detail", ".outterWrapper", "details.", 2);
  animateText(".contacts", ".outterWrapper", "socials.", 2);
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
  changeColor(
    ".quote",
    "#e7e7e7",
    ".outterWrapper",
    "top center",
    "bottom center"
  );
  changeColor(
    ".detail",
    "#e7e7e7",
    ".outterWrapper",
    "top center",
    "bottom center"
  );
  changeColor(
    ".details",
    "#e7e7e7",
    ".outterWrapper",
    "top center",
    "bottom center"
  );
  changeColor(
    ".madeby",
    "#e7e7e7",
    ".outterWrapper",
    "top center",
    "bottom center"
  );
  changeColor(
    ".source",
    "#e7e7e7",
    ".outterWrapper",
    "top center",
    "bottom center"
  );
  pulse(".underline", "2", "0");
  pulse(".underline1", "2", "0.5");
  pulse(".underline2", "2", "1");
  pulse(".underline3", "2", "1.5");
  pulse(".underline4", "2", "2");
});

onUnmounted(() => {
  gsap.killTweensOf(".outterWrapper", ".contacts");
});
</script>

<template>
  <div class="outterWrapper">
    <div class="timewrap">
      <div class="innerWrapper">
        <div class="contwrap">
          <h1 class="contacts">ソーシャル。</h1>
          <a class="contact linkedin" target="_blank" href="https://www.linkedin.com/in/samshh/" style="cursor: none;">
            <i class="fab fa-linkedin"></i> 
            LinkedIn
            <div class="underline"></div>
          </a>
          <a class="contact github" target="_blank" href="https://github.com/Samshh" style="cursor: none;">
            <i class="fab fa-github"></i> 
            GitHub
            <div class="underline1"></div>
          </a>
          <a class="contact google" target="_blank" href="https://developers.google.com/profile/u/samshh" style="cursor: none;">
            <i class="fab fa-google"></i> 
            Google
            <div class="underline2"></div>
          </a>
          <a class="contact bento" target="_blank" href="https://bento.me/samshh" style="cursor: none;">
            <i class="fas fa-utensils"></i> 
            Bento
            <div class="underline3"></div>
          </a>
          <a class="contact instagram" target="_blank" href="https://www.instagram.com/smldcra/" style="cursor: none;">
            <i class="fab fa-instagram"></i> 
            Instagram
            <div class="underline4"></div>
          </a>
        </div>
        <div class="fadein">
          <img class="samshh" src="/src/assets/footerimage.jpg" alt="samshh">
          <p class="quote">"It is what is it."</p>
        </div>
      </div>
      <div class="detailwrap">
        <h1 class="detail">デタイルズ。</h1>
        <p class="details">samdacs2@gmail.com</p>
        <p class="details">+63 969 696 9696</p>
      </div>
    </div>
    <div class="madewrap">
      <div class="madeby">
        <a class="source" target="_blank" href="https://github.com/Samshh/landingPage">© 2024 Samshh</a>
      </div>
      <div class="time">
        <p>{{ currentTime }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

.underline, .underline1, .underline2, .underline3, .underline4 {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: #e7e7e7;
    transform-origin: left center;
    transform: scaleX(0);
}

.source {
  font-size: clamp(8px, 1.7vw, 16px);
  margin: 0;
  text-decoration: none;
  color: #161616;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: none;
}

.madeby {
  text-align: center;
  display: flex;
  align-items: flex-end;
}

.madewrap {
  width: 50vw;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding-left: clamp(22px, 5.7vw, 45px);
  padding-right: clamp(22px, 5.7vw, 45px);
}

.timewrap {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}

.detailwrap {
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: clamp(22px, 5.7vw, 45px);
  padding-right: clamp(22px, 5.7vw, 45px);
  padding-top: clamp(7.5px, 1.7vw, 15px);
}

.detail {
  font-size: clamp(22.5px, 3.4vw, 45px);
  font-weight: 400px;
  margin: 0;
  text-align: left;
  color: #161616;
}

.details {
  margin: 0;
  font-size: clamp(15px, 1.7vw, 30px);
  font-weight: 400;
  text-align: center;
  padding-top: clamp(7.5px, 1.7vw, 15px);
  text-decoration: none;
  position: relative;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  z-index: 1;
  color: #161616;
}

.samshh {
  border-radius: 50%;
  width: clamp(150px, 17.7vw, 320px);
  height: clamp(150px, 17.7vw, 320px);
  filter: grayscale(100%);
}

.quote {
  font-size: clamp(15px, 1.7vw, 30px);
  font-style: italic;
  font-weight: 400;
  text-align: center;
  padding-top: clamp(15px, 1.7vw, 30px);
  position: relative;
  margin: 0;
}

.outterWrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: clamp(7.5px, 1.7vw, 15px);
  padding-top: clamp(22px, 5.7vw, 45px);
}

.innerWrapper {
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  padding-left: clamp(22px, 5.7vw, 45px);
  padding-right: clamp(22px, 5.7vw, 45px);
}

.contwrap {
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
}

.contacts {
  font-size: clamp(22.5px, 3.4vw, 45px);
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
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
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
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #161616;
  margin: 0;
  white-space: nowrap;
}

.contact i {
  margin-right: clamp(5px, 1.7vw, 10px);
}

::selection {
  background-color: #e7e7e7;
  color: #161616;
}

::-moz-selection {
  background-color: #e7e7e7;
  color: #161616;
}

@media (max-width: 430px) {
  .outterWrapper {
    display: none;
  }
}
</style>
