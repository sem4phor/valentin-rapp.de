<template>
  <button class="nm-concave-primary rounded-full items-center flex py-1 px-2">
    <div class="mr-2 flex items-center justify-center">
      <component
        :is="icon"
        w="24"
        h="24"
        :class="{
          'ion-shake': shake,
        }"
      />
    </div>
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: 'ExpandableButton',
  props: {
    icon: {
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      shake: false,
    };
  },
};
</script>
