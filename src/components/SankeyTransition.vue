<template>
  <div id="sankey-transition">
    <div id="sankey-image-container-outer">
      <div id="sankey-image-container-inner">
        <img
          id="sankey-image-4"
          src="@/assets/components/sankeyTransition/images/sankey-res-shapes_FlowAdded.png"
          alt=""
        >
        <img
          id="sankey-image-3"
          src="@/assets/components/sankeyTransition/images/sankey-res-shapes_Drought.png"
          alt=""
        >
        <img
          id="sankey-image-2"
          src="@/assets/components/sankeyTransition/images/sankey-res-shapes_Normal.png"
          alt=""
        >
        <img
          id="sankey-image-1"
          src="@/assets/components/sankeyTransition/images/sankey-res-shapes-1.png"
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
            rootMargin: '-48% 0% -50% 0%',
            threshold: 0
          }
        }"
        class="sankey-text-and-title"
      >
        <h4
          id="sankey-title-1"
          class="text-content-side"
        >
          How the River Flows
        </h4>
        <div
          id="p-container-1"
          class="p-container text-content-side"
        >
          <p>Flow in the Basin today is managed through formal cooperation among federal, state, and local entities. Major water users like New York City, Philadelphia, and the entire state of New Jersey are allowed to draw lots of water out of the river for drinking water.</p>
          <p>The Supreme Court decree sets limits on how much they’re allowed to withdraw so that even at times of greatest need, there’s still plenty of water to flow downriver into the Delaware Bay.</p>
        </div>
      </div>

      <div
        id="sankey-text-and-title-2"
        v-observe-visibility="{
          callback: visibilityChanged,
          intersection: {
            rootMargin: '-48% 0% -50% 0%',
            threshold: 0
          }
        }"
        class="sankey-text-and-title"
      >
        <h4
          id="sankey-title-2"
          class="text-content-side"
        >
          Reservoirs
        </h4>
        <div
          id="p-container-2"
          class="p-container text-content-side"
        >
          <p>All that water comes from tributaries upstream. Along major tributaries, a system of <b>reservoirs</b> act as storage tanks to store enormous amounts of water for times when we need it. They are used for flood control, hydroelectric power, water supply, and recreation.</p>
        </div>
      </div>




      <div
        id="sankey-text-and-title-3"
        v-observe-visibility="{
          callback: visibilityChanged,
          intersection: {
            rootMargin: '-48% 0% -50% 0%',
            threshold: 0
          }
        }"
        class="sankey-text-and-title"
      >
        <h4
          id="sankey-title-3"
          class="text-content-side"
        >
          Using the Reservoirs
        </h4>
        <div
          id="p-container-3"
          class="p-container text-content-side"
        >
          <p>The River Master and the DRBC use <a href="https://waterdata.usgs.gov/usa/nwis/">water monitoring data collected by the USGS</a> to decide how and when to release water from these reservoirs throughout the Basin at key times of the year.</p>
          <p>Withdrawals, discharges, and reservoir management affect where water is available in the Basin.</p>
          <p>But the water cycle has a big say in how much water is available, too.</p>
        </div>
      </div>





      <div
        id="sankey-text-and-title-4"
        v-observe-visibility="{
          callback: visibilityChanged,
          intersection: {
            rootMargin: '-48% 0% -50% 0%',
            threshold: 0
          }
        }"
        class="sankey-text-and-title"
      >
        <h4
          id="sankey-title-4"
          class="text-content-side"
        >
          Summer Lows
        </h4>
        <div
          id="p-container-4"
          class="p-container text-content-side"
        >
          <p>In the late summer of most years, the streams and rivers of the Basin have lower, slower flows.  The normal low flows are exacerbated during summers with droughts.  With the right conditions, the river flow has a chance of falling below the target levels set by the 1954 Supreme Court decree.</p>
          <p>Even with low flows, human water demands don’t let up! The flow targets at Montague and Trenton are designed to protect against water hoarding upstream that would deprive downstream users – human and otherwise – of fair access to water.</p>
        </div>
      </div>
      <div
        id="sankey-text-and-title-5"
        v-observe-visibility="{
          callback: visibilityChanged,
          intersection: {
            rootMargin: '-48% 0% -50% 0%',
            threshold: 0
          }
        }"
        class="sankey-text-and-title"
      >
        <h4
          id="sankey-title-5"
          class="text-content-side"
        >
          Reservoir Releases
        </h4>
        <div
          id="p-container-5"
          class="p-container text-content-side"
        >
          <p>But with careful management, reservoirs can provide a buffer against these excessively low flows.  Reservoirs store water during times when there’s plenty of it. When the River flow has a chance of dropping below the flow targets set by the 1954 decree, the River Master can decide to carefully release some of the stored water in the summer at just the right rate and time to fill the gap.</p>
          <p>With accurate data and smart management, there’s enough water available for everyone. </p>
        </div>
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
      const paragraphContainerTargetId = 'p-container-' + entry.target.id[entry.target.id.length - 1];
      const paragraphContainerTargetElement = document.querySelector('#' + paragraphContainerTargetId);

      if (isVisible === true) {
        imageElement.classList.add('visible');
        paragraphContainerTargetElement.classList.add('visible');
      } else if (isVisible === false) {
        imageElement.classList.remove('visible');
        paragraphContainerTargetElement.classList.remove('visible');
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
    top: 10em;
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
    #sankey-image-4 {
      grid-column: 1;
      grid-row: 1;
      align-self: start;
    }
    img {
      opacity: 0;
      transition: opacity 1s;
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
  #sankey-text-and-title-4 {
    padding-bottom: 20em;
  }

  // controls the text fades
  .p-container {
    opacity: 0;
    transition: opacity 2s;
  }
  .p-container.visible {
    opacity: 1;
  }
}

@media only screen and (max-width: 992px) {
  #sankey-transition {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;

    #sankey-text-container {
      z-index: 2;
      .sankey-text-and-title {
        padding-top: 40em;
      }
      .text-content-side {
        background-color: rgba(255,255,255, 0.75);
      }
    }
  }

  #sankey-image-container-outer {
    z-index: 1;
    position: sticky;
    top: 0;
    grid-column: 1;
    grid-row: 1;
    align-self: start;
  }
  #sankey-text-container {
    grid-column: 1;
    grid-row: 1;
    align-self: start;
  }
}
</style>