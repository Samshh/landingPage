<script setup>

</script>

<template>
<div class="outerWrapper">
    <div class="innerWrapper">
        <div class="aboutMe">
            <p class="me" style="color: #e7e7e7;">About Me.</p>
            <p class="desc">
こんにちは! I'm Sam Dacara, a 20-year-old Software Developer and a 2nd-year Computer Science student based in Davao City, Philippines.
As a self-taught programmer, my primary focus is on back-end development. I'm currently delving into the realm of Web Development and exploring my interests in Machine Learning and Artificial Intelligence. 
Excited about the endless possibilities in the tech world!
            </p>
            <p class="desc">
Outside of tech, I'm also a Musician—I play the guitar and piano. 
And when it's chill time, you'll catch me watching 
<a target="_blank" href="https://myanimelist.net/profile/syrupandtree" style="color: #e7e7e7; text-decoration: underline; cursor: none;">anime</a>. 
Let's explore this tech and creativity journey together!
            </p>
        </div>
        <img class="myPic" src="\landingPage\src\assets\SamGoogle1.webp" alt="">
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
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-left: 20px;
    padding-right: 20px;
}

.aboutMe{
    width: 50%;
    height: 70vh;
    display: flex;
    flex-direction: column;
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
    padding-right: 35px;
    padding-top: 35px;
    color: #e7e7e7;
}

.myPic{
    border-radius: 10px;
    width: 40%;
}

::selection {
  background-color:#e7e7e7;
  color: #161616; 
}

::-moz-selection {
  background-color:#e7e7e7;
  color: #161616; 
}

</style>

