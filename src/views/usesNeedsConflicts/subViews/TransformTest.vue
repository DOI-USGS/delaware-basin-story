<template>
  <div>
    <hr>
    <h1>transform test here</h1>

    <svg id="transform-states" width="960" height="500"></svg>
    <hr>
  </div>
</template>

<script>
  import * as d3 from 'd3';
  import * as flubber from "flubber";
  import lower48topo from "../../../assets/data/lower48topo";
  import * as topojson from "topojson-client";

  export default {
      name: 'Transform',
      data() {
          return {

          }
      },
      mounted() {
          let svg = d3.select("#transform-states svg"),
                  path = svg.append("path");
          let topo = lower48topo.stateOutlines;

          // Get a single list of coordinates for each state
          let states = topojson.feature(topo, topo.objects.states)
                  .features.map(function (d) {
                      return d.geometry.coordinates[0];
                  });

          d3.shuffle(states);

          draw();

          function draw() {
              let a = states[0],
                      b = states[1],
                      interpolator = flubber.interpolate(a, b);

              states.push(states.shift());
console.log('the new path ', interpolator(0))
              path.attr("d", interpolator(0));

              // Morph
              path.transition()
                      .delay(100)
                      .duration(800)
                      .attrTween("d", function () {
                          return interpolator;
                      })
                      .on("end", draw('this is the second call'));
          }
      }
  }
</script>

<style lang="scss">
  #transform-states {
      path {
        display: inline;
        fill: rgb(227, 227, 227);
        stroke-width: 1px;
        stroke: rgb(102, 102, 102);
        transform-origin: 0 0;
      }
  }
</style>
