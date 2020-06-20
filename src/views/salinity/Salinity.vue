<template>
  <div id="salinity">
    <h2>Place holder for Salinity</h2>
    <dichotomy />
    <sea />
    <road />

    <hr>
  </div>
</template>

<script>
  import dichotomy from "./subViews/SalinityDichcotomy"
  import sea from "./subViews/SalinitySea"
  import road from "./subViews/SalinityRoad"

    export default {
        name: 'Salinity',
        components: {
            dichotomy,
            sea,
            road
        },
        data() {
            return {

            }
        }
    }
</script>

<style scoped lang="scss">

</style>
