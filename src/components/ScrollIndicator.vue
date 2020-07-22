<template>
  <div class="scroll-indicator">
    scroll
  </div>
</template>

<script>
  export default {
      name: 'ScrollIndicator'
  }

</script>

<style scoped lang="scss">
  $chevronDown: '~@/assets/components/ScrollIndicator/images/chevron-down.png';
  .scroll-indicator {
    color: white;
    font-weight: bold;
    padding: 0 20px 0 10px;
    background-color: #d46e21;
    border-radius: 5px;
    background-image: url($chevronDown);
    background-repeat: no-repeat;
    background-position: 55px 5px;
    background-size: 10px 8px;
  }
</style>
