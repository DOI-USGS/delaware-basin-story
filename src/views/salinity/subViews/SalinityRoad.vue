<template>
  <section id="salinity-road">
    <div id="salinity-road-container">
      <div class="salinity-road-image-container">
        <img
          src="@/assets/salinity/salinityRoad/images/truckin-slow.gif"
        >
      </div>
      <div class="salinity-road-text-container">
        <h3 class="text-content-side">There are other sources of salt besides the sea.</h3>
        <p class="text-content-side">Even as we toil to keep ocean salt out of the lower Delaware River, we actively add salt to waters throughout the Basin. Most prominently, rock salt is applied to roads in winter to make driving and walking safer. But melting snow and ice carry dissolved salt into streams and rivers, contaminating those waters with levels of chloride that can be toxic to aquatic plants and animals and can even threaten drinking water quality.</p>
        <p class="text-content-side">Solutions to that excess reduce road salt in streams include using chemical deicing alternatives and moderating road salt applications. But the stakes are high, because safer roads are an undeniable public good. Monitoring and modeling of stream chloride concentrations give us the data we need to make informed decisions about the options and tradeoffs.</p>
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
