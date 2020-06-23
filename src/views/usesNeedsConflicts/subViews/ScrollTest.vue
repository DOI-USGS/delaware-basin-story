<template>
  <div id="scroll-test">
    <div class="usa-prose">
      <p>scroll triggers and Vue transitions</p>
      <div id="one">
        <p v-custom-scroll>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div id="two">
        <p v-custom-scroll>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div id="three">
        <p v-custom-scroll>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div id="five">
        <p v-custom-scroll>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
    <div class="video-container">
      <video
        id="video-start-on-scroll"
        playsinline
        width="100%"
        muted
        loop
        poster="@/assets/salinity/salinityRoad/images/comingSoon.jpg"
      >
        <source
          src="https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/delaware-basin-story/related-materials/sample-mp4-file.mp4"
          type="video/mp4"
        >
      </video>
    </div>
    <div id="video-container-small" class="video-container-small">
      <div class="video-small-internal-containers">
        <video
          id="video-group-with-text"
          playsinline
          width="320"
          height="240"
          muted
          loop
          poster="@/assets/salinity/salinityRoad/images/comingSoon.jpg"
        >
          <source
            src="https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/delaware-basin-story/related-materials/sample-mp4-file.mp4"
            type="video/mp4"
          >
        </video>
      </div>
      <div class="scroll-box">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p v-custom-scroll>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p v-custom-scroll>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p v-custom-scroll>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p v-custom-scroll>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p v-custom-scroll>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p v-custom-scroll>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p v-custom-scroll>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      name:'ScrollTest',
      mounted() {
          this.startObserverOne();
          this.startObserverTwo();
      },
      methods: {
          startObserverOne() {
              const video = document.querySelector("#video-start-on-scroll");
              const observer = new IntersectionObserver(function(entries) {
                  if(entries[0]['isIntersecting'] === true) {
                      if(entries[0]['intersectionRatio'] > 0.5) {
                          video.play();
                      }
                      else {
                          video.pause();
                      }
                  }
                  else {
                      video.pause();
                  }
              }, { threshold: [0, 0.5] });

              observer.observe(document.querySelector("#video-start-on-scroll"));
          },
          startObserverTwo() {
              const video = document.querySelector("#video-group-with-text");
              const observer = new IntersectionObserver(function(entries) {
                  if(entries[0]['isIntersecting'] === true) {
                      if(entries[0]['intersectionRatio'] > 0.9) {
                          video.play();
                      }
                      else {
                          video.pause();
                      }
                  }
                  else {
                      video.pause();
                  }
              }, { threshold: [0, 0.9] });

              observer.observe(document.querySelector("#video-container-small"));
          }
      }
  }

</script>

<style scoped lang="scss">
  .usa-prose {
    p {
      padding: 3em;
      transition-delay: 0.1s;
    }

    #one {
      .before-enter {
        opacity: 0;
        transform: translateY(100px);
        transition: all 2s ease-out;
      }
      .enter {
        opacity: 1;
        transform: translateY(0px);
      }
    }

    #two {
      .before-enter {
        opacity: 0;
        transform: translateX(100px);
        transition: all 1s ease-out;
      }
      .enter {
        opacity: 1;
        transform: translateY(0px);
      }
    }

    #three {
      .before-enter {
        opacity: 0;
        transform: translateY(100px);
        transition: all 1s cubic-bezier(.41,.01,.57,1.61);
      }
      .enter {
        opacity: 1;
        transform: translateY(0px);
      }
    }

    #four {
      .before-enter {
        opacity: 0;
        transform: translateY(100px);
        transition: all 2s ease-out;
      }
      .enter {
        opacity: 1;
        transform: translateY(0px);
      }
    }

    #five {
      .before-enter {
        opacity: 0;
        transform: translateY(100px);
        transition: all 2s ease-out;
      }
      .enter {
        opacity: 1;
        transform: translateY(0px);
      }
    }
  }


.video-container {
  width: 100%;
  background-color: black;
  margin: 0 auto;
  display: block;
  #video-start-on-scroll {

  }
}


  /* the following section controls the small video and scrolling text */

  .video-container-small {
    background-color: black;
    display: flex;
    flex-direction: column;
    .before-enter {
      opacity: 0;
      transform: translateY(100px);
      transition: all 2s ease-out;
    }
    .enter {
      opacity: 1;
      transform: translateY(0px);
    }
    .scroll-box {
      margin: 0;
      height: 240px;
      overflow-y: scroll;
      p {
        color: white;
        padding: 0.2em 2em 0.2em 2em;


      }
    }
    video {
      padding-left: 1em;
    }
  }

  @media only screen and (min-width: 600px) {
    .video-container-small {
      flex-direction: row;
    }
  }

</style>
