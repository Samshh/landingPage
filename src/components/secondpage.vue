<script setup>

</script>

<template>
<div class="outerWrapper">
    <div class="innerWrapper">
        <div class="aboutMe">
            <div class="aboutMe2">
                <p class="me" style="color: #e7e7e7;">About Me.</p>
                <p class="hira">こんにちは!</p>
                <p class="desc">
 I'm Sam Dacara, a 20-year-old Software Developer and a 2nd-year Computer Science student based in Davao City, Philippines.
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
    font-family: "Noto Serif JP", serif;
    font-weight: 400;
    font-style: normal;
    margin: 0;
    padding-bottom: 10px;
    font-size: 25px;
    color: #e7e7e7;
    padding-top: 5px;
}
.myPic{
    border-radius: 10px;
    height: 40%;
    width: 40%;
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