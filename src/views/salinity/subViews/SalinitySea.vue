<template>
  <section
    id="salinity-sea"
  >
    <!-- <div class="side-by-side"> -->

    <div
      id="salinity-vis"
      class="vis-content-side"
    >
      <div class="outer">
        <img
          id="map"
          src="@/assets/salinity/salinitySea/images/zoom_map_big.png"
        >
        <svg
          id="test"
          xmlns="http://www.w3.org/2000/svg"
          width="1321"
          height="830.92"
          viewBox="0 0 2284.73 1459"
        >
          <path
            id="mask"
            d="M784 1322l-13-10c-6-6-4-17 4-21 2-2 7-17 5-19l-4-2c-11 2-16-5-21-13-2-5-4-9-11-8l-5-5-28-35c-9-10-18-20-25-30-9-11-10-24-7-37l20-77c2-10 4-21 2-31-3-15-15-21-29-24l-13-1a8 8 0 01-4-1c-2-2-3-18-2-20 2-3 4-7 3-10 0-7-2-13-4-20 0-4-1-8 5-9 3 0 7-2 8-5 7-15 20-23 32-33 19-14 35-32 46-53l49-98c4-8 11-14 18-19 33-30 71-52 110-73 10-6 20-11 29-18 13-9 28-5 42-5s28 3 41-1c16-5 31-13 40-31 3-6 9-11 15-15 6-3 13 1 17 7l4 3c7 0 16 1 19-2 5-7 8-16 9-24 1-7-3-13-3-20-1-11-4-22-1-32 3-17 16-27 31-33l31-10c3-1 7-4 8-7 4-16 14-27 27-36l33-20c11-8 21-18 33-25l51-8c-13 4-24 12-36 20-3 2-4 8-5 12-3 11-4 12-15 13-4 0-9 3-11 6-5 9-14 12-25 13-10 1-18 6-24 16l-23 40c-1 2-4 4-6 4-10-1-15 6-22 10-4 2-9 5-14 5-12 1-18 9-16 21 3 15 6 30 7 45 1 22-12 36-34 35-17-1-30 6-42 17-16 14-37 19-57 24-28 7-57 13-85 21-20 6-37 18-49 36a15 15 0 01-8 5c-22 5-39 18-50 37s-21 40-31 60c-5 8-12 15-17 24-5 10-12 21-14 32-6 23-18 39-39 50a34 34 0 00-10 7c-8 8-10 16-4 25a79 79 0 0034 28c16 7 17 19 15 31l-12 48c-2 12-1 25-1 37v10c-1 9-4 12-14 10l-4 3c-3 8 1 17 9 21a16 16 0 004 2c19 5 34 19 51 30 5 3 12 4 15 9a120 120 0 0116 24c8 15 13 31 29 41a33 33 0 0011 4c11 2 14 4 16 16 3 17 5 18 22 20 13 2 27 4 37 14z"
            fill="none"
            stroke="#00000"
            stroke-miterlimit="10"
          />
          <path
            id="saltmvmt"
            style="fill:none;stroke:#00000;stroke-miterlimit:10;"
            d="M720.18,848.47c17.22-31.75,25.19-45.73,23.72-46.2-2-.63-8.22,17.29-15.73,28.81-19.87,30.48-40.45,61.11-41.61,61.39-9.18,2.23,6.77-12.76,23.72-30.29,5.5-5.7,9.53-9.82,14.32-17.79,3.43-5.69,8.06-13.78,13.29-24.45,16.33-33.3,26.12-48.35,40.05-73.84,4.29-7.85,22.21-31.91,33.06-45.1-12.54,10.86-40.46,47.6-60.06,88.31-4.42,9.19-5.1,21.72-18.78,41.05-5.72,8.08-11.54,15-16.41,18.11"
          />
          <g id="saltline">
            <path
              id="dash"
              d="M732.81,932c10.07,5.29,20.81,9.16,30.79,14.61a1.92,1.92,0,0,0,2.32-3c-11.73-11.77-26.64-19.56-39.71-29.65a98.61,98.61,0,0,1-10.4-9.19l-2.32,3a388.07,388.07,0,0,0,48.61,28q7.1,3.35,14.39,6.27a1.92,1.92,0,0,0,2.16-.88,2,2,0,0,0-.3-2.32c-9.74-11.87-24.61-17.64-37.3-25.6a67.45,67.45,0,0,1-9.87-7.35c-1.81-1.66-4.52,1-2.71,2.71,11.21,10.29,25.95,15.44,38.09,24.41a50.74,50.74,0,0,1,9.09,8.54l1.86-3.2c-17.08-6.82-33.3-15.7-48.9-25.38q-6.66-4.12-13.18-8.47c-1.85-1.23-3.8,1.47-2.32,3,11.61,12,26.53,19.89,39.73,29.88a98.39,98.39,0,0,1,10.38,9l2.31-3c-10-5.46-20.72-9.33-30.79-14.61-2.18-1.15-4.12,2.16-1.93,3.3Z"
              transform="translate(-712.58 -904.2)"
            />
            <path
              id="s"
              d="M834.78,951.67a1.93,1.93,0,0,1-1-.24,3.61,3.61,0,0,0-1.76-.32c-5,0-14.59,3.63-16.67,5.75a12.4,12.4,0,0,0,1.52.36c2.08.44,9.87,2,11.19,2.84.68.4,2.48,2.16,2.64,3.72a1.61,1.61,0,0,1-.64,1.63c-1.28,1-8,4-9.71,4-1.52,0-4.44-1.16-4.56-2.2a1,1,0,0,1,.2-.68c.8-1.28,9.2-2.71,9.36-3.63,0,0-.12,0-.2,0l-1-.2c-3.2-.84-9.95-1.52-12.35-4a3.85,3.85,0,0,1-.88-2.16,4,4,0,0,1,.8-3.19c1.88-1.76,11.71-6.44,19.14-6.44a7.5,7.5,0,0,1,6.07,2.64,1.39,1.39,0,0,1,.28.6C837.29,950.87,835.78,951.67,834.78,951.67Z"
              transform="translate(-712.58 -904.2)"
            />
            <path
              id="a"
              d="M856.23,968.41a4.16,4.16,0,0,1-3.07-1.32c-.56-.72-1.36-4.23-1.68-5.31a82.46,82.46,0,0,1-10,1.84c-1.2,2.39-2,5-3,7.43a10.34,10.34,0,0,1-.68,1.36,3.53,3.53,0,0,1-2.4,1,1.37,1.37,0,0,1-1.52-1.16c-.24-4.28,9.71-25.7,10.67-26.34a6.21,6.21,0,0,1,3.32-1,3.25,3.25,0,0,1,2.44.88c2.56,2.88,7.47,17,7.91,20.58C858.31,967.69,857.71,968.41,856.23,968.41Zm-9-18.82a75.52,75.52,0,0,0-4,9.19,29.43,29.43,0,0,1,6.88-1.72C849.36,955.06,847.84,950.79,847.24,949.59Z"
              transform="translate(-712.58 -904.2)"
            />
            <path
              id="l"
              d="M877.89,970c-1,1.24-7.68,4.24-9.63,4.68-.16,0-.32,0-.52,0a6.62,6.62,0,0,1-3.48-1.52,3.07,3.07,0,0,1-.64-1.64c-.56-4.6-1.08-23.62-.2-27.18a1.55,1.55,0,0,1,1.64-1.16,3.35,3.35,0,0,1,2.6,1.48,3.25,3.25,0,0,1,.32,1c.4,3.16-.48,16.83.28,23a5.84,5.84,0,0,0,.12.88c2.15-.6,5.51-1.72,6.47-2.08a2.52,2.52,0,0,1,.88-.2c.8,0,2.32.48,2.48,1.72A1.23,1.23,0,0,1,877.89,970Z"
              transform="translate(-712.58 -904.2)"
            />
            <path
              id="t"
              d="M896.07,943.71a8.5,8.5,0,0,1-1.44.4c-1.76.36-3.52.64-5.28,1-.6.08-1,.16-1.08.28-.48.88-.83,20.5-.92,23.3,0,2.52-.11,4.44-.19,4.8s-.72.84-1.56.84a3.43,3.43,0,0,1-3.44-2.72c-.16-1.56.08-8.23.32-14.43.2-4.51.4-8.87.52-10.91a17,17,0,0,1-4.48.8c-1.4,0-3.75-1.28-3.91-2.6-.2-1.64,2.47-1.31,3.43-1.47,1.44-.25,3-.88,5.48-1.4a49,49,0,0,1,10.83-1,2.5,2.5,0,0,1,2.48,1.84A1.29,1.29,0,0,1,896.07,943.71Z"
              transform="translate(-712.58 -904.2)"
            />
            <path
              id="f"
              d="M923.44,963.38a39.09,39.09,0,0,1-5.2,1c-1.84.29-3.8.6-5,.84,0,1.24.08,5-.28,6a2.32,2.32,0,0,1-2.07,1.52,1.91,1.91,0,0,1-.8-.16c-.64-.28-1.36-3.2-1.68-6a61.85,61.85,0,0,1-.56-6.63c0-2.2.84-16.07,1.4-16.23a36.59,36.59,0,0,1,8.31-1.39A5.67,5.67,0,0,1,922,944a2.06,2.06,0,0,1,.6,1.12,1.11,1.11,0,0,1-.68,1.2,5.64,5.64,0,0,1-1.24.28,41.39,41.39,0,0,0-6.72,1.16,68.36,68.36,0,0,0-.72,13,36,36,0,0,1,6.6-1c1.12,0,4,.92,4.23,2.56A1,1,0,0,1,923.44,963.38Z"
              transform="translate(-712.58 -904.2)"
            />
            <path
              id="r"
              d="M936.38,962.26c1.76,1.08,4.08,2.32,6.19,3.55a1.48,1.48,0,0,1,.72,1c.08.84-1.44,1.72-2.75,1.72a6.82,6.82,0,0,1-3.36-1.36,49.17,49.17,0,0,0-5.12-3.07c.28,1.27.8,2.91.88,3.51.16,1.2-1.12,1.6-2,1.6a3.23,3.23,0,0,1-2.59-1.24c-.8-1.16-1.56-4-1.92-7-.12-.84-.16-1.72-.2-2.6-.16-4.12.8-9.95,1.44-10a60.12,60.12,0,0,1,6.91-.4,32.32,32.32,0,0,1,8.35.84c2.52.8,5.72,2.64,6,4.88C949.37,957.46,939.18,961.34,936.38,962.26Zm-.72-10.75c-1.12,0-2.24,0-3.32.12a27.7,27.7,0,0,0-.68,7.71c3.6-1.12,11.75-4.88,11.67-6.67C942.57,952,939.42,951.51,935.66,951.51Z"
              transform="translate(-712.58 -904.2)"
            />
            <path
              id="o"
              d="M958,966.05a7.29,7.29,0,0,1-7.11-6.35c-.48-3.92,2.24-10.59,7.91-10.59a3.82,3.82,0,0,1,2.64.84c1.68.08,4.16,1.24,4.68,5.51,0,.48.12,1,.12,1.6C966.23,961.14,962.19,966.05,958,966.05Zm3.4-12.18a2.28,2.28,0,0,0-.88-.16c-2.76,0-5.75,4.19-5.43,6.59.08.64.28,1,1,1a6.07,6.07,0,0,0,4-2.32,10.88,10.88,0,0,0,1.36-5.07Z"
              transform="translate(-712.58 -904.2)"
            />
            <path
              id="n"
              d="M993.48,965.29c.12,1.52-2.24,2.12-3.16,2.12a2.43,2.43,0,0,1-1.24-.28,77,77,0,0,1-6.43-6c-1.64-1.64-3.32-3.32-5.08-4.92.2,4,.36,10.67.2,12.39a1.27,1.27,0,0,1-1.32,1.24c-1.64,0-3.47-2.24-3.63-3.48-.24-2.12.32-13.9,0-16.7-.08-1.08,1.28-1.72,2.31-1.72a2.5,2.5,0,0,1,1.28.36c.52.4,3.64,3.48,6.68,6.51,2,2,4.15,4.12,5.55,5.56-.16-4-.4-12.47,0-14.91a1.26,1.26,0,0,1,1.36-1,4.29,4.29,0,0,1,3.76,3.44,16.47,16.47,0,0,1,0,2.84A126.53,126.53,0,0,0,993.48,965.29Z"
              transform="translate(-712.58 -904.2)"
            />
            <path
              id="t2"
              d="M1017.61,943.71a8.5,8.5,0,0,1-1.44.4c-1.76.36-3.52.64-5.27,1-.6.08-1,.16-1.08.28-.48.88-.84,20.5-.92,23.3,0,2.52-.12,4.44-.2,4.8s-.72.84-1.56.84a3.43,3.43,0,0,1-3.44-2.72c-.16-1.56.08-8.23.32-14.43.2-4.51.4-8.87.52-10.91a17,17,0,0,1-4.47.8c-1.4,0-3.76-1.28-3.92-2.6-.2-1.64,2.48-1.31,3.44-1.47,1.44-.25,3-.88,5.47-1.4a49.07,49.07,0,0,1,10.83-1,2.5,2.5,0,0,1,2.48,1.84A1.29,1.29,0,0,1,1017.61,943.71Z"
              transform="translate(-712.58 -904.2)"
            />
            <animateMotion
              dur="12s"
              repeatCount="indefinite"
            >
              <mpath href="#saltmvmt" />
            </animateMotion>
          </g>
        </svg>
        <svg
          v-if="isSectionInView"
          id="seasalt-svg"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2284.73 1459"
        >
          <path
            id="ft1"
            d="M1119 665l-9-36c-6-23-9-32-8-33 1 0 24 73 26 73l-19-67"
          />
          <path
            id="ft2"
            d="M1181 617l-23-15-37-24c0-1 64 36 65 35l-58-37"
          />
          <path
            id="ft3"
            d="M1115 531l68 17c-1 1-76-16-76-13l34 11 35 10"
          />
          <path
            id="intake"
            d="M1282 380l48 48"
          />
          <g id="slr1ft">
            <path
              id="num1"
              d="M1114 691l12-7v18"
            />
            <path
              id="f3a"
              d="M1151 709l-1-9 1-19 10-1"
            />
            <path
              id="f3b"
              d="M1163 699l-11 1"
            />
            <path
              id="t5a"
              d="M1175 679l-1 29"
            />
            <path
              id="t5b"
              d="M1167 681l18-4"
            />
          </g>
          <g id="slr2ft">
            <path
              id="num2"
              d="M1210 614a21 21 0 016-4c2-1 6-3 8-1a4 4 0 011 3c0 2-2 3-3 4-2 2-4 4-6 9l9-1"
            />
            <path
              id="f2a"
              d="M1244 633l-1-9 1-19 10-1"
            />
            <path
              id="f2b"
              d="M1256 623l-11 1"
            />
            <path
              id="t4a"
              d="M1268 603l-1 29"
            />
            <path
              id="t4b"
              d="M1260 605l18-4"
            />
          </g>
          <g id="slr3ft">
            <path
              id="num3"
              d="M1209 539l13-3 3 1-7 6a8 8 0 015 2 7 7 0 012 3c1 3-4 8-11 11"
            />
            <path
              id="f1a"
              d="M1239 561l-1-9 1-19 10-1"
            />
            <path
              id="f1b"
              d="M1251 551l-11 1"
            />
            <path
              id="t3a"
              d="M1263 531l-1 29"
            />
            <path
              id="t3b"
              d="M1255 533l18-4"
            />
          </g>
          <g id="intakestext">
            <path
              id="d"
              d="M1111 290c0 3-1 12 1 18a68 68 0 0010-4l9-6c2-1 4-3 4-5l-3-3c-5-2-21-3-24-3"
            />
            <path
              id="r1"
              d="M1147 310a34 34 0 01-2-7 35 35 0 010-12 22 22 0 016-1 17 17 0 019 2l3 3-4 3-8 4-3 1 9 6"
            />
            <path
              id="i1"
              d="M1173 293v14"
            />
            <path
              id="n1"
              d="M1185 309v-17l16 15 1-20"
            />
            <path
              id="k1a"
              d="M1215 287v22"
            />
            <path
              id="k1b"
              d="M1230 292l-13 8a20 20 0 003 3 21 21 0 008 4"
            />
            <path
              id="i2"
              d="M1239 293v14"
            />
            <path
              id="n2"
              d="M1251 307v-17l16 15 1-20"
            />
            <path
              id="g"
              d="M1293 288a26 26 0 00-5 2c-3 2-8 4-9 9 0 1-1 4 1 6 3 3 9 1 10 0a17 17 0 007-5l-3-2-8 2"
            />
            <path
              id="w"
              d="M1025 339l6 20 7-13 7 13 7-20"
            />
            <path
              id="a1a"
              d="M1057 364l4-12 2-4 4-10a3 3 0 012 0 4 4 0 012 2l6 19"
            />
            <path
              id="a1b"
              d="M1064 354l12-4"
            />
            <path
              id="t1b"
              d="M1081 336l19-3"
            />
            <path
              id="t1a"
              d="M1089 365l1-30"
            />
            <path
              id="e1a"
              d="M1115 336l-11 2a54 54 0 001 25l9-2"
            />
            <path
              id="e1b"
              d="M1114 353a17 17 0 00-8 1"
            />
            <path
              id="r2"
              d="M1125 360a34 34 0 01-2-7 35 35 0 010-12 22 22 0 016-1 17 17 0 019 2l3 3-4 3-8 4-3 1 9 6"
            />
            <path
              id="i3"
              d="M1164 344v14"
            />
            <path
              id="n3"
              d="M1176 360v-17l16 15 1-20"
            />
            <path
              id="t2b"
              d="M1200 336l19-3"
            />
            <path
              id="t2a"
              d="M1208 365l1-30"
            />
            <path
              id="a2a"
              d="M1220 364l4-12 2-4 4-10a3 3 0 012 0 4 4 0 012 2l6 19"
            />
            <path
              id="a2b"
              d="M1227 354l12-4"
            />
            <path
              id="k2a"
              d="M1250 337v23"
            />
            <path
              id="k2b"
              d="M1266 340l-16 11"
            />
            <path
              id="k2c"
              d="M1264 357l-13-5"
            />
            <path
              id="e2a"
              d="M1285 336l-11 2a54 54 0 001 25l9-2"
            />
            <path
              id="e2b"
              d="M1284 353a17 17 0 00-8 1"
            />
            <path
              id="s"
              d="M1312.2,337.84c-7.84-4.57-15.59-4.71-19.07-1-.43.46-2.28,2.44-1.87,4.69,1.11,6.18,17.51,5.11,18.87,11.31.58,2.67-1.85,5.62-4,7-4.34,2.78-9.35.31-9.62.17"
              style="fill: none;stroke: #000;stroke-linecap: round;stroke-linejoin: round;stroke-width: 5px"
            />
          </g>
        </svg>
      </div>
    </div>
    <div class="text-content-side">
      <div class="container-section-title">
        <img
          src="@/assets/salinity/salinitySea/images/GreenLarge.png"
          alt="image of watercolor cloud of color"
        >
        <h1 class="section-title">
          Salinity
        </h1>
      </div>
      <div>
        <div class="sea-salt-text-section">
          <h3>The Salt Wedge</h3>
          <p>As freshwater spills from the river into the saltier, ocean-influenced waters of the Delaware Bay, the less-dense river water forms a raised wedge that constantly pushes downstream against the intruding ocean. The bounds of that wedge – the “salt front” – migrate up and down the river channel over the daily cycle of ocean tides, the seasonal cycle of lower and higher river flows, and the multi-year fluctuations into and out of droughts. </p>
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
            class="sea-salt-text-section not-visible"
          >
            <h3>Sea level Rise</h3>
            <p>While these natural variations usually pose no problems, sea level rise is expected to push the salt front so far inland – especially during droughts – that water at the major Trenton, NJ intake could be contaminated. Salty water corrodes surface water intake pipes, raises the cost of drinking water treatment, and is potentially toxic to aquatic plants and fish. </p>
            <p>Monitoring, modeling, and management of river flows are essential to our peaceful coexistence with the salt front. Remember those Supreme-Court-mandated flow targets at Montague and Trenton? One key motivation for those targets is to keep pressing the salt front toward the ocean to protect our current uses of freshwater in the lower Basin. Good data and models allow smart timing of reservoir releases to maintain the flow targets and the salt front location. </p>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
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
                    targetElement.classList.remove('not-visible')
                    targetElement.classList.add('visible');

                } else if (isVisible !== true) {
                    this.isSectionInView = false;
                    targetElement.classList.remove('visible');
                    targetElement.classList.add('not-visible')
                }
            }
        }
    }
</script>

<style scoped lang="scss">
  .sea-salt-text-section {
    padding-bottom: 15rem;
  }
  #sea-salt-rise-text {
    .sea-salt-text-section {
      background-color: #8b00ff;
      opacity: 0.5;
      transition: all 2s ease-out;
    }

    .sea-salt-text-section .visible {
      opacity: 1;
    }
  }

/* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    section {
      padding-bottom: 40em;
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

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {}

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {}

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {}

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
    width: 65%;
}

.right {
    width: 35%;
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
#dash, #s, #a, #l, #t, #f, #r, #o, #n, #t2 {
    stroke: black;
    fill: black;
    stroke-width: 1px;
}

.outer {
    background-color: white;
    position: sticky;
    display: inline-block;
    text-align: center;
    top: 0;
    padding-top: 20vh;
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
    padding-top: 20vh;
}

/* markers for sea level rise */

#seasalt-svg {
    stroke: black;
    fill: transparent;
    stroke-linecap:round;
    stroke-linejoin:round;
    stroke-width: 5.5px;
}

#ft1, #ft2, #ft3 {
    stroke-width: 5.5px;
    stroke-dasharray: 300px;
    stroke-dashoffset: -300px;
}

#num1, #num2, #num3, #f2a, #f2b, #t4a, #t4b, #f3a, #f3b, #t5a, #t5b, #f1a, #f1b, #t3a, #t3b, #intake {
    stroke-dasharray: 200px;
    stroke-dashoffset: -200px;
}

/* lines for sea level predictions */
#ft1 {
    Animation: write300 .4s ease-in-out 0s forwards;
    -webkit-animation: write300 .4s ease-in-out 0s forwards;
    -moz-animaion: write300 .4s ease-in-out 0s forwards;
    -o-animation: write300 .4s ease-in-out 0s forwards;
}

#ft2 {
    Animation: write300 .4s ease-in-out 0.2s forwards;
    -webkit-animation: write300 .4s ease-in-out 0.2s forwards;
    -moz-animaion: write300 .4s ease-in-out 0.2s forwards;
    -o-animation: write300 .4s ease-in-out 0.2s forwards;
}

#ft3 {
    Animation: write300 .4s ease-in-out 0.4s forwards;
    -webkit-animation: write300 .4s ease-in-out 0.4s forwards;
    -moz-animaion: write300 .4s ease-in-out 0.4s forwards;
    -o-animation: write300 .4s ease-in-out 0.4s forwards;
}
/* annotations for sea level predictions */
/* 1 ft */
#num1 {
    Animation: write200 .2s ease-in-out 0.6s forwards;
    -webkit-animation: write200 .2s ease-in-out 0.6s forwards;
    -moz-animaion: write200 .2s ease-in-out 0.6s forwards;
    -o-animation: write200 .2s ease-in-out 0.6s forwards;
}
#f3a, #f3b {
    Animation: write200 .3s ease-in-out 0.7s forwards;
    -webkit-animation: write200 .3s ease-in-out 0.7s forwards;
    -moz-animaion: write200 .3s ease-in-out 0.7s forwards;
    -o-animation: write200 .3s ease-in-out 0.7s forwards;
}
#t5a, #t5b {
    Animation: write200 .3s ease-in-out 0.9s forwards;
    -webkit-animation: write200 .3s ease-in-out 0.9s forwards;
    -moz-animaion: write200 .3s ease-in-out 0.9s forwards;
    -o-animation: write200 .3s ease-in-out 0.9s forwards;
}
/* 2 ft */
#num2 {
    Animation: write200 .2s ease-in-out 1.1s forwards;
    -webkit-animation: write200 .2s ease-in-out 1.1s forwards;
    -moz-animaion: write200 .2s ease-in-out 1.1s forwards;
    -o-animation: write200 .2s ease-in-out 1.1s forwards;
}
#f2a, #f2b {
    Animation: write200 .3s ease-in-out 1.25s forward;
    -webkit-animation: write200 .3s ease-in-out 1.25s forwards;
    -moz-animaion: write200 .3s ease-in-out 1.25s forwards;
    -o-animation: write200 .3s ease-in-out 1.25s forwards;
}
#t4a, #t4b {
    Animation: write200 .3s ease-in-out 1.45s forward;
    -webkit-animation:  write200 .3s ease-in-out 1.45s forwards;
    -moz-animaion: write200 .3s ease-in-out 1.45s forwards;
    -o-animation: write200 .3s ease-in-out 1.45s forwards;
}
/* 3ft */
#num3 {
    Animation: write200 .2s ease-in-out 1.65s forwards;
    -webkit-animation: write200 .2s ease-in-out 1.65s forwards;
    -moz-animaion: write200 .2s ease-in-out 1.65s forwards;
    -o-animation: write200 .2s ease-in-out 1.65s forwards;
}
#f1a, #f1b {
    Animation: write200 .3s ease-in-out 1.8s forwards;
    -webkit-animation: write200 .3s ease-in-out 1.8s forwards;
    -moz-animaion: write200 .3s ease-in-out 1.8s forwards;
    -o-animation: write200 .3s ease-in-out 1.8s forwards;
}
#t3a, #t3b {
    Animation: write200 .3s ease-in-out 2s forwards;
    -webkit-animation: write200 .3s ease-in-out 2s forwards;
    -moz-animaion: write200 .3s ease-in-out 2s forwards;
    -o-animation: write200 .3s ease-in-out 2s forwards;
}

/* intakes line */
#intake {
    Animation: write200 .2s ease-in-out 2s forwards;
    -webkit-animation: write200 .2s ease-in-out 2s forwards;
    -moz-animaion:write200 .2s ease-in-out 2s forwards;
    -o-animation: write200 .2s ease-in-out 2s forwards;
}

/* letter writing animation */
#d, #r1, #i1, #n1, #k1a, #k1b, #i2, #n2, #g, #w, #a1a, #a1b, #t1a, #t1b, #e1a, #e1b, #r2, #i3, #n3, #t2a, #t2b, #a2a, #a2b,#k2a, #k2b, #k2c, #e2a, #e2b, #s {
    stroke-dasharray: 200px;
    stroke-dashoffset: -200px;
}

/* define vars for letter timing */
/* :root {
	  --anim-time: 0.23s;
    --anim-delay: 0.15s;
    --intake-start: 14s;
} */

/* each letter is animated individually so time sequentially */
#d {
    Animation: write200 0.23s ease-in-out 2s forwards;
    -webkit-animation: write200 0.23s ease-in-out 2s forwards;
    -moz-animation: write200 0.23s ease-in-out 2s forwards;
    -o-animation: write200 0.23s ease-in-out 2s forwards;

}
#r1 {
   Animation: write200 0.23s ease-in-out 2.15s forwards;
    -webkit-animation: write200 0.23s ease-in-out 2.15s forwards;
    -moz-animation: write200 0.23s ease-in-out 2.15s forwards;
    -o-animation: write200 0.23s ease-in-out 2.15s forwards;

}

#i1 {
    Animation: write200 0.23s ease-in-out 2.3s forwards;
    -webkit-animation: write200 0.23s ease-in-out 2.3s forwards;
    -moz-animation: write200 0.23s ease-in-out 2.3s forwards;
    -o-animation: write200 0.23s ease-in-out 2.3s forwards;

}
#n1 {
    animation: write200 0.23s ease-in-out 2.45s forwards;
    -webkit-animation: write200 0.23s ease-in-out 2.45s forwards;
    -moz-animation: write200 0.23s ease-in-out 2.45s forwards;
    -o-animation: write200 0.23s ease-in-out 2.45s forwards;

}
#k1a, #k1b {
    animation: write200 0.23s ease-in-out 2.6s forwards;
    -webkit-animation: write200 0.23s ease-in-out 2.6s forwards;
    -moz-animation: write200 0.23s ease-in-out 2.6s forwards;
    -o-animation: write200 0.23s ease-in-out 2.6s forwards;

}
#i2 {
    animation: write200 0.23s ease-in-out 2.75s forwards;
    -webkit-animation: write200 0.23s ease-in-out 2.75s forwards;
    -moz-animation: write200 0.23s ease-in-out 2.75s forwards;
    -o-animation: write200 0.23s ease-in-out 2.75s forwards;

}
#n2 {
    animation: write200 0.23s ease-in-out 2.9s forwards;
    -webkit-animation: write200 0.23s ease-in-out 2.9s forwards;
    -moz-animation: write200 0.23s ease-in-out 2.9s forwards;
    -o-animation: write200 0.23s ease-in-out 2.9s forwards;

}
#g {
    animation: write200 0.23s ease-in-out 3.05s forwards;
    -webkit-animation: write200 0.23s ease-in-out 3.05s forwards;
    -moz-animation: write200 0.23s ease-in-out 3.05s forwards;
    -o-animation: write200 0.23s ease-in-out 3.05s forwards;

}
#w {
    animation: write200 0.23s ease-in-out 3.2s forwards;
    -webkit-animation: write200 0.23s ease-in-out 3.2s forwards;
    -moz-animation: write200 0.23s ease-in-out 3.2s forwards;
    -o-animation: write200 0.23s ease-in-out 3.2s forwards;

}
#a1a, #a1b {
    animation: write200 0.23s ease-in-out 3.35s forwards;
    -webkit-animation: write200 0.23s ease-in-out 3.35s forwards;
    -moz-animation: write200 0.23s ease-in-out 3.35s forwards;
    -o-animation: write200 0.23s ease-in-out 3.35s forwards;

}
#t1a, #t1b {
    animation: write200 0.23s ease-in-out 3.5s forwards;
    -webkit-animation: write200 0.23s ease-in-out 3.5s forwards;
    -moz-animation: write200 0.23s ease-in-out 3.5s forwards;
    -o-animation: write200 0.23s ease-in-out 3.5s forwards;

}
#e1a, #e1b {
    animation: write200 0.23s ease-in-out 3.65s forwards;
    -webkit-animation: write200 0.23s ease-in-out 3.65s forwards;
    -moz-animation: write200 0.23s ease-in-out 3.65s forwards;
    -o-animation: write200 0.23s ease-in-out 3.65s forwards;

}
#r2 {
    animation: write200 0.23s ease-in-out 3.8s forwards;
    -webkit-animation: write200 0.23s ease-in-out 3.8s forwards;
    -moz-animation: write200 0.23s ease-in-out 3.8s forwards;
    -o-animation: write200 0.23s ease-in-out 3.8s forwards;

}
#i3 {
    animation: write200 0.23s ease-in-out 3.95s forwards;
    -webkit-animation: write200 0.23s ease-in-out 3.95s forwards;
    -moz-animation: write200 0.23s ease-in-out 3.95s forwards;
    -o-animation: write200 0.23s ease-in-out 3.95s forwards;

}
#n3 {
    animation: write200 0.23s ease-in-out 4.1s forwards;
    -webkit-animation: write200 0.23s ease-in-out 4.1s forwards;
    -moz-animation: write200 0.23s ease-in-out 4.1s forwards;
    -o-animation: write200 0.23s ease-in-out 4.1s forwards;

}
#t2a, #t2b {
    animation: write200 0.23s ease-in-out 4.25s forwards;
    -webkit-animation: write200 0.23s ease-in-out 4.25s forwards;
    -moz-animation: write200 0.23s ease-in-out 4.25s forwards;
    -o-animation: write200 0.23s ease-in-out 4.25s forwards;

}
#a2a, #a2b {
    animation: write200 0.23s ease-in-out 4.4s forwards;
    -webkit-animation: write200 0.23s ease-in-out 4.4s forwards;
    -moz-animation: write200 0.23s ease-in-out 4.4s forwards;
    -o-animation: write200 0.23s ease-in-out 4.4s forwards;

}
#k2a, #k2b, #k2c {
    animation: write200 0.23s ease-in-out 4.55s forwards;
    -webkit-animation: write200 0.23s ease-in-out 4.55s forwards;
    -moz-animation: write200 0.23s ease-in-out 4.55s forwards;
    -o-animation: write200 0.23s ease-in-out 4.55s forwards;

}
#e2a, #e2b {
    animation: write200 0.23s ease-in-out 4.7s forwards;
    -webkit-animation: write200 0.23s ease-in-out 4.7s forwards;
    -moz-animation: write200 0.23s ease-in-out 4.7s forwards;
    -o-animation: write200 0.23s ease-in-out 4.7s forwards;

}
#s {
    animation: write200 0.23s ease-in-out 4.85s forwards;
    -webkit-animation: write200 0.23s ease-in-out 4.85s forwards;
    -moz-animation: write200 0.23s ease-in-out 4.85s forwards;
    -o-animation: write200 0.23s ease-in-out 4.85s forwards;

}

@keyframes write500 {
    0% {stroke-dashoffset: -500px}
    100% {stroke-dashoffset: 0px;}
}

@keyframes write300 {
    0% {stroke-dashoffset: -300px}
    100% {stroke-dashoffset: 0px;}
}

@keyframes write200 {
    0% {stroke-dashoffset: -200px}
    100% {stroke-dashoffset: 0px;}
}

</style>
