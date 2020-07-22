<template>
  <section id="monitoring">
    <div id="monitoring-big-numbers-container">
      <div id="monitoring-big-numbers-main-image-container">
        <img
          id="big-number-image-base"
          class="big-number-map-locations"
          src="@/assets/monitoring/images/togggleableSVGsAndBase/basemap-01_1080.jpg"
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
      <div id="big-number-icons-container">
        <div
          id="list-1"
          class="big-number-icon-container"
        >
          <img
            src="@/assets/monitoring/images/blueCircle1.png"
            alt=""
          >
          <p class="big-number-number">
            34
          </p>
          <p class="big-number-text">
            new gages
          </p>
        </div>
        <div
          id="list-2"
          class="big-number-icon-container"
        >
          <img
            src="@/assets/monitoring/images/greenCircle1.png"
            alt=""
          >
          <p class="big-number-number">
            28
          </p>
          <p class="big-number-text">
            upgrades
          </p>
        </div>
        <div
          id="list-3"
          class="big-number-icon-container"
        >
          <img
            src="@/assets/monitoring/images/blueCircle2.png"
            alt=""
          >
          <p class="big-number-number">
            56
          </p>
          <p class="big-number-text">
            specific conductance
          </p>
        </div>
        <div
          id="list-4"
          class="big-number-icon-container"
        >
          <img
            src="@/assets/monitoring/images/greenCircle2.png"
            alt=""
          >
          <p class="big-number-number">
            98
          </p>
          <p class="big-number-text">
            temperature
          </p>
        </div>
        <div
          id="list-5"
          class="big-number-icon-container"
        >
          <img
            src="@/assets/monitoring/images/orangeCircle1.png"
            alt=""
          >
          <p class="big-number-number">
            8
          </p>
          <p class="big-number-text">
            cameras
          </p>
        </div>
      </div>
    </div>
    <div id="monitoring-details">
      <div class="monitoring-details">
        <div
          id="details-1"
          v-custom-scroll
          v-observe-visibility="visibilityChanged"
          class="single-detail"
        >
          <h4>New Gages</h4>
          <p>Measurements of real-time flows are critical to the decision makers of the DRB. To support the continued need to better understand streamflow in various locations of the basin, 34 new NGWOS streamgages have been installed the last three years. </p>
        </div>
        <div
          id="details-2"
          v-custom-scroll
          v-observe-visibility="visibilityChanged"
          class="single-detail"
        >
          <h4>Upgrades</h4>
          <p>Equipment and communication in 28 stations has been upgraded to support the type of advanced monitoring made possible by direct two-way communication. Not only are near real-time measurements delivered from the field to the web with minimal delay, technicians can also alter the cadence of monitoring from a remote location, providing the potential to optimize data collection for current needs even during extreme events. </p>
        </div>
        <div
          id="details-3"
          v-custom-scroll
          v-observe-visibility="visibilityChanged"
          class="single-detail"
        >
          <h4>Specific Conductance</h4>
          <p>Keeping tabs on the evolving salinity issues in the headwaters and the mainstem of the Delaware River is important to understand changes to the location of the salt front and to better understand ecosystem health in streams that are impacted by road salting. Specific conductivity sensors measure a variable related to salinity – the ability of the water to conduct electricity – and relationships between conductivity and salinity can be used to fill in the picture of salt concentrations in 56 new locations in the DRB. </p>
        </div>
        <div
          id="details-4"
          v-custom-scroll
          v-observe-visibility="visibilityChanged"
          class="single-detail"
        >
          <h4>Temperature</h4>
          <p>Water temperature is a key factor in the health of many aquatic organisms, and better, broader, and faster delivery of water temperature data can help plan reservoir releases and decide when to fish. New temperature sensors were added to 98 locations in the DRB.</p>
        </div>
        <div
          id="details-5"
          v-custom-scroll
          v-observe-visibility="visibilityChanged"
          class="single-detail"
        >
          <h4>Cameras</h4>
          <p>Installations of 8 cameras that are connected to a near real-time image delivery system were installed in various strategic locations in the DRB. These new cameras open up new realms of science and data processing, and support USGS sharing more views of the dynamic lives of rivers and streams.</p>
          <div id="monitoring-scroll-out-target" />
        </div>
        <div
          id="monitoring-load-next-section-target"
          v-observe-visibility="changeStateForIsUserAtEndOfMonitoringSection"
        />
      </div>
    </div>
    <hr>
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


    .glow {
      font-size: 70px;
      color: #ffffff;
      text-align: center;
      -webkit-animation: glow 1s ease-in-out infinite alternate;
      -moz-animation: glow 1s ease-in-out infinite alternate;
      animation: glow 1s ease-in-out infinite alternate;
    }
    @-webkit-keyframes glow {
      from {
        text-shadow: 0 0 10px #eeeeee, 0 0 20px #d46e21, 0 0 30px #d46e21, 0 0 40px #d46e21,
        0 0 50px #e7cd73, 0 0 60px #e7cd73, 0 0 70px #e7cd73;
      }
      to {
        text-shadow: 0 0 20px #eeeeee, 0 0 30px #fffc4d, 0 0 40px #fffc4d, 0 0 50px #fffc4d,
        0 0 60px #fffc4d, 0 0 70px #fffc4d, 0 0 80px #fffc4d;
      }
    }

    #monitoring-big-numbers-main-image-container {
      position: relative;
      flex: 1;
      height: 467px;
      width: 250px;
      .big-number-map-locations {
        position:absolute;
      }
    }
#big-number-image-base {
  position: relative;
  z-index: 1;
}
.big-number-map-locations-svg {
  position: absolute;
  z-index: 2;
}
    #monitoring {

        #monitoring-big-numbers-container {
          height: 623px;
          display: flex;
        #big-number-icons-container {
          flex: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-family: chantal, sans-serif;
          font-weight: bold;
          img {
            height: 80px;
            width: 80px;
          }
          .big-number-icon-container {
            align-items: center;
            justify-content: center;
            position: relative;
            text-align: center;
            color: white;
            .big-number-number {
              position: absolute;
              top: 35%;
              left: 50%;
              transform: translate(-50%, -100%);
              font-family: chantal, sans-serif;
              font-size: 1.9rem;
              font-weight: bold;
            }
            .big-number-text {
              color: black;
              font-family: chantal, sans-serif;
              font-size: 1rem;
              font-weight: bold;
              position: absolute;
              text-align: left;
              top: 35%;
              left: 55%;
              transform: translate(0%, -60%);
            }
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
        padding-bottom: 10em;
        max-width: 45em;
        margin: 0 auto;
        height: 150px;
        font-size: 0.9rem;
        overflow-y: scroll;
        text-align: justify;
        -ms-overflow-style: none; /* no scroll bar for IE and Edge */
        scrollbar-width: none; /* no scroll bar for Firefox */
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
