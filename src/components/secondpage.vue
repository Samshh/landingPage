<script setup>

</script>

<template>
<div class="outerWrapper">
    <div class="innerWrapper">
        <div class="aboutMe">
            <div class="aboutMe2">
                <p class="me" style="color: #e7e7e7;">About Me.</p>
                <p class="hira"></p>
                <p class="desc">
 I'm Sam Dacara, a 20-year-old Software Developer and a 2nd-year Computer Science student based in Davao City, Philippines.
As a self-taught programmer, my primary focus is on back-end development. I'm currently delving into the realm of Web Development and exploring my interests in Machine Learning and Artificial Intelligence. 
Excited about the endless possibilities in the tech world!
                </p>
                <p class="desc">
Outside of tech, I'm also a Musician—I play the guitar and piano. 
And when it's chill time, you'll catch me watching 
<a class="anime" target="_blank" href="https://myanimelist.net/profile/syrupandtree" style="cursor: none;">anime.</a> 
Let's explore this tech and creativity journey together!
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
    background-color: #161616;
}

.innerWrapper{
    padding-left: 20px;
    padding-right: 70px;
}

.aboutMe{
    display: flex;
}
.me{
    font-size: 45px;
    font-weight: 400px;
    margin-bottom: 0px;
}

.desc{
    margin: 0;
    font-size: 25px;
    font-weight: 400;
    text-align: left;
    padding-right: 45px;
    padding-top: 35px;
    color: #e7e7e7;
}

.hira{
    font-weight: 300;
    font-style: normal;
    margin: 0;
    padding-bottom: 10px;
    font-size: 25px;
    color: #e7e7e7;
    padding-top: 5px;
    overflow: hidden;
}

.hira::before,
.hira::after {
    position: absolute;
    width: 100%;
    transition: transform 2s linear infinite;
}

.hira::before {
    font-family: "Noto Serif JP", serif;
    content: "こんにちは!";
    transform: translateY(0);
    animation: slide 4s linear infinite;
}

.hira::after {
    font-weight: 400;
    content: "hello!";
    transform: translateY(100%);
    animation: slide 4s linear 2s infinite;
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
    height: 40%;
    width: 40%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none; 
    user-select: none; 
    pointer-events: none;
}

.anime{
    color: #e7e7e7;
    text-decoration: underline;  
}
.anime:hover{
    background-color: #e7e7e7;
    text-decoration: none; 
    color: #161616;
    transition: 0.3s;
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

.hira {
    font-size: 15px;
    padding-bottom: 10%;
    padding-top: 0px;
    }

.myPic{
    width: 100%;
    padding-bottom: 10px;
    }
}

</style>