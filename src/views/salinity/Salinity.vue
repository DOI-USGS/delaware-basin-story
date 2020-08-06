<template>
  <div id="salinity">
    <SalinityTitle id="salt-title-component" />
    <SalinitySea
      id="sea-salt-component"
    />
    <SalinityRoad id="road-salt-component"/>
  </div>
</template>

<script>
  import SalinityTitle from "@/views/salinity/subViews/SalinityTitle";
  import SalinitySea from "@/views/salinity/subViews/SalinitySea";
  import SalinityRoad from "@/views/salinity/subViews/SalinityRoad";

  export default {
      name: 'Salinity',
      components: {
        SalinityTitle,
        SalinitySea,
        SalinityRoad
      }
  }
</script>

<style scoped lang="scss">

</style>
