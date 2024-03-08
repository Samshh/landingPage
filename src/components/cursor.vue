<template>
  <div ref="cursor" class="custom-cursor"></div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";

const cursor = ref(null);

onMounted(() => {
  const updateCursorPosition = (event) => {
    if (window.innerWidth > 768) {
      gsap.to(cursor.value, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  document.addEventListener("mousemove", updateCursorPosition);
});
</script>

<style scoped>
.custom-cursor {
  position: fixed;
  width: 13px;
  height: 13px;
  background-color: #161616;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  cursor: none;
  transform: translate(-50%, -50%);
}

@media (max-width: 768px) {
  .custom-cursor {
    display: none;
  }
}

</style>
