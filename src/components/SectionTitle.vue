<template>
  <div class="section-title-component">
    <img
      class="title-cloud-backing"
      :src="image"
      alt="image of watercolor cloud of color"
    >
    <h1 class="section-title">
      {{ title }}
    </h1>
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
  margin: 10em auto 0 auto;
  .title-cloud-backing {
    grid-column: 1;
    grid-row: 1;
    min-height: 6em;
  }
  .section-title {
    color: white;
    grid-column: 1;
    grid-row: 1;
  }
}
</style>