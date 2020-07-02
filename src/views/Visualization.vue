<template>
  <div id="visualization">
    <intro />
    <usesNeedsConflicts />
    <grandChallenges />
    <salinity />
    <temperature />
    <sediment />
    <monitoring />
    <outro />
  </div>
</template>

<script>
  import intro from "./intro/Intro";
  import usesNeedsConflicts from "./usesNeedsConflicts/UsesNeedsConflicts"
  import grandChallenges from "./grandChallenges/GrandChallenges.vue"
  import temperature from "./temperature/Temperature"
  import sediment from "./sediment/Sediment"
  import salinity from "./salinity/Salinity"
  import monitoring from "./monitoring/Monitoring"
  import outro from "./outro/Outro"

    export default {
        name: 'Visualization',
        components: {
            intro,
            usesNeedsConflicts,
            grandChallenges,
            temperature,
            sediment,
            salinity,
            monitoring,
            outro
        }
    }
</script>

<style scoped lang="scss">

</style>
