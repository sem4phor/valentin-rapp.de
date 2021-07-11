<template>
  <div id="container">
    <SectionsWelcome class="section" />
    <SectionsSkills class="section" />
    <SectionsCv class="section" />
    <SectionsProjects class="section" />
    <ScrollToTop />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
};
</script>

<style scoped>
.section {
  @apply min-h-screen p-4 mx-auto;

  @screen lg {
    min-height: 80vh;
  }
}
</style>
