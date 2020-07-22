<template>
  <div id="visualization">
    <Intro />
    <Flow v-if="checkIfIntroSectionIsRendered" />
    <QualityChallenges v-if="checkIfIntroSectionIsRendered && checkIfUserAtEndOfSankeySection" />
    <Salinity v-if="checkIfIntroSectionIsRendered && checkIfUserAtEndOfSankeySection" />
    <Temperature v-if="checkIfIntroSectionIsRendered && checkIfUserAtEndOfSankeySection" />
    <Monitoring v-if="checkIfIntroSectionIsRendered && checkIfUserAtEndOfSankeySection" />
    <Conclusion v-if="checkIfIntroSectionIsRendered && checkIfUserAtEndOfMonitoringSection && checkIfUserAtEndOfSankeySection" />
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
            Monitoring: () => import( /* webpackPrefetch: true */ /*webpackChunkName: "monitoring"*/ "./monitoring/Monitoring"),
            Conclusion: () => import( /* webpackPrefetch: true */ /*webpackChunkName: "conclusion"*/ "./conclusion/Conclusion")
        },
        computed: {
            checkIfIntroSectionIsRendered() {
                return this.$store.state.introSectionRendered;
            },
            checkIfUserAtEndOfMonitoringSection: function () {
                return this.$store.state.isUserAtEndOfMonitoringSection;
            },
            checkIfUserAtEndOfSankeySection: function () {
                return this.$store.state.isUserAtEndOfSankeySection;
            },
        }
    }
</script>

<style scoped lang="scss">

</style>
