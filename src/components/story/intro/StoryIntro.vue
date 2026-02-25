<template>
  <section id="intro">
    <div
      id="map-container" 
    >
      <IntroWatercolorGraphic />
    </div>
    <IntroTextContents />
    <ImageCarousel />
  </section>
</template>

<script setup>
  import { nextTick, onMounted } from 'vue';
  import IntroWatercolorGraphic from "./IntroWatercolorGraphic.vue";
  import IntroTextContents from "./subViews/IntroTextContents.vue";
  import ImageCarousel from "@/components/ImageCarousel.vue";
  import { useAppStore } from '@/stores/appStore.js';

  const appStore = useAppStore();

  onMounted(() => {
    nextTick(() => {
      appStore.markIntroSectionRendered();
    });
  });
</script>

<style scoped lang="scss">
#intro {
  margin-bottom: clamp(3rem, 6vw, 5rem);
}
// title writing 
  :deep(#title_draw) {
    clip-path: url(#title_clip);
  }
  :deep(#title_draw_mobile) {
    clip-path: url(#title_clip_mobile);
    background-color: white;
  }
  :deep(#background-box) {
    transform: translate(50px, 200px);
    z-index: 2;
    width: 700px;
    height: 600px;
    fill: url(#radialGradient);
  }


// Extra Large screens
@media only screen and (min-width: 901px) {
  #map-container {
    overflow: hidden;
    width: 100%;
  }
  :deep(#title_draw) {
    transform: translate(50px, 0);
    display: block; 
  }
  :deep(#title_draw_mobile) {
    display: none;    
  }
  :deep(#watercolor) {
    align-self: center;
    margin: 0;
    max-height: 100vh;
  }
  :deep(#background-box){
    display: none;
  }
}
// Large Screens
@media only screen and (max-width: 900px) {
  #map-container {
    overflow: hidden;
    width: 100%;
  }
  :deep(#title_draw) {
    transform: translate(50px, -50px);
    display: block; 
  }
  :deep(#title_draw_mobile) {
    display: none;    
  }
  :deep(#watercolor) {
    align-self: center;
    margin: 0;
  }
  :deep(#background-box){
    display: none;
  }
}

// Medium screens
@media only screen and (max-width: 650px) {
  #map-container {
    overflow: hidden;
    width: 150%;
  }
  :deep(#title_draw) {
    display: none; 
  }
  :deep(#title_draw_mobile) {
    display: block; 
    transform: translate(530px, 200px);
  }
  
  :deep(#watercolor) {
    align-self: center;
    margin: 0;
  }
}


// Small screens
@media only screen and (max-width: 500px) {
  #map-container {
    overflow: hidden;
    width: 230%;
  }
  :deep(#title_draw) {
    display: none; 
  }
  :deep(#title_draw_mobile) {  
    display: block; 
    transform: translate(0, -50px) scale(1.1);
  }
  :deep(#background-box){
    display: block;
  }
}

// Smallest screens
@media only screen and (max-width: 320px) {
  #map-container {
    overflow: hidden;
  }
  :deep(#title_draw) {
    display: none; 
  }
  :deep(#title_draw_mobile) {   
    display: block; 
  }
  #background-box{
    display: block;
  }
}

 
#DRB-land-water  {
  z-index: -1;
  opacity: .5;
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

.hidden-title{
  opacity: 0;
  height: 0;
  margin: 0;
  h1,h2{
    margin: 0;
    height: 0;
  }
}
  
</style>


<style>
.vpvIMbOV_0{
  stroke-dasharray:689 691;stroke-dashoffset:690;
  animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;
  -webkit-animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;
  -moz-animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;
  -o-animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;}
.vpvIMbOV_1{
  stroke-dasharray:857 859;stroke-dashoffset:858;
  animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;
  -webkit-animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;
  -moz-animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;
  -o-animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;}
.vpvIMbOV_2{
  stroke-dasharray:366 368;stroke-dashoffset:367;
  animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;
  -webkit-animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;
  -moz-animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;
  -o-animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;}
.vpvIMbOV_3{
  stroke-dasharray:1346 1348;stroke-dashoffset:1347;
  animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;
  -webkit-animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;
  -moz-animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;
  -o-animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;}
.vpvIMbOV_4{
  stroke-dasharray:129 131;stroke-dashoffset:130;
  animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;
  -webkit-animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;
  -moz-animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;
  -o-animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;}
.vpvIMbOV_5{
  stroke-dasharray:445 447;stroke-dashoffset:446;
  animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;
  -webkit-animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;
  -moz-animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;
  -o-animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;}
.vpvIMbOV_6{
  stroke-dasharray:1000 998;stroke-dashoffset:1000;
  animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;
  -webkit-animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;
  -moz-animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;
  -o-animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;}
.vpvIMbOV_7{
  stroke-dasharray:487 489;stroke-dashoffset:488;
  animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;
  -webkit-animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;
  -moz-animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;
  -o-animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;}
.vpvIMbOV_8{
  stroke-dasharray:640 642;stroke-dashoffset:641;
  animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;
  -webkit-animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;
  -moz-animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;
  -o-animation:vpvIMbOV_draw 2800ms ease 1500ms forwards;}
@keyframes vpvIMbOV_draw{
  100%{stroke-dashoffset:0;}
  }
@keyframes vpvIMbOV_fade{
  0%{stroke-opacity:1;}
  95%{stroke-opacity:1;}
  100%{stroke-opacity:0;}}


#page-subtitle {
  opacity: 0;
  animation: fadeIn 500ms ease 3200ms forwards 1;
  -webkit-animation: fadeIn 500ms ease 3200ms forwards 1;
  -moz-animation: fadeIn 500ms ease 3200ms forwards 1;
  -o-animation: fadeIn 500ms ease 3200ms forwards 1;
}
@keyframes fadeIn {
  0% { opacity: 0; }
  90% { opacity: 1; }
  100% { opacity: 1; }
}
@-webkit-keyframes fadeIn {
  0% { opacity: 0; }
  90% { opacity: 1; }
  100% { opacity: 1; }
}
@-moz-keyframes fadeIn {
  0% { opacity: 0; }
  90% { opacity: 1; }
  100% { opacity: 1; }
}
@-o-keyframes fadeIn {
  0% { opacity: 0; }
  90% { opacity: 1; }
  100% { opacity: 1; }
}
@keyframes lonJFCVB_draw{100%{stroke-dashoffset:0;}}
@-webkit-keyframes lonJFCVB_draw{100%{stroke-dashoffset:0;}}
@-moz-keyframes lonJFCVB_draw{100%{stroke-dashoffset:0;}}
@-o-keyframes lonJFCVB_draw{100%{stroke-dashoffset:0;}}

@keyframes lonJFCVB_fade{0%{stroke-opacity:1;}95.1219512195122%{stroke-opacity:1;}100%{stroke-opacity:0;}}
@-webkit-keyframes lonJFCVB_fade{0%{stroke-opacity:1;}95.1219512195122%{stroke-opacity:1;}100%{stroke-opacity:0;}}
@-moz-keyframes lonJFCVB_fade{0%{stroke-opacity:1;}95.1219512195122%{stroke-opacity:1;}100%{stroke-opacity:0;}}
@-o-keyframes lonJFCVB_fade{0%{stroke-opacity:1;}95.1219512195122%{stroke-opacity:1;}100%{stroke-opacity:0;}}

</style>
