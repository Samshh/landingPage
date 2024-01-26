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

  animateText(".maintext", "Samshh", 3);
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
        <div class="box1">
            <img class="logo" src="\src\assets\box.svg" alt="test">
            <div class="textwrapper">
                <div class="katakana">
                    <p class="m">メ</p>
                    <p class="i">イ</p>
                    <p class="p">プ</p>
                    <p class="r">ル</p>
                </div>        
                <div class="kanji">
                    <p>
                        楓
                    </p>
                </div>    
            </div>
        </div>
        <div class="name">
            <p class="maintext">73616d</p>
            <p class="subtext">
                Software Developer
            </p>            
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
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
}

.mainwrapper{
    transform: scale(1.25);
}

.logo{
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none; 
    user-select: none; 
    pointer-events: none;
    position: relative;
    /* animation: glitch 1s infinite; */
}

.logo::before,
.logo::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
}

.logo::before {
  left: 2px;
  animation: glitch 1.5s infinite;
}

.logo::after {
  left: -2px;
  animation: glitch 2s infinite;
}

@keyframes glitch {
  2%,64% {
    transform: translate(2px, 0) skew(0deg);
  }
  4%,60% {
    transform: translate(-2px, 0) skew(0deg);
  }
  62% {
    transform: translate(0, 0) skew(5deg);
  }
}

.box1{
    animation-name: fade-in;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
    display: flex;
}

.textwrapper{
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    justify-content: space-between;
}

.katakana p{
    font-family: "Noto Serif JP", serif;
    font-weight: 900;
    font-style: normal;
    margin: 0;
    padding-bottom: 10px;
    font-size: 25px;
}

.m{
    animation-name: fade-in;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
}

.i{
    animation-name: fade-in;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
}

.p{
    animation-name: fade-in;
    animation-duration: 2.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
}

.r{
    animation-name: fade-in;
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
}
.kanji p{
    font-family: "Noto Serif JP", serif;
    font-weight: 400;
    font-style: normal;
    margin: 0;
    font-size: 25px;
    animation-name: fade-in;
    animation-duration: 3.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
}

.name{
    animation-name: fade-in;
    animation-duration: 4s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
}

.maintext {
    margin: 0;
    padding-top: 10px;
    font-size: 25px;
    font-weight: 400;
    text-align: right;
    padding-right: 35px;
}

.subtext{
    margin: 0;
    font-size: 15px;
    font-weight: 400;
    text-align: right;
    padding-right: 35px;
}

@media (max-width: 430px) {
    .mainwrapper{
        transform: scale(0.55);
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