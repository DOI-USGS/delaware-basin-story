<template>
  <section>
    <div
      id="intro-text-content"
      class="text-content"
    >
      <div>
        <p class="byline">
          U.S. Geological Survey
        </p>
      </div>
      <div id="first-line">
        <p><span class="intro-em">When rain falls and snow melts</span> in parts of New York, New Jersey, Pennsylvania, and Delaware, the water trickles through the ground into streams eventually entering the <span class="emph">Delaware River,</span> which flows 330 miles from its headwaters to the Delaware Bay and Atlantic Ocean.</p>
        <p>The Delaware River – named the <a href="https://endangeredrivers.americanrivers.org/delaware-river/" target="_blank">2020 River of the Year by American Rivers</a> for its rich history and thriving communities – forms a main artery that drains the river basin and connects the people, cities, industries, and ecosystems around it.</p>
      </div>      
    </div>
  </section>
</template>

<script>
  export default {
      name: 'IntroTextContents'
  }
</script>

<style scoped lang="scss">

#title {
  @media only screen and (max-width: 600px) {
    font-size: 2em;
    
  }
}

#section-title-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  text-align: center;
}

#section-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}


.byline {
  font-style: italic;
}

</style>
