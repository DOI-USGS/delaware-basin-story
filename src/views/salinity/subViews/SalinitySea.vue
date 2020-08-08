<template>
  <section
    id="salinity-sea"
  >
    <div
      id="salinity-vis"
      class="vis-content-side"
    >
      <div class="outer">
        <img
          id="map"
          src="@/assets/salinity/salinitySea/images/salt_zoom_map-01.jpg"
        >
        <svg id="front_animation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 638.59">
          <path id="saltmvmt" style="stroke:none; fill: none;" d="M316.23,371.05c7.53-13.87,11-20,10.37-20.19-.89-.28-3.6,7.56-6.88,12.59-8.68,13.32-17.67,26.7-18.18,26.83-4,1,3-5.58,10.37-13.24a38.91,38.91,0,0,0,6.26-7.77c1.49-2.49,3.52-6,5.8-10.69,7.14-14.55,11.42-21.13,17.5-32.26,1.88-3.43,9.71-13.95,14.45-19.71-5.48,4.75-17.68,20.8-26.25,38.59-1.93,4-2.22,9.49-8.2,17.94-2.5,3.53-5,6.53-7.17,7.91" />
           <path id="saltmvmt_slr" d="M474,255.29c8.81-7.55,12.49-1.66,11-6-.3-.87-4,6-11.18,6.47A43.09,43.09,0,0,0,449,265.29c-4,1,6.59-1.33,14-9,2.41-2.49,5.9,3.49,8,0,1.5-2.48,11.71-2.33,14-7,7.14-14.55-5.09-24.86,1-36,1.87-3.43,18-10,24-10-7-2-31.77,9.79-24,35,1.31,4.26-2,13-10.44,17.15-3.88,1.91-12.43-.52-14.56.85l-2,3c-13,14-52,11-60,16-1.25.79-20.93,14.36-28,17-18.73,7-24.61,29.88-25,26-.67-6.62,7.61-18.58,22-21,4.67-.78,6.36-4.05,11-6,3.31-1.39,9.22-6.08,14-10,11-9,17-8,27-9a186.94,186.94,0,0,0,25-4c-10.25.91-26,6-50,9-5.25.66-8.41,10.88-21,15-5.26,1.73-14,12-18,14" style="fill: none;stroke: none;"/>
          <g id="saltline">
              <g id="dash" class="marker">
                <path d="M306.62,406a202.4,202.4,0,0,1,25.17,10.91c1.52.79,2.87-1.5,1.35-2.3-15.32-8-26.29-22-41-30.93-1.48-.89-2.77,1.37-1.35,2.31a237.11,237.11,0,0,0,40.48,21.29q6.1,2.49,12.35,4.63c1.45.5,2.28-1.67,1-2.44q-21.14-12.78-41.83-26.28c-1.44-.94-2.78,1.37-1.35,2.3q20.7,13.5,41.84,26.28l1-2.43a233,233,0,0,1-52.18-25.66L290.82,386c14.68,8.94,25.64,22.93,41,30.92l1.35-2.3a207.51,207.51,0,0,0-25.81-11.18c-1.62-.57-2.32,2-.71,2.57Z" transform="translate(-300.21 -382.93)"/>
              </g>
              <g id="salt_t" class="marker" >
                <path d="M390.09,425.24l15.27-2.41" transform="translate(-290.21 -382.93)" />
                <path d="M396.52,448.55c.24-7.77.51-14.73.8-24.11" transform="translate(-290.21 -382.93)" />
              </g>
              <path  class="marker" id="front_n" d="M462.47,442.21V428.55l12.86,12.06q.41-8,.8-16.08" transform="translate(-290.21 -382.93)" />
              <path  class="marker" id="front_o" d="M454.61,426.92c-1.55-.48-3.05.37-3.94.87-2.52,1.43-5,4.67-4.37,8.31.3,1.8,1.51,4.62,3.94,5.24,3.12.8,6.47-2.48,7.43-5.68C458.68,432.25,457.31,427.76,454.61,426.92Z" transform="translate(-290.21 -382.93)" />
              <path  class="marker" id="front_r" d="M429.88,441.91a28.59,28.59,0,0,1-1.61-5.63,28.19,28.19,0,0,1,0-9.64,17.47,17.47,0,0,1,4.82-.8,14.06,14.06,0,0,1,7.24,1.6c1,.59,2.46,1.41,2.41,2.41,0,.43-.31.93-3.22,2.42-2.31,1.17-3.9,1.76-6.39,2.87l-2.45,1.14,7.24,4.83" transform="translate(-290.21 -382.93)" />
              <g id="front_f" class="marker" >
                <path d="M416.15,445.27l-.87-22.72,8.74-.87" transform="translate(-290.21 -382.93)" />
                <path d="M422.27,433h-6.12" transform="translate(-290.21 -382.93)" />
              </g>
              <g id="front_t" class="marker" >
                <path d="M479.67,423.93l15.27-2.41" transform="translate(-290.21 -382.93)" />
                <path d="M486.1,447.24c.24-7.77.51-14.74.8-24.11" transform="translate(-290.21 -382.93)" />
              </g>
              <path id="salt_l"  class="marker" d="M380.32,424.3q.23,10.69.44,21.41l8.3-.87" transform="translate(-290.21 -382.93)" />
              <g id="salt_a" class="marker" >
                <path d="M359.55,446.85c1.35-3.74,2.53-6.88,3.44-9.27.58-1.53,1.07-2.79,1.39-3.59,1.26-3.24,2.37-6,3.21-8a2.63,2.63,0,0,1,1.61,0,3.07,3.07,0,0,1,1.6,1.6c.84,1.6,2.7,7.39,4.83,15.27" transform="translate(-290.21 -382.93)" />
                <path d="M362.77,439.62l9.64-3.22" transform="translate(-290.21 -382.93)" />
              </g>
              <path id="salt_s"  class="marker" d="M356.78,427.16c-6.3-3.67-12.53-3.78-15.33-.8-.34.38-1.83,2-1.5,3.77.9,5,14.07,4.11,15.16,9.09.47,2.15-1.48,4.52-3.21,5.63-3.49,2.23-7.51.25-7.73.13" transform="translate(-290.21 -382.93)" style="fill: none;stroke: #000;"/>
            <animateMotion
              dur="10s"
              repeatCount="indefinite"
            >
              <mpath href="#saltmvmt" />
            </animateMotion>
          </g>
        </svg>
        <svg
          v-if="isSectionInView"
          id="seasalt-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 638.59"
        >

        <path id="ft1" class="marker" d="M490.29 290.66c-.89-3.67-2.21-9-3.86-15.45-2.56-10-3.78-14.2-3.57-14.26.58-.19 10.87 31.61 11.36 31.46.29-.09-3-11.39-8.3-29.28" />
        <path id="ft2" class="marker"  d="M517.38 269.69c-2.48-1.63-5.92-3.87-10-6.53-11.51-7.43-16.28-10.34-16.18-10.52.25-.41 28.12 15.77 28.4 15.3.17-.28-9.06-6.13-25.34-16.17" />
        <path id="ft3" class="marker" d="M488.54 232.11c18.47 4.35 29.78 7.13 29.71 7.42-.11.5-33-6.62-33.21-5.68-.08.38 5.08 1.91 14.86 4.81 6.26 1.86 11.51 3.33 15.29 4.37" />
        <path id="intake" class="marker" d="M561.73 166.34l21 21" />
  
        <g class="marker">
          <path id="num1" d="M472.89 303.64l8-4.66v12" />
          <path id="ft1_f"  d="M497.56 315.65c-.22-2-.11-3.67-.33-5.67.22-4.22.11-8.78.33-13l6.67-.67M505.56 309l-7.33.67"/>
          <path id="ft1_t" d="M513.57 295.64q-.35 9.67-.67 19.34M508.23 297l12-2.67"/>
        </g> 
        <g class="marker">
          <path id="num2" d="M522.38 273.61a14.21 14.21 0 014-2.67c1.47-.65 4.07-1.79 5.33-.66a2.55 2.55 0 01.67 2c-.14 1.32-1.36 2.16-2 2.66a13 13 0 00-4 6l6-.66" />
          <path id="ft2_f" d="M545 286.16c-.23-2-.12-3.66-.34-5.66.22-4.23.11-8.78.34-13l6.66-.66M553 279.5l-7.34.66"/>
          <path id="ft2_t" d="M561 266.16q-.33 9.68-.67 19.34M555.67 267.49l12-2.66"/>
        </g>
        <g class="marker">
          <path id="num3" d="M524.33 234.09l8.67-2 2 .66-4.66 4a5.31 5.31 0 013.33 1.34 4.55 4.55 0 011.33 2c.51 2-2.38 5.19-7.33 7.33" />
          <path id="ft3_f" d="M544.29 248.64c-.22-2-.11-3.67-.33-5.67.22-4.22.11-8.78.33-13l6.67-.67M552.29 242l-7.33.67"/>
          <path id="ft3_t"  d="M560.3 228.64q-.34 9.66-.67 19.33M555 230l12-2.67"/>
        </g>
          <g id="intakes-text" class="marker">
            <path id="arrow_intake" d="M624,214.17A28.51,28.51,0,0,1,588,195l-4.5,11.25,3.38-13.5,12.37,1.13L588,195" />
            <path id="drink_d" d="M628.27,167.27c0,2.45-.82,9.79.82,14.69a55.69,55.69,0,0,0,8.15-3.27,38.66,38.66,0,0,0,7.35-4.89c1.36-1.05,3.3-2.83,3.26-4.08s-.82-1.63-2.45-2.45c-3.72-1.86-17.53-2.34-19.58-2.44" />
            <path id="drink_r" d="M657.64,183.59a27.89,27.89,0,0,1-1.63-5.71,28.55,28.55,0,0,1,0-9.79,18.06,18.06,0,0,1,4.89-.82,14.24,14.24,0,0,1,7.34,1.63c1,.6,2.5,1.43,2.45,2.45,0,.43-.31.94-3.26,2.45-2.35,1.19-4,1.79-6.49,2.92-1.07.48-1.94.89-2.49,1.16l7.34,4.89" />
            <path id="drink_i" d="M678.85,169.72v11.42" />
            <path id="drink_n" d="M688.64,182.77V168.9l13.05,12.24.81-16.31" />
            <g id="drink_k">
              <path d="M713.11,164.83v17.94" />
              <path d="M725.34,168.9l-10.6,6.53a16.81,16.81,0,0,0,9,5.71" />
            </g>
            <path id="ing_i" d="M732.69,169.72v11.42" />
            <path id="ing_n" d="M742.48,181.14V167.27l13,12.24.81-16.32" />
            <path id="ing_g" d="M776.74,165.64a21.21,21.21,0,0,0-4.08,1.63c-2.42,1.27-6.47,3.4-7.34,7.34-.11.49-.73,3.28.81,4.9,2.18,2.28,7,.44,8.16,0a14.24,14.24,0,0,0,5.71-4.08l-2.45-1.63L771,175.43" />
            <path id="water_w" d="M629.12,196.89,633.94,213l5.63-10.45q2.8,5.22,5.62,10.45l5.63-16.08" />
            <g id="water_a">
              <path d="M654.84,217c1.34-3.74,2.52-6.87,3.43-9.27.59-1.53,1.08-2.78,1.39-3.58,1.26-3.25,2.37-6,3.21-8a2.63,2.63,0,0,1,1.61,0,3.11,3.11,0,0,1,1.61,1.61c.83,1.59,2.69,7.39,4.82,15.27" />
              <path d="M658.05,209.75l9.65-3.21" />
            </g>
            <g id="water_t">
              <path d="M674.12,194.48l15.27-2.41" />
              <path d="M680.55,217.79c.27-8.57.54-15.54.81-24.11" />
            </g>
            <g id="water_e">
              <path d="M701.45,194.48l-8.84,1.61a42.83,42.83,0,0,0-.81,9.64,43.44,43.44,0,0,0,1.61,10.45l7.23-1.61" />
              <path d="M700.64,208.14a13.63,13.63,0,0,0-3.21,0,13.3,13.3,0,0,0-3.21.81" />
            </g>
            <path id="water_r" d="M709.49,213.77a27.29,27.29,0,0,1-1.61-5.63,28.19,28.19,0,0,1,0-9.64,17.41,17.41,0,0,1,4.82-.8,14,14,0,0,1,7.23,1.6c1,.59,2.47,1.41,2.41,2.41,0,.43-.3.93-3.21,2.42-2.31,1.17-3.9,1.76-6.39,2.87-1.06.48-1.91.88-2.45,1.14l7.23,4.83" />
            <path id="intakes_i" d="M740.83,200.91v11.25" />
            <path id="intakes_n" d="M750.47,213.77V200.11l12.86,12q.4-8,.8-16.07" />
            <g id="intakes_t">
              <path d="M769.76,194.48,785,192.07" />
              <path d="M776.19,217.79c.24-7.77.51-14.74.8-24.11" />
            </g>
            <g id="intakes_a">
              <path d="M785.83,217c1.35-3.74,2.52-6.87,3.44-9.27.58-1.53,1.07-2.78,1.38-3.58,1.27-3.25,2.37-6,3.22-8a2.6,2.6,0,0,1,1.6,0,3.07,3.07,0,0,1,1.61,1.61c.84,1.59,2.7,7.39,4.82,15.27" />
              <path d="M789.05,209l9.64-3.22" />
            </g>
            <g id="intakes_k">
              <path d="M809.94,195.29v18.48" />
              <path d="M822.8,197.7l-12.75,9.1"  />
              <path d="M821,211.36l-10-3.64"  />
            </g>
            <g id="intakes_e">
              <path d="M838.07,194.48l-8.84,1.61a42.83,42.83,0,0,0-.81,9.64A43.44,43.44,0,0,0,830,216.18l7.23-1.61" />
              <path d="M837.26,208.14a13.63,13.63,0,0,0-3.21,0,13.3,13.3,0,0,0-3.21.81" />
            </g>
            <path id="intakes_s" d="M859.93,196c-6.3-3.67-12.53-3.78-15.33-.79-.35.37-1.83,2-1.5,3.76.89,5,14.07,4.11,15.16,9.09.47,2.15-1.48,4.52-3.21,5.63-3.49,2.23-7.51.25-7.73.14" />
          
          </g>  
          <g id="cities" class="marker">
                    <g id="philly">
              <path id="arrow_philly" d="M430.2,185.49a28.5,28.5,0,0,1,40.56,4.07l-.09-12.12,2,13.77-11.88,3.65,10-5.3" />
              <path id="dot_philly" d="M510.94,196.12c0-4.8-4.22-8.7-9.42-8.7s-9.43,3.9-9.43,8.7,4.22,8.7,9.43,8.7S510.94,200.93,510.94,196.12Z" />
              <path id="philly_d" d="M300.3,179.41c0,2.45-.82,9.79.82,14.68a54.71,54.71,0,0,0,8.15-3.26,38.66,38.66,0,0,0,7.35-4.89c1.36-1.06,3.3-2.83,3.26-4.08s-.82-1.63-2.45-2.45c-3.72-1.86-17.53-2.34-19.58-2.45" />
              <path id="philly_i" d="M253.87,180.9v11.25" />
              <g id="philly_a">
                <path d="M275.83,197c1.35-3.74,2.52-6.88,3.44-9.27.58-1.53,1.07-2.79,1.38-3.59,1.27-3.24,2.37-6,3.22-8a2.6,2.6,0,0,1,1.6,0,3.06,3.06,0,0,1,1.61,1.6c.84,1.6,2.69,7.39,4.82,15.27" />
                <path d="M279,189.81l9.65-3.22" />
              </g>
              <path id="philly_i2" d="M400.87,180.9v11.25" />
              <g id="philly_a2">
                <path d="M407.83,198c1.35-3.74,2.52-6.88,3.44-9.27.58-1.53,1.07-2.79,1.38-3.59,1.27-3.24,2.37-6,3.22-8a2.6,2.6,0,0,1,1.6,0,3.06,3.06,0,0,1,1.61,1.6c.84,1.6,2.69,7.39,4.82,15.27" />
                <path d="M411,190.81l9.65-3.22" />
              </g>
              <g id="philly_e">
                <path d="M334.7,175.68l-8.84,1.61a42.78,42.78,0,0,0-.81,9.64,43.53,43.53,0,0,0,1.61,10.45l7.23-1.61" />
                <path d="M333.89,189.34a13.28,13.28,0,0,0-6.43.81" />
              </g>
              <g id="philly_p2">
                <path id="drink_d" d="M358.34,189.29a34.43,34.43,0,0,0,5.5-2.42,26.1,26.1,0,0,0,5-3.63c.92-.78,2.23-2.1,2.2-3s-.55-1.21-1.65-1.82c-2.51-1.38-11.84-1.74-13.22-1.82" />
                <path d="M357,195.39c.2-6.27.39-10.36.59-16.62" />
              </g>
              <g id="philly_p">
                <path d="M211.34,190.29a34.43,34.43,0,0,0,5.5-2.42,26.1,26.1,0,0,0,5-3.63c.92-.78,2.23-2.1,2.2-3s-.55-1.21-1.65-1.82c-2.51-1.38-11.84-1.74-13.22-1.82" />
                <path d="M210,196.39c.2-6.27.39-10.36.59-16.62" />
              </g>
              <g id="philly_h2">
                <path d="M379.23,188.08l15.27-2.41" />
                <path d="M390.66,197.39c.27-8.57.54-12.54.8-21.11" />
                <path d="M378.5,194.79c.27-8.57,0-4,0-16" />
              </g>
              <g id="philly_h">
                <path d="M232.23,189.08l15.27-2.41" />
                <path d="M243.66,198.39c.27-8.57.54-12.54.8-21.11" />
                <path d="M231.5,195.79c.27-8.57,0-4,0-16" />
              </g>
              <path id="philly_l1" d="M343,175.29a114.83,114.83,0,0,0,0,13c.2,3.58.56,6.92,1,10l8-4" />
              <path id="philly_l2" d="M263,175.29a114.83,114.83,0,0,0,0,13c.2,3.58.56,6.92,1,10l8-4" />
            </g>
            <g id="camden">
              <path id="camden_c" d="M509,286.29a17.81,17.81,0,0,0-6,3c-1,.8-5.8,4.48-6,10-.05,1.29-.12,3.15,1,4,1.72,1.32,5.68-.16,10-4" />
              <g id="camden_a">
                <path d="M512.14,308.42c1.35-3.74,2.53-6.88,3.44-9.27.58-1.53,1.07-2.78,1.38-3.59,1.27-3.24,2.37-6,3.22-8a2.63,2.63,0,0,1,1.61,0,3.05,3.05,0,0,1,1.6,1.61c.84,1.59,2.7,7.39,4.82,15.26" />
                <path d="M515.36,301.19,525,298" />
              </g>
              <path id="camden_m" d="M535.5,301.79l7-14,3,14,8-9,3,7" />
              <path id="camden_d" d="M565.61,288.79c0,2.45-.81,9.79.82,14.69a56.35,56.35,0,0,0,8.16-3.27,38.93,38.93,0,0,0,7.34-4.89c1.36-1.05,3.3-2.83,3.26-4.08s-.82-1.63-2.45-2.45c-3.72-1.86-17.53-2.34-19.57-2.44" />
              <g id="camden_e">
                <path d="M602,286.06l-8.84,1.61a42.37,42.37,0,0,0-.8,9.64,43,43,0,0,0,1.6,10.45l7.24-1.61" />
                <path d="M601.21,299.72a13.73,13.73,0,0,0-3.22,0,13.3,13.3,0,0,0-3.21.81" />
              </g>
              <path id="camden_n" d="M609.5,303.79V289.93l13,12.23q.41-8.16.82-16.31" />
              <path id="dot_camden" d="M526.55,242.91a9.43,9.43,0,1,0-9.43,9.43A9.43,9.43,0,0,0,526.55,242.91Z" />
              <path id="arrow_camden" d="M554.9,286.17a21.31,21.31,0,0,0-1.39-18.49c-4.83-8.31-13.56-11.13-15.33-11.66l10.65-3.28L536.12,255l.66,10.17c.47-3.06.94-6.11,1.4-9.17" />
            </g>
            </g>
        </svg>
      </div>
    </div>
    <div class="text-content-side">
      <div id="salinity-section-text">
        <div id="sea-salt-wedge-text">
          <h3>The Salt Wedge</h3>
          <p>As freshwater spills from the river onto the saltier, ocean-influenced waters of the Delaware Bay, the less-dense river water forms a raised wedge that constantly pushes downstream against the intruding ocean. The bounds of that wedge – the “salt front” – migrate up and down the river channel over the daily cycle of ocean tides, the seasonal cycle of lower and higher river flows, and the multi-year fluctuations of higher and lower flows. </p>
        </div>
        <div
          id="sea-salt-scroll-target"
          v-observe-visibility="{
            callback: visibilityChanged,
            intersection: {
              rootMargin: '-30% 0% -50% 0%',
              threshold: 0
            }
          }"
        >
          <div
            id="sea-salt-rise-text"
          >
            <h3>The salt front will likely move upstream as sea levels rise</h3>
            <p>While these natural variations usually pose no problems, sea level rise is expected to push the salt front so far inland – especially during droughts – that water at the major Trenton, NJ intake could be contaminated. Salty water corrodes surface water intake pipes, raises the cost of drinking water treatment, and is potentially toxic to aquatic plants and fish.</p>
          </div>
          <div
            id="sea-salt-drinking-text"
          >
            <p>Monitoring, modeling, and management of river flows are essential to our peaceful coexistence with the salt front. Remember the Supreme-Court-mandated flow targets at Montague and Trenton? One key motivation for setting the targets where they are is to keep pressing the salt front toward the ocean.  Maintaining the target flow is an important tool for protecting our current uses of freshwater in the lower Basin. Good data and models allow smart timing of reservoir releases to maintain the flow targets and the salt front location.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: 'SalinitySea',
        data() {
            return {
                isSectionInView: false
            }
        },
        methods: {
            visibilityChanged(isVisible, entry) {
                this.isVisible = isVisible;
                const targetElement = document.querySelector('#sea-salt-rise-text');
                if (isVisible === true) {
                    this.isSectionInView = true;
                    targetElement.classList.add('visible');

                } else if (isVisible !== true) {
                    this.isSectionInView = false;
                    targetElement.classList.remove('visible');
                }
            }
        }
    }
</script>

<style scoped lang="scss">
  #salinity-section-text {
    #sea-salt-wedge-text {
      padding-bottom: 15rem;
    }
    #sea-salt-rise-text {
      opacity: 0;
      transition: opacity 2s;
    }
    #sea-salt-rise-text.visible {
      opacity: 1;
    }
  }






/* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      .container-section-title {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        text-align: center;
        color: white;
        img {
          width: 80%;
        }
        .section-title {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    section {
      margin-bottom: 10em;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-content: center;
      .container-section-title {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        text-align: center;
        color: white;
        img {
          width: 80%;
        }
        .section-title {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }


* {
    box-sizing: border-box;
}
.row {
  height: 100%;
}
.column {
    float: left;
}

.left {
    width: 70%;
}

.right {
    width: 25%;
}

/*  add breakpoint */
@media screen and (max-width: 800px) {
    .right, .left {
      width: 100%;
    }
  }

h1 {
    color: white;
    font-family: 'Noto Sans', sans-serif;
}
h2, h3, h4, h5, h6 {
    color: black;
    font-family: 'Noto Sans', sans-serif;
}


.outer {
    background-color: white;
    position: sticky;
    display: inline-block;
    text-align: center;
    top: 0;
    padding-top: 20em;
}

.outer img {
    display: block;
    max-width: 100%;
    height: auto;
}

.outer svg {
    position: absolute;
    display: inline-block;
    height: auto;
    width: 100%;
    top: 0;
    left: 0;
    padding-top: 20em;
}
.marker {
  fill: none;
  stroke: black;
  stroke-width: 3px;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* markers for sea level rise */

#seasalt-svg {
    stroke: black;
    fill: transparent;
    stroke-linecap:round;
    stroke-linejoin:round;
    stroke-width: 9px;
}

#ft1, #ft2, #ft3 {
    stroke-dasharray: 300px;
    stroke-dashoffset: -300px;
}

#num1, #num2, #num3, #f2a, #f2b, #t4a, #t4b, #f3a, #f3b, #t5a, #t5b, #f1a, #f1b, #t3a, #t3b, #intake {
    stroke-dasharray: 200px;
    stroke-dashoffset: -200px;
}

/* lines for sea level predictions */
$ft-dur: 0.2s;
$ft-delay: 0.15s;

#ft1 {
  $grp-ord: 1;
    animation: write300 $ft-dur linear $grp-ord*$ft-delay forwards;
    -webkit-animation: write300 $ft-dur linear $grp-ord*$ft-delay forwards;
    -moz-animaion: write300 $ft-dur linear $grp-ord*$ft-delay forwards;
    -o-animation: write300 $ft-dur linear $grp-ord*$ft-delay forwards;
}

#ft2 {
  $grp-ord: 2;
    animation: write300 $ft-dur linear $grp-ord*$ft-delay forwards;
    -webkit-animation: write300 $ft-dur linear $grp-ord*$ft-delay forwards;
    -moz-animaion: write300 $ft-dur linear $grp-ord*$ft-delay forwards;
    -o-animation: write300 $ft-dur linear $grp-ord*$ft-delay forwards;
}

#ft3 {
  $grp-ord: 3;
    animation: write300 $ft-dur linear $grp-ord*$ft-delay forwards;
    -webkit-animation: write300 $ft-dur linear $grp-ord*$ft-delay forwards;
    -moz-animaion: write300 $ft-dur linear $grp-ord*$ft-delay forwards;
    -o-animation: write300 $ft-dur linear $grp-ord*$ft-delay forwards;
}
/* annotations for sea level predictions */
/* 1 ft */
#num1 {
  $grp-ord: 4;
    animation: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
    -webkit-animation: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
    -moz-animaion: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
    -o-animation: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
}
#ft1_f {
  $grp-ord: 5;
    animation: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
    -webkit-animation: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
    -moz-animaion: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
    -o-animation: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
}
#ft1_t {
  $grp-ord: 6;
    animation: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
    -webkit-animation: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
    -moz-animaion: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
    -o-animation: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
}
/* 2 ft */
#num2 {
  $grp-ord: 7;
    animation: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
    -webkit-animation: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
    -moz-animaion: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
    -o-animation: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
}
#ft2_f {
  $grp-ord: 8;
    animation: write200 $ft-dur linear $grp-ord*$ft-delay forward;
    -webkit-animation: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
    -moz-animaion: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
    -o-animation: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
}
#ft2_t {
  $grp-ord: 9;
    animation: write200 $ft-dur linear $grp-ord*$ft-delay forward;
    -webkit-animation:  write200 $ft-dur linear $grp-ord*$ft-delay forwards;
    -moz-animaion: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
    -o-animation: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
}
/* 3ft */
#num3 {
  $grp-ord: 10;
    animation: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
    -webkit-animation: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
    -moz-animaion: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
    -o-animation: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
}
#ft3_f {
  $grp-ord: 11;
    animation: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
    -webkit-animation: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
    -moz-animaion: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
    -o-animation: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
}
#ft3_t {
  $grp-ord: 12;
    animation: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
    -webkit-animation: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
    -moz-animaion: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
    -o-animation: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
}

/* intakes line */
#intake {
  $grp-ord: 13;
    animation: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
    -webkit-animation: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
    -moz-animaion:write200 $ft-dur linear $grp-ord*$ft-delay forwards;
    -o-animation: write200 $ft-dur linear $grp-ord*$ft-delay forwards;
}

/* letter writing animation */
#intakes-text, #arrow_intake, #cities {
    stroke-dasharray: 200px;
    stroke-dashoffset: -200px;
}

/* define vars for letter timing */
$slr-dur: 0.3s;
$slr-delay: 0.1s;

/* each letter is animated individually so time sequentially */
#drink_d {
  $grp-ord: 1;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#drink_r {
  $grp-ord: 2;
   animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}

#drink_i {
  $grp-ord: 3;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#drink_n {
  $grp-ord: 4;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#drink_k {
  $grp-ord: 5;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#ing_i {
  $grp-ord: 6;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#ing_n {
  $grp-ord: 7;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#ing_g {
  $grp-ord: 8;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}

#arrow_intake {
  $grp-ord: 4;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}

#water_w {
  $grp-ord: 5;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#water_a {
  $grp-ord: 6;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#water_t {
  $grp-ord: 7;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#water_e {
  $grp-ord: 8;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#water_r {
  $grp-ord: 9;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#intakes_i {
  $grp-ord: 10;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#intakes_n {
  $grp-ord: 11;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#intakes_t {
  $grp-ord: 12;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#intakes_a {
  $grp-ord: 13;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#intakes_k {
  $grp-ord: 14;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#intakes_e {
  $grp-ord: 15;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#intakes_s {
  $grp-ord: 16;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}

/* cities */
#philly_p {
  $grp-ord: 1;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#philly_h {
  $grp-ord: 2;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#philly_i {
  $grp-ord: 3;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#philly_l1 {
  $grp-ord: 4;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#philly_a {
  $grp-ord: 5;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#philly_d {
  $grp-ord: 6;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#philly_e {
  $grp-ord: 7;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#philly_l2 {
  $grp-ord: 8;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#philly_p2 {
  $grp-ord: 9;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#philly_h2 {
  $grp-ord: 10;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#philly_i2 {
  $grp-ord: 11;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#philly_a2 {
  $grp-ord: 12;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#arrow_philly {
  $grp-ord: 12;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#arrow_camden {
  $grp-ord: 2;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#camden_c {
  $grp-ord: 3;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#camden_a {
  $grp-ord: 4;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#camden_m {
  $grp-ord: 5;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#camden_d {
  $grp-ord: 6;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#camden_e {
  $grp-ord: 7;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}
#camden_n {
  $grp-ord: 8;
    animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -webkit-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -moz-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;
    -o-animation: write200 $slr-dur linear $slr-delay*$grp-ord forwards;

}




@keyframes write500 {
    0% {stroke-dashoffset: -500px}
    100% {stroke-dashoffset: 0px;}
}

@-o-keyframes write500 {
    0% {stroke-dashoffset: -500px}
    100% {stroke-dashoffset: 0px;}
}

@-moz-keyframes write500 {
    0% {stroke-dashoffset: -500px}
    100% {stroke-dashoffset: 0px;}
}

@-webkit-keyframes write500 {
    0% {stroke-dashoffset: -500px}
    100% {stroke-dashoffset: 0px;}
}

@keyframes write300 {
    0% {stroke-dashoffset: -300px}
    100% {stroke-dashoffset: 0px;}
}
@-o-keyframes write300 {
    0% {stroke-dashoffset: -300px}
    100% {stroke-dashoffset: 0px;}
}
@-moz-keyframes write300 {
    0% {stroke-dashoffset: -300px}
    100% {stroke-dashoffset: 0px;}
}
@-webkit-keyframes write300 {
    0% {stroke-dashoffset: -300px}
    100% {stroke-dashoffset: 0px;}
}

@keyframes write200 {
    0% {stroke-dashoffset: -200px}
    100% {stroke-dashoffset: 0px;}
}
@-o-keyframes write200 {
    0% {stroke-dashoffset: -200px}
    100% {stroke-dashoffset: 0px;}
}
@-moz-keyframes write200 {
    0% {stroke-dashoffset: -200px}
    100% {stroke-dashoffset: 0px;}
}
@-webkit-keyframes write200 {
    0% {stroke-dashoffset: -200px}
    100% {stroke-dashoffset: 0px;}
}

</style>
