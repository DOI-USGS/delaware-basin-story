<template>
  <carousel
    id="image-slider"
    :autoplay="true"
    :autoplay-hover-pause="true"
    :per-page="2"
  >
    <slide class="slide">
      <div class="slider-image-container">
        <img
          src="@/assets/usesNeedsConflicts/images/imageSlider/slider_01.jpg"
          alt=""
        >
        <p>great information here</p>
      </div>
    </slide>
    <slide class="slide">
      <div class="slider-image-container">
        <img
          src="@/assets/usesNeedsConflicts/images/imageSlider/slider_02.jpg"
          alt=""
        >
        <p>great information here</p>
      </div>
    </slide>
    <slide class="slide">
      <div class="slider-image-container">
        <img
          src="@/assets/usesNeedsConflicts/images/imageSlider/slider_03.jpg"
          alt=""
        >
        <p>great information here</p>
      </div>
    </slide>
    <slide class="slide">
      <div class="slider-image-container">
        <img
          src="@/assets/usesNeedsConflicts/images/imageSlider/slider_04.jpg"
          alt=""
        >
        <p>great information here</p>
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
    padding: 0 5px 0 5px;
    select:focus{
      outline: none;
    }
  }
  .slider-image-container {
    padding: 5px;
    text-align: left;
    display: block;
    margin: auto;
    border: 1px solid black;
    max-width: 400px;
    img {
      width: 100%;
    }
  }
</style>
