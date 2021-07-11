<template>
  <component
    :is="href ? 'a' : 'button'"
    class="no-underline nm-concave-primary rounded-full items-center flex py-1 px-2"
    :target="target"
    :href="href"
  >
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
  </component>
</template>

<script>
export default {
  name: 'ExpandableButton',
  props: {
    icon: {
      type: Object,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      default: undefined,
    },
    target: {
      type: String,
      default: undefined,
    },
  },
  data() {
    return {
      shake: false,
    };
  },
};
</script>
