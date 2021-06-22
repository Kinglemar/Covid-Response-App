<template>
    <div>

    <h1>Try To Protect Yourself At All Times</h1>
      <div>
        <!-- <Statistics /> -->
      </div>
    <div class="gallery">
      <div class="space-ring">
        <div class="ring first">
        <p><b>Wash your hands</b> with soap and water to avoid contacting and spreading infection to others</p>
        <img src="../assets/handwash.png" alt="">
      </div>
      <div class="ring second">
        <p><b>Avoid touching</b> your eyes, mouth, mouth and nose.</p>
        <img src="../assets/Avoidtouching.png" alt="">
      </div>
      <div class="ring third">
        <p><b>Cover your mouth and nose</b> with your bent elbow or tissue when you sneeze or cough</p>
        <img src="../assets/coverelbow.png" alt="">
      </div>
      <div class="ring fourth">
        <p><b>Keep a distance</b>  of at least 1 meter(3 feet) with others</p>
        <img src="../assets/Social-distance.jpg" alt="">
      </div>
      <div class="ring last">
        <p><b>Wear a mask</b> in clustered areas where the virus is spreading</p>
        <img src="../assets/protection-mask.png" alt="">
      </div>
      </div>

    </div>

    </div>
</template>

<script>

  // import Statistics from "../components/Statistics"


    export default{
        name: 'Guidelines',
        props: {

        },
        // components: {
        //   Statistics
        // }
    }
</script>

<style scoped>
    .gallery{
    margin: auto;
    max-width: 300px;
  }

  .gallery img{
    width: 160px;
    height: 160px;
    margin: 0;
  }

  .gallery p{
    font-size: .8rem;
    margin-bottom: .8rem;
    color: #ffff;
  }

  .ring{
    padding: 2rem;
    /* width: 300px; */
    background-color: #52b788;
    margin-bottom: 1.5rem;
    border-radius: 4px;
    height: 315.8px;
  }

  .first{
      margin: 0;
      margin-bottom: 1.5rem;
  } 

  .last{
    margin: 0;
  }

  @media screen and (max-width:499px){
    .ring{
      padding: 1rem;
      height: 280px;
      width: 230px;
      margin-left: 2rem;
    }
    h1{
      font-size: 28px;
    }
  }

  @media screen and (max-width:281px){
    .ring{
      margin-left: 1.2rem;
    }
  }

</style>