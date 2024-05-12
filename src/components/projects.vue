<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { onMounted } from "vue";
import { changeColor, BGchangeColor, ObjectChangeColor } from "./animations";
import { Icon } from "@iconify/vue";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

onMounted(() => {
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
  changeColor(
    "#samshh",
    "#e7e7e7",
    ".projectsMain",
    "top center",
    "bottom center"
  );
  changeColor(
    ".projMainTxt",
    "#e7e7e7",
    ".projectsMain",
    "top center",
    "bottom center"
  );
  changeColor(
    ".projectstxt",
    "#e7e7e7",
    ".projectsMain",
    "top center",
    "bottom center"
  );
  changeColor(
    ".projBold",
    "#e7e7e7",
    ".projectsMain",
    "top center",
    "bottom center"
  );
  changeColor(
    ".projIcons",
    "#e7e7e7",
    ".projectsMain",
    "top center",
    "bottom center"
  );
  BGchangeColor(".projectsMain", "#161616");
});
</script>

<template>
  <div id="projectsID">
    <div class="projectsMain">
      <h1 class="projMainTxt">projects.</h1>
      <div class="projectsWrapper">
        <div class="projects1">
          <a
            style="cursor: none"
            href="https://saminate.netlify.app/"
            target="_blank"
          >
            <img class="projectspic hoverable" src="../assets/sAproj.webp" alt="" />
          </a>
          <div class="projectstxtwrapper">
            <h1 class="projectstxt">
              <a
                href="https://saminate.netlify.app/"
                class="projBold hoverable"
                target="_blank"
                >sAminate</a
              >
              - JavaScript Library
            </h1>
            <div>
              <Icon
                icon="ion:logo-npm"
                style="color: #161616"
                class="projIcons"
              />
              <Icon
                icon="ion:logo-javascript"
                style="color: #161616"
                class="projIcons"
              />
              <Icon
                icon="cib:greensock"
                style="color: #161616"
                class="projIcons"
              />
            </div>
          </div>
        </div>
        <div class="projects2">
          <a
            style="cursor: none"
            href="https://github.com/Samshh/DiscordBot"
            target="_blank"
          >
            <img class="projectspic hoverable" src="../assets/discproj.webp" alt="" />
          </a>
          <div class="projectstxtwrapper">
            <h1 class="projectstxt">
              <a
                href="https://github.com/Samshh/DiscordBot"
                class="projBold hoverable"
                target="_blank"
                >Ticket System</a
              >
              - Bot development
            </h1>
            <div>
              <Icon
                icon="ic:baseline-discord"
                style="color: #161616"
                class="projIcons"
              />
              <Icon
                icon="akar-icons:python-fill"
                style="color: #161616"
                class="projIcons"
              />
            </div>
          </div>
        </div>
        <div class="projects3">
          <a
            style="cursor: none;"
            href="https://github.com/Samshh/GDSC-project"
            target="_blank"
          >
            <img class="projectspic hoverable" src="../assets/gdscproj.webp" alt="" />
          </a>
          <div class="projectstxtwrapper">
            <h1 class="projectstxt">
              <a
                href="https://github.com/Samshh/GDSC-project"
                class="projBold hoverable"
                target="_blank"
                >GDSC Prototype</a
              >
              - Website Development
            </h1>
            <div>
              <Icon
                icon="ri:vuejs-fill"
                style="color: #161616"
                class="projIcons"
              />
              <Icon
                icon="mdi:language-typescript"
                style="color: #161616"
                class="projIcons"
              />
              <Icon
                icon="cib:greensock"
                style="color: #161616"
                class="projIcons"
              />
              <Icon
                icon="mdi:tailwind"
                style="color: #161616"
                class="projIcons"
              />
            </div>
          </div>
        </div>
        <div class="projects4">
          <a
            style="cursor: none"
            href="https://mmcm-ocp.com/"
            target="_blank"
          >
            <img class="projectspic hoverable" src="../assets/ocpproj.webp" alt="" />
          </a>
          <div class="projectstxtwrapper">
            <h1 class="projectstxt">
              <a
                href="https://mmcm-ocp.com/"
                target="_blank"
                class="projBold hoverable"
                >OCP Website</a
              >
              - Website Development
            </h1>
            <div>
              <Icon icon="mdi:react" style="color: #161616" class="projIcons" />
              <Icon
                icon="ion:logo-javascript"
                style="color: #161616"
                class="projIcons"
              />
              <Icon icon="mdi:sass" style="color: #161616" class="projIcons" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projBold {
  font-weight: 800;
  color: #161616;
  text-decoration: none;
  cursor: none;
}

.projects1,
.projects2,
.projects3,
.projects4 {
  padding-top: clamp(22px, 5.7vw, 25px);
  padding-bottom: clamp(22px, 5.7vw, 25px);
  padding-left: clamp(22px, 5.7vw, 25px);
  padding-right: clamp(22px, 5.7vw, 25px);
}

.projIcons {
  font-size: clamp(15px, 1.7vw, 30px);
  padding-left: 10px;
}

.projectstxt {
  margin: 0;
  color: #161616;
  font-weight: 200;
  font-size: clamp(15px, 1.7vw, 30px);
  user-select: none;
}

.projectstxtwrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.projectspic {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  user-select: none;
  transition: filter 0.3s ease;
}

.projectspic:hover {
  filter: grayscale(100%);
}

.projMainTxt {
  font-size: clamp(25px, 3.4vw, 60px);
  font-weight: 800;
  color: #161616;
  margin: 0;
}

.projectsMain {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: auto;
  padding-top: clamp(25px, 5.7vw, 90px);
  padding-bottom: clamp(25px, 5.7vw, 45px);
  padding-left: clamp(22px, 5.7vw, 45px);
  padding-right: clamp(22px, 5.7vw, 45px);
  max-width: 1920px;
  margin-left: auto;
  margin-right: auto;
}

.projectsWrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  align-items: center;
}

@media (max-width: 808px) {
  .projectsWrapper {
    display: flex;
    flex-direction: column;
  }
}
</style>
