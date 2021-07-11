<template>
  <button
    class="nm-convex-primary rounded-full btn fixed bottom-0 right-0 m-4 flex"
    @click="scrollToTop"
  >
    <ArrowIcon w="40" h="40" />
  </button>
</template>

<script>
import ArrowIcon from 'vue-ionicons/dist/ios-arrow-dropup.vue';
// arrow-dropdown -circle arrow-down
export default {
  name: 'NextPageButton',
  components: {
    ArrowIcon,
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
};
</script>

<style scoped>
.btn:focus {
  outline: none;
}
</style>
