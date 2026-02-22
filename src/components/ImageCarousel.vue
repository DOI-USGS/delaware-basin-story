<template>
  <Carousel
    id="image-slider"
    :items-to-show="3"
    :wrap-around="true"
    :autoplay="3000"
    :pause-autoplay-on-hover="true"
    :breakpoints="breakpoints"
  >
    <Slide class="slide">
      <div class="slider-image-container">
        <picture>
          <source
            srcset="@/assets/intro/images/imageSlider/slider_01_mobile.jpg"
            media="(max-width: 992px)"
            type="image/jpeg"
          >
          <img
            v-img:group-1
            src="@/assets/intro/images/imageSlider/slider_01.png"
            alt="Aerial view of a bridge crossing the Delaware River"
          >
        </picture>
      </div>
    </Slide>

    <Slide class="slide">
      <div class="slider-image-container">
        <picture>
          <source
            srcset="@/assets/intro/images/imageSlider/slider_02_mobile.jpg"
            media="(max-width: 992px)"
            type="image/jpeg"
          >
          <img
            v-img:group-1
            src="@/assets/intro/images/imageSlider/slider_02.png"
            alt="Aerial image of a tall sailing ship docked at the bank of the Delaware River"
          >
        </picture>
      </div>
    </Slide>

    <Slide class="slide">
      <div class="slider-image-container">
        <picture>
          <source
            srcset="@/assets/intro/images/imageSlider/slider_03_mobile.jpg"
            media="(max-width: 992px)"
            type="image/jpeg"
          >
          <img
            v-img:group-1
            src="@/assets/intro/images/imageSlider/slider_03.png"
            alt="A blue heron fishing on the Delaware River"
          >
        </picture>
      </div>
    </Slide>

    <Slide class="slide">
      <div class="slider-image-container">
        <picture>
          <source
            srcset="@/assets/intro/images/imageSlider/slider_05_mobile.jpg"
            media="(max-width: 992px)"
            type="image/jpeg"
          >
          <img
            v-img:group-1
            src="@/assets/intro/images/imageSlider/slider_05.png"
            alt="Aerial view of a wooded area on the banks of the Delaware River"
          >
        </picture>
      </div>
    </Slide>
  </Carousel>
</template>

<script setup>
  import { Carousel, Slide } from 'vue3-carousel';
  import 'vue3-carousel/dist/carousel.css';

  const breakpoints = {
    0: {
      itemsToShow: 1
    },
    768: {
      itemsToShow: 2
    },
    1024: {
      itemsToShow: 3
    }
  };
</script>

<style scoped lang="scss">
  #image-slider {
    *:focus {
      outline: none;
    }
  }
  .slide {
    margin: 0;
    padding: 0;
    select:focus {
      outline: none;
    }
  }
  .slider-image-container {
    padding: 10px;
    display: block;
    margin: auto;
    max-width: 400px;
    img {
      width: 100%;
    }
  }
</style>
