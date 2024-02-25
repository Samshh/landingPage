<script setup>
import { ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { onMounted } from "vue";
import {
  BGchangeColor,
  cursorChange,
  changeColor,
  animateText,
} from "./animations";

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);
  animateText(".FProject", ".projectsMain", "featured project.", 2);
  animateText(
    ".proj1",
    ".projectsMain",
    "This Discord bot serves as a ticket system with additional features. Users can create tickets using the '/ticket' command, and staff can manage them. The bot includes commands for basic moderation tasks such as banning, kicking, and member information. Additionally, it offers utility commands like announcing messages and sending direct messages.",
    5
  );
  animateText(
    ".proj2",
    ".projectsMain",
    "The mod mail setup allows administrators to configure a designated category and channel for mod mail.",
    5
  );
  changeColor(
    "#arrowup",
    "#e7e7e7",
    ".projectsMain",
    "top center",
    "bottom center"
  );
  BGchangeColor(".projectsMain", "#161616");
  cursorChange(".projectsMain", "#e7e7e7");
  changeColor(
    ".projectDesc",
    "#e7e7e7",
    ".projectsMain",
    "top center",
    "bottom center"
  );
  changeColor(
    ".FProject",
    "#e7e7e7",
    ".projectsMain",
    "top center",
    "bottom center"
  );
});
</script>

<template>
  <div class="projectsMain">
    <div class="projectsWrapper">
      <h1 class="FProject">注目のプロジェクト。</h1>
      <p class="projectDesc proj1">
        このDiscordボットは、追加の機能を備えたチケットシステムとして機能します。
        ユーザーは「/ticket」コマンドを使用してチケットを作成でき、スタッフはそれらを管理できます。
        ボットには禁止、キック、およびメンバー情報などの基本的なモデレーションタスクのためのコマンドが含まれています。
        さらに、アナウンスメッセージやダイレクトメッセージの送信などのユーティリティコマンドも提供されています。
      </p>
      <p class="projectDesc proj2">
        モッドメールのセットアップでは、管理者が指定したカテゴリとチャンネルをモッドメール用に設定できます。
      </p>
    </div>
    <div class="ticketLogo">
    </div>
  </div>
</template>

<style scoped>
.ticketLogo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.projectsMain {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
}

.projectDesc {
  padding-bottom: clamp(22px, 5.7vw, 45px);
  font-size: clamp(15px, 1.7vw, 30px);
  padding-right: clamp(22px, 5.7vw, 45px);
  font-weight: 400;
  text-align: justify;
  margin: 0;
}
.projectsMain {
  padding-left: clamp(22px, 5.7vw, 45px);
  padding-right: clamp(22px, 5.7vw, 45px);
  padding-bottom: clamp(7.5px, 1.7vw, 15px);
  padding-top: clamp(22px, 5.7vw, 45px);
  height: 80vh;
  width: 100vw;
}

.projectsWrapper {
  display: flex;
  flex-direction: column;
  padding-top: clamp(22px, 5.7vw, 45px);
  padding-right: clamp(22px, 5.7vw, 45px);
}

.FProject {
  font-size: clamp(22.5px, 3.4vw, 45px);
  font-weight: 400px;
  margin: 0;
  padding-bottom: clamp(22px, 5.7vw, 45px);
}

@media (max-width: 950px) {
  .projectsMain {
    display: flex;
    flex-direction: column;
  }

  .ticketing {
    transform: scale(0.5);
    padding-left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

</style>
