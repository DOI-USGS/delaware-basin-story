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
          <p class="big-number-text">23</p>
        </div>
        <div class="big-number-icon-container">
          <img
            src="@/assets/monitoring/images/greenCircle1.png"
            alt=""
          >
          <p class="big-number-text">38</p>
        </div>
        <div class="big-number-icon-container">
          <img
            src="@/assets/monitoring/images/blueCircle2.png"
            alt=""
          >
          <p class="big-number-text">77</p>
        </div>
        <div class="big-number-icon-container">
          <img
            src="@/assets/monitoring/images/greenCircle2.png"
            alt=""
          >
          <p class="big-number-text">49</p>
        </div>
        <div class="big-number-icon-container">
          <img
            src="@/assets/monitoring/images/orangeCircle1.png"
            alt=""
          >
          <p class="big-number-text">68</p>
        </div>
        <div class="big-number-icon-container">
          <img
            src="@/assets/monitoring/images/orangeCircle2.png"
            alt=""
          >
          <p class="big-number-text">17</p>
        </div>
      </div>
    </div>
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
            .big-number-text {
              position: absolute;
              top: 35%;
              left: 50%;
              transform: translate(-50%, -100%);
              font-size: 1.9rem;
              font-weight: bold;
            }
          }
        }
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
            .big-number-text {
              position: absolute;
              top: 35%;
              left: 50%;
              transform: translate(-50%, -100%);
              font-size: 1.9rem;
              font-weight: bold;
            }
          }
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
</style>
