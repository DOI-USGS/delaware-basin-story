<template>
  <div id="salinity">
    <sea
      id="sea-salt-component"
      class="sticky"
    />
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
    #sea-salt-component {

    }
  }

</style>
