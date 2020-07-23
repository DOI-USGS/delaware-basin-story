<template>
  <div id="sankey-transition">
    <div id="sankey-image-container">
      <div
        id="image-div-1"
        class="sankey-image"
      >
        <img
          id="sankey-image-1"
          src="@/assets/usesNeedsConflicts/images/sankey_1.png"
          alt=""
        >
      </div>
      <div
        id="image-div-2"
        class="sankey-image"
      >
        <img
          id="sankey-image-2"
          src="@/assets/usesNeedsConflicts/images/sankey_2.png"
          alt=""
        >
      </div>
      <div
        id="image-div-3"
        class="sankey-image"
      >
        <img
          id="sankey-image-3"
          src="@/assets/usesNeedsConflicts/images/sankey_3.png"
          alt=""
        >
      </div>
    </div>
    <div id="sankey-text-container">
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
  </div>
</template>

<script>
    export default {
        name: 'SankeyTransition2',
        methods: {
            visibilityChanged (isVisible, entry) {
                const imageElement= document.getElementById('image-div-' + entry.target.id[entry.target.id.length -1]);
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
                }
            }
        }
    }
</script>

<style scoped lang="scss">
  #sankey-transition {
    display: flex;
    max-width: 65em;
    max-height: 733px;
    margin: 0 auto;
    color: white;
    width: 100%;
    #sankey-image-container {
      justify-content: center;
      width: 100%;
      margin: 0 auto;
      flex: 1;
      position: relative;
      .sankey-image {
        height: 733px;
        min-height: 733px;
        width: 538px;
        min-width: 538px;
        position: absolute;
        opacity: 0;
        -webkit-transition: opacity 1s ease-in-out;
        -moz-transition: opacity 1s ease-in-out;
        -o-transition: opacity 1s ease-in-out;
        transition: opacity 1s ease-in-out;
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
      padding: 1em;
      overflow-y: scroll;
      text-align: justify;
      -ms-overflow-style: none; /* no scroll bar for IE and Edge */
      scrollbar-width: none; /* no scroll bar for Firefox */
      background: rgb(2,0,36);
      background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
      .sankey-text-and-title {
        padding: 10em 2em 15em 2em;
      }
    }
    /* no scroll bar for Chrome, Safari and Opera */
    #sankey-text-container::-webkit-scrollbar {
      display: none;
    }
  }
</style>
