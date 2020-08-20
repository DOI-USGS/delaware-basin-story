<template>
  <section id="salinity-road">
    <div id="salinity-road-container">
      <div class="salinity-road-image-container">
        <img
          src="@/assets/salinity/salinityRoad/images/truckin-slow.gif"
        >
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
