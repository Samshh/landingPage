<script setup>
import { gsap } from "gsap"; 
import { TextPlugin } from "gsap/TextPlugin"; 
import { onMounted, onUnmounted} from 'vue';
import { ScrollTrigger } from "gsap/ScrollTrigger";

onMounted(() => {
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger);

  const animateText = (selector, trigger,text, duration) => {
    gsap.to(selector, {
        duration: duration, 
        text: text, 
        delay: 1,
        ease: "power1.inOut",
        scrollTrigger: {
        trigger: trigger,
        start: "top center",
        end: "40% center",
        toggleActions: "play none none none",
        scrub: 10,
        markers: false,
      },
    });
  };

  gsap.to(".background", {
    scrollTrigger: {
      trigger: ".outerWrapper",
      start: "top center",
      end: "bottom center",
      toggleActions: "play reverse play reverse",
      scrub: false,
      markers: false,
    },
    ease: "power1.inOut",
    backgroundColor: "#161616",
  });

  gsap.to("#p", {
    scrollTrigger: {
      trigger: ".outerWrapper",
      start: "top center",
      end: "bottom center",
      toggleActions: "play reverse play reverse",
      scrub: false,
      markers: false,
    },
    ease: "power1.inOut",
    color: "#e7e7e7",
  });

  gsap.to([".custom-cursor", ".myPic"], {
    scrollTrigger: {
      trigger: ".outerWrapper",
      start: "top center",
      end: "bottom center",
      toggleActions: "play reverse play reverse",
      scrub: false,
      markers: false,
    },
    ease: "power1.inOut",
    backgroundColor: "#e7e7e7",
    opacity: 1,
  });

  animateText(".myText", ".aboutMe","I'm Sam Dacara, a 20-year-old Software Developer and a 2nd-year Computer Science student based in Davao City, Philippines. As a self-taught programmer, my primary focus is on back-end development. I'm currently delving into the realm of Web Development and exploring my interests in Machine Learning and Artificial Intelligence. Excited about the endless possibilities in the tech world!", 10);
  animateText(".myText2", ".aboutMe","Outside of tech, I'm also a Musician—I play the guitar and piano. And when it's chill time, you'll catch me watching anime. Let's explore this tech and creativity journey together!", 10);
  animateText(".me", ".aboutMe","About Me.", 2);
});

  onUnmounted(() => {
    gsap.killTweensOf(".myText", ".myText2");
});

</script>

<template>
<div class="outerWrapper">
    <div class="innerWrapper">
        <div class="aboutMe">
            <div class="aboutMe2">
                <p id="p" class="me">私について。</p>
                <p id="p" class="desc myText">
                    私は Sam Dacara です。フィリピンのダバオ市に拠点を置く 20 歳のソフトウェア開発者で、コンピュータ サイエンスの 2 年生です。
独学のプログラマーとして、私の主な焦点はバックエンド開発です。私は現在、ウェブ開発の領域を深く掘り下げ、機械学習と人工知能への興味を探求しています。
テクノロジーの世界の無限の可能性に興奮しています!
                </p>
                <p id="p" class="desc myText2">
                    テクノロジー以外では、私はミュージシャンでもあり、ギターとピアノを弾きます。
そして、落ち着いた時間になったら、あなたは私を見てくれるでしょう
アニメ。このテクノロジーと創造性の旅を一緒に探索しましょう!
                </p>   
            </div>
        <img class="myPic" src="\src\assets\SamGoogle1.webp" alt="">
        </div>
    </div>
</div>
</template>

<style scoped>
.outerWrapper{
    height: auto;
    width: 100vw;
}

.innerWrapper{
    padding-left: 20px;
    padding-right: 70px;
}

.aboutMe{
    display: flex;
    color: #161616;
    padding-bottom: 20px;
}
.me{
    font-size: 45px;
    font-weight: 400px;
    margin-bottom: 0px;
}

.desc, .myText3, .anime{
    margin: 0;
    font-size: 25px;
    font-weight: 400;
    text-align: left;
    padding-right: 45px;
    padding-top: 35px;
}


@keyframes slide {
    0%, 50% {
        transform: translateY(0);
        opacity: 1;
  }
    50.01%, 100% {
        transform: translateY(-100%);
        opacity: 0;
  }
}
.myPic{
    border-radius: 10px;
    height: 40.5%;
    width: 40.5%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none; 
    user-select: none; 
    pointer-events: none;
    opacity: 0;
}

.aboutMe2{
    padding-top: 8%;
    padding-left: 3%;
    padding-right: 5%;
}

::selection {
    background-color:#e7e7e7;
    color: #161616; 
}

::-moz-selection {
    background-color:#e7e7e7;
    color: #161616; 
}

@media (max-width: 430px) {
.outerWrapper {
    height: auto;
    overflow: auto; 
  }
.innerWrapper {
    flex-direction: column;
    justify-content: space-around;
    padding: 0;
    }
.aboutMe {
    flex-direction: column;
    width: auto;
}

.aboutMe2 {
    padding-top: 0px;
}
.desc {
    font-size: 15px;
    padding: 0;
    padding-bottom: 10%;
  }

.myPic{
    width: 100%;
    padding-bottom: 10px;
    }
}

</style>