<template>
  <div id="temperature">
    <div id="header">
      <img
        id="waterline"
        src="@/assets/temperature/images/waterHeader.png"
        alt="water line for the top of a stream cross-section"
      >
      <img
        id="tempheader"
        src="@/assets/temperature/images/BlueLarge.png"
        alt="a blue cloud of watercolor paint"
      >
      <h1 class="section-title">
        Temperature
      </h1>
    </div>
    <div
      id="content"
      class="text-content"
    >
      <div class="row-fish">
        <div class="left">
          <div class="temperature-text">
            <p>Water temperature is inherently linked to the health and reproduction of aquatic organisms, such as trout and mussels. In the DRB there are diverse thermal habitats that support vibrant communities of aquatic life. Some factors that modify temperature (e.g. weather/climate) are not easily controlled by DRB decisionmakers, while other factors (reservoir releases and riparian land-use) may be strategically used to maintain or modify thermal regimes. A combination of monitoring and modeling lends important information to policymakers, anglers, land resource planners, and water managers; these decisions can impact economic and ecological health.  </p>
            <p>Brook trout are the only native trout species within the DRB and prefer cold water temperatures. For brook trout, fall water temperatures are an important environmental cue to initiate the reproductive cycle. Trout can also be negatively impacted when water temperatures are too high in other seasons, as warming reduces growth rates and can make trout more susceptible to diseases. </p>
          </div>
        </div>
        <div class="right">
          <div class="image-stack">
            <img
              id="sadfish"
              src="@/assets/temperature/images/hank_freida_sad.png"
              alt="a couple of sad fishes"
            >
            <img
              id="happyfish"
              src="@/assets/temperature/images/hank_freida_happy.png"
              alt="a couple of happy fishes ready to spawn"
            >
          </div>
        </div>
      </div>
      <div class="row-mussels">
        <div class="left">
          <div class="image-stack">
            <img
              id="sadmussel"
              src="@/assets/temperature/images/mussel_outline_sad.png"
              alt="mussels looking sad in a streambed"
            >
            <img
              id="happymussel"
              src="@/assets/temperature/images/mussel_outline_happy.png"
              alt="a robust colony of mussels in a streambed"
            >
          </div>
        </div>
        <div class="right">
          <div class="temperature-text">
            <p>Simultaneously, the federally protected dwarf wedgemussels have their own preferences for water temperatures and river flow rates. Efforts to manage water in the modern era often require consideration of the impacts of altering flows, groundwater connectivity, and stream shading on water temperatures and aquatic life.  </p>
            <p>The USGS has a long history of monitoring water resources in the DRB, in partnership with ### stakeholders and cooperators. A recent Federal funding initiative, the Next-Generation Water Observing System (NGWOS), has made new investments in water monitoring and information delivery for DRB stakeholders. The DRB was chosen as the pilot basin for NGWOS in 2017(?verify?) and the unique needs for monitoring were taken into account as new sensor deployments were designed, old infrastructure was upgraded, and innovations in non-contact measurement techniques were tested and improved.  </p>
          </div>
        </div>
      </div>
    </div>

    <div id="footer">
      <img
        id="pebbles"
        src="@/assets/temperature/images/pebbleFooter.png"
        alt="drawing of rocky ground in stream cross-section"
      >
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


#temperature {
  padding: 2%;

  #header {
    position: sticky;
    display: block;
    width: 95%;
    margin-right: auto;
    margin-left: auto;
    top: 0;

    img {
      display: block;
      max-width: 100%;
      width: 100%;
      height: auto;
      margin-right: auto;
      margin-left: auto;

      #waterline {
        margin-top: 100px;
      }
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
    h1 {
      display: block;
      color: white;
    }
  }

  #content {
    display: flex;
    flex-direction: column;
    height: 1000px;
    margin-bottom: -100px;
    
    .row-fish {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;

      .left{
        display: flex;
        flex-direction: column;
        flex-basis: 100%;
        flex: 1;
        padding: 2%;

        .temperature-text {
            margin: 0 auto;
            width: 60rem;
            padding: 2em;
            margin-top: 200px;
        }

      }
      .right {
        display: flex;
        flex-direction: column;
        flex-basis: 100%;
        flex: 1;
        height: auto;

        .image-stack {
          display:grid;
          grid-template-columns: repeat(12, 1fr);
          position: relative;
          margin-bottom: 100px;

          #sadfish {
            grid-column: 1 / 12;
            grid-row: 1
          }
          
          #happyfish {
            grid-column: 1 / span 12;
            grid-row: 1;
            z-index: 1;
            animation: color-change 15s linear 5s forwards infinite;
            -webkit-animation: color-change 15s linear 5s forwards infinite;
            -moz-animation: color-change 15s linear 5s forwards infinite;
            -o-animation: color-change 15s linear 5s forwards infinite;
          }

        }


      }
    }

    .row-mussels {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;

      .left{
        display: flex;
        flex-direction: column;
        flex-basis: 100%;
        flex: 1;
        padding: 2%;

        .image-stack {
          display:grid;
          grid-template-columns: repeat(12, 1fr);
          position: relative;

          #sadmussel {
            grid-column: 1 / 12;
            grid-row: 1;
            animation: disappear 15s linear 0s forwards infinite;
            -webkit-animation: disappear 15s linear 0s forwards infinite;
            -moz-animation: disappear 15s linear 0s forwards infinite;
            -o-animation: disappear 15s linear 0s forwards infinite;
          }
          
          #happymussel {
            grid-column: 1 / span 12;
            grid-row: 1;
            z-index: 1;
            animation: color-change 15s linear 0s forwards infinite;
            -webkit-animation: color-change 15s linear 0s forwards infinite;
            -moz-animation: color-change 15s linear 0s forwards infinite;
            -o-animation: color-change 15s linear 0s forwards infinite;
          }
       

        }

      }
      .right {
        display: flex;
        flex-direction: column;
        flex-basis: 100%;
        flex: 1;
        padding: 2%;

        .temperature-text {
            margin: 0 auto;
            width: 60rem;
            padding: 2em;
        }

      }
    }

  }

  #footer {
      #pebbles {
          display: block;
          max-width: 100%;
          width: 95%;
          height: auto;
          margin-right: auto;
          margin-left: auto;
          bottom: 0;
      }

    }

}

@keyframes color-change {
  0%   { opacity:0; }
  35%  { opacity:1; }
  50%  { opacity:1; }
  65%  { opacity:1; }
  100% { opacity:0; }
}

@-o-keyframes color-change {
  0%   { opacity:0; }
  35%  { opacity:1; }
  50%  { opacity:1; }
  65%  { opacity:1; }
  100% { opacity:0; }
}
@-moz-keyframes color-change{
  0%   { opacity:0; }
  35%  { opacity:1; }
  50%  { opacity:1; }
  65%  { opacity:1; }
  100% { opacity:0; }
}
@-webkit-keyframes color-change{
  0%   { opacity:0; }
  35%  { opacity:1; }
  50%  { opacity:1; }
  65%  { opacity:1; }
  100% { opacity:0; }
}

@keyframes disappear {
  0%   { opacity:1; }
  25%  { opacity:0; }
  50%  { opacity:0; }
  75%  { opacity:0; }
  100% { opacity:1; }
}
@-o-keyframes disappear {
  0%   { opacity:1; }
  25%  { opacity:0; }
  50%  { opacity:0; }
  75%  { opacity:0; }
  100% { opacity:1; }
}
@-moz-keyframes disappear {
  0%   { opacity:1; }
  25%  { opacity:0; }
  50%  { opacity:0; }
  75%  { opacity:0; }
  100% { opacity:1; }
}
@-webkit-keyframes disappear {
  0%   { opacity:1; }
  25%  { opacity:0; }
  50%  { opacity:0; }
  75%  { opacity:0; }
  100% { opacity:1; }
}

</style>
