<template>
  <div id="container-intro-title">
    <picture>
      <source
        srcset="@/assets/intro/images/rainbow-min.webp"
        media="(min-width: 992px)"
      >
      <img
        class="title-intro-cloud-backing"
        src="@/assets/intro/images/rainbow-min.png"
        alt="image of watercolor cloud of color"
      >
    </picture>
    <h1 class="section-title">
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'IntroTitle',
  title: process.env.VUE_APP_TITLE
}
</script>

<style scoped lang="scss">
#container-intro-title {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  .title-intro-cloud-backing {
    grid-column: 1;
    grid-row: 1;
  }
  .section-title {
    color: white;
    grid-column: 1;
    grid-row: 1;
  }
}
</style>