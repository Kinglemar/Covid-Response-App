<template>
  <div href="#top">
    <h1>Covid-19 Tracing Precursor</h1>

    <h2>Protect Yourself</h2>

    <div class="gallery">
      <div class="space-ring">
        <div class="ring first">
          <p>
            <b>Wash your hands</b> with soap and water to avoid contacting and
            spreading infection to others
          </p>
          <img src="../assets/handwash.png" alt="" />
        </div>
        <div class="ring second">
          <p><b>Avoid touching</b> your eyes, mouth, mouth and nose.</p>
          <img src="../assets/Avoidtouching.png" alt="" />
        </div>
        <div class="ring third">
          <p>
            <b>Cover your mouth and nose</b> with your bent elbow or tissue when
            you sneeze or cough
          </p>
          <img src="../assets/coverelbow.png" alt="" />
        </div>
        <div class="ring fourth">
          <p><b>Keep a distance</b> of at least 1 meter(3 feet) with others</p>
          <img src="../assets/Social-distance.jpg" alt="" />
        </div>
        <div class="ring last">
          <p>
            <b>Wear a mask</b> in clustered areas where the virus is spreading
          </p>
          <img src="../assets/protection-mask.png" alt="" />
        </div>
      </div>
    </div>

    <h3>Help us help you in the fight against Covid-19</h3>

    <h3>Having Symptoms?</h3>
    <p class="instructions">
      Please take out time to fill the online form to get help
    </p>

    <router-link to="/gethelp">
    <button id="#Gethelp" href="#top">Get Help
    </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
template {
  box-sizing: border-box;
}
ul {
  display: flex;
  margin: 0;
}

h1,
h2,
h3 {
  margin-bottom: 1rem;
}

li,
a {
  list-style: none;
  text-decoration: none;
  color: #2c3e50;
  font-weight: 600;
}

a:hover {
  /* text-decoration: underline; */
  opacity: 0.8;
}

img {
  width: 15rem;
  height: 9rem;
  margin-top: 2rem;
  border-radius: 4px;
}

button {
  margin-top: 2rem;
  width: 12rem;
  height: 3rem;
  font-family: "Poppins", sans-serif;
  text-align: center;
  color: #2c3e50;
  font-weight: 700;
  cursor: pointer;
  font-size: 1rem;
  outline: none;
  border: none;
  border-radius: 4px;
  background-color: #dcdcdd;
}

@media screen and (max-width: 498px) {
  button {
    background-color: #80ed99;
  }
}

button:hover {
  background-color: #80ed99;
}

.extra {
  margin-left: 2rem;
  padding: 0.5rem;
}

.spacer {
  margin-right: auto;
  padding: 0 0.5rem;
}

.container {
  padding: 1rem 2rem;
  border-bottom: 1px #ecedef solid;
}

.dropped-menu {
  display: none;
}

.instructions {
  color: #52b788;
}

.gallery {
  margin: 2rem 0.5rem;
  overflow-x: auto;
}

.gallery img {
  width: 160px;
  height: 160px;
  margin: 0;
}

.gallery p {
  font-size: 0.8rem;
  margin-bottom: 0.8rem;
  color: #ffff;
}

.ring {
  padding: 2rem;
  width: 250px;
  background-color: #52b788;
  margin-right: 1.5rem;
  border-radius: 4px;
  height: 315.8px;
}

.first p {
  margin-bottom: 1.2rem;
}

.second p {
  margin-bottom: 3.4rem;
}

.third p {
  margin-bottom: 1rem;
}

.fourth p {
  margin-bottom: 3.3rem;
}

.last {
  margin: 0;
}

.last p {
  margin-bottom: 3.5rem;
}

.space-ring {
  width: 1300px;
  overflow-x: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
