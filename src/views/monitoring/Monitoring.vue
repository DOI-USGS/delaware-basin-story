<template>
  <section id="monitoring">

    <div class="text-content">
      <p>The USGS has a long history of monitoring water resources in the Delaware River Basin, in partnership with numerous stakeholders and cooperators. The United States chose the Delaware River Basin as the pilot site for the <em>Next-Generation Water Observing System (NGWOS).</em></p>
      <p>The investments in water monitoring are diverse and numerous. As part of NGOWS, the USGS designed new sensors and new deployment strategies, upgraded old infrastructure, and developed non-contact measurement techniques that required less in-person upkeep. Each new piece of technology, placed at hundreds of locations throughout the DRB, helps paint a clearer picture of local water dynamics, including assessing current water availability and water quality.</p>
    </div>
    <!-- Begin Image Side -->

    <div
      id="monitoring-big-numbers-main-image-container"
      class="vis-content-side"
    >
      <div class="outer">
        <img
          id="big-number-image-base"
          class="big-number-map-locations"
          src="@/assets/monitoring/images/togggleableSVGsAndBase/basemap-01.png"
          alt="watercolor illustration of delaware river basin with monitoring locations marked"
        >
        <SVGNewGages
          id="big-number-svg-1"
          class="big-number-map-locations-svg"
          alt=""
          hidden
        />
        <SVGEnhanced
          id="big-number-svg-2"
          class="big-number-map-locations-svg"
          alt=""
          hidden
        />
        <SVGConductance
          id="big-number-svg-3"
          class="big-number-map-locations-svg"
          alt=""
          hidden
        />
        <SVGTemperature
          id="big-number-svg-4"
          class="big-number-map-locations-svg"
          alt=""
          hidden
        />
        <SVGCameras
          id="big-number-svg-5"
          class="big-number-map-locations-svg"
          alt=""

          hidden
        />
      </div>
      
    </div>

    <!-- Begin Text Side -->
    <div
      id="big-number-icons-container"
      class="text-content-side"
    >
      <div
        id="list-1"
        class="big-number-icon-container accordion"
      >
        <div class="big-num">
          <img
            src="@/assets/monitoring/images/blueCircle1.png"
            alt=""
          >
          <h2 class="big-number-number">
            34
          </h2>
        </div>

        <h2 class="big-number-text">
          new gages
        </h2>
      </div>
      <div
        id="details-1"
        class="single-detail panel"
      >
        <p>Measurements of real-time flow levels are critical to the decision makers of the Basin, especially in the River Master’s office during late-summer low flows. To better understand streamflow in various locations of the basin, 34 new stream gages have been installed the last three years, each housing delicate monitoring equipment that is collecting data all day, every day.</p>
      </div>

      <div
        id="list-2"
        class="big-number-icon-container accordion"
      >
        <div class="big-num">
          <img
            src="@/assets/monitoring/images/greenCircle1.png"
            alt=""
          >
          <h2 class="big-number-number">
            28
          </h2>
        </div>
        <h2 class="big-number-text">
          upgrades
        </h2>
      </div>
      <div
        id="details-2"
        class="single-detail panel"
      >
        <p>The USGS upgraded the technology at 28 stations to support the type of advanced monitoring made possible by two-way communication. Not only can scientists receive near real-time measurements from the field with minimal delay, technicians can also change the timing and duration of data collection from a remote location, which allows for good data collection even during extreme weather events.</p>
      </div>

      <div
        id="list-3"
        class="big-number-icon-container accordion"
      >
        <div class="big-num">
          <img
            src="@/assets/monitoring/images/blueCircle2.png"
            alt=""
          >
          <h2 class="big-number-number">
            56
          </h2>
        </div>
        <h2 class="big-number-text">
          specific conductance
        </h2>
      </div>
      <div
        id="details-3"
        class="single-detail panel"
      >
        <p>Keeping tabs on the evolving salinity issues in the Delaware River is important to understanding how the location of the salt front is changing.  It also allows scientists to better understand ecosystem health in streams that are impacted by road salting. Specific conductivity sensors measure a variable related to salinity – the ability of the water to conduct electricity – and relationships between conductivity and salinity can be used to provide a picture of salt concentration in the water in 56 new locations in the Basin.</p>
      </div>

      <div
        id="list-4"
        class="big-number-icon-container accordion"
      >
        <div class="big-num">
          <img
            src="@/assets/monitoring/images/greenCircle2.png"
            alt=""
          >
          <h2 class="big-number-number">
            98
          </h2>
        </div>
        <h2 class="big-number-text">
          temperature
        </h2>
      </div>
      <div
        id="details-4"
        class="single-detail panel"
      >
        <p>Water temperature is a key factor in the health of many aquatic organisms, and better, broader, and faster delivery of water temperature data can help inform reservoir releases and help anglers decide when to fish. New temperature sensors were added to 98 locations in the DRB.</p>
      </div>

      <div
        id="list-5"
        class="big-number-icon-container accordion"
      >
        <div class="big-num">
          <img
            src="@/assets/monitoring/images/orangeCircle1.png"
            alt=""
          >
          <h2 class="big-number-number">
            8
          </h2>
        </div>
        <h2 class="big-number-text">
          cameras
        </h2>
      </div>
      <div
        id="details-5"
        class="single-detail panel"
      >
        <p>Installation of 8 new cameras that are connected to a near real-time image delivery system were installed in various strategic locations in the DRB. These cameras open up the potential for new realms of science and data processing for flow measurement, and support USGS visually sharing the dynamic lives of rivers and streams.</p>
        <div id="monitoring-scroll-out-target" />
      </div>


      <div
        id="list-6"
        class="big-number-icon-container accordion"
      >
        <div class="big-num">
          <img
            src="@/assets/monitoring/images/greenCircle2.png"
            alt=""
          >
          <h2 class="big-number-number">
            1
          </h2>
        </div>
        <h2 class="big-number-text">
          Ecomapper
        </h2>
      </div>
      <div
        id="details-5"
        class="single-detail panel"
      >
        <p>USGS field staff collect various water-quality data using a programmable  underwater sampling robot. The EcoMapper’s navigation of the lower waters of the Basin can be used to build maps of how water quality changes through the 3-dimensional space of the Delaware Bay.</p>
        <div id="monitoring-scroll-out-target" />
      </div>

    </div>
  </section>
</template>

<script>
  import SVGNewGages from "@/assets/monitoring/images/togggleableSVGsAndBase/new-01.svg"
  import SVGEnhanced from "@/assets/monitoring/images/togggleableSVGsAndBase/enhanced-01.svg"
  import SVGConductance from "@/assets/monitoring/images/togggleableSVGsAndBase/specificConductance-01.svg"
  import SVGTemperature from "@/assets/monitoring/images/togggleableSVGsAndBase/temperature-01.svg"
  import SVGCameras from "@/assets/monitoring/images/togggleableSVGsAndBase/cameras-01.svg"

    export default {
        name: 'Monitoring',
        components: {
            SVGNewGages,
            SVGEnhanced,
            SVGConductance,
            SVGTemperature,
            SVGCameras
        },
        computed: {
            windowHeight: function () {
                return Number(this.$store.state.windowHeight) + 'px';
            }
        },
        methods: {
            visibilityChanged (isVisible, entry) {
                this.isVisible = isVisible;
                const numberIconTargetId = 'list-' + entry.target.id[entry.target.id.length -1];
                const mapTargetId = 'big-number-svg-' + entry.target.id[entry.target.id.length -1];
                const numberIconTargetElement = document.getElementById(numberIconTargetId);
                const mapTargetElement = document.getElementById(mapTargetId);

                if (isVisible === true) {
                    numberIconTargetElement.classList.add('glow');
                    mapTargetElement.removeAttribute('hidden');

                } else if (isVisible === false) {
                    numberIconTargetElement.classList.remove('glow');
                    mapTargetElement.setAttribute('hidden', 'true');
                }
            },
            changeStateForIsUserAtEndOfMonitoringSection(isVisible, entry) {
                this.isVisible = isVisible;
                if (this.isVisible === true) {
                    this.$store.commit('changeBooleanStateForEndOfMonitoringSection', true);
                }
            }
        }
    }
</script>

<style scoped lang="scss">
/* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      .container-section-title {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        text-align: center;
        color: white;
        img {
          width: 80%;
        }
        .section-title {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    section {
      margin-bottom: 10em;
      justify-content: center;
      align-content: center;
      .container-section-title {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        text-align: center;
        color: white;
        img {
          width: 80%;
        }
        .section-title {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {}

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {}

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {}

  // The Rest





#monitoring-big-numbers-main-image-container  {
  position: relative;
  width: 100%;
  height: auto;

  #big-number-image-base  {
    display: block;
    z-index: 1;

  }

  svg   {
    position: absolute;
    display: block;
    width: 100%;
    height: auto;
    top: 0;
    left:0;
    z-index: 2;




  }
}

    #monitoring {


        #big-number-icons-container {

          // justify-content: center;
          // font-family: chantal, sans-serif;
          // font-weight: bold;


          img {
            position: absolute;
          }


          .big-number-icon-container {
            position: relative;
            text-align: center;
            display: flex;
            flex-direction: row;
            z-index: 1;

            .big-num{
              text-align: center;
              height: 100px;
              width: 100px;

              img {
              width: 30%;
              z-index: -1;
              left: 0;
              align-items: left;
              }
              .big-number-number {

              // top: -50%;
              // left: 50%;
              // transform: translate(-50%, -100%);
              font-family: chantal, sans-serif;
              font-weight: bold;
              color: white;
              z-index: 2;


              }


            }

            .big-number-text {
              color: black;
              font-family: chantal, sans-serif;
              font-weight: bold;
              z-index: -1;
              // position: absolute;
              // text-align: left;
              // top: 35%;
              // left: 55%;
              // transform: translate(0%, -60%);
            }
          }
        }

    }

    #monitoring-details {
      .before-enter {
        opacity: 0;
        transition: all 2s ease-out;
      }

      .enter {
        opacity: 1;
      }

      .monitoring-details {

        p {
          display: block;
          max-width: 55em;
          margin: 0 auto;
          padding-bottom: 10em;
        }
        h4 {
          font-family: chantal, sans-serif;
          font-size: 1rem;
        }
      }

      /* no scroll bar for Chrome, Safari and Opera */
      .monitoring-details::-webkit-scrollbar {
        display: none;
      }
    }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 599px) {}

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {}

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {}

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {}

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {}
</style>
