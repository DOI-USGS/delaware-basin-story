<template>
  <div>
    <hr>
    <h1>transform from JSON test</h1>
    <svg
      id="transform-circle-test"
      height="800"
      width="1920"
    />
    <hr>
  </div>
</template>

<script>
    import * as d3 from 'd3';
    import * as flubber from "flubber";
    import lower48topo from "../../../assets/data/lower48topo";
    import * as topojson from "topojson-client";

    export default {
        name: 'TransformJSON',
        data() {
            return {}
        },
        mounted() {
            let svg = d3.select("#transform-circle-test")
            svg.append("path");

            let topo = lower48topo.stateOutlines;

            // Get a single list of coordinates for each state
            let states = topojson.feature(topo, topo.objects.states)
                    .features.map(function (d) {
                        return d.geometry.coordinates[0];
                    });

            d3.shuffle(states);
            draw();
            function draw(i) {
                let a = states[0],
                        b = states[1],
                        interpolator = flubber.interpolate(a, b);

                states.push(states.shift());
                let path = d3.select("#transform-circle-test path");
                path.attr("d", interpolator(0));

                // Morph
                path.transition()
                        .delay(100)
                        .duration(800)
                        .attrTween("d", function () {
                            return interpolator;
                        })
                        .on("end", function() { draw(i + 1); });

            }
        }
    }
</script>

<style lang="scss">
#transform-circle-test {
  margin-left: 50px;
  path {
    fill: #e3e3e3;
    stroke-width: 1px;
    stroke: #666;
  }
}
</style>

