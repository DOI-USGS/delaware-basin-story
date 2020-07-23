<template>
  <div id="app">
    <WindowSize v-if="checkTypeOfEnv === '-test build-'" />
    <HeaderUSWDSBanner />
    <HeaderUSGS />
    <InternetExplorerPage v-if="isInternetExplorer" />
    <WorkInProgressWarning v-if="checkTypeOfEnv !== '' & !isInternetExplorer" /> <!-- an empty string in this case means the 'prod' version of the application   -->
    <router-view
      v-if="!isInternetExplorer & checkIfUSGSHeaderIsRendered"
    />
    <PreFooterVisualizationsLinks v-if="checkIfIntroSectionIsRendered || !isInternetExplorer" />
    <PreFooterCodeLinks v-if="checkIfIntroSectionIsRendered || !isInternetExplorer" />
    <FooterUSGS v-if="checkIfIntroSectionIsRendered || isInternetExplorer" />
  </div>
</template>

<script>
    import WindowSize from "./components/WindowSize";
    import HeaderUSWDSBanner from './components/HeaderUSWDSBanner'
    import HeaderUSGS from './components/HeaderUSGS'
    import InternetExplorerPage from "./components/InternetExplorerPage";

    export default {
        name: 'App',
        components: {
            WindowSize,
            HeaderUSWDSBanner,
            HeaderUSGS,
            InternetExplorerPage,
            WorkInProgressWarning: () => import( /* webpackPrefetch: true */ /*webpackChunkName: "work-in-progress-warning"*/ "./components/WorkInProgressWarning"),
            PreFooterVisualizationsLinks: () => import( /* webpackPrefetch: true */ /*webpackChunkName: "pre-footer-links-visualizations"*/ "./components/PreFooterVisualizationsLinks"),
            PreFooterCodeLinks: () => import( /* webpackPrefetch: true */ /*webpackChunkName: "pre-footer-links-code"*/ "./components/PreFooterCodeLinks"),
            FooterUSGS: () => import( /* webpackPrefetch: true */ /*webpackChunkName: "usgs-footer"*/ "./components/FooterUSGS")
        },
        data() {
            return {
                isInternetExplorer: false
            }
        },
        computed: {
            checkIfUSGSHeaderIsRendered() {
                return this.$store.state.usgsHeaderRendered;
            },
            checkIfIntroSectionIsRendered() {
                return this.$store.state.introSectionRendered;
            },
            checkTypeOfEnv() {
              return process.env.VUE_APP_TIER
            },
            checkIfUserAtEndOfMonitoringSection: function () {
                return this.$store.state.isUserAtEndOfMonitoringSection
            }
        },
        created() {
            // We are ending support for Internet Explorer, so let's test to see if the browser used is IE.
            this.$browserDetect.isIE ? this.isInternetExplorer = true : this.isInternetExplorer = false;
            // Add window size tracking by adding a listener and a way to store the values in the Vuex state
            window.addEventListener('resize', this.handleResize);
            this.handleResize();
        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize);
        },
        methods: {
            handleResize() {
                this.$store.commit('recordWindowWidth', window.innerWidth);
                this.$store.commit('recordWindowHeight', window.innerHeight);
            }
        }
    }
</script>

<style lang="scss">
  @import url("https://use.typekit.net/jja8kth.css");
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');

  body {
    margin: 0;
    padding: 0;
    background-color: white;
  }
  #app {
    p {
      font-family: 'Noto Sans', sans-serif;
      font-weight: lighter;
    }
    h1, h2, h3 {
      font-family: chantal, sans-serif;
      font-weight: bold;
    }
    width: 100%;
  }
</style>
