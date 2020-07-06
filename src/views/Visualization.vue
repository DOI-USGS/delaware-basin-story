<template>
  <div id="visualization">
    <intro />
    <usesNeedsConflicts v-if="checkIfIntroSectionIsRendered" />
    <grandChallenges v-if="checkIfIntroSectionIsRendered" />
    <salinity v-if="checkIfIntroSectionIsRendered" />
    <temperature v-if="checkIfIntroSectionIsRendered" />
    <sediment v-if="checkIfIntroSectionIsRendered" />
    <monitoring v-if="checkIfIntroSectionIsRendered" />
    <outro v-if="checkIfIntroSectionIsRendered" />
  </div>
</template>

<script>
    export default {
        name: 'Visualization',
        components: {
            intro: () => import(/* webpackPrefetch: true */ /*webpackChunkName: "intro"*/ "./intro/Intro"),
            usesNeedsConflicts: () => import( /* webpackPrefetch: true */ /*webpackChunkName: "usesNeedsConflicts"*/ "./usesNeedsConflicts/UsesNeedsConflicts"),
            grandChallenges: () => import( /* webpackPrefetch: true */ /*webpackChunkName: "grandChallenges"*/ "./grandChallenges/GrandChallenges"),
            temperature: () => import( /* webpackPrefetch: true */ /*webpackChunkName: "temperature"*/ "./temperature/Temperature"),
            sediment: () => import( /* webpackPrefetch: true */ /*webpackChunkName: "sediment"*/ "./sediment/Sediment"),
            salinity: () => import( /* webpackPrefetch: true */ /*webpackChunkName: "salinity"*/ "./salinity/Salinity"),
            monitoring: () => import( /* webpackPrefetch: true */ /*webpackChunkName: "monitoring"*/ "./monitoring/Monitoring"),
            outro: () => import( /* webpackPrefetch: true */ /*webpackChunkName: "outro"*/ "./outro/Outro")
        },
        computed: {
            checkIfIntroSectionIsRendered() {
                return this.$store.state.introSectionRendered;
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
