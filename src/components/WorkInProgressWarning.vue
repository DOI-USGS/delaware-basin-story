<template>
  <section id="in-progress-warning">
    <div class="usa-prose">
      <p
        v-if="buttonText === 'I understand'"
        class="warning-open"
      >
        ATTENTION! - You are viewing a prototype application that is in active development.
        Contents seen here are for place holding and development only. <strong>DO NOT USE</strong> information
        contained in this application for ANY purpose.
      </p>
      <button @click="toggleWarning">
        {{ buttonText }}
      </button>
    </div>
  </section>
</template>

<script>
    export default {
        name: 'WorkInProgressWarning',
        data() {
            return {
                buttonText: 'I understand'
            }
        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize);
        },
        mounted() {
            // Add in progress warning element size tracking by adding a listener and a way to store the values in the Vuex state
            window.addEventListener('resize', this.handleResize);
            this.handleResize();
        },
        methods: {
            handleResize() {
                const heightOfWarningBanner = document.getElementById('in-progress-warning').clientHeight;
                this.$store.commit('recordWarningHeight', heightOfWarningBanner);
            },
            toggleWarning() {
                this.buttonText === 'I understand' ? this.buttonText = 'read in progress warning' : this.buttonText = 'I understand';
            }
        }
    }
</script>

<style scoped lang="scss">
  .usa-prose {
    background-color: #b9c7d2;
    padding-bottom: 0.3em;
    padding-top: 0.3em;
    p {
      max-width: 60em;
      text-align: center;
      margin: 0 auto;
    }
    button {
      display: block;
      margin: 0 auto;
      background: #003366;
      color: #ffffff;
      border: none;
      outline: none;
      padding: 2px 10px;
      border-radius: 5px;
      font-weight: bold;
      font-size: small;
    }
  }
</style>
