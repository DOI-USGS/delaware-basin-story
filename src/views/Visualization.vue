<template>
  <div id="visualization">
    <Intro />
    <Flow v-if="checkIfIntroSectionIsRendered" />
    <QualityChallenges v-if="checkIfIntroSectionIsRendered" />
    <Salinity v-if="checkIfIntroSectionIsRendered" />
    <Temperature v-if="checkIfIntroSectionIsRendered" />
    <Monitoring v-if="checkIfIntroSectionIsRendered" />
    <Conclusion v-if="checkIfIntroSectionIsRendered" />
    <!-- <Methods v-if="checkIfIntroSectionIsRendered" /> -->
  </div>
</template>

<script>
    export default {
        name: 'Visualization',
        components: {
            Intro: () => import(/* webpackPrefetch: true */ /*webpackChunkName: "intro"*/ "./intro/Intro"),
            Flow: () => import( /* webpackPrefetch: true */ /*webpackChunkName: "flow"*/ "./flow/Flow"),
            QualityChallenges:() => import( /* webpackPrefetch: true */ /*webpackChunkName: "quality-challenges"*/ "./qualityChallenges/QualityChallenges"),
            Temperature: () => import( /* webpackPrefetch: true */ /*webpackChunkName: "temperature"*/ "./temperature/Temperature"),
            Salinity: () => import( /* webpackPrefetch: true */ /*webpackChunkName: "salinity"*/ "./salinity/Salinity"),
            Monitoring: () => import( /* webpackPrefetch: true */ /*webpackChunkName: "monitoring"*/ "./monitoringConclusion/Monitoring"),
            Conclusion: () => import( /* webpackPrefetch: true */ /*webpackChunkName: "conclusion"*/ "./monitoringConclusion/Conclusion")            
            // Methods: () => import(/*webpackChunkName: "methods"*/ "../components/Methods")
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
