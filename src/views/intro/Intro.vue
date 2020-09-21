<template>
  <section id="intro">
    <div
      id="intro-banner-container"
      class="parallax"
      width="auto"
    /><h1 id="hidden-h1">
      Delaware River Basin
    </h1><div
      id="map-container" 
      :height="windowHeight"
    >
      <svg
        id="monitoring-locations"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1920 1080"
      >
        <defs>
          <image
            id="DRB_land-green"
            href="@/assets/intro/images/DRB-land-01.png"
            height="100%"
            width="100%"
          />
          <image
            id="DRB-river"
            href="@/assets/intro/images/DRB-water-01.png"
            height="100%"
            width="100%"
          />
          <image
            id="DRB-land-water"
            href="@/assets/monitoringConclusion/images/DRB_land-01.jpg"
            height="100%"
            width="100%"
          />
          <mask
            id="MASK"
            maskunits="userSpaceOnUse"
            maskcontentunits="userSpaceOnUse"
          >
            <image 
              xlink:href="@/assets/intro/images/ink_scale_invert.gif" 
              height="30%"
              width="40%"
              x="3%"
              y="3%"
            />
          </mask>

          <mask
            id="MASK2"
            maskunits="userSpaceOnUse"
            maskcontentunits="userSpaceOnUse"
          >
            <image 
              xlink:href="@/assets/intro/images/ink_scale_delay_invert.gif" 
              height="40%"
              width="45%"
              x="0%"
              y="40%"
            />
          </mask>

          <mask
            id="MASK3"
            maskunits="userSpaceOnUse"
            maskcontentunits="userSpaceOnUse"
          >
            <image 
              xlink:href="@/assets/intro/images/ink_scale_delay_invert.gif" 
              height="50%"
              width="55%"
              x="-7%"
              y="15%"
            />
          </mask>
          <mask
            id="MASK4"
            maskunits="userSpaceOnUse"
            maskcontentunits="userSpaceOnUse"
          >
            <image 
              xlink:href="@/assets/intro/images/ink_scale_invert.gif" 
              height="40%"
              width="45%"
              x="-5%"
              y="60%"
            />
          </mask>
          <mask
            id="MASK5"
            maskunits="userSpaceOnUse"
            maskcontentunits="userSpaceOnUse"
          >
            <image 
              xlink:href="@/assets/intro/images/ink_scale_invert.gif" 
              height="30%"
              width="30%"
              x="0%"
              y="35%"
            />
          </mask>
          <!-- start river masks -->
          <mask
            id="MASK6"
            maskunits="userSpaceOnUse"
            maskcontentunits="userSpaceOnUse"
          >
            <image 
              xlink:href="@/assets/intro/images/ink_scale_invert.gif" 
              height="30%"
              width="35%"
              x="5%"
              y="9%"
            />
          </mask>
          <mask
            id="MASK7"
            maskunits="userSpaceOnUse"
            maskcontentunits="userSpaceOnUse"
          >
            <image 
              xlink:href="@/assets/intro/images/ink_scale_delay_invert.gif" 
              height="40%"
              width="45%"
              x="5%"
              y="65%"
            />
          </mask>
          <mask
            id="MASK8"
            maskunits="userSpaceOnUse"
            maskcontentunits="userSpaceOnUse"
          >
            <image 
              xlink:href="@/assets/intro/images/ink_scale_delay_invert.gif" 
              height="70%"
              width="75%"
              x="-15%"
              y="22%"
            />
          </mask>
          <mask
            id="MASK9"
            maskunits="userSpaceOnUse"
            maskcontentunits="userSpaceOnUse"
          >
            <image 
              xlink:href="@/assets/intro/images/ink_scale_invert.gif" 
              height="60%"
              width="55%"
              x="-15%"
              y="55%"
            />
          </mask>

        </defs>
        <use
          xlink:href="#DRB-land-water"
          height="100%"
          width="100%"
        />
        
        <g id="green">
          <g mask="url(#MASK)">
  
            <use
              id="map-ink"
              xlink:href="#DRB_land-green"
              height="100%"
              width="100%"
            />
          </g>
          <g mask="url(#MASK2)">
  
            <use
              id="map-ink"
              xlink:href="#DRB_land-green"
              height="100%"
              width="100%"
            />
          </g>

          <g mask="url(#MASK3)">
  
            <use
              id="map-ink"
              xlink:href="#DRB_land-green"
              height="100%"
              width="100%"
            />
          </g>
          <g mask="url(#MASK4)">
  
            <use
              id="map-ink"
              xlink:href="#DRB_land-green"
              height="100%"
              width="100%"
            />
          </g>
          <g mask="url(#MASK5)">
  
            <use
              id="map-ink"
              xlink:href="#DRB_land-green"
              height="100%"
              width="100%"
            />
          </g>

          <!-- apply river masks -->
   
          <g mask="url(#MASK6)">
  
            <use
              id="blue"
              xlink:href="#DRB-river"
              height="100%"
              width="100%"
            />
          </g>
          <g mask="url(#MASK7)">
  
            <use
              id="map-ink"
              xlink:href="#DRB-river"
              height="100%"
              width="100%"
            />
          </g>
          <g mask="url(#MASK8)">
  
            <use
              id="map-ink"
              xlink:href="#DRB-river"
              height="100%"
              width="100%"
            />
          </g>
          <g mask="url(#MASK9)">
  
            <use
              id="map-ink"
              xlink:href="#DRB-river"
              height="100%"
              width="100%"
            />
          </g>
        </g>


      </svg>
    </div>
    <!-- <SectionTitle
      :title="title"
      :image="titleBackingImage"
    /> -->
    <IntroTextContents />
    <ImageCarousel />
  </section>
</template>

<script>
  // import SectionTitle from "@/components/SectionTitle";
  import IntroTextContents from "./subViews/IntroTextContents";
  import ImageCarousel from "../../components/ImageCarousel";

    export default {
        name: 'Intro',
        components: {
          // SectionTitle,
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
  #map-container {
    overflow: visible;
  }
 
#DRB-land-water  {
  z-index: -1;
}
#green  {
  z-index: 10;
}

#DRB-river  {
  z-index: 2;
}
#blue  {
  z-index: 2;
}

#hidden-h1{
  opacity: 0;
}
  
</style>