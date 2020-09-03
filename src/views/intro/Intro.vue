<template>
  <section id="intro">
    <div
      id="intro-banner-container"
      class="parallax"
    >
     <!-- img
        id="watercolor"
        src="@/assets/intro/images/DRB_all-01.jpg"
        alt="watercolor map of delaware river basin"
        width="100%"
      >  -->
      <svg
          id="monitoring-locations"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1920 1080"
        >
          <defs>
            <mask id="mask-1" width="100px">
              <image class="mask-test" href="@/assets/intro/images/stroke-1.png" />
              <image class="mask-test" href="@/assets/intro/images/stroke-2.png" />
              <image class="mask-test" href="@/assets/intro/images/stroke-3.png" />
              <image class="mask-test" href="@/assets/intro/images/stroke-4.png" />
              <image class="mask-test" href="@/assets/intro/images/stroke-5.png" />
              <image class="mask-test" href="@/assets/intro/images/stroke-6.png" />
              <image class="mask-test" href="@/assets/intro/images/stroke-7.png" />
            </mask>

          </defs>
          <image
            id="DRB-land-water"
            href="@/assets/monitoringConclusion/images/DRB_land-01.jpg"
            height="100%"
            width="100%"
          />
          <image
            id="DRB_land-green"
            href="@/assets/monitoringConclusion/images/DRB_green-01.png"
            height="100%"
            width="100%"
            mask="url(#mask-1)"
          />

          </svg>
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
/* 
  .parallax {
    background-image: url("../../assets/intro/images/DRB_all-01.jpg");
    height: 50vh;
    // padding-top: 100%;
    background-attachment: fixed;
    background-position: top left;
    background-repeat: no-repeat;
    background-size: 100% auto;
  } */

  //paint-in animation applied to just the green
@keyframes  paint-in  {
  to  {opacity: 1;}
}


//iterate through masks to apply delayed animation
$n: 7;

.mask-test {
  opacity: 0;
  animation: paint-in 1s 0ms forwards;

  @for $x from 2 through $n {
    &:nth-child(#{$x}) {
      animation-delay: 300ms * ($x - 1);
    }
  }
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