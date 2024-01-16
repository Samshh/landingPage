<script setup>
import { gsap } from "gsap"; 
import { onMounted, onUnmounted} from 'vue';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {BGchangeColor, animateText, changeColor, cursorChange} from './animations.js';

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
    animateText(".contacts", ".outterWrapper", "contact me.", 2);
    BGchangeColor(".outterWrapper", "#161616");
    cursorChange(".outterWrapper", "#e7e7e7");
    changeColor(".contacts", "#e7e7e7", ".outterWrapper", "top center", "bottom center");
    changeColor(".contact", "#e7e7e7", ".outterWrapper", "top center", "bottom center");
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
        <a class="contact google" target="_blank" href="https://developers.google.com/profile/u/samshh" style="cursor: none">
          <i class="fab fa-google"></i> Google
        </a>
        <a class="contact bento" target="_blank" href="https://bento.me/samshh" style="cursor: none;">
          <i class="fas fa-utensils"></i> Bento
        </a>
      </div>
        
        <div class="detes"></div>
    </div>
</div>
</template>

<style scoped>

.outterWrapper{
    width: 100vh;
    height: 100vh;
}

.innerWrapper{
    display: flex;
}

.contwrap{
  margin-bottom: 0px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  padding-left: 10%;
  padding-top: 10%;
}

.contacts{
    font-size: 45px;
    font-weight: 400px;
    margin: 0;
    text-align: left;
    color: #161616;
}

.contact{
    margin: 0;
    font-size: 25px;
    font-weight: 400;
    text-align: center;
    padding: 15px;
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

.contact i {
    margin-right: 10px;
  }

.contact:hover {
  background-color: #e7e7e7;
  color: #161616 !important;
  }

.contact:hover::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  }

@media (max-width: 430px){
  .outterWrapper{
    display: none;
  }
}
</style>
