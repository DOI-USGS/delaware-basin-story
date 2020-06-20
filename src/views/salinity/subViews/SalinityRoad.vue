<template>
  <div id="salinity-road">
    <h3>Place holder for Salinity Road Salt</h3>
    <p>There’s another source of salt, from the land – road salt runoff. We put road salt on icy roads in the winter, and when we have a warm melting spell, the meltwater washing the salt downstream into the Delaware River. This is important because_____.</p>
    <p>The USGS monitors road salt runoff by _____. We are doing this innovative thing ______. It’s helped us in this way _____ and we’re still figuring out _______. But thanks to this kind of monitoring, _______.</p>
    <video-background
      src="https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/salt-pulse-mock-up/final-product/saltVizMockup_compressed.mp4"
      poster="@/assets/usesNeedsConflicts/images/watercolor.png"
      :sources="[
        {src: 'https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/idea-blitz/2020-march/where-is-earths-water/final-product/WhereIsWater_p2_30fps_compressed_slowed.mp4', res: 900, autoplay: true},
        {src: 'https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/salt-pulse-mock-up/final-product/saltVizMockup_compressed.mp4', res: 638, autoplay: true, poster: '@/assets/usesNeedsConflicts/images/watercolor.png'}
      ]"
      style="max-height: 800px; height: 100vh;"
    />
  </div>
</template>

<script>
    export default {
        name: 'SalinityRoad',
        data() {
            return {

            }
        }
    }
</script>

<style scoped lang="scss">

</style>
