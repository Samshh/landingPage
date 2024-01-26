<script setup></script>

<template>
  <div class="outerWrapper">
    <div class="innerWrapper">
      <img class="navLogo" src="C:\landingPage\src\assets\navBox.svg" alt="" />
      <img
        class="navBurger"
        src="C:\landingPage\src\assets\navBurger.svg"
        alt=""
      />
    </div>
  </div>
</template>

<style scoped>
.outerWrapper {
  height: 10vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 10;
}

.innerWrapper {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
}

.navBurger {
  width: 40px;
}
</style>
