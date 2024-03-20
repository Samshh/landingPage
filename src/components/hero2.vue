<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const textRef = ref(null);

onMounted(() => {
  if (textRef.value) {
    const words = textRef.value.innerText.split(" ");

    textRef.value.innerText = "";

    words.forEach((word) => {
      const span = document.createElement("span");
      span.innerText = word + " ";
      textRef.value?.appendChild(span);
    });

    gsap.from(textRef.value.children, {
      opacity: 0,
      y: 20,
      duration: 0.25,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".heroWrapper",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
        markers: false,
      },
    });
  }
});
</script>

<template>
  <div class="heroWrapper">
    <div class="heroTextWrap">
      <h1 class="heroText hoverable" ref="textRef">
        "The best thing about a boolean is even if you are wrong, you are only
        off by a bit."
      </h1>
    </div>
  </div>
</template>

<style scoped>
.heroWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
}

.heroText {
  font-size: clamp(22.5px, 3.4vw, 45px);
  font-weight: 800;
  margin: 0;
  color: #161616;
  z-index: 1;
  user-select: none;
  text-align: center;
}

.heroTextWrap {
  z-index: 1;
  object-fit: contain;
  padding-left: 45px;
  padding-right: 45px;
}
</style>
