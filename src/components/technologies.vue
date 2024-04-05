<script setup>
import { onMounted, onUnmounted } from "vue";
import { Icon } from "@iconify/vue";
import { changeColor } from "./animations.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.fromTo(
    ".techTitle span",
    {
      autoAlpha: 0,
    },
    {
      autoAlpha: 1,
      duration: 2,
      ease: "power1.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".techTitle",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
      },
    }
  );

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
  changeColor(
    ".icon",
    "#161616",
    ".technoOuter",
    "top center",
    "bottom center"
  );
  changeColor(
    ".techTitle",
    "#161616",
    ".technoOuter",
    "top center",
    "bottom center"
  );
});

onUnmounted(() => {});
</script>

<template>
  <div id="techID">
    <div class="technoOuter">
      <div class="technoInner">
        <div>
          <h1 class="techTitle">
            <span
              v-for="(letter, index) in 'technologies.'.split('')"
              :key="index"
              >{{ letter }}</span
            >
          </h1>
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
              icon="simple-icons:anaconda"
              style="color: #e7e7e7"
              class="icon conda"
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
              icon="ri:vuejs-fill"
              style="color: #e7e7e7"
              class="icon vue"
            />
            <Icon icon="mdi:react" style="color: #e7e7e7" class="icon react" />
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
            <Icon
              icon="mdi:sass"
              style="color: #e7e7e7"
              class="icon sass"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.technoOuter {
  padding-top: clamp(25px, 5.7vw, 90px);
  padding-bottom: clamp(22px, 5.7vw, 45px);
}
.tech {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.icon {
  font-size: clamp(60px, 9vw, 200px);
  padding-top: clamp(22px, 5.7vw, 45px);
  padding-left: clamp(22px, 5.7vw, 45px);
  padding-right: clamp(22px, 5.7vw, 45px);
}

.technoInner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.techTitle {
  color: #e7e7e7;
  font-size: clamp(25px, 3.4vw, 60px);
  font-weight: 800;
  margin: 0px;
  user-select: none;
}
</style>
