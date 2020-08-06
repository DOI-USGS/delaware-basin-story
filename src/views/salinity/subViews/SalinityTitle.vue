<template>
  <div id="container-salinity-title">
    <img
      class="title-salinity-cloud-backing"
      src="@/assets/salinity/salinitySea/images/GreenLarge.png"
      alt="image of watercolor cloud of color"
    >
    <h1 class="section-title">
      Salinity
    </h1>
  </div>
</template>

<script>
export default {
  name: 'SalinityTitle'
}
</script>

<style scoped lang="scss">
#container-salinity-title {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  .title-salinity-cloud-backing {
    grid-column: 1;
    grid-row: 1;
  }
  .section-title {
    color: white;
    grid-column: 1;
    grid-row: 1;
  }
}
</style>