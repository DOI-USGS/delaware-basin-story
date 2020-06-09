<template>
  <div id="visualization">
    <h1>{{ title }}</h1>
    <intro />
    <usesNeedsConflicts />
  </div>
</template>

<script>
  import intro from "./Intro";
  import usesNeedsConflicts from "./UsesNeedsConflicts"

    export default {
        name: 'Visualization',
        components: {
            intro,
            usesNeedsConflicts
        },

        data() {
            return {
                title: process.env.VUE_APP_TITLE,
                buttonName: 'bill'
            }
        },
        methods: {
        }
    }
</script>

<style scoped lang="scss">

</style>
