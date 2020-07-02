<template>
  <section id="intro">
    <img
      src="@/assets/intro/images/watercolorMap.png"
      alt="watercolor illustration of delaware river basin"
    >
    <div class="container-section-title">
      <img
        src="@/assets/intro/images/background_rainbowLarge.png"
        alt="image of watercolor cloud of color"
      >
      <h1 class="section-title">
        Delaware River Basin
      </h1>
    </div>
  </section>
</template>

<script>
    export default {
        name: 'Intro',
        data() {
            return {

            }
        }
    }
</script>

<style scoped lang="scss">
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {}

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      .container-section-title {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        text-align: center;
        color: white;
        img {
          width: 100%;
        }
        .section-title {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    section {
      flex-direction: row;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {}

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {}

</style>
