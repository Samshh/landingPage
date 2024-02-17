<script setup>
import { gsap } from "gsap";
import { onMounted, onUnmounted } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BGchangeColor,
  animateText,
  changeColor,
  cursorChange,
} from "./animations.js";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  cursorChange(".outerWrapper", "#e7e7e7");
  BGchangeColor(".outerWrapper", "#161616");
  animateText(
    ".myText",
    ".aboutMe",
    "I'm Sam Dacara, a Software Developer based in Davao City, Philippines. My primary focus is on back-end development. I'm currently delving into the realm of Web Development and exploring my interests in Machine Learning and Artificial Intelligence. Excited about the endless possibilities in the tech world!",
    10
  );
  animateText(
    ".myText2",
    ".aboutMe",
    "Outside of tech, I'm also a Musician—I play the guitar and piano. And when it's chill time, you'll catch me watching anime. Let's explore this tech and creativity journey together!",
    10
  );
  animateText(".me", ".aboutMe", "about me.", 2);
  changeColor("#q", "#e7e7e7", ".outerWrapper", "top center", "bottom center");
});

onUnmounted(() => {
  gsap.killTweensOf(
    ".myText",
    ".myText2",
    ".me",
    "#p",
    ".myPic",
    ".outerWrapper"
  );
});
</script>

<template>
  <div class="outerWrapper">
    <div class="innerWrapper">
      <div class="aboutMe">
        <img class="myPic" src="/src/assets/SamGoogle.png" alt="" />
        <div class="aboutwrap">
          <h1 id="q" class="me">私について。</h1>
          <p id="q" class="desc myText">
            私はサム・ダカラ、フィリピン・ダバオシティ拠点のソフトウェア開発者です。
            主な焦点はバックエンド開発です。現在はウェブ開発の領域に深く入り、
            機械学習と人工知能に興味を深めています。テックの世界での無限の可能性にワクワクしています！
          </p>
          <p id="q" class="desc myText2">
            テックの外では、私はミュージシャンでもあります —
            ギターとピアノを演奏します。
            そして、くつろぐ時間にはアニメを観ていることがあります。一緒にこのテックと創造性の旅を探機しましょう！
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.aboutwrap {
  padding-top: clamp(45px, 5vw, 180px);
}

.aboutMe {
  padding-right: clamp(22.5px, 2.7vw, 45px);
  padding-left: clamp(22.5px, 2.7vw, 45px);
  display: flex;
  color: #161616;
  padding-bottom: clamp(35px, 5.7vw, 70px);
}

.me {
  font-size: clamp(22.5px, 3.4vw, 45px);
  font-weight: 400px;
  margin-bottom: 0px;
  padding-left: clamp(42.5px, 5.7vw, 85px);
  padding-bottom: clamp(10px, 1.7vw, 20px);
  margin: 0;
}

.desc {
  margin: 0;
  font-size: clamp(15px, 1.7vw, 30px);
  font-weight: 400;
  text-align: left;
  padding-left: clamp(42.5px, 5.7vw, 85px);
  padding-top: clamp(15px, 1.7vw, 30px);
}

@keyframes slide {

  0%,
  50% {
    transform: translateY(0);
    opacity: 1;
  }

  50.01%,
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
}

.myPic {
  border-radius: 10px;
  object-fit: cover;
  height: clamp(450px, 50vw, 900px);
  width: clamp(250px, 50vw, 800px);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: transform 0.5s, box-shadow 0.5s, filter 0.5s;
  transform-style: preserve-3d;
  filter: grayscale(100%);
}

.myPic:hover {
  transform: scale(1.1) perspective(1000px);
  filter: grayscale(0%);
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
  .outerWrapper {
    height: auto;
    overflow: auto;
  }

  .innerWrapper {
    flex-direction: column;
    justify-content: space-around;
    padding: 0;
  }

  .me {
    padding-left: 0;
  }

  .aboutMe {
    flex-direction: column-reverse;
    width: auto;
    padding: 0;
  }

  .aboutwrap {
    padding-right: clamp(22.5px, 2.7vw, 45px);
    padding-left: clamp(22.5px, 2.7vw, 45px);
    padding-top: 0px;
  }

  .desc {
    font-size: 15px;
    padding: 0;
    padding-bottom: 20px;
  }

  .myPic {
    width: 100%;
    padding-bottom: 10px;
    padding-top: 10px;
  }
}
</style>
