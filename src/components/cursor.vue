<template>
  <div>
    <div
      class="custom-cursor"
      :style="{ top: `${cursorY}px`, left: `${cursorX}px`, backgroundColor: cursorColor }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const cursorX = ref(0);
const cursorY = ref(0);
const cursorColor = ref('#161616'); // Default color

const updateCursorPosition = (event) => {
  cursorX.value = event.clientX;
  cursorY.value = event.clientY;

  // Change cursor color based on the mouse position
  cursorColor.value = isMouseOverArea(event.clientX, event.clientY) ? '#e7e7e7' : '#161616';
};

const isMouseOverArea = (mouseX, mouseY) => {
  const outerWrapper = document.querySelector('.outerWrapper');
  const outerWrapperPosition = outerWrapper ? outerWrapper.getBoundingClientRect() : null;

  return (
    outerWrapperPosition &&
    mouseX >= outerWrapperPosition.left &&
    mouseX <= outerWrapperPosition.right &&
    mouseY >= outerWrapperPosition.top &&
    mouseY <= outerWrapperPosition.bottom
  );
};

onMounted(() => {
  window.addEventListener('mousemove', updateCursorPosition);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', updateCursorPosition);
});
</script>

<style scoped>
.custom-cursor {
  position: fixed;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease-out;
  pointer-events: none;
}
</style>
