<script setup>
import cursor from "./cursor.vue";
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
  router.push('/').then(() => window.location.reload());
};
</script>

<template>
  <cursor />
  <div class="emailme">
    <div class="emailmeContainer">
      <!-- <h1 class="emailmeTitle">message.</h1>
      <form class="emailmeForm">
        <input type="text" class="emailmeInput" placeholder="name." />
        <input type="email" class="emailmeInput" placeholder="email." />
        <textarea class="emailmeTextArea" placeholder="message."></textarea>
        <p class="emailmeButtonSend hoverable">send.</p>
      </form> -->
      <h1 class="hoverable comingSoon">work in-progress</h1>
    </div>
  </div>
  <p @click="goHome" class="hoverable emailmeBackButton">back.</p>
</template>

<style scoped>

.comingSoon {
  font-size: clamp(25px, 3.4vw, 60px);
  font-weight: 800;
  margin-top: 18px;
  user-select: none;
  color: #858585;
}

.emailmeTitle {
  font-size: clamp(25px, 3.4vw, 60px);
  font-weight: 800;
  user-select: none;
}

.emailmeButtonSend {
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: #e7e7e7;
  cursor: none;
  background: #161616;
  border-radius: 50px;
  margin: 0;
  font-size: clamp(7.5px, 1.7vw, 15px);
  font-weight: 800;
  text-align: center;
  margin-top: 18px;
  user-select: none;
  text-decoration: none;
}

.emailmeBackButton {
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: #e7e7e7;
  cursor: none;
  background: #161616;
  border-radius: 50px;
  margin: 0;
  font-size: clamp(7.5px, 1.7vw, 15px);
  font-weight: 800;
  text-align: center;
  margin-top: 18px;
  user-select: none;
  text-decoration: none;
  position: fixed;
  top: 1px;
  right: 20px;
}

.emailmeContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.emailmeTitle {
  font-size: clamp(30px, 5vw, 50px);
  font-weight: 800;
  margin-bottom: 0;
}

.emailmeForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
