<template>
  <section>
    <div id="section-title-container">
      <img
        src="@/assets/intro/images/background_rainbowLarge.png"
        alt="image of watercolor cloud of color"
      >
      <!-- <h1>{{ title }}</h1> -->
      <div id="section-title">
        <h1>Clean, Cool, and Confident</h1>
      </div>
    </div>
    <div
      id="intro-text-content"
      class="text-content"
    >
      <div>
        <h2>How science informs water management in the Delaware River Basin</h2>
        <p class="byline">
          U.S. Geological Survey
        </p>
      </div>
      <div id="first-line">
        <p><span class="intro-em">When rain falls and snow melts</span> in parts of New York, New Jersey, Pennsylvania, and Delaware, the water trickles over and through the ground into streams. Those streams eventually come together as the Delaware River, which flows 330 miles from its headwaters to the Delaware Bay and Atlantic Ocean. </p>
        <p>The Delaware River – named the 2020 River of the Year by American Rivers for its rich history and thriving communities – forms a main artery that drains the river basin and connects the people, cities, industries, and ecosystems around it.  </p>
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
.intro-em {
  font-family: chantal,'Noto Sans', sans-serif;
  font-weight: bold;
  font-size: 2.1em;
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

#intro-text-content {
  padding-top: 0;
  #first-line {
    padding-top: 20vh;
  }
}

.byline {
  padding-left: 20px;
  font-style: italic;
}

</style>
