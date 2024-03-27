<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { onMounted } from "vue";
import { changeColor, BGchangeColor, ObjectChangeColor } from "./animations";
import { Icon } from "@iconify/vue";
import { scrollerpic } from "./animations";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

onMounted(() => {
  const elements = document.querySelectorAll(".projectLogo path");
  if (window.innerWidth > 808) {
    gsap.from(".projectsDesc", {
      scrollTrigger: {
        trigger: ".projects1",
        endTrigger: ".projects3",
        start: "center center",
        end: "center center",
        pin: ".projectsDesc",
        scrub: false,
        toggleActions: "play none none reverse",
      },
    });
  }

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
  scrollerpic(".projects1", ".projects1");
  scrollerpic(".projects2", ".projects2");
  scrollerpic(".projects3", ".projects3");
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
    ".projectDesc",
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
      <div class="projPinWrapper">
        <div class="projectsDesc">
          <h1 class="projMainTxt">projects.</h1>
          <p class="projectDesc">
            Here are projects that I'm involved, which are mostly passion
            projects and some are for organizations. This includes planning,
            analysis, design, development, testing, deployment and maintenance.
          </p>
        </div>
        <div class="projectsWrapper">
          <div class="projects1">
            <img class="projectspic" src="../assets/discproj.webp" alt="" />
            <div class="projectstxtwrapper">
              <h1 class="projectstxt">
                <span class="projBold">Ticket System</span> - Bot development
              </h1>
              <div>
                <Icon
                  icon="ic:baseline-discord"
                  style="color: #e7e7e7"
                  class="projIcons"
                />
                <Icon
                  icon="akar-icons:python-fill"
                  style="color: #e7e7e7"
                  class="projIcons"
                />
              </div>
            </div>
          </div>
          <div class="projects2">
            <img class="projectspic" src="../assets/gdscproj.webp" alt="" />
            <div class="projectstxtwrapper">
              <h1 class="projectstxt">
                <span class="projBold">GDSC Prototype</span> - Website
                Development
              </h1>
              <div>
                <Icon
                  icon="ri:vuejs-fill"
                  style="color: #e7e7e7"
                  class="projIcons"
                />
                <Icon
                  icon="mdi:language-typescript"
                  style="color: #e7e7e7"
                  class="projIcons"
                />
                <Icon
                  icon="cib:greensock"
                  style="color: #e7e7e7"
                  class="projIcons"
                />
                <Icon
                  icon="mdi:tailwind"
                  style="color: #e7e7e7"
                  class="projIcons"
                />
              </div>
            </div>
          </div>
          <div class="projects3">
            <img class="projectspic" src="../assets/ocpproj.webp" alt="" />
            <div class="projectstxtwrapper">
              <h1 class="projectstxt">
                <span class="projBold">OCP Website</span> - Website Development
              </h1>
              <div>
                <Icon
                  icon="mdi:react"
                  style="color: #e7e7e7"
                  class="projIcons"
                />
                <Icon
                  icon="ion:logo-javascript"
                  style="color: #e7e7e7"
                  class="projIcons"
                />
                <Icon
                  icon="mdi:sass"
                  style="color: #e7e7e7"
                  class="projIcons"
                />
              </div>
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
}

.projectDesc {
  font-weight: 200;
  font-size: clamp(15px, 1.7vw, 30px);
  padding-top: clamp(15px, 1.7vw, 30px);
  color: #161616;
  margin: 0;
}

.projPinWrapper {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  justify-content: start;
  align-items: start;
}

.projects1,
.projects2,
.projects3 {
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
  color: #e7e7e7;
  font-weight: 200;
  font-size: clamp(15px, 1.7vw, 30px);
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
}

.projMainTxt {
  font-size: clamp(25px, 3.4vw, 60px);
  padding-bottom: clamp(22px, 5.7vw, 45px);
  font-weight: 800;
  color: #161616;
  margin: 0;
}

.projectsMain {
  margin: 0;
  height: auto;
  padding-top: clamp(22px, 5.7vw, 45px);
  padding-bottom: clamp(22px, 5.7vw, 45px);
  padding-left: clamp(22px, 5.7vw, 45px);
  padding-right: clamp(22px, 5.7vw, 45px);
}

.projectsWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (max-width: 808px) {
  .projPinWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .projectDesc {
    text-align: start;
  }

  .projMainTxt {
    text-align: center;
  }
}
</style>
