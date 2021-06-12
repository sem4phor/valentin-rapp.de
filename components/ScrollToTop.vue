<template>
  <button
    class="nm-convex-primary rounded-full btn fixed bottom-0 right-0 m-4 flex"
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
};
</script>

<style scoped>
.btn {
  /* right: 0; */
}
</style>
