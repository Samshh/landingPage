<script setup>
import { gsap } from "gsap";
import { onMounted, onUnmounted, ref, watchEffect } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  animateText,
  changeColor,
  pulse,
  BGchangeColor,
  cursorChange,
  ObjectChangeColor,
} from "./animations.js";
import { Icon } from "@iconify/vue";
// Add gaming sht
// <Icon icon="simple-icons:myanimelist"  style="color: #161616" />
// <Icon icon="arcticons:genshin-impact"  style="color: #161616" />
// <Icon icon="mdi:steam"  style="color: #161616" />

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
  cursorChange(".outterWrapper", "#e7e7e7");
  BGchangeColor(".outterWrapper", "#161616");
  ObjectChangeColor(".underline", "#e7e7e7", ".outterWrapper", "top center", "bottom center");
  ObjectChangeColor(".underline1", "#e7e7e7", ".outterWrapper", "top center", "bottom center");
  ObjectChangeColor(".underline2", "#e7e7e7", ".outterWrapper", "top center", "bottom center");
  ObjectChangeColor(".underline3", "#e7e7e7", ".outterWrapper", "top center", "bottom center");
  ObjectChangeColor(".underline4", "#e7e7e7", ".outterWrapper", "top center", "bottom center");
  animateText(".detail", ".outterWrapper", "details.", 2);
  animateText(".contacts", ".outterWrapper", "socials.", 2);
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
  changeColor(
    ".ficon",
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
          <a
            class="contact linkedin"
            target="_blank"
            href="https://www.linkedin.com/in/samshh/"
            style="cursor: none"
          >
            <Icon icon="mdi:linkedin" class="ficon" style="color: #161616" />
            LinkedIn
            <div class="underline"></div>
          </a>
          <a
            class="contact github"
            target="_blank"
            href="https://github.com/Samshh"
            style="cursor: none"
          >
            <Icon icon="mdi:github" class="ficon" style="color: #161616" />
            GitHub
            <div class="underline1"></div>
          </a>
          <a
            class="contact google"
            target="_blank"
            href="https://developers.google.com/profile/u/samshh"
            style="cursor: none"
          >
            <Icon icon="bxl:google" class="ficon" style="color: #161616" />
            Google
            <div class="underline2"></div>
          </a>
          <a
            class="contact bento"
            target="_blank"
            href="https://bento.me/samshh"
            style="cursor: none"
          >
            <Icon
              icon="simple-icons:bento"
              class="ficon"
              style="color: #161616"
            />
            Bento
            <div class="underline3"></div>
          </a>
          <a
            class="contact instagram"
            target="_blank"
            href="https://www.instagram.com/smldcra/"
            style="cursor: none"
          >
            <Icon icon="mdi:instagram" class="ficon" style="color: #161616" />
            Instagram
            <div class="underline4"></div>
          </a>
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
        <a
          class="source"
          target="_blank"
          href="https://github.com/Samshh/landingPage"
          >© 2024 Samshh</a
        >
      </div>
      <div class="time">
        <p>{{ currentTime }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ficon {
  font-size: clamp(15px, 1.7vw, 30px);
}
.underline,
.underline1,
.underline2,
.underline3,
.underline4 {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: #161616;
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

.outterWrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: clamp(7.5px, 1.7vw, 15px);
  padding-top: clamp(22px, 5.7vw, 45px);
}

.innerWrapper {
  padding-top: clamp(22px, 5.7vw, 45px);
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
  padding-top: clamp(7.5px, 1.7vw, 15px);
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
    padding-top: 0;
  }
}
</style>
