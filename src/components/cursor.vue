<template>
  <div>
    <div ref="bigBall" class="cursor__ball cursor__ball--big"></div>
    <div ref="smallBall" class="cursor__ball cursor__ball--small"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";

const bigBall = ref(null);
const smallBall = ref(null);

onMounted(() => {
  const hoverables = document.querySelectorAll(".hoverable");

  const onMouseMove = (e) => {
    gsap.to(bigBall.value, 0.4, {
      x: e.clientX - 15,
      y: e.clientY - 15,
    });
    gsap.to(smallBall.value, 0.1, {
      x: e.clientX - 5,
      y: e.clientY - 7,
    });
  };

  const onMouseHover = () => {
    gsap.to(bigBall.value, 0.3, {
      scale: 4,
    });
  };

  const onMouseHoverOut = () => {
    gsap.to(bigBall.value, 0.3, {
      scale: 1,
    });
  };

  document.body.addEventListener("mousemove", onMouseMove);
  hoverables.forEach((hoverable) => {
    hoverable.addEventListener("mouseenter", onMouseHover);
    hoverable.addEventListener("mouseleave", onMouseHoverOut);
  });
});
</script>

<style scoped>
.cursor__ball {
  position: fixed;
  top: 0;
  left: 0;
  mix-blend-mode: difference;
  z-index: 1000;
  pointer-events: none;
}

.cursor__ball--big {
  width: 30px;
  height: 30px;
  background-color: #e7e7e7;
  border-radius: 50%;
}

.cursor__ball--small {
  width: 10px;
  height: 10px;
  background-color: #e7e7e7;
  border-radius: 50%;
}

@media (max-width: 768px) {
  .cursor__ball--big {
    display: none;
  }
  .cursor__ball--small {
    display: none;
  }
}

</style>
