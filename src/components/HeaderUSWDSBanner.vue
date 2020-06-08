<template>
  <div id="HeaderUSWDSBanner">
    <section class="usa-banner">
      <div class="usa-accordion">
        <header class="usa-banner__header">
          <div class="usa-banner__inner">
            <div class="grid-col-auto">
              <img
                class="usa-banner__header-flag"
                src="~uswds/dist/img/us_flag_small.png"
                alt="U.S. flag"
              >
            </div>
            <div class="grid-col-fill tablet:grid-col-auto">
              <p class="usa-banner__header-text">
                An official website of the United States government
              </p>
              <p
                class="usa-banner__header-action"
                aria-hidden="true"
              >
                Here’s how you know
              </p>
            </div>
            <button
              class="usa-accordion__button usa-banner__button"
              aria-expanded="false"
              aria-controls="gov-banner"
            >
              <span class="usa-banner__button-text">Here’s how you know</span>
            </button>
          </div>
        </header>
        <div
          id="gov-banner"
          class="usa-banner__content usa-accordion__content"
        >
          <div class="grid-row grid-gap-lg">
            <div class="usa-banner__guidance tablet:grid-col-6">
              <iconDot
                class="usa-banner__icon usa-media-block__img"
                alt="Dot gov"
              />
              <div class="usa-media-block__body">
                <p>
                  <strong>The .gov means it’s official.</strong>
                  <br>
                  Federal government websites often end in .gov or .mil. Before sharing sensitive
                  information,
                  make sure you’re on a federal government site.
                </p>
              </div>
            </div>
            <div class="usa-banner__guidance tablet:grid-col-6">
              <iconHTTPS
                class="usa-banner__icon usa-media-block__img"
                alt="Dot gov"
              />
              <div class="usa-media-block__body">
                <p>
                  <strong>The site is secure.</strong>
                  <br>
                  The <strong>https://</strong> ensures that you are connecting to the official
                  website and
                  that any information you provide is encrypted and transmitted securely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="usa-overlay" />
  </div>
</template>

<script>
import iconDot from '../../node_modules/uswds/dist/img/icon-dot-gov.svg';
import iconHTTPS from '../../node_modules/uswds/dist/img/icon-https.svg';
    export default {
        name: 'HeaderUSWDSBanner',
        components: {
          iconDot,
          iconHTTPS
        }
    }

</script>

<style lang="scss">
    @import '~uswds/dist/css/uswds.css';
    .usa-banner__icon {
      width: 4rem;
    }
</style>