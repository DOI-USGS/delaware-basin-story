<template>
  <section id="uses-needs-conflicts">
    <h2>2020 River of the Year</h2>
    <h3>U.S. Geological Service</h3>
    <p>
      Throughout its history, the Delaware River Basin has been a crucible of competing interests and water needs, and a clear example of the complex interplay between water quality and quantity.  Water is a finite resource, after all.
    </p>
    <p>
      Balancing the just needs of the people and ecosystems in the Basin to get <em>enough</em> water has been the focus of years of research, collaboration among federal, state, and local water management groups, and even a Supreme Court decision in 1954.  That court decree gave guidelines for how much water individual players like New York City or New Jersey State is allowed to divert for its drinking water, as well as how much remaining water has to be allowed to flow at two important checkpoints along its way to the ocean.
    </p>
    <SankeyTransition />
    <SankeyTransition_2 />
    <p>
      At those two checkpoints – USGS river monitoring stations in Montague and Trenton, NJ – the minimum amount of flow has to still be able to provide enough water for agriculture, industry, ___, and recreation.  It is also set to make sure there’s enough freshwater flowing into the estuary at the mouth of the river to maintain the right mix of fresh-and-saltiness for the important ecological communities there.
    </p>
    <p>
      The Delaware River Master – a position established by the Supreme Court ruling – relies on rain, snowmelt, runoff, and streamflow data collected by hundreds of USGS-affiliated monitoring stations through the basin to calculate how much water needs to be stored or released from the reservoirs along its tributaries to meet its flow goals.
    </p>
    <p>
      But alone, enough water is not enough. Water quantity and quality are deeply intertwined.
    </p>
    <p>
      Humans have enormous power to alter the ecosystems they are a part of, both intentionally and unintentionally.  On top of all the competing water needs of the Basin’s cities, agriculture, ___ and ecosystems, every activity in the Basin has an impact on water quality measures as well.
    </p>
    <p />
    <p>
      In particular, one of the most effective water management tools we have at our disposal is deciding how much water to store or release in reservoirs.  When rain is plentiful, reservoirs fill themselves up and release only as much water as needed to maintain the flow targets set by the Supreme Court.  If a dry spell hits the Basin, the River Master can decide to release extra water from the reservoir to fill the gap between the predicted flow and the flow targets.
    </p>
  </section>
</template>

<script>
  import SankeyTransition from "./subViews/SankeyTransition";
  import SankeyTransition_2 from "./subViews/SankeyTransition_2";

  export default {
      name: 'UsesNeedsConflicts',
      components: {
          SankeyTransition,
          SankeyTransition_2
      },
      data() {
          return {

          }
      }
  }
</script>

<style scoped lang="scss">
#uses-needs-conflicts {
  background-color: rgba(229, 229, 229, 0.3);
}
</style>
