<template>
  <section
    id="salinity"
    class="section"
  >
    <SectionTitle
      :title="title"
      :image="titleBackingImage"
    />
    <SalinitySea />
  </section>
</template>

<script setup>
  import SectionTitle from "@/components/SectionTitle.vue";
  import SalinitySea from "@/components/story/salinity/subViews/SalinitySea.vue";
  import titleBackingImageAsset from "@/assets/salinity/salinitySea/images/GreenLarge.png";

  const title = 'Salinity';
  const titleBackingImage = titleBackingImageAsset;
</script>

<style scoped lang="scss">

</style>
