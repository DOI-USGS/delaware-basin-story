<template>
  <div class="section-title-component">
    <img
      class="title-cloud-backing"
      :src="image"
      alt="Colorful background with watercolor texture"
      loading="lazy"
    >
    <h2 class="section-title">
      {{ title }}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    title: {
      type: String,
      required:true
    },
    image: {
      type: String,
      required: true
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
.section-title-component {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  margin: -3em auto 0 auto;
  .title-cloud-backing {
    grid-column: 1;
    grid-row: 1;
    min-height: 6em;
  }
  .section-title {
    color: white;
    grid-column: 1;
    grid-row: 1;
    max-width: 1000px;
    text-align: center;    
  }

  // @media only screen and (max-width: 992px) {
  //   .section-title {
  //     font-size:2em;
  //   }
  // }
  // @media only screen and (max-width: 508px) {
  //   .section-title {
  //     font-size:1.5em;
  //   }
  // }
}
</style>