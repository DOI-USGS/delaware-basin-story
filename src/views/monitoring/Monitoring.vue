<template>
  <section id="monitoring">
    <!-- Begin Image Side -->
    <div class="sticky">
      <div
        id="monitoring-big-numbers-main-image-container"
        class="vis-content-side"
      >
        <img
          id="big-number-image-base"
          class="big-number-map-locations"
          src="@/assets/monitoring/images/togggleableSVGsAndBase/basemap-01.png"
          alt="watercolor illustration of delaware river basin with monitoring locations marked"
          hidden
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
      <div class="icon-group-padding">
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

          <h2
            id="icon-text-1"
            v-observe-visibility="{
              callback: visibilityChanged,
              intersection: {
                rootMargin: '-20% 0% -50% 0%',
                threshold: 0
              }
            }"
            class="big-number-text"
          >
            new gages
          </h2>
        </div>
        <div
          id="details-1"
          class="single-detail panel"
        >
          <transition name="fade">
            <p id="p-1">
              Measurements of real-time flows are critical to the decision makers of the DRB. To support the continued need to better understand streamflow in various locations of the basin, 34 new NGWOS streamgages have been installed the last three years.
            </p>
          </transition>
        </div>
      </div>
      <div class="icon-group-padding">
        <div
          id="list-2"
          class="big-number-icon-container accordion"
        >
          <div class="big-num">
            <img
              src="@/assets/monitoring/images/greenCircle1.png"
              alt=""
            >
            <h2
              id="icon-text-2"
              v-observe-visibility="{
                callback: visibilityChanged,
                intersection: {
                  rootMargin: '-20% 0% -50% 0%',
                  threshold: 0
                }
              }"
              class="big-number-number"
            >
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
          <transition name="fade">
            <p id="p-2">
              Equipment and communication in 28 stations has been upgraded to support the type of advanced monitoring made possible by direct two-way communication. Not only are near real-time measurements delivered from the field to the web with minimal delay, technicians can also alter the cadence of monitoring from a remote location, providing the potential to optimize data collection for current needs even during extreme events.
            </p>
          </transition>
        </div>
      </div>
      <div class="icon-group-padding">
        <div
          id="list-3"
          class="big-number-icon-container accordion"
        >
          <div class="big-num">
            <img
              src="@/assets/monitoring/images/blueCircle2.png"
              alt=""
            >
            <h2
              id="icon-text-3"
              v-observe-visibility="{
                callback: visibilityChanged,
                intersection: {
                  rootMargin: '-20% 0% -50% 0%',
                  threshold: 0
                }
              }"
              class="big-number-number"
            >
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
          <transition name="fade">
            <p id="p-3">
              Keeping tabs on the evolving salinity issues in the headwaters and the mainstem of the Delaware River is important to understand changes to the location of the salt front and to better understand ecosystem health in streams that are impacted by road salting. Specific conductivity sensors measure a variable related to salinity – the ability of the water to conduct electricity – and relationships between conductivity and salinity can be used to fill in the picture of salt concentrations in 56 new locations in the DRB.
            </p>
          </transition>
        </div>
      </div>
      <div class="icon-group-padding">
        <div
          id="list-4"
          class="big-number-icon-container accordion"
        >
          <div class="big-num">
            <img
              src="@/assets/monitoring/images/greenCircle2.png"
              alt=""
            >
            <h2
              id="icon-text-4"
              v-observe-visibility="{
                callback: visibilityChanged,
                intersection: {
                  rootMargin: '-20% 0% -50% 0%',
                  threshold: 0
                }
              }"
              class="big-number-number"
            >
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
          <transition name="fade">
            <p id="p-4">
              Water temperature is a key factor in the health of many aquatic organisms, and better, broader, and faster delivery of water temperature data can help plan reservoir releases and decide when to fish. New temperature sensors were added to 98 locations in the DRB.
            </p>
          </transition>
        </div>
      </div>
      <div class="icon-group-padding">
        <div
          id="list-5"
          class="big-number-icon-container accordion"
        >
          <div class="big-num">
            <img
              src="@/assets/monitoring/images/orangeCircle1.png"
              alt=""
            >
            <h2
              id="icon-text-5"
              v-observe-visibility="{
                callback: visibilityChanged,
                intersection: {
                  rootMargin: '-20% 0% -50% 0%',
                  threshold: 0
                }
              }"
              class="big-number-number"
            >
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
          <transition name="fade">
            <p id="p-5">
              Installations of 8 cameras that are connected to a near real-time image delivery system were installed in various strategic locations in the DRB. These new cameras open up new realms of science and data processing, and support USGS sharing more views of the dynamic lives of rivers and streams.
            </p>
          </transition>
          <div id="monitoring-scroll-out-target" />
        </div>
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
        data() {
            return {
                isDetailShowing1: false,
                isDetailShowing2: false,
                isDetailShowing3: false,
                isDetailShowing4: false,
                isDetailShowing5: false
            }
        },
        methods: {
            visibilityChanged(isVisible, entry) {
                this.isVisible = isVisible;
                const paragraphTargetId = 'p-' + entry.target.id[entry.target.id.length -1];
                const targetElement = document.querySelector('#' + paragraphTargetId);

                if (isVisible === true) {
                    this.isSectionInView = true;
                    targetElement.classList.add('visible');

                } else if (isVisible !== true) {
                    this.isSectionInView = false;
                    targetElement.classList.remove('visible');
                }
            },
            numberIconVisibilityChanged(isVisible, entry) {
              // this is not used at the moment, but might use later so keeping
                this.isVisible = isVisible;
                const ordinalNumber = entry.target.id[entry.target.id.length -1];
                const mapTargetId = 'big-number-svg-' + entry.target.id[entry.target.id.length -1];
                const mapTargetElement = document.getElementById(mapTargetId);

                if (isVisible === true) {
                    switch (ordinalNumber) {
                        case '1': this.isDetailShowing1 = true;
                            break;
                        case '2': this.isDetailShowing2 = true;
                            break;
                        case '3': this.isDetailShowing3 = true;
                            break;
                        case '4': this.isDetailShowing4 = true;
                            break;
                        case '5': this.isDetailShowing5 = true;
                            break;
                    }

                    mapTargetElement.removeAttribute('hidden');
                } else if (isVisible !== true) {
                    switch (ordinalNumber) {
                        case '1': this.isDetailShowing1 = false;
                            break;
                        case '2': this.isDetailShowing2 = false;
                            break;
                        case '3': this.isDetailShowing3 = false;
                            break;
                        case '4': this.isDetailShowing4 = false;
                            break;
                        case '5': this.isDetailShowing5 = false;
                            break;
                    }

                    mapTargetElement.hidden = true;
                }
            }
        }
    }
</script>

<style scoped lang="scss">
/* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    body {
      h2: white;
    }
    section {
      margin-bottom: 20em;
      display: flex;
      flex-direction: row;
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







#monitoring-big-numbers-main-image-container  {
  position: relative;
  width: 100%;
  height: auto;
  #big-number-image-base  {
    display: block;
    z-index: 1;
  }
  svg {
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
      padding-bottom: 40vh;
        #big-number-icons-container {
          img {
            position: absolute;
          }

          .big-number-icon-container {
            position: relative;
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

              }
              .big-number-number {
              font-family: chantal, sans-serif;
              font-weight: bold;
                font-size: 2.5rem;
              color: white;
              z-index: 2;
              transform: translate(15%, 10%);
              }
            }

            .big-number-text {
              color: black;
              font-family: chantal, sans-serif;
              font-weight: bold;
              z-index: -1;
              transform: translate(19%, 15%);
            }
          }
        }
    }


        p {
          display: block;
          max-width: 55em;
          margin: 0 auto;
          padding-bottom: 3em;
          opacity: 0;
          transition: opacity 2s;
        }
        p.visible {
          opacity: 1;
        }
        h4 {
          font-family: chantal, sans-serif;
          font-size: 1rem;
        }

.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.sticky {
  position: -webkit-sticky; /* for Safari */
  position: sticky;
  top: 0;
  align-self: flex-start; /* <-- this is the fix */
}

  .big-number-icon-container {
    padding-bottom: 2.5em;
  }
</style>
