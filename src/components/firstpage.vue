<script setup>
import { gsap } from "gsap"; 
import { TextPlugin } from "gsap/TextPlugin"; 
import { onMounted, onUnmounted} from 'vue';

onMounted(() => {
  gsap.registerPlugin(TextPlugin);

  const animateText = (selector, text, duration) => {
    gsap.to(selector, {
      duration: duration, 
      text: text, 
      delay: 1,
      ease: "power1.out",
    });
  };

  animateText(".maintext", "samshh", 3);
});

  onUnmounted(() => {
    gsap.killTweensOf(".myText");
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
        <div class="name">
            <p class="maintext">73616d736868</p>
            <p class="subtext">メイプル</p>            
        </div>
    </div>
    
</div>  
</template>

<style scoped>
.mybox{
    width: auto;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0px;
    padding: 0px;
    margin: 0px;
    animation-name: bgFade;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
}

.mainwrapper{
    display: flex;
}

.name{
    margin: 0;
    animation-name: fade-in;
    animation-duration: 4s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
    align-items: center;
    display: flex;
    flex-direction: column;
}

.maintext {
    margin: 0;
    font-size: 55px;
    font-weight: 400;
    text-align: center;
}

.subtext{
    font-family: "Noto Serif JP", sans-serif;
    margin: 0;
    font-size: 25px;
    font-weight: 400;
    text-align: center;
}

@media (max-width: 430px) {
    .mainwrapper{
        transform: scale(0.55);
    }
}

@keyframes bgFade{
    from{
        background-color: #161616;
    }
    to{
        background-color: #e7e7e7;
    }
}

@keyframes fade-in{
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}

.lines {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    margin: auto;
    width: 90vw;
}

.line {
    position: absolute;
    width: 1px;
    height: 100%;
    top: 0;
    left: 50%;
    background: transparent;
    overflow: hidden;
}

.line::after {
    content: '';
    display: block;
    position: absolute;
    height: 15vh;
    width: 100%;
    top: -50%;
    left: 0;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #161616 75%, #161616 100%);
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