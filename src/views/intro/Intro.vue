<template>
  <section id="intro">
    <div
      id="intro-banner-container"
    >
      <img
        id="watercolor"
        src="@/assets/intro/images/DRB_full-01-min.jpg"
        alt="watercolor map of delaware river basin"
        width="100%"
      >
    </div>
    <SectionTitle :title="title" :image="titleBackingImage" />
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
              titleBackingImage: require('@/assets/intro/images/background_rainbowLarge.png')
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
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    #intro-banner-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      .container-section-title {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        text-align: center;
        // img {
        //   width: 100%;
        // }
        .section-title {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    #intro-banner-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-content: center;
      .container-section-title {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: 5%;
        top: 70%;
        text-align: center;

        color: white;
        img {
          width: 100%;
        }
        .section-title {
          position: absolute;
          width: 100%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {

  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {}

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {}

</style>
