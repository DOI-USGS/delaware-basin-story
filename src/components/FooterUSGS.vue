<template>
  <div id="footer">
    <footer class="footer">
      <div class="tmp-container">
        <!-- .footer-wrap -->
        <!-- .footer-doi -->
        <div class="footer-doi">
          <!-- footer nav links -->
          <ul class="menu nav">
            <li class="first leaf menu-links menu-level-1">
              <a href="https://www.doi.gov/privacy">DOI Privacy Policy</a>
            </li>
            <li class="leaf menu-links menu-level-1">
              <a href="https://www.usgs.gov/laws/policies_notices.html">Legal</a>
            </li>
            <li class="leaf menu-links menu-level-1">
              <a href="https://www2.usgs.gov/laws/accessibility.html">Accessibility</a>
            </li>
            <li class="leaf menu-links menu-level-1">
              <a href="https://www.usgs.gov/sitemap.html">Site Map</a>
            </li>
            <li class="last leaf menu-links menu-level-1">
              <a href="https://answers.usgs.gov/">Contact USGS</a>
            </li>
          </ul>
          <!--/ footer nav links -->
        </div>
        <!-- /.footer-doi -->

        <hr>

        <!-- .footer-utl-links -->
        <div class="footer-doi">
          <ul class="menu nav">
            <li class="first leaf menu-links menu-level-1">
              <a href="https://www.doi.gov/">U.S. Department of the Interior</a>
            </li>
            <li class="leaf menu-links menu-level-1">
              <a href="https://www.doioig.gov/">DOI Inspector General</a>
            </li>
            <li class="leaf menu-links menu-level-1">
              <a href="https://www.whitehouse.gov/">White House</a>
            </li>
            <li class="leaf menu-links menu-level-1">
              <a href="https://www.whitehouse.gov/omb/management/egov/">E-gov</a>
            </li>
            <li class="leaf menu-links menu-level-1">
              <a href="https://www.doi.gov/pmb/eeo/no-fear-act">No Fear Act</a>
            </li>
            <li class="last leaf menu-links menu-level-1">
              <a href="https://www2.usgs.gov/foia">FOIA</a>
            </li>
          </ul>
        </div>
        <!-- /.footer-utl-links -->
        <!-- .footer-social-links -->
        <div class="footer-social-links">
          <ul class="social">
            <li class="follow">
              Follow
            </li>
            <li class="twitter">
              <a
                href="https://twitter.com/usgs"
                target="_blank"
                aria-label="twitter link"
                @click="runGoogleAnalytics('twitter', 'click', 'user selected twitter social link')"
              >
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter-square' }"><span class="only">Twitter</span></font-awesome-icon>
              </a>
            </li>
            <li class="facebook">
              <a
                href="https://facebook.com/usgeologicalsurvey"
                target="_blank"
                aria-label="facebook link"
                @click="runGoogleAnalytics('facebook', 'click', 'user selected facebook social link')"
              >
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-square' }"><span class="only">Facebook</span></font-awesome-icon>
              </a>
            </li>
            <li class="github">
              <a
                href="https://github.com/usgs"
                target="_blank"
                aria-label="github link"
                @click="runGoogleAnalytics('github', 'click', 'user selected github social link')"
              >
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github' }"><span class="only">GitHub</span></font-awesome-icon>
              </a>
            </li>
            <li class="flickr">
              <a
                href="https://flickr.com/usgeologicalsurvey"
                target="_blank"
                aria-label="flickr link"
                @click="runGoogleAnalytics('flickr', 'click', 'user selected flickr social link')"
              >
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'flickr' }"><span class="only">Flickr</span></font-awesome-icon>
              </a>
            </li>
            <li class="youtube">
              <a
                href="http://youtube.com/usgs"
                target="_blank"
                aria-label="youtube link"
                @click="runGoogleAnalytics('youtube', 'click', 'user selected youtube social link')"
              >
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'youtube-square' }"><span class="only">YouTube</span></font-awesome-icon>
              </a>
            </li>
            <li class="instagram">
              <a
                href="https://instagram.com/usgs"
                target="_blank"
                aria-label="instagram link"
                @click="runGoogleAnalytics('instagram', 'click', 'user selected instagram social link')"
              >
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }"><span class="only">Instagram</span></font-awesome-icon>
              </a>
            </li>
          </ul>
        </div>
        <!-- /.footer-social-links -->
      </div>
      <!-- /.footer-wrap -->
    </footer>
  </div>
</template>

<script>
    export default {
        name: 'FooterUSGS',
        methods: {
            runGoogleAnalytics(eventName, action, label) {
                this.$ga.set({ dimension2: Date.now() });
                this.$ga.event(eventName, action, label)
            }
        }
    }
</script>

<style scoped lang="scss">
  @import"../style/usgsHeaderFooter/combinedLoad.css";

  .svg-inline--fa {
    color: white;
    text-decoration: none;
    height: 24px;
    width: 21px;
  }
  /* Font Awesome Social Media icons */
  /*!
   *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome
   *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)
   */
  /* FONT PATH
   * -------------------------- */
  @font-face {
    font-family: 'FontAwesome';
    src: url('../fonts/usgsHeaderFooter/fontawesome-webfont.eot');
    src: url('../fonts/usgsHeaderFooter/fontawesome-webfont.eot') format('embedded-opentype'), url('../fonts/usgsHeaderFooter/fontawesome-webfont.woff2') format('woff2'), url('../fonts/usgsHeaderFooter/fontawesome-webfont.woff') format('woff'), url('../fonts/usgsHeaderFooter/fontawesome-webfont.ttf') format('truetype'), url('../fonts/usgsHeaderFooter/fontawesome-webfont.svg') format('svg');
    font-weight: normal;
    font-style: normal;
  }
  .fa-wrapper {
    position: relative
  }
  .fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .fa-ul {
    padding-left: 0;
    margin-left: 2.14285714em;
    list-style-type: none;
  }
  .fa-ul > li {
    position: relative;
  }
  .fa-li {
    position: absolute;
    left: -2.14285714em;
    width: 2.14285714em;
    top: 0.14285714em;
    text-align: center;
  }
  .fa-search:before {
    content: "\f002";
  }
  .fa-twitter-square:before {
    Content: "\f081";
  }
  .fa-facebook-square:before {
    Content: "\f082";
  }
  .fa-github:before {
    content: "\f09b";
  }
  .fa-google-plus-square:before {
    content:"\f0d4";
  }
  .fa-flickr:before {
    content: "\f16e";
  }
  .fa-youtube-play:before {
    content: "\f16a";
  }
  .fa-instagram:before {
    content: "\f16d";
  }
  .only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
  [role="button"]{cursor:pointer}
  
</style>
