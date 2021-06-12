<template>
  <div id="container">
    <div data-anchor="welcome" class="pageable-container">
      <SectionsWelcome />
    </div>
    <div data-anchor="skills" class="pageable-container">
      <SectionsSkills />
    </div>
    <div data-anchor="cv" class="pageable-container">
      <SectionsCv />
    </div>
    <div data-anchor="projects" class="pageable-container">
      <SectionsProjects />
    </div>
    <div class="container p-4" data-anchor="random">
      <div class="nm-flat-primary p-4 m-1">Navigation</div>
      <h1 class="text-white mb-4">valentin-rapp.de</h1>
      <div class="nm-inset-primary text-white rounded-lg p-2 mb-8">GitHub</div>
    </div>
    <ScrollToTop @click.native="scrollToTop" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
    this.pageable = this.$pageable('#container');
  },
  methods: {
    scrollToTop() {
      this.pageable.scrollToPage(1);
    },
  },
};
</script>
