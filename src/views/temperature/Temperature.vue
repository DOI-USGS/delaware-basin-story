<template>
  <div id="temperature">
    <div id="header">
      <img id="waterline" src="@/assets/temperature/images/waterHeader.png" alt="water line for the top of a stream cross-section" />
      <img id="tempheader" src="@/assets/temperature/images/BlueLarge.png" alt="a blue cloud of watercolor paint" />
      <h1 class="section-title">
      Temperature
      </h1>

    </div>
    <div id="content">
      <div class="left">
        <div class="temperature-text">
          <p>Water temperature is inherently linked to the health and reproduction of aquatic organisms, such as trout and mussels. In the DRB there are diverse thermal habitats that support vibrant communities of aquatic life. Some factors that modify temperature (e.g. weather/climate) are not easily controlled by DRB decisionmakers, while other factors (reservoir releases and riparian land-use) may be strategically used to maintain or modify thermal regimes. A combination of monitoring and modeling lends important information to policymakers, anglers, land resource planners, and water managers; these decisions can impact economic and ecological health.  </p>
          <p>Brook trout are the only native trout species within the DRB and prefer cold water temperatures. For brook trout, fall water temperatures are an important environmental cue to initiate the reproductive cycle. Trout can also be negatively impacted when water temperatures are too high in other seasons, as warming reduces growth rates and can make trout more susceptible to diseases. Simultaneously, the federally protected dwarf wedgemussels have their own preferences for water temperatures and river flow rates. Efforts to manage water in the modern era often require consideration of the impacts of altering flows, groundwater connectivity, and stream shading on water temperatures and aquatic life.  </p>
          <p>The USGS has a long history of monitoring water resources in the DRB, in partnership with ### stakeholders and cooperators. A recent Federal funding initiative, the Next-Generation Water Observing System (NGWOS), has made new investments in water monitoring and information delivery for DRB stakeholders. The DRB was chosen as the pilot basin for NGWOS in 2017(?verify?) and the unique needs for monitoring were taken into account as new sensor deployments were designed, old infrastructure was upgraded, and innovations in non-contact measurement techniques were tested and improved.  </p>
        </div>
      </div>
      <div class="right">
      </div>
    </div>
    <div id="footer">
      <img id="pebbles" src="@/assets/temperature/images/pebbleFooter.png" alt="drawing of rocky ground in stream cross-section" />
    </div>
    <hr>
  </div>
</template>

<script>
    export default {
        name: 'Temperature',
        data() {
            return {

            }
        }
    }
</script>

<style scoped lang="scss">

  #header, #footer {
    position: sticky;
    display: inline-block;
    width: 95%;
    margin-right: auto;
    margin-left: auto;
    top: 0;
    padding: 2%;

    img {
      display: block;
      max-width: 100%;
      width: 100%;
      height: auto;
      margin-right: auto;
      margin-left: auto;
    }

    svg {
      position: absolute;
      display: inline-block;
      height: auto;
      width: 100%;
      top: 0;
      left: 0;
    }
    #tempheader {
      display: inline-block;
      width: 25%;
      margin-left: 0;
      margin-right: auto;
      height: auto;
    }
    #pebbles {
      display: block;
      position: sticky;
      max-width: 100%;
      width: 100%;
      height: auto;
      margin-right: auto;
      margin-left: auto;
      bottom: 0;
    }
    h1 {
      display: block;
      color: white;
    }
  }

div.sticky {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}

#content {
  display: flex; 
 
 .left {
   flex-shrink: 0;
   flex-basis: 30%;
   padding: 2%;
 }
  .text {

  }
}

#temperature {
  .temperature-text {
    margin: 0 auto;
    width: 60rem;
    padding: 2em;
  }
}
</style>
