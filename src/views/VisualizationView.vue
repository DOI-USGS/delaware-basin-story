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
    import { defineAsyncComponent } from 'vue';
    import { mapState } from 'pinia';
    import { useAppStore } from '@/stores/appStore';

    const appTitle = import.meta.env.VITE_APP_TITLE;

    export default {
        name: 'Visualization',
        components: {
            Intro: defineAsyncComponent(() => import("@/components/story/intro/StoryIntro.vue")),
            Flow: defineAsyncComponent(() => import("@/components/story/flow/ManagingFlow.vue")),
            QualityChallenges: defineAsyncComponent(() => import("@/components/story/qualityChallenges/QualityChallenges.vue")),
            Temperature: defineAsyncComponent(() => import("@/components/story/temperature/StoryTemperature.vue")),
            Salinity: defineAsyncComponent(() => import("@/components/story/salinity/StorySalinity.vue")),
            Monitoring: defineAsyncComponent(() => import("@/components/story/monitoringConclusion/StoryMonitoring.vue")),
            Conclusion: defineAsyncComponent(() => import("@/components/story/conclusion/StoryConclusion.vue"))
        },
        computed: {
            ...mapState(useAppStore, {
                introSectionRenderedFlag: 'introSectionRendered'
            }),
            checkIfIntroSectionIsRendered() {
                return this.introSectionRenderedFlag;
            }
        },
        metaInfo: {
            title: appTitle
        }
    }
</script>

<style scoped lang="scss">

</style>
