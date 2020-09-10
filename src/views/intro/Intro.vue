<template>
  <section id="intro">
    <div
      id="intro-banner-container"
      class="parallax"
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
          <mask id="MASK" maskunits="userSpaceOnUse"
              maskcontentunits="userSpaceOnUse">
          <image 
        xlink:href="@/assets/intro/images/ink_scale_invert.gif" 
        height="30%"
        width="40%"
        x="3%" y="3%"
   />
        </mask>

        <mask id="MASK2" maskunits="userSpaceOnUse"
              maskcontentunits="userSpaceOnUse">
          <image 
        xlink:href="@/assets/intro/images/ink_scale_delay_invert.gif" 
        height="40%"
        width="45%"
        x="0%" y="40%"
   />
        </mask>

        <mask id="MASK3" maskunits="userSpaceOnUse"
              maskcontentunits="userSpaceOnUse">
          <image 
        xlink:href="@/assets/intro/images/ink_scale_delay_invert.gif" 
        height="50%"
        width="55%"
        x="-7%" y="15%"
   />
        </mask>
        <mask id="MASK4" maskunits="userSpaceOnUse"
              maskcontentunits="userSpaceOnUse">
          <image 
        xlink:href="@/assets/intro/images/ink_scale_invert.gif" 
        height="40%"
        width="45%"
        x="-5%" y="60%"
   />
        </mask>
        <mask id="MASK5" maskunits="userSpaceOnUse"
              maskcontentunits="userSpaceOnUse">
          <image 
        xlink:href="@/assets/intro/images/ink_scale_invert.gif" 
        height="30%"
        width="30%"
        x="0%" y="35%"
   />
        </mask>
        <!-- start river masks -->
        <mask id="MASK6" maskunits="userSpaceOnUse"
              maskcontentunits="userSpaceOnUse">
          <image 
        xlink:href="@/assets/intro/images/ink_curl.gif" 
        height="60%"
        width="45%"
        x="0%" y="0%"
   />
        </mask>
        <mask id="MASK7" maskunits="userSpaceOnUse"
              maskcontentunits="userSpaceOnUse">
          <image 
        xlink:href="@/assets/intro/images/ink_once.gif" 
        height="40%"
        width="45%"
        x="0%" y="25%"
   />
        </mask>
         <mask id="MASK8" maskunits="userSpaceOnUse"
              maskcontentunits="userSpaceOnUse">
          <image 
        xlink:href="@/assets/intro/images/ink_once.gif" 
        height="40%"
        width="45%"
        x="-3%" y="65%"
   />
        </mask>
        <mask id="MASK9" maskunits="userSpaceOnUse"
              maskcontentunits="userSpaceOnUse">
          <image 
        xlink:href="@/assets/intro/images/ink_once.gif" 
        height="40%"
        width="45%"
        x="-7%" y="30%"
   />
        </mask>
        <mask id="MASK10" maskunits="userSpaceOnUse"
              maskcontentunits="userSpaceOnUse">
          <image 
        xlink:href="@/assets/intro/images/ink_once.gif" 
        height="50%"
        width="45%"
        x="0%" y="13%"
   />
        </mask>
          

        </defs>
        <use
          xlink:href="#DRB-land-water"
          height="100%"
          width="100%"
          
        />
        
        <g id="green" >
<g mask="url(#MASK)"  >
  
        <use
        id="map-ink"
          xlink:href="#DRB_land-green"
          height="100%"
          width="100%"
          
        />
        </g>
        <g mask="url(#MASK2)" >
  
        <use
        id="map-ink"
          xlink:href="#DRB_land-green"
          height="100%"
          width="100%"
          
        />
        </g>

        <g mask="url(#MASK3)" >
  
        <use
        id="map-ink"
          xlink:href="#DRB_land-green"
          height="100%"
          width="100%"
          
        />
        </g>
        <g mask="url(#MASK4)" >
  
        <use
        id="map-ink"
          xlink:href="#DRB_land-green"
          height="100%"
          width="100%"
          
        />
        </g>
        <g mask="url(#MASK5)" >
  
        <use
        id="map-ink"
          xlink:href="#DRB_land-green"
          height="100%"
          width="100%"
          
        />
        </g>

<!-- apply river masks -->
   
               <g mask="url(#MASK6)"  >
  
        <use
        id="blue"
          xlink:href="#DRB-river"
          height="100%"
          width="100%"
          
        />
        </g>
 <!--        <g mask="url(#MASK7)"  >
  
        <use
        id="map-ink"
          xlink:href="#DRB_land-green"
          height="100%"
          width="100%"
          
        />
        </g> -->
<!--         <g mask="url(#MASK8)"  >
  
        <use
        id="map-ink"
          xlink:href="#DRB_land-green"
          height="100%"
          width="100%"
          
        />
        </g> -->
<!--         <g mask="url(#MASK9)"  >
  
        <use
        id="map-ink"
          xlink:href="#DRB_land-green"
          height="100%"
          width="100%"
          
        />
        </g> -->
<!--         <g mask="url(#MASK10)"  >
  
        <use
        id="map-ink"
          xlink:href="#DRB_land-green"
          height="100%"
          width="100%"
          
        />
        </g> -->
        </g>
        <!-- <use
        id="blue"
          xlink:href="#DRB-river"
          height="100%"
          width="100%"
          
        /> -->

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
.map-ink  {
$n:10;
@for $x from 1 through $n {
  &:nth-child(#{$x})  {
    animation-delay: 700ms * ($x - 1);
  }
}
}


//

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