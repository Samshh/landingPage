<script setup>
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { onMounted, onUnmounted } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BGchangeColor,
  ObjectChangeColor,
  animateText,
  changeColor,
  cursorChange,
} from "./animations.js";
import { Icon } from "@iconify/vue";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const scrollToTop = () => {
  gsap.to(window, {
    duration: 2.5,
    scrollTo: { y: 0, autoKill: false },
    ease: "expo.inOut",
  });
};

const scrollToBottom = () => {
  gsap.to(window, {
    duration: 2.5,
    scrollTo: { y: "#footerID", autoKill: false },
    ease: "expo.inOut",
  });
};

const scrollToSecond = () => {
  gsap.to(window, {
    duration: 2.5,
    scrollTo: { y: "#secondID", autoKill: false },
    ease: "expo.inOut",
  });
};

const scrollToTech = () => {
  gsap.to(window, {
    duration: 2.5,
    scrollTo: { y: "#techID", autoKill: false },
    ease: "expo.inOut",
  });
};

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    ".navButton",
    {
      autoAlpha: 0,
      y: -100,
    },
    {
      scrollTrigger: {
        trigger: ".outerWrapper",
        start: "top center",
        endTrigger: ".outterWrapper",
        end: "top center",
        toggleActions: "play reverse play reverse",
      },
      y: 0,
      autoAlpha: 1,
      duration: 1,
      ease: "power1.out",
      stagger: 0.15,
    }
  );

  gsap.fromTo(
    "#navbar",
    {
      y: -100,
    },
    {
      scrollTrigger: {
        trigger: ".outerWrapper",
        start: "top center",
        endTrigger: ".outterWrapper",
        end: "top center",
        toggleActions: "play reverse play reverse",
      },
      y: 0,
      duration: 1,
      ease: "power1.out",
    }
  );

  gsap.fromTo(
    ".fixed-button",
    {
      x: 100,
      autoAlpha: 0,
      rotation: 0,
    },
    {
      scrollTrigger: {
        trigger: ".outerWrapper",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
      x: 0,
      autoAlpha: 1,
      duration: 1,
      rotation: 360,
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

  cursorChange(".outerWrapper", "#e7e7e7");
  BGchangeColor(".outerWrapper", "#161616");
  animateText(
    ".myText",
    ".aboutMe",
    "I'm Sam Dacara, a Software Developer based in Davao City, Philippines. My primary focus is on back-end development. I'm currently delving into the realm of Web Development and exploring my interests in Machine Learning and Artificial Intelligence. Excited about the endless possibilities in the tech world!",
    5
  );
  animateText(
    ".myText2",
    ".aboutMe",
    "Outside of tech, I'm also a Musician—I play the guitar and piano. And when it's chill time, you'll catch me watching anime. Let's explore this tech and creativity journey together!",
    5
  );
  animateText(".me", ".aboutMe", "about me.", 2);
  changeColor("#q", "#e7e7e7", ".outerWrapper", "top center", "bottom center");
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
    <div>
      <div id="navbar">
        <div class="navwrapper">
          <button
            class="navButton"
            style="
              cursor: none;
              background-color: transparent;
              border-color: transparent;
            "
            @click="scrollToSecond"
          >
            <h1 id="samshh" class="samshh" style="color: #161616">about me.</h1>
          </button>
          <button
            class="navButton"
            style="
              cursor: none;
              background-color: transparent;
              border-color: transparent;
            "
            @click="scrollToTech"
          >
            <h1 id="samshh" class="samshh" style="color: #161616">tech.</h1>
          </button>
          <button
            class="navButton"
            style="
              cursor: none;
              background-color: transparent;
              border-color: transparent;
            "
            @click="scrollToBottom"
          >
            <h1 id="samshh" class="samshh" style="color: #161616">contact.</h1>
          </button>
        </div>
      </div>
    </div>
    <div class="outerWrapper">
      <button class="fixed-button" style="cursor: none" @click="scrollToTop">
        <Icon
          icon="ph:arrow-bend-left-up"
          style="color: #161616"
          id="arrowup"
        />
      </button>
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
  </div>
</template>

<style scoped>
.samshh {
  font-weight: 900px;
  margin-bottom: 0px;
  padding-bottom: clamp(10px, 1.7vw, 20px);
  padding-top: clamp(10px, 1.7vw, 20px);
  margin: 0;
  user-select: none;
}

.navwrapper {
  padding-right: clamp(42.5px, 5.7vw, 85px);
}

#navbar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 6%;
  background-color: #e7e7e7;
  z-index: 99;
}

.fixed-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  border: none;
  text-align: center;
  text-decoration: none;
  font-size: clamp(22.5px, 3.4vw, 45px);
  background: none;
  padding: 0;
  display: inline-block;
  z-index: 99;
}
.aboutwrap {
  padding-top: clamp(45px, 5vw, 180px);
  padding-left: clamp(42.5px, 5.7vw, 85px);
  padding-right: clamp(42.5px, 5.7vw, 85px);
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
  padding-bottom: clamp(10px, 1.7vw, 20px);
  margin: 0;
}

.desc {
  margin: 0;
  font-size: clamp(15px, 1.7vw, 30px);
  font-weight: 400;
  text-align: justify;
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
  #navbar {
    display: none;
  }
}

@media (max-width: 714px) {
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
    width: 100vw;
    max-height: 50vh;
    padding-bottom: 10px;
    padding-top: 10px;
  }
}
</style>
