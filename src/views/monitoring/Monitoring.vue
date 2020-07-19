<template>
  <section id="monitoring">
    <h2>Place holder for Monitoring</h2>
    <p>The investments in water monitoring are diverse and numerous. Each new piece of technology helps paint a clearer picture of local water dynamics in the river, including assessing current water availability and water quality in hundreds of locations throughout the DRB.  </p>
    <div id="monitoring-big-numbers-container">
      <div id="monitoring-big-numbers-main-image-container">
        <img
          id="big-number-image-base-master"
          class="big-number-map-locations"
          src="@/assets/monitoring/images/togggleableSVGsAndBase/basemap-01_1080.jpg"
          alt="watercolor illustration of delaware river basin with monitoring locations marked"
        >
        <SVGNewGages
          id="big-number-image-base-1"
          alt=""
          hidden
        />
        <SVGEnhanced
          id="big-number-image-base-2"
          alt=""
          hidden
        />
        <SVGConductance
          id="big-number-image-base-3"
          alt=""
          hidden
        />
        <SVGTemperature
          id="big-number-image-base-4"
          alt=""
          hidden
        />
        <SVGCameras
          id="big-number-image-base-5"
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
        >
          <h4>New Gages</h4>
          <p>Measurements of real-time flows are critical to the decision makers of the DRB. To support the continued need to better understand streamflow in various locations of the basin, 34 new NGWOS streamgages have been installed the last three years. </p>
        </div>
        <div
          id="details-2"
          v-custom-scroll
          v-observe-visibility="visibilityChanged"
        >
          <h4>Upgrades</h4>
          <p>Equipment and communication in 28 stations has been upgraded to support the type of advanced monitoring made possible by direct two-way communication. Not only are near real-time measurements delivered from the field to the web with minimal delay, technicians can also alter the cadence of monitoring from a remote location, providing the potential to optimize data collection for current needs even during extreme events. </p>
        </div>
        <div
          id="details-3"
          v-custom-scroll
          v-observe-visibility="visibilityChanged"
        >
          <h4>Specific Conductance</h4>
          <p>Keeping tabs on the evolving salinity issues in the headwaters and the mainstem of the Delaware River is important to understand changes to the location of the salt front and to better understand ecosystem health in streams that are impacted by road salting. Specific conductivity sensors measure a variable related to salinity – the ability of the water to conduct electricity – and relationships between conductivity and salinity can be used to fill in the picture of salt concentrations in 56 new locations in the DRB. </p>
        </div>
        <div
          id="details-4"
          v-custom-scroll
          v-observe-visibility="visibilityChanged"
        >
          <h4>Temperature</h4>
          <p>Water temperature is a key factor in the health of many aquatic organisms, and better, broader, and faster delivery of water temperature data can help plan reservoir releases and decide when to fish. New temperature sensors were added to 98 locations in the DRB. </p>
        </div>
        <div
          id="details-5"
          v-custom-scroll
          v-observe-visibility="visibilityChanged"
        >
          <h4>Cameras</h4>
          <p>Installations of 8 cameras that are connected to a near real-time image delivery system were installed in various strategic locations in the DRB. These new cameras open up new realms of science and data processing, and support USGS sharing more views of the dynamic lives of rivers and streams.</p>
        </div>
      </div>
      <div class="scroll-indicator">
        <p>scroll</p>
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
        methods: {
            visibilityChanged (isVisible, entry) {
                this.isVisible = isVisible;
                const numberIconTargetId = 'list-' + entry.target.id[entry.target.id.length -1];
                const mapTargetId = 'big-number-image-base-' + entry.target.id[entry.target.id.length -1];
                const numberIconTargetElement = document.getElementById(numberIconTargetId);
                const mapTargetElement = document.getElementById(mapTargetId);

                if (isVisible === true) {
                    numberIconTargetElement.classList.add('glow');
                    mapTargetElement.removeAttribute('hidden');

                } else if (isVisible === false) {
                    numberIconTargetElement.classList.remove('glow');
                    mapTargetElement.setAttribute('hidden', 'true');
                }
            }
        }
    }
</script>

<style scoped lang="scss">
  /* Extra small devices (phones, 600px and down) */


  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
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
#big-number-image-base-master {
  z-index: -1;
}
    #monitoring {
        #monitoring-big-numbers-container {

        display: flex;
        #big-number-icons-container {
          flex: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
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
              font-size: 1.9rem;
              font-weight: bold;
            }
            .big-number-text {
              color: black;
              position: absolute;
              text-align: left;
              top: 35%;
              left: 60%;
              transform: translate(0%, -60%);
              font-size: 0.9rem;
              font-weight: bold;
            }
          }
        }
      }
    }

    #monitoring-details {
      background-color: #eeeeee;
      .before-enter {
        opacity: 0;
        transform: translateY(100px);
        transition: all 2s ease-out;
      }

      .enter {
        opacity: 1;
        transform: translateY(0px);
      }

      .monitoring-details {
        padding: 0.5rem;
        width: 100%;
        height: 10rem;
        overflow-y: scroll;
        text-align: justify;
        -ms-overflow-style: none; /* no scroll bar for IE and Edge */
        scrollbar-width: none; /* no scroll bar for Firefox */
      }

      /* no scroll bar for Chrome, Safari and Opera */
      .monitoring-details::-webkit-scrollbar {
        display: none;
      }
    }
    .scroll-indicator {
      p {
        text-align: center;
        margin: 0;
      }
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {}

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {}

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {}
</style>
