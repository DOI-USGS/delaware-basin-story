<template>
  <section
    id="flow"
    class="section"
  >
    <SectionTitle
      :title="title"
      :image="image"
    />
    <div class="text-flow-section text-content">
      <p>The Delaware River Basin supplies water to 16 million people in four states.  Some is even piped miles-long tunnels out of the Basin to provide water to New York City. How water is shared among those millions of users – not to mention the countless fish, birds, and other organisms that rely on the river for food and habitat – has been the focus of decades inter-state discussion, negotiation, and research.</p>
      <p>Users in the Basin during 19th and 20th century struggled to reach agreements on how to share the water in the Delaware River.</p>
      <p>In 1954, <a href="https://webapps.usgs.gov/odrm/about/decree">the Supreme Court intervened with a decree</a> specifying how much water individual players like New York City or New Jersey State are allowed to divert from the river. It established the <a href="https://webapps.usgs.gov/odrm/about/about-odrm">Office of the Delaware River Master</a> (ODRM) to administer the decision, and gave the U.S. Geological Survey responsibility for collecting the data to make water management decisions. A few years later, the <a href="https://www.state.nj.us/drbc/programs/">Delaware River Basin Commission</a> (DRBC) was formed to oversee a unified approach to managing a river system across political boundaries.</p> 
      <p>The decree, the ODRM, the DRBC, and decades of water science research has helped shift interstate <em>conflict</em> towards interstate <em>cooperation.</em></p>
      <h3>This is the story of how water science informs water management in this age of cooperation.</h3>
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
