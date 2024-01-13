<script setup>

</script>

<template>
<div class="mybox">
        <div class="mainwrapper">
            <div class="box1">
                <img src="\src\assets\box.svg" alt="test">
                <div class="textwrapper">
                    <div class="katakana">
                        <p>メ</p>
                        <p>イ</p>
                        <p>プ</p>
                        <p>ル</p>
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

.kanji p{
    font-family: "Noto Serif JP", serif;
    font-weight: 400;
    font-style: normal;
    margin: 0;
    font-size: 25px;
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

</style>
