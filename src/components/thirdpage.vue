<script setup>
import { onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import {animateText, changeColor} from './animations.js';


onMounted(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".projectwrap", {
        scrollTrigger: {
            trigger: ".projectwrap",
            start: "-3.5%",
            end: "350%", 
            pin: true,
            pinSpacing: false, 
            scrub: true,
            markers: false, 
        },
    });

    const scrollerpic = (selector, trigger, opacity, x) => {
        gsap.to(selector, {
            scrollTrigger: {
                trigger: trigger,
                start: "top center",
                end: "bottom center",
                toggleActions: "play reverse play reverse",
                scrub: false,
                markers: false,
            },
            ease: "power1.inOut",
            x: x,
            opacity: opacity,
        });
    };
    scrollerpic(".projectpics", ".projectpics", "1", "0");
    scrollerpic(".projectpic1", ".projectpic1 ", "1", "-5%");
    scrollerpic(".projectpic2", ".projectpic2", "1", "-5%");
    scrollerpic(".projectpic3", ".projectpic3", "1", "-5%");
    scrollerpic(".projectpic4", ".projectpic4", "1", "-5%");
    scrollerpic(".projectpic5", ".projectpic5", "1", "-5%");
    animateText('.projects', '.projects', 'Featured Project.', 1);
    animateText('.projectdesc', '.projects', 'This Discord bot serves as a ticket system with additional features. Users can create tickets using the "/ticket" command, and staff can manage them. The bot includes commands for basic moderation tasks such as banning, kicking, and member information. Additionally, it offers utility commands like announcing messages and sending direct messages.', 10);
    animateText('.projectdesc1', '.projects', 'The mod mail setup allows administrators to configure a designated category and channel for mod mail.', 10);
    changeColor(".projects", "#161616", ".projectwrap", "top center", "400%");
    changeColor(".project", "#161616", ".projectwrap", "top center", "400%");
    changeColor(".projectdesc", "#161616", ".projectwrap", "top center", "400%");
    changeColor(".projectdesc1", "#161616", ".projectwrap", "top center", "400%");

});
    
onUnmounted(() => {
    gsap.killTweensOf(".projectwrap", "projectpic1", "projectpic2", "projectpic3", "projectpic4", "projectpic5");
});
</script>

<template>
    <div class="outerWrapper">
        <div class="innerWrapper">
            <div class="projectwrap">
                <p class="projects">注目のプロジェクト。</p>
                <p class="project">Discord API.</p>
                <p class="projectdesc">このDiscordボットは、追加の機能を備えたチケットシステムとして機能します。
                ユーザーは「/ticket」コマンドを使用してチケットを作成でき、スタッフはそれらを管理できます。
                ボットには禁止、キック、およびメンバー情報などの基本的なモデレーションタスクのためのコマンドが含まれています。
                さらに、アナウンスメッセージやダイレクトメッセージの送信などのユーティリティコマンドも提供されています。 
                <p class="projectdesc1">モッドメールのセットアップでは、管理者が指定したカテゴリとチャンネルをモッドメール用に設定できます。</p></p>
            </div>
            <div class="projectpics">
                <img class="projectpic1" src="/src/assets/project1.png" alt="">
                <img class="projectpic2" src="/src/assets/project2.png" alt="">
                <img class="projectpic3" src="/src/assets/project3.png" alt="">
                <img class="projectpic4" src="/src/assets/project4.png" alt="">
                <img class="projectpic5" src="/src/assets/project5.png" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
.outerWrapper{
    height: 400vh;
    width: 100vw;
    padding-top: 1%;
}

.innerWrapper{
    display: flex;
    align-items: flex-start;
    justify-content: center;
}

.projectwrap{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 5%;
    gap: 20px;
}

.projects{
    font-size: 45px;
    font-weight: 400px;
    margin-bottom: 0px;
    padding-bottom: 20px;
    margin: 0;
    text-align: left;
    color: #e7e7e7;
}

.project{
    margin: 0;
    font-size: 30px;
    font-weight: 400;
    text-align: left;
    padding-right: 45px;
    padding-top: 35px;
    color: #e7e7e7;
}

.projectdesc, .projectdesc1{
    margin: 0;
    font-size: 30px;
    font-weight: 400;
    text-align: left;
    padding-right: 45px;
    padding-top: 35px;
    color: #e7e7e7;
}

.projectpics{
    padding-top: 5%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-right: 5%;
    opacity: 0;
}

.projectpic1, .projectpic2, .projectpic3, .projectpic4, .projectpic5{
    width: 1000px;
    height: 600px;
    border-radius: 10px;
    margin-top: 90px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none; 
    user-select: none;
    position: relative;
    left: 5%;
}

@media (max-width: 430px){
    .outerWrapper{
        display: none;
    }
}

</style>
