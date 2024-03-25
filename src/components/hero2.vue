<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const textRef = ref(null);

onMounted(() => {
  // const tl = gsap.timeline({ repeat: -1 });
  // const tl2 = gsap.timeline({ repeat: -1 });
  // tl2
  //   .fromTo("#dot", { y: 20 }, { duration: .5, y: 95, ease: "power1.in" })
  //   .to("#dot", { duration: .5, y: 20, ease: "power1.out" });

  // tl.fromTo(
  //   "#square1",
  //   { x: -40, y: -40 },
  //   { duration: 1, x: 0, y: 0, ease: "none" },
  //   0
  // )
  //   .fromTo(
  //     "#square2",
  //     { x: 0, y: 0 },
  //     { duration: 1, x: 40, y: 40, ease: "none" },
  //     0
  //   )
  //   .fromTo(
  //     "#square3",
  //     { x: 40, y: 40 },
  //     { duration: 1, x: 80, y: 80, ease: "none" },
  //     0
  //   )
  //   .fromTo(
  //     "#square4",
  //     { x: 80, y: 80 },
  //     { duration: 1, x: 120, y: 120, ease: "none" },
  //     0
  //   )
  //   .fromTo(
  //     "#square5",
  //     { x: 120, y: 120 },
  //     { duration: 1, x: 160, y: 160, ease: "none" },
  //     0
  //   )
  //   .fromTo(
  //     "#square6",
  //     { x: 160, y: 160 },
  //     { duration: 1, x: 200, y: 200, ease: "none" },
  //     0
  //   );

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
    <!-- <svg class="climbing" height="200" width="200">
      <circle id="dot" cx="55%" r="10" fill="#161616" />
      <rect
        id="square1"
        x="0%"
        y="0%"
        width="20"
        height="5"
        style="fill: #161616"
      />
      <rect
        id="square2"
        x="0%"
        y="0%"
        width="20"
        height="5"
        style="fill: #161616"
      />
      <rect
        id="square3"
        x="0%"
        y="0%"
        width="20"
        height="5"
        style="fill: #161616"
      />
      <rect
        id="square4"
        x="0%"
        y="0%"
        width="20"
        height="5"
        style="fill: #161616"
      />
      <rect
        id="square5"
        x="0%"
        y="0%"
        width="20"
        height="5"
        style="fill: #161616"
      />
      <rect
        id="square6"
        x="0%"
        y="0%"
        width="20"
        height="5"
        style="fill: #161616"
      />
    </svg> -->
  </div>
</template>

<style scoped>
/* .climbing {
  padding-top: 4%;
  scale: 2;
} */

.heroWrapper {
  display: flex;
  justify-content: start;
  align-items: start;
  height: 100%;
  padding-bottom: 90px;
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

/* @media (max-width: 1440px) {
  .climbing {
    scale: 1.5;
  }

}

@media (max-width: 1024px) {
  .climbing {
    scale: 1.25;
  }

}

@media (max-width: 768px) {
  .climbing {
    padding-top: 2%;
    scale: 1;
  }

} */

</style>
