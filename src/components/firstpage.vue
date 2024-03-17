<script setup>
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  gsap.registerPlugin(TextPlugin);

  const animateText = (selector, text, duration) => {
    gsap.to(selector, {
      duration: duration,
      text: text,
      delay: 4,
      ease: "power1.out",
    });
  };

  animateText(".maintext", "samshh.", 3);
});

onUnmounted(() => {
  gsap.killTweensOf(".maintext");
});
</script>
<template>
  <div class="mybox">
    <div class="lines">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <div class="mainwrapper">
      <div class="box1">
        <img class="logo" src="\src\assets\samlogo1.png" alt="test" />
        <div class="textwrapper">
          <div class="katakana">
            <p class="m">メ</p>
            <p class="i">イ</p>
            <p class="p">プ</p>
            <p class="r">ル</p>
            <p class="kanji">楓</p>
          </div>
        </div>
      </div>
      <div class="name">
        <h1 class="maintext">73616d.</h1>
        <p class="subtext">Software Developer</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mainwrapper {
  position: relative;
}
.mybox {
  width: auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0px;
  padding: 0px;
  margin: 0px;
}

.logo {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  pointer-events: none;
  position: relative;
  width: auto;
  height: clamp(350px, 50vw, 550px);
}

.box1 {
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.textwrapper {
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  justify-content: space-between;
}

.katakana p {
  font-family: "Noto Serif JP", serif;
  font-weight: 900;
  font-style: normal;
  margin: 0;
  padding-bottom: 10px;
  font-size: clamp(15px, 1.7vw, 30px);
  color: #161616;
}

.name {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(5%, 320%);
  animation-name: fade-in;
  animation-duration: 4s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

.maintext {
  margin: 0;
  font-size: clamp(15px, 2.7vw, 30px);
  text-align: right;
  padding-right: 35px;
  color: #161616;
}

.subtext {
  white-space: nowrap;
  margin: 0;
  font-size: clamp(10px, 1.7vw, 20px);
  font-weight: 400;
  text-align: right;
  padding-right: 35px;
  color: #161616;
}

.lines {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  margin: auto;
  width: 90vw;
}

.line {
  position: absolute;
  width: clamp(1px, 100vw, 1.75px);
  height: 100%;
  top: 0;
  left: 50%;
  background: transparent;
  overflow: hidden;
}

.line::after {
  content: "";
  display: block;
  position: absolute;
  height: 15vh;
  width: 100%;
  top: -50%;
  left: 0;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    #161616 75%,
    #161616 100%
  );
  animation: drop 7s 0s infinite;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
}

.line:nth-child(1) {
  margin-left: -25%;
}

.line:nth-child(1)::after {
  animation-delay: 2s;
}

.line:nth-child(3) {
  margin-left: 25%;
}

.line:nth-child(3)::after {
  animation-delay: 2.5s;
}

.line:nth-child(4) {
  margin-left: -15%;
}

.line:nth-child(4)::after {
  animation-delay: 3s;
}

.line:nth-child(5) {
  margin-left: 35%;
}

.line:nth-child(5)::after {
  animation-delay: 3.5s;
}

.line:nth-child(6) {
  margin-left: -35%;
}

.line:nth-child(6)::after {
  animation-delay: 4s;
}

.line:nth-child(7) {
  margin-left: 10%;
}

.line:nth-child(7)::after {
  animation-delay: 4.5s;
}

@keyframes drop {
  0% {
    top: -50%;
  }

  100% {
    top: 110%;
  }
}
</style>
