<script setup>
import { gsap } from "gsap";
import { onMounted, onUnmounted } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BGchangeColor,
  ObjectChangeColor,
  animateText,
  changeColor,
} from "./animations.js";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    ".myPic",
    {
      autoAlpha: 0,
    },
    {
      scrollTrigger: {
        trigger: ".outerWrapper",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
      autoAlpha: 1,
      duration: 1,
      ease: "power1.out",
    }
  );

  changeColor(
    "#arrowup",
    "#e7e7e7",
    ".outerWrapper",
    "top center",
    "bottom center"
  );

  ObjectChangeColor(
    "#navbar",
    "#161616",
    ".outerWrapper",
    "top center",
    "bottom center"
  );

  BGchangeColor(".outerWrapper", "#161616");
  animateText(
    ".myText",
    ".aboutMe",
    "I'm Sam Dacara, a Software Developer, skilled in both back-end and front-end development. I'm fascinated by the endless possibilities in technology, and excited about creating innovative solutions to contribute to the ever-evolving tech landscape.",
    3
  );
  animateText(
    ".myText2",
    ".aboutMe",
    "Outside of tech, I'm also a Musician—I play the guitar and piano. And when it's chill time, you'll catch me watching anime. Let's explore this tech and creativity journey together!",
    3
  );
  animateText(".me", ".aboutMe", "about me.", 2);
  changeColor("#q", "#e7e7e7", ".outerWrapper", "top center", "bottom center");
  changeColor(".heroText", "#e7e7e7", ".outerWrapper", "top center", "bottom center")
  changeColor(
    "#samshh",
    "#e7e7e7",
    ".outerWrapper",
    "top center",
    "bottom center"
  );
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
  <div id="secondID">
    <div class="outerWrapper">
      <div class="innerWrapper">
        <div class="aboutMe">
          <img class="myPic" src="/src/assets/SamGoogle.webp" alt="" />
          <div class="aboutwrap">
            <h1 id="q" class="me"></h1>
            <p id="q" class="desc myText"></p>
            <p id="q" class="desc myText2"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.outerWrapper {
  padding-top: clamp(22px, 5.7vw, 45px);
  padding-bottom: clamp(22px, 5.7vw, 45px);
}

.aboutwrap {
  padding-top: clamp(45px, 5vw, 180px);
  padding-left: clamp(42.5px, 5.7vw, 85px);
  padding-right: clamp(42.5px, 5.7vw, 85px);
  width: 60vw;
  user-select: none;
}

.aboutMe {
  padding-right: clamp(22.5px, 2.7vw, 45px);
  padding-left: clamp(22.5px, 2.7vw, 45px);
  display: flex;
  color: #161616;
}

.me {
  font-size: clamp(25px, 3.4vw, 60px);
  font-weight: 800;
  margin-bottom: 0px;
  padding-bottom: clamp(10px, 1.7vw, 20px);
  margin: 0;
}

.desc {
  margin: 0;
  font-size: clamp(15px, 1.7vw, 30px);
  font-weight: 200;
  text-align: start;
  padding-top: clamp(15px, 1.7vw, 30px);
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
  filter: grayscale(100%);
}

::selection {
  background-color: #e7e7e7;
  color: #161616;
}

::-moz-selection {
  background-color: #e7e7e7;
  color: #161616;
}

@media (max-width: 808px) {

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
    text-align: center;
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
    width: auto;
    height: fit-content;
    overflow: scroll;
  }

  .desc {
    text-align: justify;
    padding: 0;
    padding-bottom: 20px;
  }

  .myPic {
    width: 100vw;
    max-height: auto;
    padding-bottom: 10px;
    padding-top: 10px;
  }
}
</style>
