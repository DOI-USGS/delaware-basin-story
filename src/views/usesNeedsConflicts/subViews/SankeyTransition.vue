<template>
  <div id="sankey-transition">
    <div id="sankey-image-container">
      <img
        id="sankey-image-1"
        src="@/assets/usesNeedsConflicts/images/sankey_1.png"
        alt=""
      >
      <img
        id="sankey-image-2"
        src="@/assets/usesNeedsConflicts/images/sankey_2.png"
        alt=""
      >
      <img
        id="sankey-image-3"
        src="@/assets/usesNeedsConflicts/images/sankey_3.png"
        alt=""
      >
    </div>
    <div id="sankey-text-container">
      <div class="sankey-text-and-title">
        <h3>Under Normal Conditions</h3>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad</p>
      </div>
      <div class="sankey-text-and-title">
        <h3>In times of lower availability</h3>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad</p>
      </div>
      <div class="sankey-text-and-title">
        <h3>Adjustment and balance </h3>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      name: 'SankeyTransition'
  }
</script>

<style scoped lang="scss">
#sankey-transition {
  display: flex;
  max-width: 65em;
  max-height: 733px;
  margin: 0 auto;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
  color: white;
  width: 100%;
  #sankey-image-container {
    justify-content: center;
    width: 100%;
    margin: 0 auto;

    flex: 1;
    position: relative;
    img {
      height: 733px;
      min-height: 733px;
      width: 538px;
      min-width: 538px;
      position: absolute;
      position: absolute;
      animation-name: multiple-image-crossfade;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      animation-duration: 6s;
      &:nth-of-type(1) {
        animation-delay: 4s;
      }
      &:nth-of-type(2) {
        animation-delay: 2s;
      }
      &:nth-of-type(3) {
        animation-delay: 0s;
      }
  }

  @keyframes multiple-image-crossfade {
    0% {
      opacity:1;
    }
    17% {
      opacity:1;
    }
    25% {
      opacity:0;
    }

    100% {
      opacity:1;
    }
    }
  }
  #sankey-text-container {
    flex: 1;
    padding: 2em;
    overflow-y: scroll;
    text-align: justify;
    -ms-overflow-style: none; /* no scroll bar for IE and Edge */
    scrollbar-width: none; /* no scroll bar for Firefox */
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
