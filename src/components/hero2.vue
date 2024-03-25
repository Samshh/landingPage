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
      delay: index * 0.25,
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
  height: 100vh;
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

.heroTextWrap {
  z-index: 1;
  object-fit: contain;
  padding-left: 45px;
  padding-right: 45px;
}

.highlight {
  font-weight: 800;
}
</style>
