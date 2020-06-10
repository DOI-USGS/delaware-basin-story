<template>
  <div id="visualization">
    <h1>{{ title }}</h1>
    <intro />
    <usesNeedsConflicts />
    <grandChallenges />
    <temperature />
    <sediment />
    <salinity />
    <monitoring />
    <outro />
    <textarea
      v-model="title"
    ></textarea>
    <button @click="restoreTitle">
      Restore Title
    </button>
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
        },

        data() {
            return {
                title: process.env.VUE_APP_TITLE
            }
        },
        created() {
            console.log('this will run automatically and before mounted')
        },
        mounted() {
            console.log('this will run automatically and after mounted')
        },
        methods: {
            restoreTitle() {
                if (this.title !== process.env.VUE_APP_TITLE) {
                   this.title = process.env.VUE_APP_TITLE
                }
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
