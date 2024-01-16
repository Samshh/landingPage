<script setup>
import { gsap } from "gsap"; 
import { onMounted, onUnmounted} from 'vue';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {BGchangeColor, animateText, changeColor, cursorChange} from './animations.js';

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".myPic", {
    scrollTrigger: {
      trigger: ".outerWrapper",
      start: "top center",
      end: "bottom center",
      toggleActions: "play reverse play reverse",
      scrub: false,
      markers: false,
    },
    ease: "power1.inOut",
    opacity: 1,
  });
  
  cursorChange(".outerWrapper", "#e7e7e7")
  BGchangeColor(".outerWrapper", "#161616")
  animateText(".myText", ".aboutMe","I'm Sam Dacara, a Software Developer based in Davao City, Philippines. My primary focus is on back-end development. I'm currently delving into the realm of Web Development and exploring my interests in Machine Learning and Artificial Intelligence. Excited about the endless possibilities in the tech world!", 10);
  animateText(".myText2", ".aboutMe","Outside of tech, I'm also a Musician—I play the guitar and piano. And when it's chill time, you'll catch me watching anime. Let's explore this tech and creativity journey together!", 10);
  animateText(".me", ".aboutMe","about me.", 2);
  changeColor("#p", "#e7e7e7", ".outerWrapper", "top center","bottom center")
});

  onUnmounted(() => {
    gsap.killTweensOf(".myText", ".myText2");
});

</script>

<template>
<div class="outerWrapper">
    <div class="innerWrapper">
        <div class="aboutMe">
            <div class="aboutMe2">
                <p id="p" class="me">私について。</p>
                <p id="p" class="desc myText">
                  私はサム・ダカラ、フィリピン・ダバオシティ拠点のソフトウェア開発者です。
                  主な焦点はバックエンド開発です。現在はウェブ開発の領域に深く入り、
                  機械学習と人工知能に興味を深めています。テックの世界での無限の可能性にワクワクしています！
                </p>
                <p id="p" class="desc myText2">
                  テックの外では、私はミュージシャンでもあります — ギターとピアノを演奏します。
                  そして、くつろぐ時間にはアニメを観ていることがあります。一緒にこのテックと創造性の旅を探機しましょう！
                </p>   
            </div>
        <img class="myPic" src="\src\assets\SamGoogle1.webp" alt="">
        </div>
    </div>
</div>
</template>

<style scoped>
.outerWrapper{
    height: auto;
    width: 100vw;
}

.innerWrapper{
    padding-left: 20px;
    padding-right: 70px;
}

.aboutMe{
    display: flex;
    color: #161616;
    padding-bottom: 20px;
}
.me{
    font-size: 45px;
    font-weight: 400px;
    margin-bottom: 0px;
    padding-bottom: 20px;
    margin: 0;
}

.desc{
    margin: 0;
    font-size: 30px;
    font-weight: 400;
    text-align: left;
    padding-right: 45px;
    padding-top: 35px;
}


@keyframes slide {
    0%, 50% {
        transform: translateY(0);
        opacity: 1;
  }
    50.01%, 100% {
        transform: translateY(-100%);
        opacity: 0;
  }
}
.myPic{
    border-radius: 10px;
    height: 40.5%;
    width: 40.5%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none; 
    user-select: none; 
    pointer-events: none;
    opacity: 0;
}

.aboutMe2{
    padding-top: 10%;
    padding-left: 3%;
    padding-right: 5%;
}

::selection {
    background-color:#e7e7e7;
    color: #161616; 
}

::-moz-selection {
    background-color:#e7e7e7;
    color: #161616; 
}

@media (max-width: 430px) {
.outerWrapper {
    height: auto;
    overflow: auto; 
  }
.innerWrapper {
    flex-direction: column;
    justify-content: space-around;
    padding: 0;
    }
.aboutMe {
    flex-direction: column;
    width: auto;
}

.aboutMe2 {
    padding-top: 0px;
}
.desc {
    font-size: 15px;
    padding: 0;
    padding-bottom: 20px;
  }

.myPic{
    width: 100%;
    padding-bottom: 10px;
    padding-top: 10px;
    }
}

</style>