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
    align-items: center;
    justify-content: space-around;
  }

  .madeBy {
    display: flex;
    flex-direction: row;
    font-size: 20px;
    font-weight: 400;
    align-items: center;
  
    position: relative;
    justify-content: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none; 
    user-select: none; 
    pointer-events: none;
    color: #e7e7e7;
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
    padding: 15px;
    text-decoration: none;
    position: relative;
    transition: color 0.3s;
    display: flex;
    align-items: center;
    z-index: 1;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none; 
    user-select: none;
    color: #e7e7e7;
    border-radius: 10deg;
  }

  .contact i {
    margin-right: 10px;
  }

  .contact:hover {
    background-color: #e7e7e7;
    color: #161616;
  }

  .contact:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

@media (max-width: 430px) {
  .contactMe{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .madeBy{
    padding-bottom: 15px;
  }
}

</style>