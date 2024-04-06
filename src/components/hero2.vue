<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const textRef = ref(null);

onMounted(() => {
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: textRef.value,
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none reverse",
    },
  });

  const lines = textRef.value.querySelectorAll("p");

  lines.forEach((line, index) => {
    timeline.from(line, {
      duration: 0.25,
      y: 50,
      opacity: 0,
      ease: "power1.out",
    });
  });
});
</script>

<template>
  <div class="heroWrapper">
    <div class="heroTextWrap">
      <h1 class="heroText" ref="textRef">
        <p>crafting <span class="highlight hoverable">experiences</span>.</p>
        <p>powering <span class="highlight hoverable">solutions</span>.</p>
        <p>
          orchestrating <span class="highlight hoverable">automation</span>.
        </p>
      </h1>
    </div>
  </div>
</template>

<style scoped>

.heroWrapper {
  display: flex;
  justify-content: start;
  align-items: center;
  height: fit-content;
  padding-bottom: 150px;
  padding-top: 150px;
}

.heroText {
  font-size: clamp(25px, 3.4vw, 60px);
  font-weight: 200;
  margin: 0;
  color: #161616;
  z-index: 1;
  user-select: none;
  text-align: start;
}

.heroText p {
  margin: 0;
  padding-top: 15px; 
  padding-bottom: 15px; 
}

.heroTextWrap {
  z-index: 1;
  object-fit: contain;
  padding-left: clamp(22px, 5.7vw, 45px);
  padding-right: clamp(22px, 5.7vw, 45px);
}

.highlight {
  font-weight: 800;
}

@media (max-width: 808px) {
  .heroWrapper {
    display: flex;
    height: auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
</style>
