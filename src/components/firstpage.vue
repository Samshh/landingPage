<script setup>

</script>

<template>
<div class="mybox">
        <div class="mainwrapper">
            <div class="box1">
                <img src="\src\assets\box.svg" alt="test">
                <div class="textwrapper">
                    <div class="katakana">
                        <p class="m">メ</p>
                        <p class="i">イ</p>
                        <p class="p">プ</p>
                        <p class="r">ル</p>
                    </div>        
                    <div class="kanji">
                        <p>
                            楓
                        </p>
                    </div>    
                </div>
            </div>
            <div class="name">
                <p class="maintext">Samshh</p>
                <p class="subtext">
                    Software Developer
                </p>
            </div>
        </div>
    </div>  
</template>

<style scoped>
.mybox{
    width: auto;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0px;
    padding: 0px;
    margin: 0px;
}

.mainwrapper{
    transform: scale(1.25);
}

.box1{
    animation-name: fade-in;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
    display: flex;
}

.textwrapper{
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    justify-content: space-between;
}

.katakana p{
    font-family: "Noto Serif JP", serif;
    font-weight: 900;
    font-style: normal;
    margin: 0;
    padding-bottom: 10px;
    font-size: 25px;
}

.m{
    animation-name: fade-in;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
}

.i{
    animation-name: fade-in;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
}

.p{
    animation-name: fade-in;
    animation-duration: 2.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
}

.r{
    animation-name: fade-in;
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
}
.kanji p{
    font-family: "Noto Serif JP", serif;
    font-weight: 400;
    font-style: normal;
    margin: 0;
    font-size: 25px;
    animation-name: fade-in;
    animation-duration: 3.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
}

.name{
    animation-name: fade-in;
    animation-duration: 4s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
}

.maintext {
    margin: 0;
    padding-top: 10px;
    font-size: 25px;
    font-weight: 400;
    text-align: right;
    padding-right: 35px;
}

.subtext{
    margin: 0;
    font-size: 15px;
    font-weight: 400;
    text-align: right;
    padding-right: 35px;
}

@media (max-width: 430px) {
    .mainwrapper{
        transform: scale(0.55);
    }
}

@keyframes fade-in{
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}

</style>