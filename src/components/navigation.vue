<script setup>
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";
import { Icon } from "@iconify/vue";
import { animateTextNav, changeColor, ObjectChangeColor } from "./animations";

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

const scrollToProjects = () => {
  gsap.to(window, {
    duration: 2.5,
    scrollTo: { y: "#projectsID", autoKill: false },
    ease: "expo.inOut",
  });
};

const scrollToAffil = () => {
  gsap.to(window, {
    duration: 2.5,
    scrollTo: { y: "#affilID", autoKill: false },
    ease: "expo.inOut",
  });
};

onMounted(() => {
  scrollToTop();
  ObjectChangeColor(
    ".emailmeButton",
    "#e7e7e7",
    ".outterWrapper",
    "top center",
    "bottom center"
  );
  changeColor(
    ".emailmeButton",
    "#161616",
    ".outterWrapper",
    "top center",
    "bottom center"
  );
  animateTextNav(".aboutNav", ".aboutMe", "", 1);
  animateTextNav(".techNav", ".technoOuter", "", 1);
  animateTextNav(".projectsNav", ".projectsMain", "", 1);
  animateTextNav(".affilNav", ".affilWrapper", "", 1);
  gsap.fromTo(
    ".navButton",
    {
      autoAlpha: 0,
      y: -100,
    },
    {
      scrollTrigger: {
        trigger: ".heroWrapper",
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
    ".emailmeButton",
    {
      autoAlpha: 0,
      y: -100,
    },
    {
      scrollTrigger: {
        trigger: ".outterWrapper",
        start: "top center",
        end: "bottom center",
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
        trigger: ".heroWrapper",
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
        trigger: ".heroWrapper",
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
});
</script>

<template>
  <div id="navbar">
    <div class="navwrapper">
      <h1
        id="samshh"
        class="aboutNav samshh navButton hoverable"
        style="color: #161616"
        @click="scrollToSecond"
      >
        about.
      </h1>
      <h1
        id="samshh"
        class="techNav samshh navButton hoverable"
        style="color: #161616"
        @click="scrollToTech"
      >
        tech.
      </h1>
      <h1
        id="samshh"
        class="projectsNav samshh navButton hoverable"
        style="color: #161616"
        @click="scrollToProjects"
      >
        projects.
      </h1>
      <h1
        id="samshh"
        class="affilNav samshh navButton hoverable"
        style="color: #161616"
        @click="scrollToAffil"
      >
        affil.
      </h1>
      <h1
        id="samshh"
        class="contactNav samshh navButton hoverable"
        style="color: #161616"
        @click="scrollToBottom"
      >
        contact.
      </h1>
    </div>
  </div>
  <button
    class="fixed-button hoverable"
    style="cursor: none"
    @click="scrollToTop"
  >
    <Icon
      icon="fluent:arrow-turn-left-up-20-filled"
      style="color: #161616"
      id="arrowup"
    />
  </button>
  <router-link to="/email-me" class="hoverable emailmeButton"
    >let's chat.</router-link
  >
</template>

<style scoped>
.emailmeButton {
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: #e7e7e7;
  cursor: none;
  background: #161616;
  border-radius: 50px;
  margin: 0;
  font-size: clamp(7.5px, 1.7vw, 15px);
  font-weight: 800;
  text-align: center;
  margin-top: 18px;
  user-select: none;
  text-decoration: none;
  position: fixed;
  top: 1px;
  right: 20px;
}

.samshh {
  font-size: clamp(15px, 1.7vw, 26.5px);
  font-weight: 800;
  padding-bottom: 20px;
  padding-top: 20px;
  margin: 0;
  user-select: none;
  padding-left: 20px;
  padding-right: 20px;
}

.navwrapper {
  display: flex;
}

#navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: clamp(4%, 5.7vw, 6%);
  background-color: #e7e7e7;
  z-index: 99;
  filter: drop-shadow(0px 0px 2px #000000);
}

.fixed-button {
  position: fixed;
  bottom: 1px;
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

@media (max-width: 808px) {
  #navbar {
    display: none;
  }
}
</style>
