<template>
  <carousel
    id="image-slider"
    :autoplay="true"
    :autoplay-hover-pause="true"
    :per-page="3"
  >
    <slide class="slide">
      <div class="slider-image-container">
        <img
          src="@/assets/intro/images/imageSlider/slider_01.png"
          alt=""
        >
      </div>
    </slide>

    <slide class="slide">
      <div class="slider-image-container">
        <img
          src="@/assets/intro/images/imageSlider/slider_02.png"
          alt=""
        >
      </div>
    </slide>

    <slide class="slide">
      <div class="slider-image-container">
        <img
          src="@/assets/intro/images/imageSlider/slider_03.png"
          alt=""
        >
      </div>
    </slide>

    <!-- <slide class="slide">
      <div class="slider-image-container">
        <img
          src="@/assets/imageCarousel/images/slider_04.jpg"
          alt=""
        >
      </div>
    </slide> -->
    <slide class="slide">
      <div class="slider-image-container">
        <img
          src="@/assets/intro/images/imageSlider/slider_05.png"
          alt=""
        >
      </div>
    </slide>
  </carousel>
</template>

<script>
  export default {
      name: 'ImageCarousel'
  }

</script>

<style scoped lang="scss">
  #image-slider {
    *:focus{
      outline: none;
    }
  }
  .slide {
    margin: 0;
    padding: 0;
    select:focus{
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
