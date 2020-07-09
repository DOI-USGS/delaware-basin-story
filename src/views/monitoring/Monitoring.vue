<template>
  <section id="monitoring">
    <h2>Place holder for Monitoring</h2>
    <div id="monitoring-big-numbers-container">
      <img
        id="big-number-image"
        src="@/assets/monitoring/images/sampleMapWithDots.jpg"
        alt="watercolor illustration of delaware river basin with monitoring locations marked"
      >
      <div id="big-number-icons-container">
        <div class="big-number-icon-container">
          <img
            src="@/assets/monitoring/images/blueCircle1.png"
            alt=""
          >
          <p class="big-number-number">
            23
          </p>
          <p class="big-number-text">
            new locations
          </p>
        </div>
        <div class="big-number-icon-container">
          <img
            src="@/assets/monitoring/images/greenCircle1.png"
            alt=""
          >
          <p class="big-number-number">
            38
          </p>
          <p class="big-number-text">
            upgrades
          </p>
        </div>
        <div class="big-number-icon-container">
          <img
            src="@/assets/monitoring/images/blueCircle2.png"
            alt=""
          >
          <p class="big-number-number">
            77
          </p>
          <p class="big-number-text">
            new specific conductance
          </p>
        </div>
        <div class="big-number-icon-container">
          <img
            src="@/assets/monitoring/images/greenCircle2.png"
            alt=""
          >
          <p class="big-number-number">
            49
          </p>
          <p class="big-number-text">
            new temperature sensors
          </p>
        </div>
        <div class="big-number-icon-container">
          <img
            src="@/assets/monitoring/images/orangeCircle1.png"
            alt=""
          >
          <p class="big-number-number">
            68
          </p>
          <p class="big-number-text">
            new cameras
          </p>
        </div>

        <div class="big-number-icon-container">
          <img
            src="@/assets/monitoring/images/orangeCircle2.png"
            alt=""
          >
          <p class="big-number-number">
            17
          </p>
          <p class="big-number-text">
            another sensor
          </p>
        </div>
      </div>
    </div>
    <div id="monitoring-details">
      <div class="monitoring-details">
        <div id="new-locations" v-custom-scroll>
          <h4>New Locations</h4>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
        </div>
        <div id="upgrades" v-custom-scroll>
          <h4>Upgrades</h4>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
        </div>
        <div id="conductance" v-custom-scroll>
          <h4>New Specific Conductance</h4>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
        </div>
        <div id="temperature" v-custom-scroll>
          <h4>New Temperature Sensors</h4>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
        </div>
        <div id="cameras" v-custom-scroll>
          <h4>New Cameras</h4>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
        </div>
        <div id="sensor" v-custom-scroll>
          <h4>Another sensor</h4>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
        </div>
      </div>
      <div class="scroll-indicator">
        <p>scroll</p>
      </div>
    </div>

    <p />
    <p>USGS monitoring at a more zoomed out level</p>
    <p>Why it all matters</p>
    <p>Chapters give details on cool uses and tools, this should highlight the collective effort and collaboration that makes all of that possible, back to the big picture from intro/roadmap</p>
    <p>The USGS has made all these monitoring investments over the last ## years so that we can provide the best, most detailed data possible to the people who need to make water management decisions. It’s allowed us to _____.</p>
    <p>[ Viz about the scale of monitoring...without being dots on a map?</p>
    <p>are just the beginning of the next generation of water monitoring. Our monitoring stations also do _____, and the federal government has authorized ____ as a next step for pushing this forward</p>
    <hr>
  </section>
</template>

<script>
    export default {
        name: 'Monitoring',
        data() {
            return {

            }
        }
    }
</script>

<style scoped lang="scss">

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    #monitoring {
      #monitoring-big-numbers-container {
        display: flex;
        #big-number-image {
          height: 467px;
          width: 250px;
          flex: 1;
        }
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
              display: none;
            }
          }
        }
      }
    }
    #monitoring-details {
      background-color: antiquewhite;
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
        overflow-x: hidden;
        overflow-y: auto;
        text-align:justify;
      }
    }
    .scroll-indicator {
      p {
        text-align: center;
        margin: 0;
      }
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    #monitoring {
      #monitoring-big-numbers-container {
        display: flex;
        #big-number-image {
          height: 467px;
          width: 250px;
          flex: 1;
        }
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
      background-color: antiquewhite;
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
        overflow-x: hidden;
        overflow-y: auto;
        text-align:justify;
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
