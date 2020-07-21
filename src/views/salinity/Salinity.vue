<template>
  <div id="salinity">
    <sea />
    <road />

    <hr>
  </div>
</template>

<script>
  import sea from "./subViews/SalinitySea"
  import road from "./subViews/SalinityRoad"

    export default {
        name: 'Salinity',
        components: {
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
  #salinity {

  }

</style>
