<template>
  <div
    id="sankey-transition"
    class="side-by-side"
  >
    <div
      id="sankey-image-container"
      class="vis-content-side"
    >
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
    <div
      id="sankey-text-container"
      class="text-content-side"
    >
      <div
        id="sankey-text-and-title-1"
        v-observe-visibility="{
          callback: visibilityChanged,
          intersection: {
            root: null,
            rootMargin: '-49% 0% -49% 0%',
            threshold: 0,
          },
        }"
        class="sankey-text-and-title"
      >
        <h3
          id="sankey-title-1"
        >
          Withdrawals, discharges, and reservoir management affect where water is available in the Basin.
        </h3>
        <p>Today’s flow management in the Basin is handled through formal cooperation among federal, state, and local entities. At the highest level, the USGS Delaware River Master and the Delaware River Basin Commission review development proposals, regulate water withdrawals and diversions, and evaluate the effects of human activities throughout the Basin. In addition, these two regulatory groups sometimes releases water from major reservoirs throughout the Basin at key times of year.</p>
      </div>
      <div
        id="sankey-text-and-title-2"
        v-observe-visibility="{
          callback: visibilityChanged,
          intersection: {
            root: null,
            rootMargin: '-49% 0% -49% 0%',
            threshold: 0,
          },
        }"
        class="sankey-text-and-title"
      >
        <h3 id="sankey-title-2">
          The water cycle has a big say in how much water is available, too.
        </h3>
        <p>Most years, during the late summer and especially during droughts, the streams and rivers of the Basin have lower, slower flows. But human water demands don’t let up! The flow targets at Montague and Trenton are designed to protect against water hoarding upstream that would deprive downstream users – human and otherwise – of fair access to water.</p>
      </div>
      <div
        id="sankey-text-and-title-3"
        v-observe-visibility="{
          callback: visibilityChanged,
          intersection: {
            root: null,
            rootMargin: '-40% 0% -40% 0%',
            threshold: 0,
          },
        }"
        class="sankey-text-and-title"
      >
        <h3
          id="sankey-title-3"
        >
          Reservoirs are effective short-term buffers against late summer extreme low flows.  But only given the right information.
        </h3>
        <p>Through judicious water storage in the winter and timed releases in the summer, reservoir managers can provide a buffer against excessively low flows by carefully releasing some of the stored water at just the right rate. Reservoirs in the Basin are also used for flood control, hydroelectric power, water supply, and recreation.</p>
        
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
      name: 'SankeyTransition',
      data() {
          return {
              isUserAtEndOfScrollText: false
          }
      },
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
                  this.isUserAtEndOfScrollText = true;
              }
          }
      }
  }
</script>

<style scoped lang="scss">
  #sankey-transition {
    display: flex;
    margin: 0 auto;
    color: black;
    width: 100%;
    padding-top: 25rem;
    padding-bottom: 25rem;
    #sankey-image-container {
      justify-content: center;
      flex: 1;
      position: fixed;
      top: 20%;
      left: 20%;
      transform: translate(-20%, -20%);
      .sankey-image {
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
      position:relative;
      flex: 1;
      margin-left: 50vw;
      .sankey-text-and-title {
        padding: 10em 0 15em 0;
      }
      #sankey-text-and-title-1 {
        padding-top: 0;
      }
      #sankey-text-and-title-3 {
        padding-bottom: 0;
      }
    }
  }

</style>
