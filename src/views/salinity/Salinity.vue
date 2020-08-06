<template>
  <div id="salinity">
    <SectionTitle
      :title="title"
      :image="titleBackingImage"
    />
    <SalinitySea
      id="sea-salt-component"
    />
    <SalinityRoad id="road-salt-component" />
  </div>
</template>

<script>
  import SectionTitle from "@/components/SectionTitle";
  import SalinitySea from "@/views/salinity/subViews/SalinitySea";
  import SalinityRoad from "@/views/salinity/subViews/SalinityRoad";

  export default {
      name: 'Salinity',
      components: {
        SectionTitle,
        SalinitySea,
        SalinityRoad
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
