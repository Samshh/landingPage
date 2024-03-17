<script setup>
import { onMounted, onUnmounted } from "vue";
import { Icon } from "@iconify/vue";
import { changeColor, animateText } from "./animations.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.fromTo(
    ".icon",
    {
      autoAlpha: 0,
      y: 100,
    },
    {
      scrollTrigger: {
        trigger: ".technoOuter",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
      y: 0,
      autoAlpha: 1,
      duration: 1,
      ease: "power1.out",
      stagger: 0.15,
    }
  );
  changeColor(".mt", "#161616", ".technoOuter", "top center", "bottom center");
  changeColor(
    ".cisco",
    "#161616",
    ".technoOuter",
    "top center",
    "bottom center"
  );
  changeColor(".num", "#161616", ".technoOuter", "top center", "bottom center");
  changeColor(
    ".disc",
    "#161616",
    ".technoOuter",
    "top center",
    "bottom center"
  );
  changeColor(".ai", "#161616", ".technoOuter", "top center", "bottom center");
  changeColor(
    ".tailwind",
    "#161616",
    ".technoOuter",
    "top center",
    "bottom center"
  );
  changeColor(".vue", "#161616", ".technoOuter", "top center", "bottom center");
  changeColor(".js", "#161616", ".technoOuter", "top center", "bottom center");
  changeColor(
    ".html",
    "#161616",
    ".technoOuter",
    "top center",
    "bottom center"
  );
  changeColor(".css", "#161616", ".technoOuter", "top center", "bottom center");
  changeColor(
    ".gsap",
    "#161616",
    ".technoOuter",
    "top center",
    "bottom center"
  );
  changeColor(".md", "#161616", ".technoOuter", "top center", "bottom center");
  changeColor(".sql", "#161616", ".technoOuter", "top center", "bottom center");
  changeColor(".php", "#161616", ".technoOuter", "top center", "bottom center");
  changeColor(".cpp", "#161616", ".technoOuter", "top center", "bottom center");
  changeColor(
    ".java",
    "#161616",
    ".technoOuter",
    "top center",
    "bottom center"
  );
  changeColor(".git", "#161616", ".technoOuter", "top center", "bottom center");
  changeColor(".skl", "#161616", ".technoOuter", "top center", "bottom center");
  changeColor(".pd", "#161616", ".technoOuter", "top center", "bottom center");
  changeColor(".tf", "#161616", ".technoOuter", "top center", "bottom center");
  changeColor(".py", "#161616", ".technoOuter", "top center", "bottom center");
  changeColor(
    ".techTitle",
    "#161616",
    ".technoOuter",
    "top center",
    "bottom center"
  );
  animateText(".techTitle", ".technoOuter", "technologies.", 2);
});

onUnmounted(() => {});
</script>

<template>
  <div id="techID">
    <div class="technoOuter">
      <div class="technoInner">
        <div>
          <h1 class="techTitle">7Gh5Jk1QrP39i</h1>
        </div>
        <div class="techStack">
          <div class="tech" style="display: flex">
            <Icon
              icon="akar-icons:python-fill"
              style="color: #e7e7e7"
              class="icon py"
            />
            <Icon
              icon="simple-icons:tensorflow"
              style="color: #e7e7e7"
              class="icon tf"
            />
            <Icon
              icon="simple-icons:openai"
              style="color: #e7e7e7"
              class="icon ai"
            />
            <Icon
              icon="simple-icons:pandas"
              style="color: #e7e7e7"
              class="icon pd"
            />
            <Icon
              icon="simple-icons:numpy"
              style="color: #e7e7e7"
              class="icon num"
            />
            <Icon
              icon="devicon-plain:matplotlib"
              style="color: #e7e7e7"
              class="icon mt"
            />
            <Icon
              icon="simple-icons:scikitlearn"
              style="color: #e7e7e7"
              class="icon skl"
            />
            <Icon icon="mdi:git" style="color: #e7e7e7" class="icon git" />
            <Icon
              icon="simple-icons:mysql"
              style="color: #e7e7e7"
              class="icon sql"
            />
            <Icon
              icon="akar-icons:php-fill"
              style="color: #e7e7e7"
              class="icon php"
            />
            <Icon
              icon="devicon-plain:cplusplus"
              style="color: #e7e7e7"
              class="icon cpp"
            />
            <Icon
              icon="ant-design:java-outlined"
              style="color: #e7e7e7"
              class="icon java"
            />
            <Icon
              icon="ic:baseline-discord"
              style="color: #e7e7e7"
              class="icon disc"
            />
            <Icon
              icon="simple-icons:cisco"
              style="color: #e7e7e7"
              class="icon cisco"
            />
            <Icon
              icon="ri:vuejs-fill"
              style="color: #e7e7e7"
              class="icon vue"
            />
            <Icon icon="cib:js" style="color: #e7e7e7" class="icon js" />
            <Icon
              icon="akar-icons:html-fill"
              style="color: #e7e7e7"
              class="icon html"
            />
            <Icon
              icon="akar-icons:css-fill"
              style="color: #e7e7e7"
              class="icon css"
            />
            <Icon
              icon="cib:greensock"
              style="color: #e7e7e7"
              class="icon gsap"
            />
            <Icon
              icon="mdi:tailwind"
              style="color: #e7e7e7"
              class="icon tailwind"
            />
            <Icon icon="la:markdown" style="color: #e7e7e7" class="icon md" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tech {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.icon {
  font-size: clamp(75px, 9vw, 200px);
  padding-top: clamp(22px, 5.7vw, 45px);
  padding-left: clamp(22px, 5.7vw, 45px);
  padding-right: clamp(22px, 5.7vw, 45px);
}

.technoInner {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: clamp(22px, 5.7vw, 45px);
}

.techTitle {
  color: #e7e7e7;
  font-size: clamp(22.5px, 3.4vw, 45px);
  font-weight: 400px;
  margin: 0px;
}
</style>
