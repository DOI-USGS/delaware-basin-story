<template>
  <section id="flow">
    <div class="text-flow-section text-content">
      <p>The Delaware River Basin supplies water to 16 million people in four states, including water that is piped in miles-long tunnels to New York City. How water is shared among those millions of users – not to mention the countless fish, birds, and other organisms that rely on the river for food and habitat – has been the focus of decades of research, inter-state conflict, and cooperation.</p>
      <p>Water management in the basin shift from conflict to cooperation in 1954 with a Supreme Court Decision. The Supreme Court decree established rules for how much water individual groups like New York City or New Jersey State are allowed to divert from the river, as well as target river flow amounts. Flow targets are water levels that have to be maintained at two USGS river monitoring stations at Montague and Trenton, NJ.</p>
    </div>
    <SankeyTransition />
  </section>
</template>

<script>
    import SankeyTransition from "../../components/SankeyTransition";

    export default {
        name: 'Flow',
        components: {
            SankeyTransition
        }
    }
</script>

<style scoped lang="scss">

</style>
