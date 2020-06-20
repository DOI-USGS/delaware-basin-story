<template>
  <div>
    <hr>
    <h1>transform a SVG test</h1>
    <svg id="transform-svg-test" xmlns="http://www.w3.org/2000/svg" width="960" height="500">
      <g transform="translate(240 10) scale(20 20)">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        <path d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
        <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        <path d="M6.54,0C6.24,0,6.05,0.18,5.92,0.38L0.08,9.92C0,10,0,10.15,0,10.31C0,10.85,0.38,11,0.69,11h11.62
	c0.38,0,0.69-0.15,0.69-0.69c0-0.15,0-0.23-0.08-0.38L7.15,0.38C7.03,0.18,6.79,0,6.54,0z" />
      </g>
    </svg>
    <hr>
  </div>
</template>

<script>
    import * as d3 from 'd3';
    import * as flubber from "flubber";

    export default {
        name: 'TransformSVG',
        data() {
            return {

            }
        },
        mounted() {
            let pathStrings = Array.from(document.querySelectorAll("#transform-svg-test path")).map(d => d.getAttribute("d"));

            d3.select("#transform-svg-test")
                    .selectAll("path")
                    .filter(function(d, i) {
                        return i; })
                    .remove();

            d3.select("#transform-svg-test path")
                    .style("display", "block")
                    .call(animate);

            function animate(sel) {
                let start = pathStrings.shift(),
                        end = pathStrings[0];

                pathStrings.push(start);

                sel
                        .datum({ start, end })
                        .transition()
                        .duration(1200)
                        .attrTween("d", function(d){
                            return flubber.interpolate(d.start, d.end, { maxSegmentLength: 0.1 })
                        })
                        .on("end", function() {
                            sel.call(animate);
                        });
            }

        }
    }
</script>

<style scoped lang="scss">
  path {
    fill: #8b00ff;

  }
</style>

