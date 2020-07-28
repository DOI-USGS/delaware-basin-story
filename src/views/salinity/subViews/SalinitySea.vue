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
              d="M734.8,932.35a226.51,226.51,0,0,1,28.35,12.28c1.71.88,3.23-1.7,1.51-2.59-13.47-7-23.93-18.23-35.75-27.52a105.27,105.27,0,0,0-10.38-7.3c-1.66-1-3.12,1.53-1.51,2.59a267.07,267.07,0,0,0,45.62,24q6.86,2.79,13.86,5.2c1.64.56,2.58-1.89,1.15-2.75q-23.8-14.38-47.1-29.59c-1.63-1.06-3.13,1.54-1.52,2.59q23.29,15.19,47.11,29.59l1.16-2.74a261.74,261.74,0,0,1-46.38-21.21c-4.2-2.44-8.33-5-12.39-7.67L717,909.81c12.93,7.87,23.24,19.18,35.41,28.08a83.88,83.88,0,0,0,10.72,6.74l1.51-2.59a234.29,234.29,0,0,0-29.06-12.59c-1.82-.64-2.61,2.25-.8,2.9Z" 
              transform="translate(-716.32 -906.41)"
            />
            <path
              id="s"
              d="M820.2,942.05c-14.42-8.41-28.67-8.66-35.08-1.82-.79.85-4.19,4.48-3.44,8.62,2.05,11.37,32.22,9.41,34.71,20.81,1.07,4.9-3.4,10.34-7.36,12.87-8,5.11-17.19.57-17.69.31"
              transform="translate(-716.32 -906.41)" 
            />
            <path
              id="ab"
              d="M829.33,970.56l22.07-7.36"
              transform="translate(-716.32 -906.41)"
            />
            <path
              id="aa"
              d="M822,987.11c3.08-8.56,5.78-15.74,7.87-21.21,1.33-3.5,2.45-6.38,3.17-8.21,2.89-7.43,5.42-13.68,7.35-18.4a6.12,6.12,0,0,1,3.68,0,7.13,7.13,0,0,1,3.68,3.68c1.91,3.65,6.16,16.92,11,34.95"
              transform="translate(-716.32 -906.41)"
            />
            <path
              id="l"
              d="M869.5,935.5q.5,24.5,1,49l19-2"
              transform="translate(-716.32 -906.41)"
            />
            <path
              id="ta"
              d="M1111.56,988c.56-17.78,1.17-33.72,1.84-55.17"
              transform="translate(-716.32 -906.41)"
            />
            <path
              id="tb"
              d="M1096.85,934.67l34.94-5.52"
              transform="translate(-716.32 -906.41)"
            />
            <path
              id="fa"
              d="M965.5,955.5h-14"
              transform="translate(-716.32 -906.41)"
            />
            <path
              id="fb"
              d="M951.5,983.5q-1-26-2-52l20-2"
              transform="translate(-716.32 -906.41)"
            />
            <path
              id="r"
              d="M982.91,975.8a63.9,63.9,0,0,1-3.68-34.94,41,41,0,0,1,11-1.84c9.48-.23,15.4,3,16.55,3.68,2.34,1.33,5.64,3.21,5.52,5.52-.05,1-.71,2.12-7.36,5.51-5.28,2.7-8.93,4-14.62,6.59-2.42,1.08-4.37,2-5.61,2.61l16.55,11"
              transform="translate(-716.32 -906.41)"
            />
            <path
              id="o"
              d="M1039.5,941.5c-3.53-1.1-7,.85-9,2-5.78,3.27-11.38,10.68-10,19,.69,4.13,3.44,10.58,9,12,7.14,1.83,14.82-5.67,17-13C1048.83,953.69,1045.69,943.42,1039.5,941.5Z"
              transform="translate(-716.32 -906.41)"
            />
            <path
              id="n"
              d="M1057.5,976.5V945.23l29.43,27.59q.91-18.39,1.84-36.78"
              transform="translate(-716.32 -906.41)"
            />
            <path
              id="ta2"
              d="M906.56,991c.56-17.78,1.17-33.72,1.84-55.17"
              transform="translate(-716.32 -906.41)"
            />
            <path
              id="tb2"
              d="M891.85,937.67l34.94-5.52"
              transform="translate(-716.32 -906.41)"
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
              d="M1079 694l18-10v27"
            />
            <path
              id="f3a"
              d="M1135 722l-1-13 1-30 15-2"
            />
            <path
              id="f3b"
              d="M1153 706l-16 2"
            />
            <path
              id="t5a"
              d="M1172 676l-2 44"
            />
            <path
              id="t5b"
              d="M1160 679l27-6"
            />
          </g>
          <g id="slr2ft">
            <path
              id="num2"
              d="M1192 625a33 33 0 019-6c3-1 9-4 12-1 2 1 2 4 2 4 0 3-3 5-5 7-3 2-6 6-9 13l14-1"
            />
            <path
              id="f2a"
              d="M1244 654l-1-13 1-30 15-1"
            />
            <path
              id="f2b"
              d="M1262 639l-17 2"
            />
            <path
              id="t4a"
              d="M1280 608l-1 45"
            />
            <path
              id="t4b"
              d="M1268 611l28-6"
            />
          </g>
          <g id="slr3ft">
            <path
              id="num3"
              d="M1196 535l20-5 5 2-11 9a12 12 0 018 3 10 10 0 013 5c1 4-6 12-17 17"
            />
            <path
              id="f1a"
              d="M1242 568l-1-13 1-29 15-2"
            />
            <path
              id="f1b"
              d="M1260 553l-16 2"
            />
            <path
              id="t3a"
              d="M1279 523l-2 44"
            />
            <path
              id="t3b"
              d="M1267 526l27-6"
            />
          </g>
          <g id="intakestext">
            <path
              id="d"
              d="M942 227c0 6-2 22 2 33a126 126 0 0018-7c7-3 10-6 17-11 3-3 7-7 7-9 0-3-2-4-5-6-9-4-40-5-44-5"
            />
            <path
              id="r1"
              d="M1008 264a64 64 0 01-3-35 40 40 0 0111-2c9 0 15 3 16 4 3 1 6 3 6 5l-8 6-14 6-6 3 17 11"
            />
            <path
              id="i1"
              d="M1056 233v25"
            />
            <path
              id="n1"
              d="M1078 262v-31l30 27 2-36"
            />
            <path
              id="k1a"
              d="M1133 222v40"
            />
            <path
              id="k1b"
              d="M1161 231l-24 14a38 38 0 006 6 39 39 0 0014 7"
            />
            <path
              id="i2"
              d="M1178 233v25"
            />
            <path
              id="n2"
              d="M1200 258v-31l29 28 2-37"
            />
            <path
              id="g"
              d="M1277 223a48 48 0 00-9 4c-6 3-15 8-17 17 0 1-1 7 2 11 5 5 16 1 18 0a32 32 0 0013-10l-5-3-15 3"
            />
            <path
              id="w"
              d="M784 317l11 37 13-24 13 24 13-37"
            />
            <path
              id="a1a"
              d="M843 363a1149 1149 0 0118-48 6 6 0 014 0 7 7 0 014 4l11 35"
            />
            <path
              id="a1b"
              d="M850 347l22-8"
            />
            <path
              id="t1b"
              d="M887 312l35-6"
            />
            <path
              id="t1a"
              d="M902 365l2-55"
            />
            <path
              id="e1a"
              d="M950 312l-21 3a98 98 0 002 46l17-3"
            />
            <path
              id="e1b"
              d="M948 343a31 31 0 00-15 2"
            />
            <path
              id="r2"
              d="M968 356a64 64 0 01-4-35 41 41 0 0111-2c10 0 16 3 17 4 2 1 5 3 5 5 0 1 0 2-7 6l-15 6-5 3 16 11"
            />
            <path
              id="i3"
              d="M1040 326v26"
            />
            <path
              id="n3"
              d="M1062 356v-31l29 27 2-37"
            />
            <path
              id="t2b"
              d="M1106 312l35-6"
            />
            <path
              id="t2a"
              d="M1121 365l1-55"
            />
            <path
              id="a2a"
              d="M1143 363a1149 1149 0 0118-48 6 6 0 014 0 7 7 0 013 4c2 4 7 17 11 35"
            />
            <path
              id="a2b"
              d="M1150 345l22-8"
            />
            <path
              id="k2a"
              d="M1198 314v42"
            />
            <path
              id="k2b"
              d="M1227 319l-29 21"
            />
            <path
              id="k2c"
              d="M1223 350l-23-8"
            />
            <path
              id="e2a"
              d="M1262 312l-20 3a98 98 0 002 46l16-3"
            />
            <path
              id="e2b"
              d="M1260 343a31 31 0 00-14 2"
            />
            <path
              id="s"
              d="M1312 315c-14-8-28-9-35-2-1 1-4 5-3 9 2 11 32 9 34 21 1 5-3 10-7 13-8 5-17 0-18 0"
              style="fill: none;stroke: #000;stroke-linecap: round;stroke-linejoin: round;stroke-width: 9px"
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
      <div id="salinity-section-text">
        <div id="sea-salt-wedge-text">
          <h3>The Salt Wedge</h3>
          <p>As freshwater spills from the river into the saltier, ocean-influenced waters of the Delaware Bay, the less-dense river water forms a raised wedge that constantly pushes downstream against the intruding ocean.</p>
          <p>The bounds of that wedge – the “salt front” – migrate up and down the river channel over the daily cycle of ocean tides, the seasonal cycle of lower and higher river flows, and the multi-year fluctuations of higher and lower flows.</p>
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
            <h3>While these natural variations usually pose no problems, sea level rise is expected to push the salt front so far inland – especially during droughts – that water at the major Trenton, NJ intake could be contaminated.</h3>
            <p>Salty water corrodes surface water intake pipes, raises the cost of drinking water treatment, and is potentially toxic to aquatic plants and fish.</p>
            <p>Monitoring, modeling, and management of river flows are essential to our peaceful coexistence with the salt front.</p>
            <p>Remember the Supreme-Court-mandated flow targets at Montague and Trenton? One key motivation for setting the targets where they are is to keep pressing the salt front toward the ocean.  Maintaining the target flow is an important tool for protecting our current uses of freshwater in the lower Basin. Good data and models allow smart timing of reservoir releases to maintain the flow targets and the salt front location.</p>
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
#dash, #s, #aa, #ab, #l, #ta, #tb, #fa, #fb, #r, #o, #n, #ta2, #tb2 {
    stroke: black;
    fill: transparent;
    stroke-width: 9px;
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
    stroke-width: 9px;
}

#ft1, #ft2, #ft3 {
    stroke-width: 9px;
    stroke-dasharray: 300px;
    stroke-dashoffset: -300px;
}

#num1, #num2, #num3, #f2a, #f2b, #t4a, #t4b, #f3a, #f3b, #t5a, #t5b, #f1a, #f1b, #t3a, #t3b, #intake {
    stroke-dasharray: 200px;
    stroke-dashoffset: -200px;
}

/* lines for sea level predictions */
#ft1 {
    animation: write300 .4s ease-in-out 0s forwards;
    -webkit-animation: write300 .4s ease-in-out 0s forwards;
    -moz-animaion: write300 .4s ease-in-out 0s forwards;
    -o-animation: write300 .4s ease-in-out 0s forwards;
}

#ft2 {
    animation: write300 .4s ease-in-out 0.2s forwards;
    -webkit-animation: write300 .4s ease-in-out 0.2s forwards;
    -moz-animaion: write300 .4s ease-in-out 0.2s forwards;
    -o-animation: write300 .4s ease-in-out 0.2s forwards;
}

#ft3 {
    animation: write300 .4s ease-in-out 0.4s forwards;
    -webkit-animation: write300 .4s ease-in-out 0.4s forwards;
    -moz-animaion: write300 .4s ease-in-out 0.4s forwards;
    -o-animation: write300 .4s ease-in-out 0.4s forwards;
}
/* annotations for sea level predictions */
/* 1 ft */
#num1 {
    animation: write200 .2s ease-in-out 0.6s forwards;
    -webkit-animation: write200 .2s ease-in-out 0.6s forwards;
    -moz-animaion: write200 .2s ease-in-out 0.6s forwards;
    -o-animation: write200 .2s ease-in-out 0.6s forwards;
}
#f3a, #f3b {
    animation: write200 .3s ease-in-out 0.7s forwards;
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
    animation: write200 .2s ease-in-out 1.1s forwards;
    -webkit-animation: write200 .2s ease-in-out 1.1s forwards;
    -moz-animaion: write200 .2s ease-in-out 1.1s forwards;
    -o-animation: write200 .2s ease-in-out 1.1s forwards;
}
#f2a, #f2b {
    animation: write200 .3s ease-in-out 1.25s forward;
    -webkit-animation: write200 .3s ease-in-out 1.25s forwards;
    -moz-animaion: write200 .3s ease-in-out 1.25s forwards;
    -o-animation: write200 .3s ease-in-out 1.25s forwards;
}
#t4a, #t4b {
    animation: write200 .3s ease-in-out 1.45s forward;
    -webkit-animation:  write200 .3s ease-in-out 1.45s forwards;
    -moz-animaion: write200 .3s ease-in-out 1.45s forwards;
    -o-animation: write200 .3s ease-in-out 1.45s forwards;
}
/* 3ft */
#num3 {
    animation: write200 .2s ease-in-out 1.65s forwards;
    -webkit-animation: write200 .2s ease-in-out 1.65s forwards;
    -moz-animaion: write200 .2s ease-in-out 1.65s forwards;
    -o-animation: write200 .2s ease-in-out 1.65s forwards;
}
#f1a, #f1b {
    animation: write200 .3s ease-in-out 1.8s forwards;
    -webkit-animation: write200 .3s ease-in-out 1.8s forwards;
    -moz-animaion: write200 .3s ease-in-out 1.8s forwards;
    -o-animation: write200 .3s ease-in-out 1.8s forwards;
}
#t3a, #t3b {
    animation: write200 .3s ease-in-out 2s forwards;
    -webkit-animation: write200 .3s ease-in-out 2s forwards;
    -moz-animaion: write200 .3s ease-in-out 2s forwards;
    -o-animation: write200 .3s ease-in-out 2s forwards;
}

/* intakes line */
#intake {
    animation: write200 .2s ease-in-out 2s forwards;
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
    animation: write200 0.23s ease-in-out 2s forwards;
    -webkit-animation: write200 0.23s ease-in-out 2s forwards;
    -moz-animation: write200 0.23s ease-in-out 2s forwards;
    -o-animation: write200 0.23s ease-in-out 2s forwards;

}
#r1 {
   animation: write200 0.23s ease-in-out 2.15s forwards;
    -webkit-animation: write200 0.23s ease-in-out 2.15s forwards;
    -moz-animation: write200 0.23s ease-in-out 2.15s forwards;
    -o-animation: write200 0.23s ease-in-out 2.15s forwards;

}

#i1 {
    animation: write200 0.23s ease-in-out 2.3s forwards;
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
