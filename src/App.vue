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
    <PreFooterVisualizationsLinks v-if="!isInternetExplorer" />
    <PreFooterCodeLinks v-if="!isInternetExplorer" />
    <FooterUSGS />
  </div>
</template>

<script>
    import WindowSize from "./components/WindowSize";
    import HeaderUSWDSBanner from './components/HeaderUSWDSBanner'
    import HeaderUSGS from './components/HeaderUSGS'

    export default {
        name: 'App',
        components: {
            WindowSize,
            HeaderUSWDSBanner,
            HeaderUSGS,
            InternetExplorerPage: () => import( /* webpackPrefetch: true */ /*webpackChunkName: "internet-explorer-page"*/ "./components/InternetExplorerPage"),
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
            checkTypeOfEnv() {
              return process.env.VUE_APP_TIER
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


  // Import Colors

  $offWhite: rgb(236,227,220);
  $transparentWhite: rgba(255,255,255, 0.85);
  $darkBlue: rgb(30, 86,120);
  $lightBlue: rgb(73,166,206);
  $darkGreen: rgb(46,131,107);
  $lightGreen: rgb(184,215,203);
  $tan: rgb(223,196,163);
  $orange: rgb(222,121,38);

  // General Styling

  body {
    margin: 0;
    padding: 0;
    background-color: white;
    line-height: 1.5;
  }
  #app {

    .section {
      margin: 5em 0 5em 0;
    }

    p {
      font-family: 'Noto Sans', sans-serif;
      font-weight: lighter;
      font-size: 12pt;
      line-height: 1.5;
    }
    h1 {
      font-family: chantal, sans-serif;
      font-weight: bold;
      font-size: 4em;
    }
    h2 {
      font-family: chantal, sans-serif;
      font-weight: bold;
      font-size: 3em;
    }
    // h3 {
    //   font-family: 'Noto Sans', sans-serif;
    //   font-weight: bolder;
    //   font-size: 1.6em;
    // }
    h3{
      font-size: 1.2em;
      font-weight: bolder;
    }
    // h4{
    //   font-size: 1.2em;
    //   font-weight: bolder;
    // }
    .byline {
      font-family: 'Noto Sans', sans-serif;
      font-style: italic

    }

    .emph {
      font-weight: bold;
      //background: linear-gradient(180deg,hsla(0,0%,100%,0) 70%,#ffc833 0);
      background-image: url('assets/stroke.png');
      background-size: 100% 50%;
      background-repeat: no-repeat;
      background-position: bottom;
      padding: 0 0 .2em 0;
      

    }

    // Mobile-friendly Transparent-White Background around text blocks
    .text-chunk {
      background-color: $transparentWhite;
      padding: 2em 2em 2em 2em;
    }

    .scrolly-chunk{
      padding: 50vh 0 50vh 0;
    }
    // Text-only
    .text-content {
      min-width: 350px;
      max-width: 700px;
      margin: 0 auto;
      padding: 2em 2em 2em 2em;     
    }

    // Text and Content side-by-side

    .side-by-side{
      max-width: 1200px;
    }

    .vis-content-side {
      min-width: 500px;
      max-width: 50vw;
      position: sticky;
      display: block;
    }

    .center-container {
      position: relative;
    }

    .center-content {
      margin: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }

    .text-content-side {
      min-width: 350px;
      max-width: 600px;
      padding: 2em 2em 2em 2em;
    }
  }

  @media only screen and (max-width: 992px) {
    #app h1 {
      font-size:2em;
    }
  }
  @media only screen and (max-width: 508px) {
    #app h1 {
      font-size:1.5em;
    }
  }

  // Link Styling
  /* unvisited link */
  a{
    text-decoration-color: none;
  }

  a:link {
    color: black;
    text-decoration-color: $lightBlue;
  }

  /* visited link */
  a:visited {
    color: black;
    text-decoration-color: $lightGreen;
  }

  /* mouse over link */
  a:hover {
    cursor: pointer;
    text-decoration-color: $lightBlue;
    text-decoration-thickness: .01em;
    text-underline-offset: 3px;
    text-decoration-style: wavy;
  }

  /* selected link */
  a:active {
    font-style: bold;
    color: black;
    text-decoration-color: $lightBlue;
    text-decoration-thickness: .01em;
    text-underline-offset: 3px;
    text-decoration-style: wavy;
  }
</style>
