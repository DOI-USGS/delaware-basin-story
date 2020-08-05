<template>
  <div id="sankey-transition">
    <div id="sankey-image-container-outer">
      <div id="sankey-image-container-inner">
      <img
        id="sankey-image-3"
        src="@/assets/components/sankeyTransition/images/sankeyFlowAdded1080.png"
        alt=""
      >
      <img
        id="sankey-image-2"
        src="@/assets/components/sankeyTransition/images/sankeyDrought1080.png"
        alt=""
      >
      <img
        id="sankey-image-1"
        src="@/assets/components/sankeyTransition/images/sankeyNormal1080.png"
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
                  rootMargin: '-20% 0% -50% 0%',
                  threshold: 0
                }
              }"
          class="sankey-text-and-title"
      >
        <h3 id="sankey-title-1">
          Withdrawals, discharges, and reservoir management affect where water is available in the Basin.
        </h3>
        <p>Today’s flow management in the Basin is handled through formal cooperation among federal, state, and local entities. At the highest level, the USGS Delaware River Master and the Delaware River Basin Commission review development proposals, regulate water withdrawals and diversions, and evaluate the effects of human activities throughout the Basin. In addition, these two regulatory groups sometimes releases water from major reservoirs throughout the Basin at key times of year.</p>
      </div>
      <div
          id="sankey-text-and-title-2"
          v-observe-visibility="{
                callback: visibilityChanged,
                intersection: {
                  rootMargin: '-20% 0% -50% 0%',
                  threshold: 0
                }
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
                  rootMargin: '-20% 0% -50% 0%',
                  threshold: 0
                }
              }"
          class="sankey-text-and-title"
      >
        <h3
            id="sankey-title-3"
        >
          Reservoirs are effective short-term buffers against extreme flows – but only given the right information.
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
  methods: {
    visibilityChanged(isVisible, entry) {
      const imageElement = document.getElementById('sankey-image-' + entry.target.id[entry.target.id.length - 1]);
      if (isVisible === true) {
        imageElement.classList.add('visible');
      } else if (isVisible === false) {
        imageElement.classList.remove('visible');
      }
    }
  }
}
</script>

<style scoped lang="scss">
#sankey-transition {
  display: grid;
  grid-template-columns: 1fr 1fr;
  #sankey-image-container-inner {
    position: sticky;
    top: 0;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    #sankey-image-1 {
      grid-column: 1;
      grid-row: 1;
      align-self: start;
    }
    #sankey-image-2 {
      grid-column: 1;
      grid-row: 1;
      align-self: start;
    }
    #sankey-image-3 {
      grid-column: 1;
      grid-row: 1;
      align-self: start;
    }
    img {
      opacity: 0;
      -webkit-transition: opacity 1s ease-in-out;
      -moz-transition: opacity 1s ease-in-out;
      -o-transition: opacity 1s ease-in-out;
      transition: opacity 1s ease-in-out;
    }
    img.visible {
      opacity: 1;
    }
  }
  #sankey-text-container {
    .sankey-text-and-title {
      padding-top: 20em;
    }
  }
  #sankey-text-and-title-3 {
    padding-bottom: 20em;
  }
}

</style>