<template>
  <div
    id="methods"
    class="text-content"
  >
    <h2><a id="methods-anchor" />Methods</h2>
    <div class="usa-accordion usa-accordion--bordered">
      <div
        v-for="method in methods.methods"
        :key="method.title"
      >
        <h3 class="usa-accordion__heading">
          <button
            class="usa-accordion__button"
            aria-expanded="false"
            :aria-controls="method.title"
          >
            {{ method.title }}
          </button>
        </h3>
        <div
          :id="method.title"
          class="usa-accordion__content usa-prose gage-target"
        >
          <p><span v-html="method.method" /></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import methods from '../assets/methods/methods';
    export default {
        'name': 'Methods',
        data(){
            return{
                methods: methods.methodContent
            }
        },
        mounted() {
            // This is a fix for the weird USWDS glitch that causes the Methods section accordion menus to be open on page load
            const targetAccordionDivs = document.querySelectorAll('div.gage-target');
            targetAccordionDivs.forEach((div) => {
                div.setAttribute('hidden', '""');
            });
        }
    }
</script>

<style lang="scss" scoped>
$chevronLeft: '~@/assets/methods/chevron-left.png';
$chevronDown: '~@/assets/methods/chevron-down.png';
$offWhite: rgb(236,227,220);
$transparentWhite: rgba(255,255,255, 0.85);
$darkBlue: rgb(30, 86,120);
$lightBlue: rgb(73,166,206);
$darkGreen: rgb(46,131,107);
$lightGreen: rgb(184,215,203);
$tan: rgb(223,196,163);
$orange: rgb(222,121,38);

h2{
    margin-bottom: 10px;
  }
  button:not([disabled]):focus{
    outline: none;
  }
  .usa-accordion__button{
    background-image: url($chevronDown);
    background-size: 15px 10px;
    background-color: $darkGreen;
    color: white;
  }
  .usa-accordion__button[aria-expanded=false]{
    background-image: url($chevronLeft);
    background-size: 10px 15px;
    background-color: $transparentWhite;
    color: $darkGreen;
  }

#app h2.usa-accordion__heading {
  margin: 0;
}
</style>