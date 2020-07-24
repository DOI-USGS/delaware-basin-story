<template>
  <div id="sankey-transition">
    <div id="sankey-image-container" class="sticky">
      <div
        id="image-div-1"
        class="sankey-image"
      >
        <img
          id="sankey-image-1"
          src="@/assets/components/sankeyTransition/images/sankeyNormal1080.png"
          alt=""
        >
      </div>
      <div
        id="image-div-2"
        class="sankey-image"
      >
        <img
          id="sankey-image-2"
          src="@/assets/components/sankeyTransition/images/sankeyDrought1080.png"
          alt=""
        >
      </div>
      <div
        id="image-div-3"
        class="sankey-image"
      >
        <img
          id="sankey-image-3"
          src="@/assets/components/sankeyTransition/images/sankeyFlowAdded1080.png"
          alt=""
        >
      </div>
    </div>
    <div id="sankey-text-container" class="side-text">
      <div class="sankey-text-and-title">
        <h3
          id="sankey-title-1"
          v-observe-visibility="visibilityChanged"
        >
          Withdrawals, discharges, and reservoir management affect where water is available in the Basin.
        </h3>
        <p>Today’s management of flows in the Basin is handled through formal cooperation among federal, state, and local entities. At the highest level, the <a href="https://webapps.usgs.gov/odrm/about/about-odrm">USGS Delaware River Master</a> and the <a href="https://www.state.nj.us/drbc/programs/">Delaware River Basin Commission</a> review development proposals, regulate water withdrawals and diversions, and evaluate the effects of human activities throughout the Basin. In addition, these two regulatory groups sometimes intervene to direct water releases from major reservoirs throughout the Basin at key times of year. </p>
      </div>
      <div class="sankey-text-and-title">
        <h3
          id="sankey-title-2"
          v-observe-visibility="visibilityChanged"
        >
          The water cycle has a big say in how much water is available, too.
        </h3>
        <p>In the late summer of most years, and especially during droughts, the streams and rivers of the Basin have lower, slower flows. But human water demands don’t let up! The flow targets at Montague and Trenton are designed to protect against water hoarding upstream that would deprive downstream users – human and otherwise – of fair access to water. </p>
      </div>
      <div class="sankey-text-and-title">
        <h3
          id="sankey-title-3"
          v-observe-visibility="visibilityChanged"
        >
          Reservoirs are effective short-term buffers against extreme flows – but only given the right information.
          <p>Through judicious water storage in the winter and timed releases in the summer, reservoir managers can provide a buffer against excessively low flows. Reservoirs in the Basin are also used for flood control, hydroelectric power, water supply, and recreation.  </p>
          <p>There’s a balance to strike with reservoir management – in spring, a too-full reservoir may be primed for summer drought protection or recreation but then can’t protect against a spring flood. Reservoir managers, along with the Delaware River Master and Delaware River Basin Commission, rely on extensive scientific monitoring and modeling to predict the optimal rates of storage and release throughout the year. </p>
        </h3>
        <div
          id="sankey-transition-load-next-section-target"
          v-observe-visibility="changeStateForIsUserAtEndOfSankeySection"
        />
      </div>
    </div>
    <!-- <ScrollIndicator
      v-if="isUserAtEndOfScrollText === false || isUserAtEndOfScrollText === true"
      id="sankey-transition-scroll-indicator"
    /> -->
  </div>
</template>

<script>
  import ScrollIndicator from "./ScrollIndicator";

  export default {
      name: 'SankeyTransition',
      components: {
          // ScrollIndicator
      },
      data() {
          return {
              isUserAtEndOfScrollText: false
          }
      },

      // // attempt at scroll triggering for sticky sankey images
      
      // mounted() {
      //   // When the user scrolls the page, execute myFunction
      //   window.onscroll = function() {myFunction()};

      //   // Get the navbar
      //   var sankey = document.getElementById("sankey-image-container");

      //   // Get the offset position of the sankey container
      //   var sticky = sankey.offsetTop;

      //   // Add the sticky class to the sankey when you reach its scroll position. Remove "sticky" when you leave the scroll position
      //   function myFunction() {
      //     if (window.pageYOffset >= sticky) {
      //       sankey.classList.add("sticky");
      //       console.log("sticky is on!");
      //       console.log("sticky value is ", sticky);
      //       console.log("window.pageYOffset value is ", window.pageYOffset);
      //     } else {
      //       sankey.classList.remove("sticky");
      //       console.log("sticky is off");
      //     }
      //   }
      // },

      methods: {
          visibilityChanged (isVisible, entry) {
              const imageElement = document.getElementById('image-div-' + entry.target.id[entry.target.id.length -1]);
              if (isVisible === true) {
                  imageElement.classList.add('sankey-visible');
              } else if (isVisible === false) {
                  imageElement.classList.remove('sankey-visible');
              }
          },
          changeStateForIsUserAtEndOfSankeySection(isVisible, entry) {
              this.isVisible = isVisible;
              if (this.isVisible === true) {
                  this.$store.commit('changeBooleanStateForIsUserAtEndOfSankeySection', true);
                  this.isUserAtEndOfScrollText = true;
              }
          }
      }
  }
</script>

<style scoped lang="scss">
  #sankey-transition {
    display: flex;
    color: black;

    #sankey-image-container {
      flex: 1;
      flex-shrink: 0;
      text-align:center;
      .sankey-image {
        min-width: 50vw;
        padding: 10px;
        position: absolute;
        opacity: 0;
        -webkit-transition: opacity .5s ease-in-out;
        -moz-transition: opacity .5s ease-in-out;
        -o-transition: opacity .5s ease-in-out;
        transition: opacity .5s ease-in-out;
      }
      .sankey-visible {
        opacity: 1;
      }
      #sankey-image-1 {
        z-index: 3;
      }
      #sankey-image-2 {
        z-index: 2;
      }
      #sankey-image-3 {
        z-index: 1;
      }
    }



    #sankey-text-container {
      flex: 1;
      .sankey-text-and-title {
        padding: 10em 2em 15em 2em;
      }
    }
  
  }

  img {
    max-height: 90vh;
  }

  .sticky {
    position: fixed;
    top: 1vh;
    transition: 50ms;

  }
</style>
