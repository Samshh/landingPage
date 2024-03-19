<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { onMounted } from "vue";
import {
  animateText,
  changeColor,
  BGchangeColor,
  ObjectChangeColor,
  pulse,
} from "./animations";
import { Icon } from "@iconify/vue";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);

  const elements = document.querySelectorAll(".projectLogo path");

  elements.forEach((item) => {
    const pathLength = item.getTotalLength();
    item.setAttribute("stroke-dasharray", pathLength);
    item.setAttribute("stroke-dashoffset", pathLength);
    gsap.fromTo(
      item,
      { strokeDashoffset: pathLength },
      {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: ".projectsMain",
          toggleActions: "play none none reverse",
          start: "top center",
          end: "bottom center",
        },
      }
    );
  });
  changeColor(
    "#arrowup",
    "#e7e7e7",
    ".projectsMain",
    "top center",
    "bottom center"
  );
  ObjectChangeColor(
    "#navbar",
    "#161616",
    ".projectsMain",
    "top center",
    "bottom center"
  );
  ObjectChangeColor(
    ".sourceCodeLine",
    "#e7e7e7",
    ".projectsMain",
    "top center",
    "bottom center"
  );
  changeColor(
    "#samshh",
    "#e7e7e7",
    ".projectsMain",
    "top center",
    "bottom center"
  );
  changeColor(
    ".FProject",
    "#e7e7e7",
    ".projectsMain",
    "top center",
    "bottom center"
  );
  changeColor(
    ".projectDesc",
    "#e7e7e7",
    ".projectsMain",
    "top center",
    "bottom center"
  );
  changeColor(
    ".sourceCode",
    "#e7e7e7",
    ".projectsMain",
    "top center",
    "bottom center"
  );
  changeColor(
    ".sourceCodeIcon",
    "#e7e7e7",
    ".projectsMain",
    "top center",
    "bottom center"
  );
  BGchangeColor(".projectsMain", "#161616");
  animateText(".FProject", ".projectsMain", "featured project.", 2);
  animateText(
    ".proj1",
    ".projectsMain",
    "This Discord bot serves as a ticket system with additional features. Users can create tickets using the '/ticket' command, and staff can manage them. The bot includes commands for basic moderation tasks such as banning, kicking, and member information. Additionally, it offers utility commands like announcing messages and sending direct messages.",
    5
  );
  animateText(
    ".proj2",
    ".projectsMain",
    "The mod mail setup allows administrators to configure a designated category and channel for mod mail.",
    5
  );
  pulse(".sourceCodeLine", 2, 0)
});
</script>

<template>
  <div id="projectsID">
    <div class="projectsMain">
      <div class="projectsWrapper">
        <h1 class="FProject"></h1>
        <div>
          <a
            class="sourceCode hoverable"
            href="https://github.com/Samshh/DiscordBot"
            target="_blank"
            style="cursor: none"
          >
            <Icon
              class="sourceCodeIcon"
              icon="carbon:repo-source-code"
              style="color: #161616"
            />
            source
            <div class="sourceCodeLine"></div>
          </a>
        </div>
        <p class="projectDesc proj1"></p>
        <p class="projectDesc proj2"></p>
      </div>
      <div class="ticketLogo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70%"
          height="70%"
          viewBox="0 0 48 48"
          class="projectLogo hoverable"
        >
          <path
            fill="none"
            stroke="#e7e7e7"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.59 34.173A48.874 48.874 0 0 1 14.68 38C7.3 37.79 4.5 33 4.5 33a44.83 44.83 0 0 1 4.81-19.52A16.47 16.47 0 0 1 18.69 10l1 2.31A32.688 32.688 0 0 1 24 12a32.964 32.964 0 0 1 4.33.3l1-2.31a16.47 16.47 0 0 1 9.38 3.51A44.83 44.83 0 0 1 43.5 33s-2.8 4.79-10.18 5a47.42 47.42 0 0 1-2.86-3.81m6.46-2.9c-3.84 1.945-7.555 3.89-12.92 3.89s-9.08-1.945-12.92-3.89"
          />
          <circle
            cx="17.847"
            cy="26.23"
            r="3.35"
            fill="#e7e7e7"
            stroke="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle
            cx="30.153"
            cy="26.23"
            r="3.35"
            fill="#e7e7e7"
            stroke="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>

.projectLogo {
  z-index: 1;
}

.sourceCodeLine {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: #161616;
  transform-origin: left center;
  transform: scaleX(0);
}

.sourceCode {
  z-index: 1;
  width: fit-content;
  text-decoration: none;
  margin: 0;
  font-size: clamp(15px, 1.7vw, 30px);
  font-weight: 200;
  text-align: center;
  padding-top: clamp(7.5px, 1.7vw, 15px);
  color: #161616;
  display: flex;
  align-items: center;
  position: relative;
}

.sourceCodeIcon {
  font-size: clamp(15px, 1.7vw, 30px);
}

.ticket {
  border-radius: 10px;
  object-fit: cover;
  height: clamp(350px, 50vw, 900px);
  width: auto;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  opacity: 0;
}
.ticketLogo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.projectsMain {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
}

.projectDesc {
  padding-top: clamp(15px, 1.7vw, 30px);
  padding-bottom: clamp(7.5px, 1.7vw, 15px);
  font-size: clamp(15px, 1.7vw, 30px);
  font-weight: 200;
  text-align: justify;
  color: #161616;
  margin: 0;
}
.projectsMain {
  padding-left: clamp(22px, 5.7vw, 45px);
  padding-right: clamp(22px, 5.7vw, 45px);
  padding-bottom: clamp(7.5px, 1.7vw, 15px);
  padding-top: clamp(42px, 5.7vw, 85px);
  height: 75vh;
  width: auto;
}

.projectsWrapper {
  display: flex;
  flex-direction: column;
}

.FProject {
  font-size: clamp(22.5px, 3.4vw, 45px);
  font-weight: 800;
  margin: 0;
  color: #161616;
  padding-bottom: clamp(7px, 1.7vw, 15px);
}

::selection {
  background-color: #161616;
  color: #e7e7e7;
}

::-moz-selection {
  background-color: #161616;
  color: #e7e7e7;
}

@media (max-width: 650px) {
  .projectsMain {
    display: flex;
    flex-direction: column;
  }
}
</style>
