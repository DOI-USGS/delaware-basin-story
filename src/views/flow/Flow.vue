<template>
  <section id="flow">
    <SectionTitle
      :title="title"
      :image="image"
    />
    <div class="text-flow-section text-content">
      <p>The Delaware River Basin supplies water to 16 million people in four states.  Some is even piped miles-long tunnels out of the Basin to provide water to New York City. How water is shared among those millions of users – not to mention the countless fish, birds, and other organisms that rely on the river for food and habitat – has been the focus of decades inter-state discussion, negotiation, and research.</p>
      <p>Users in the Basin during 19th and early 20th century struggled to reach agreements on how to share the water in the Delaware River.  In 1954, <a href="https://webapps.usgs.gov/odrm/about/decree">the Supreme Court intervened with a decree</a> specifying how much water individual players like New York City or New Jersey State are allowed to divert from the river.  At the highest level, the decree decided that the <a href="https://webapps.usgs.gov/odrm/about/about-odrm">USGS Delaware River Master</a> and the <a href="https://www.state.nj.us/drbc/programs/">Delaware River Basin Commission</a> review development proposals, regulate water withdrawals and diversions, and evaluate the effects of human activities throughout the Basin. </p>
      <p>It named the U.S. Geological Survey (USGS) responsible for collecting the data to be able to make those decisions. It also set target flow levels meant to keep the river and its ecosystem healthy.  Those flow targets must be maintained at two USGS river monitoring stations at Montague and Trenton, NJ to this day.</p>
      <p>That decree – along with decades of water science research – helped shift interstate <em>conflict</em> towards interstate <em>cooperation.</em></p>
      <h4>This is the story of how water science informs water management in this age of cooperation.</h4>
    </div>
    <SankeyTransition />
  </section>
</template>

<script>
  import SectionTitle from "@/components/SectionTitle";
  import SankeyTransition from "../../components/SankeyTransition";

  export default {
    name: 'Flow',
    components: {
      SectionTitle,
      SankeyTransition
    },
    data() {
      return {
        title: 'Flow',
        image: require('../../assets/flow/images/blue-min.png')
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
