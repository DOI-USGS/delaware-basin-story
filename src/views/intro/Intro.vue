<template>
  <section id="intro">
    <div
      id="intro-banner-container"
      class="parallax"
    >
      <!-- <img
        id="watercolor"
        src="@/assets/intro/images/DRB_all-01.jpg"
        alt="watercolor map of delaware river basin"
        width="100%"
      > -->      
    </div>
    <SectionTitle
      :title="title"
      :image="titleBackingImage"
    />
    <IntroTextContents />
    <ImageCarousel />
  </section>
</template>

<script>
  import SectionTitle from "@/components/SectionTitle";
  import IntroTextContents from "./subViews/IntroTextContents";
  import ImageCarousel from "../../components/ImageCarousel";

    export default {
        name: 'Intro',
        components: {
          SectionTitle,
          ImageCarousel,
          IntroTextContents
        },
        data() {
            return {
              title: process.env.VUE_APP_TITLE,
              titleBackingImage: require('@/assets/intro/images/rainbow-min.png')
            }
        },
        computed: {
            windowHeight: function () {
                const usgsBannerHeight = 85;
                return Number(this.$store.state.windowHeight - this.$store.state.warningHeight - usgsBannerHeight) + 'px';
            }
        },
        mounted() {
            // The following code will only run after the entire 'intro' section has been rendered
            // it will change the Vuex state so that other components will know the 'intro' section has loaded
            this.$nextTick(function () {
                this.$store.commit('changeBooleanStateWhenIntroSectionRendered');
            });
        }
    }
</script>

<style scoped lang="scss">

  #intro-banner-container {
    min-width: 1700px;
    overflow: auto;
  }

  .parallax {
    background-image: url("../../assets/intro/images/DRB_all-01.jpg");
    height: 50vh;
    // padding-top: 100%;
    background-attachment: fixed;
    background-position: top left;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }

  .parallax{
    mask-image: url("../../assets/intro/images/stroke-1.png");
    -webkit-mask-image: url("../../assets/intro/images/stroke-1.png");

  }

  // // small Screens
  // @media only screen and (max-width: 300px) {
  //   .parallax {
  //     height: 30vh;
  //   }
  // }

  // // Medium Screens
  // @media only screen and (max-width: 500px) {
  //   .parallax {
  //     height: 50vh;
  //   }
  // }

  
  // // Large Screens
  // @media only screen and (max-width: 700px) {
  //   .parallax {
  //     height: 70vh;
  //   }
  // }
  
</style>