<template>
  <section
    id="salinity-sea"
  >
    <!-- <div class="side-by-side"> -->
      
    <div
      id="salinity-vis"
      class="vis-content-side"
    >
      <div class="outer">
        <img
          id="map"
          src="@/assets/salinity/salinityRoad/images/truckin-slow.gif"
          width="80%"
        >
      </div>
    </div>
    <div class="text-content-side">
      <div>
        <div class="road-salt-text-section">
          <h3>There are other sources of salt besides the sea.</h3>
          <p>Even as we toil to keep ocean salt out of the lower Delaware River, we actively add salt to waters throughout the Basin. Most prominently, rock salt is applied to roads in winter to make driving and walking safer. But melting snow and ice carry dissolved salt into streams and rivers, contaminating those waters with levels of chloride that can be toxic to aquatic plants and animals and can even threaten drinking water quality.</p>
          <p>Solutions to that excess reduce road salt in streams include using chemical deicing alternatives and moderating road salt applications. But the stakes are high, because safer roads are an undeniable public good. Monitoring and modeling of stream chloride concentrations give us the data we need to make informed decisions about the options and tradeoffs.</p>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </section>
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
  .road-salt-text-section {
    padding-bottom: 5rem;
  }
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

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {

  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {}

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {}

* {
    box-sizing: border-box;
}
.row {
  height: 100%;
}
.column {
    float: left;
}

.left {
    width: 65%;
}

.right {
    width: 35%;
}

/*  add breakpoint */
@media screen and (max-width: 800px) {
    .right, .left {
      width: 100%;
    }
  }

#dash, #s, #a, #l, #t, #f, #r, #o, #n, #t2 {
    stroke: black;
    fill: black;
    stroke-width: 1px;
}

.outer {
    background-color: white;
    position: sticky;
    display: inline-block;
    text-align: center;
    top: 0;
    padding-top: 5vh;
}

.outer img {
    display: block;
    max-width: 100%;
    height: auto;
    margin-left:10%;
}

.outer svg {
    position: absolute;
    display: inline-block;
    height: auto;
    width: 100%;
    top: 0;
    left: 0;
    padding-top: 20vh;
}


</style>
