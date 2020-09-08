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

<script>
  import SectionTitle from "@/components/SectionTitle";
  import SalinitySea from "@/views/salinity/subViews/SalinitySea";

  export default {
      name: 'Salinity',
      components: {
        SectionTitle,
        SalinitySea,

      },
      data() {
        return {
          title: 'Salinity',
          titleBackingImage:require('@/assets/salinity/salinitySea/images/GreenLarge.png')

          
        }
      }
  }
</script>

<style scoped lang="scss">

</style>
