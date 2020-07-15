<template>
  <div id="sankey-transition-2">
    <div id="sankey-image-container">
      <div
        id="image-div-1"
        class="sankey-image"
      >
        <img
          id="sankey-image-1"
          src="@/assets/usesNeedsConflicts/images/sankey_1.png"
          alt=""
        >
      </div>
      <div
        id="image-div-2"
        class="sankey-image"
      >
        <img
          id="sankey-image-2"
          src="@/assets/usesNeedsConflicts/images/sankey_2.png"
          alt=""
        >
      </div>
      <div
        id="image-div-3"
        class="sankey-image"
      >
        <img
          id="sankey-image-3"
          src="@/assets/usesNeedsConflicts/images/sankey_3.png"
          alt=""
        >
      </div>
    </div>
    <div id="sankey-text-container">
      <div class="sankey-text-and-title">
        <h3
          id="sankey-title-1"
          v-observe-visibility="visibilityChanged"
        >
          Under Normal Conditions
        </h3>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad</p>
      </div>
      <div class="sankey-text-and-title">
        <h3
          id="sankey-title-2"
          v-observe-visibility="visibilityChanged"
        >
          In times of lower availability
        </h3>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad</p>
      </div>
      <div class="sankey-text-and-title">
        <h3
          id="sankey-title-3"
          v-observe-visibility="visibilityChanged"
        >
          Adjustment and balance
        </h3>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'SankeyTransition2',
        methods: {
            visibilityChanged (isVisible, entry) {
                const imageElement= document.getElementById('image-div-' + entry.target.id[entry.target.id.length -1]);
                if (isVisible === true) {
                    imageElement.classList.add('sankey-visible');
                } else if (isVisible === false) {
                    imageElement.classList.remove('sankey-visible');
                }
            }
        }
    }
</script>

<style scoped lang="scss">
  #sankey-transition-2 {
    display: flex;
    max-width: 65em;
    max-height: 733px;
    margin: 0 auto;
    color: white;
    width: 100%;
    #sankey-image-container {
      justify-content: center;
      width: 100%;
      margin: 0 auto;
      flex: 1;
      position: relative;
      .sankey-image {
        height: 733px;
        min-height: 733px;
        width: 538px;
        min-width: 538px;
        position: absolute;
        opacity: 0;
        -webkit-transition: opacity 1s ease-in-out;
        -moz-transition: opacity 1s ease-in-out;
        -o-transition: opacity 1s ease-in-out;
        transition: opacity 1s ease-in-out;
      }
      .sankey-visible {
        opacity: 1;
      }

      #sankey-image-1 {
        z-index: 3;
      }
      #sankey-image-2 {
        z-index: 2;
      }
      #sankey-image-3 {
        z-index: 1;
      }
    }
    #sankey-text-container {
      flex: 1;
      padding: 1em;
      overflow-y: scroll;
      text-align: justify;
      -ms-overflow-style: none; /* no scroll bar for IE and Edge */
      scrollbar-width: none; /* no scroll bar for Firefox */
      background: rgb(2,0,36);
      background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
      .sankey-text-and-title {
        padding: 10em 2em 15em 2em;
      }
    }
    /* no scroll bar for Chrome, Safari and Opera */
    #sankey-text-container::-webkit-scrollbar {
      display: none;
    }
  }
</style>
