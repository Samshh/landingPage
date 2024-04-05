<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animatePositionX } from "./animations";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to([".gdglogo", ".mmcmlogo"], {
    scrollTrigger: {
      trigger: ".outterWrapper",
      start: "top center",
      end: "top center",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    duration: 0.5,
  });

  gsap.from(".affilMainTxt", {
    scrollTrigger: {
      trigger: ".affilWrapper",
      start: "top center",
      end: "top center",
      toggleActions: "play none none reverse",
    },
    y: 100,
    opacity: 0,
    duration: 1,
  });
  animatePositionX(".gdg", ".affilWrapper", 100, 1);
  animatePositionX(".mmcm", ".affilWrapper", -100, 1);
});
</script>
<template>
  <div id="affilID"></div>
  <div class="affilWrapper">
    <div class="affilInWrapper">
      <h1 class="affilMainTxt">affiliations.</h1>
      <div class="affilContentsWrapper">
        <div class="gdg">
          <img class="gdglogo" src="../assets/gdg.png" alt="" />
          <div class="gdgTxtWrapper">
            <h1 class="gdgTxt">Technical Committee</h1>
            <p class="gdgSubTxt">Google Developer Groups - Davao</p>
            <h1 class="gdgTxt">Web Application Developer</h1>
            <p class="gdgSubTxt">
              Google Developer Student Clubs - Mapúa Malayan Colleges Mindanao
            </p>
          </div>
        </div>
        <div class="mmcm">
          <img class="mmcmlogo" src="../assets/mmcm.png" alt="" />
          <div class="mmcmTxtWrapper">
            <h1 class="mmcmTxt">Front-end Developer</h1>
            <p class="mmcmSubTxt">
              Mapúa Malayan Colleges Mindanao - OCP Project
            </p>
            <h1 class="mmcmTxt">Student</h1>
            <p class="mmcmSubTxt">
              Mapúa Malayan Colleges Mindanao - BS Computer Science
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.affilWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: clamp(22px, 5.7vw, 45px);
  padding-bottom: clamp(22px, 5.7vw, 45px);
  height: 100vh;
}

.affilInWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.affilMainTxt {
  font-size: clamp(25px, 3.4vw, 60px);
  font-weight: 800;
  margin: 0px;
  user-select: none;
  color: #161616;
}

.affilContentsWrapper {
  display: flex;
  flex-direction: column;
  align-items: start;
  overflow: hidden;
}

.gdg,
.mmcm {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: clamp(22px, 3.4vw, 45px);
  padding-left: clamp(22px, 3.4vw, 45px);
  padding-right: clamp(22px, 3.4vw, 45px);
  user-select: none;
}

.gdgTxtWrapper,
.mmcmTxtWrapper {
  display: flex;
  flex-direction: column;
  padding-left: clamp(22.5px, 2.7vw, 25px);
}

.gdgSubTxt,
.mmcmSubTxt {
  margin: 0;
  color: #161616;
  font-size: clamp(10px, 1.7vw, 20px);
  font-weight: 200;
}

.gdgTxt,
.mmcmTxt {
  margin: 0;
  color: #161616;
  font-size: clamp(15px, 2.7vw, 30px);
  font-weight: 600;
}

.gdglogo,
.mmcmlogo {
  width: auto;
  height: clamp(75px, 20vw, 175px);
}

@media (max-width: 600px) {
  .gdg,
  .mmcm {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .affilContentsWrapper {
    align-items: center;
    justify-content: center;
  }
  .gdgTxtWrapper,
  .mmcmTxtWrapper {
    padding: 0;
  }
  .gdgSubTxt,
  .mmcmSubTxt {
    padding-bottom: 10px;
  }
}
</style>
