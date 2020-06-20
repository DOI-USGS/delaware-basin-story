<template>
  <div id="uses-needs-conflicts">
    <h2>Place holder for Uses Needs Conflicts</h2>
    <p>
      Throughout its history, the Delaware River Basin has been a crucible of competing interests and water needs, and a clear example of the complex interplay between water quality and quantity.  Water is a finite resource, after all.
    </p>
    <p>
      Balancing the just needs of the people and ecosystems in the Basin to get <em>enough</em> water has been the focus of years of research, collaboration among federal, state, and local water management groups, and even a Supreme Court decision in 1954.  That court decree gave guidelines for how much water individual players like New York City or New Jersey State is allowed to divert for its drinking water, as well as how much remaining water has to be allowed to flow at two important checkpoints along its way to the ocean.
    </p>
    <img src="@/assets/usesNeedsConflicts/images/river-shots.png">

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
    <img src="@/assets/usesNeedsConflicts/images/normal.png">
    <p>In the late summer, when there’s less rain, the River Master can decide to release more stored water in the reservoirs to make sure the Delaware River doesn’t turn into a trickle.</p>
    <img src="@/assets/usesNeedsConflicts/images/lessRain.png">
    <p>
      Each Reservoir has to know what to do to make sure that all their discharge, minus whatever is used up by NYC, NJ, etc, adds up to at least the minimum flow level at the two important checkpoints.​
      It’s a complicated job, not just because each reservoir and tributary has its own unique environmental and societal decisions to make.  It becomes a monumental mathematical (and political?) task to make sure that every person, town, industry, and ecosystem gets all the water they need to be stable and healthy.
    </p>
    <img src="@/assets/usesNeedsConflicts/images/one.png">
    <p>
      But if the extra water is released all at once, the pulse of cool, clear reservoir water could drop the water temperature of all the river reaches downstream by several degrees. The species that live in those reaches – like mussels which like it warm, and trout which like it cool – could suddenly see their environment shift dramatically with no time to adapt.
    </p>
    <img src="@/assets/usesNeedsConflicts/images/two.png">

    <TransformSVG />
    <TransformJSON />
  </div>
</template>

<script>
  import TransformSVG from"./subViews/TransformTestBasicSVG"
  import TransformJSON from "./subViews/TransformJSON";

  export default {
      name: 'UsesNeedsConflicts',
      components: {
        TransformJSON,
        TransformSVG
      },
      data() {
          return {

          }
      }
  }
</script>

<style scoped lang="scss">

</style>
