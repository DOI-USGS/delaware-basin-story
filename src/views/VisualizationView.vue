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
            Intro: () => import("@/components/story/intro/StoryIntro.vue"),
            Flow: () => import("@/components/story/flow/ManagingFlow.vue"),
            QualityChallenges: () => import("@/components/story/qualityChallenges/QualityChallenges.vue"),
            Temperature: () => import("@/components/story/temperature/StoryTemperature.vue"),
            Salinity: () => import("@/components/story/salinity/ManagingSalinity.vue"),
            Monitoring: () => import("@/components/story/monitoringConclusion/StoryMonitoring.vue"),
            Conclusion: () => import("@/components/story/conclusion/StoryConclusion.vue")
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
