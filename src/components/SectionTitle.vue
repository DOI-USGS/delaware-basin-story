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

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});
</script>

<style scoped lang="scss">
.section-title-component {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  margin: -3em auto 2.5em auto;
  width: min(90vw, 700px);
  .title-cloud-backing {
    grid-column: 1;
    grid-row: 1;
    min-height: 6em;
    width: 100%;
    height: auto;
    object-fit: contain;
  }
  .section-title {
    color: white;
    grid-column: 1;
    grid-row: 1;
    max-width: 90%;
    text-align: center;
    font-size: clamp(1.75rem, 4vw, 3rem);
    margin: 0.5em 0;
    padding: 0 0.5em;
  }
}
</style>
