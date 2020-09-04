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
            <image
            id="DRB_land-green"
            href="@/assets/monitoringConclusion/images/DRB_green-01.png"
            height="100%"
            width="100%"
          />
            <image id="stroke-1" href="@/assets/intro/images/stroke-1.png" width="300px" />
            <image id="stroke-2" href="@/assets/intro/images/stroke-2-01.png" width="30px" />
            <image id="stroke-3" href="@/assets/intro/images/stroke-3-01.png" width="200px" />
            <image id="stroke-4" href="@/assets/intro/images/stroke-4-01.png" width="60px" />
            <image id="stroke-5" href="@/assets/intro/images/stroke-5.png" width="300px" />
            <image id="stroke-6" href="@/assets/intro/images/stroke-6.png" width="100px" />
            <image id="stroke-7" href="@/assets/intro/images/stroke-7.png" width="100px" />

            <mask id="mask-1" >
              <g id="group-1">
                <use class="brush" xlink:href="#stroke-2" y="10" />
                <use class="brush" xlink:href="#stroke-2" y="-10" />
                <use class="brush" xlink:href="#stroke-2" y="10" />
                <use class="brush" xlink:href="#stroke-2" y="-10" />
                <use class="brush" xlink:href="#stroke-2" y="10" />
 
              </g>
              <g id="group-2">
                <use class="brush-2" xlink:href="#stroke-4" />
                <use class="brush-2" xlink:href="#stroke-4" />
                <use class="brush-2" xlink:href="#stroke-4" />
                <use class="brush-2" xlink:href="#stroke-4" />
                <use class="brush-2" xlink:href="#stroke-4" />

              </g>
              <g id="group-3">
                <use class="brush-3" xlink:href="#stroke-4" />
                <use class="brush-3" xlink:href="#stroke-4" />
                <use class="brush-3" xlink:href="#stroke-4" />
                <use class="brush-3" xlink:href="#stroke-4" />
                <use class="brush-3" xlink:href="#stroke-4" />
                <use class="brush-3" xlink:href="#stroke-4" />
                <use class="brush-3" xlink:href="#stroke-4" />
                <use class="brush-3" xlink:href="#stroke-4" />
                <use class="brush-3" xlink:href="#stroke-4" />
                <use class="brush-3" xlink:href="#stroke-4" />
              </g>
              <g id="group-3">
                <use class="brush-4" xlink:href="#stroke-4" />
                <use class="brush-4" xlink:href="#stroke-4" />
                <use class="brush-4" xlink:href="#stroke-4" />
                <use class="brush-4" xlink:href="#stroke-4" />
                <use class="brush-4" xlink:href="#stroke-4" />
                <use class="brush-4" xlink:href="#stroke-4" />
                <use class="brush-4" xlink:href="#stroke-4" />
                <use class="brush-4" xlink:href="#stroke-4" />
                <use class="brush-4" xlink:href="#stroke-4" />
                <use class="brush-4" xlink:href="#stroke-4" />
              </g>
              
              
            </mask>
          

          </defs>
          <image
            id="DRB-land-water"
            href="@/assets/monitoringConclusion/images/DRB_land-01.jpg"
            height="100%"
            width="100%"       
            
            mask="url(#mask-1)"
          />

          <use
            xlink:href="#DRB_land-green"
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
$n: 10;
$degree: random(20);

.brush {
  opacity: 0;
  animation: paint-in 300ms 0ms forwards;

  @for $x from 1 through $n {
    &:nth-child(#{$x}) {
      transform: translate(340px + 50 * ($x - 1), 130px);
      animation-delay: 500ms * ($x - 1);
    }
  }
}

.brush-2 {
  opacity: 0;
  animation: paint-in 800ms 0ms forwards;

  @for $x from 1 through $n {
    &:nth-child(#{$x}) {
      transform: translate(330px + 50 * ($x - 1), 140px);
      animation-delay: 850ms * ($x - 1);
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