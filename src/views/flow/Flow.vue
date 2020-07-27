<template>
  <section id="flow">
    <div class="text-flow-section text-content">
      <p>
        The Delaware River Basin supplies water to 16 million people in four states, including water that is piped in miles-long tunnels to New York City. How water is shared among those millions of users – not to mention the countless fish, birds, and other organisms that rely on the river for food and habitat – has been the focus of decades of research, inter-state conflict, and cooperation.
      </p>
      <p>The balance between conflict and cooperation was shifted for the better by a Supreme Court decision in 1954. That decree established rules for how much water individual players like New York City or New Jersey State are allowed to divert from the river, as well as how much river flow has to be maintained at two USGS river monitoring stations at Montague and Trenton, NJ.  </p>
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
