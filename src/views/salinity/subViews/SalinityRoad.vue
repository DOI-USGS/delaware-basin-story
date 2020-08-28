<template>
  <section id="salinity-road">
    <div id="salinity-road-container">
      <div class="salinity-road-image-container">
        <div class="wrapper">
          <div class="snow layer1 a" />
          <div class="snow layer2 a" />
          <div class="snow layer3 a" />
          <div class="snow layer1" />
          <div class="snow layer2" />
          <div class="snow layer3" />
        </div>
      </div>
      <div class="salinity-road-text-container">
        <h4 class="text-content-side">
          Road Salt
        </h4>
        <p class="text-content-side">
          Even as we manage river flow to keep the ocean salt out of the lower Delaware River, we work against ourselves by actively adding salt to waters throughout the Basin. Rock salt applied to roads in winter to makes driving and walking safer. But when the snow and ice melts, the runoff carries dissolved salt into streams and rivers, contaminating those waters with <a href="https://www.usgs.gov/news/urban-stream-contamination-increasing-rapidly-due-road-salt">levels of chloride that can be toxic</a> to aquatic plants and animals and can even threaten drinking water quality.
        </p>
        <p class="text-content-side">
          Reducing road salt concentrations in streams can involve chemical deicing alternatives and moderating road salt applications. But safe roads are important too. Monitoring and modeling of stream chloride concentrations give us the data we need to make informed decisions about the options and tradeoffs.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: 'SalinityRoad'
    }
</script>

<style scoped lang="scss">
.wrapper  {
  height: 50vw;
  width: auto;
  background: radial-gradient(farthest-corner at 30vw 20vh, #7397a1 1%, #3f2c41 100%);
}

//snow animation
$s1:"";
$s2:"";
$s3:"";
@for $i from 1 through 400  {
  $s1: $s1 + random(1000)*0.1vw + " " + random(1000)*0.1vh + " " + 0 + random(50)*-0.01rem + #fff;
  $s2: $s2 + random(1000)*0.1vw + " " + random(1000)*0.1vh + " " + 0 + random(50)*-0.01rem + #fff;
  $s3: $s3 + random(1000)*0.1vw + " " + random(1000)*0.1vh + " " + 0 + random(50)*-0.01rem + #fff;
  @if $i < 400  {
    $s1: $s1 + ",";
    $s2: $s2 + ",";
    $s3: $s3 + ",";
  }
}
.snow {
  border-radius: 50%;
  opacity: 0.8;

  top: -100vh;
  position: relative;
  animation-name: fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.layer1 {
  width: 1.5rem;
  height: 1.5rem;
  filter: blur(1.5px);
  box-shadow: #{$s1};
  animation-duration: 6s;
}
.layer1.a {
  animation-delay: -3s;
}
.layer2 {
  width: 1.1rem;
  height: 1.1rem;
  filter: blur(3px);
  box-shadow: #{$s2};
  animation-duration: 8s;
}
.layer2.a {
  animation-delay: -4s;
}
.layer3 {
  width: .7rem;
  height: .7rem;
  filter: blur(5px);
  box-shadow: #{$s3};
  animation-duration: 10s;
}
.layer3.a {
  animation-delay: -5s;
}

@keyframes fall {
  100%  {transform: translateY(200vh);}
}

#salinity-road-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
@media only screen and (max-width: 992px) {
  #salinity-road-container {
    grid-template-columns: 1fr;
    justify-items: center;
    .salinity-road-image-container {
      position: sticky;
      top: 0;
      z-index: 1;
    }
    .salinity-road-text-container {
      z-index: 2;
      .text-content-side {
        background-color: rgba(255,255,255, 0.75);
      }
    }
  }
}
</style>
