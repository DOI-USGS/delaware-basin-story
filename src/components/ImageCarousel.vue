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
          alt="Aerial view of a bridge crossing the Delaware River"
        >
      </div>
    </slide>

    <slide class="slide">
      <div class="slider-image-container">
        <img
          src="@/assets/intro/images/imageSlider/slider_02.png"
          alt="Aerial image of a tall sailing ship docked at the bank of the Delaware River"
        >
      </div>
    </slide>

    <slide class="slide">
      <div class="slider-image-container">
        <img
          src="@/assets/intro/images/imageSlider/slider_03.png"
          alt="A blue heron fishing on the Delaware River"
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
          alt="Aerial view of a wooded area on the banks of the Delaware River"
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
