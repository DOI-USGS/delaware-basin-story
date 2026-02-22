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
    const appTitle = import.meta.env.VITE_APP_TITLE;

    export default {
        name: 'Visualization',
        components: {
            Intro: () => import("./intro/StoryIntro.vue"),
            Flow: () => import("./flow/ManagingFlow.vue"),
            QualityChallenges: () => import("./qualityChallenges/QualityChallenges.vue"),
            Temperature: () => import("./temperature/StoryTemperature.vue"),
            Salinity: () => import("./salinity/ManagingSalinity.vue"),
            Monitoring: () => import("./monitoringConclusion/StoryMonitoring.vue"),
            Conclusion: () => import("./conclusion/StoryConclusion.vue")
        },
        computed: {
            checkIfIntroSectionIsRendered() {
                return this.$store.state.introSectionRendered;
            }
        },
        metaInfo: {
            title: appTitle
        }
    }
</script>

<style scoped lang="scss">

</style>
