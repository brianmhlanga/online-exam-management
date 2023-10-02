<template>
  <main>
      <!-- Import all the site's css files -->
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <link rel="stylesheet" href="css/authentication.css" />
      <link rel="stylesheet" href="css/theme.css" />
      <link rel="stylesheet" href="css/primeblocks.css" />
      <div class="container-scroller">
          <div class="container-fluid page-body-wrapper full-page-wrapper">
          <div class="content-wrapper d-flex align-items-center auth px-0">
              <div class="row w-100 mx-0">
                  <slot />
              </div>
          </div>
          <!-- content-wrapper ends -->
          </div>
      </div>
  </main>
</template>

<script>
export default {
  head(){
      return {
          script: [
              {
                src: "js/bootstrap.bundle.min.js",
              }
          ]
      }
  },
}
</script>

<style>

</style>