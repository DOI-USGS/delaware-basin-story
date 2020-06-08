<template>
  <div id="header">
    <header
      id="navbar"
      class="header-nav"
      role="banner"
    >
      <div class="tmp-container">
        <!-- primary navigation bar -->
        <!-- search bar-->
        <div class="header-search">
          <a
            class="logo-header"
            href="https://www.usgs.gov/"
            title="Home"
          >
            <img
              class="img"
              src="../images/usgsHeaderFooter/logo.png"
              alt="Home"
            >
          </a>
          <form
            id="search-box"
            action="https://www.usgs.gov/science-explorer-results"
            method="GET"
          >
            <div class="fa-wrapper">
              <label
                for="se_search"
                class="only"
              >Search</label>
              <input
                id="se_search"
                type="search"
                name="es"
                placeholder="Search"
              >
              <button
                class="fa fa-search"
                type="submit"
              >
                <span class="only">Search</span>
              </button>
            </div>
          </form>
        </div>
        <!-- end search bar-->
      </div>
      <!-- end header-container-->
    </header>
  </div>
</template>

<script>
    export default {
        name: 'HeaderUSGS'
    }
</script>

<style scoped lang="scss">
  @import"../style/usgsHeaderFooter/combinedLoad.css";
</style>
