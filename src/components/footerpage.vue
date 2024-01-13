<template>
  <div class="outerWrapper">
    <div class="innerWrapper">
      <div class="contactMe">
        <a class="contact linkedin" target="_blank" href="https://www.linkedin.com/in/samshh/" style="cursor: none">
          <i class="fab fa-linkedin"></i> LinkedIn
        </a>
        <a class="contact github" target="_blank" href="https://github.com/Samshh" style="cursor: none">
          <i class="fab fa-github"></i> GitHub
        </a>
        <a class="contact google" target="_blank" href="https://developers.google.com/profile/u/samshh" style="cursor: none">
          <i class="fab fa-google"></i> Google
        </a>
        <a class="contact bento" target="_blank" href="https://bento.me/samshh" style="cursor: none;">
          <i class="fas fa-utensils"></i> Bento
        </a>
      </div>
    </div>
    <p class="madeBy">
      made with<span class="heartIcon"><i class="fas fa-heart"></i></span>by sam
    </p>
  </div>
</template>

<style scoped>
  .outerWrapper {
    width: 100vw;
    height: 15vh;
    min-height: 100px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #e7e7e7;
  }

  .innerWrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-left: 20px;
    padding-right: 20px;
  }

  .contactMe {
    width: 95%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

  .madeBy {
    display: flex;
    flex-direction: row;
    font-size: 20px;
    font-weight: 400;
    align-items: center;
    margin-bottom: 30px;
    margin-top: 30px;
    position: relative;
    justify-content: center;
  }

  .heartIcon{
    margin-left: 5px;
    margin-right: 5px;
  }
  .contact {
    margin: 0;
    font-size: 25px;
    font-weight: 400;
    text-align: center;
    padding: 15px 35px;
    text-decoration: none;
    position: relative;
    color: #161616;
    transition: color 0.3s;
    display: flex;
    align-items: center;
    z-index: 1; 
  }

  .contact i {
    margin-right: 10px;
  }

  .contact:hover {
    color: #e7e7e7;
  }

  .contact:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #161616;
    z-index: -1;
  }
</style>
