<template>
  <section>
    <!-- eslint-disable -->
    <h1 class="text-4xl font-bold mb-4">Curriculum Vitae</h1>
    <timeline timeline-theme="lightsteelblue">
      <timeline-title font-color="white">Now!</timeline-title>
      <timeline-item font-color="white" :hollow="true">Software Engeneer @ SVA GmbH</timeline-item>
      <timeline-title font-color="white">2020</timeline-title>
      <timeline-item font-color="white" :hollow="true">Frontend Engeneer @ Zweischneider GmbH</timeline-item>
      <timeline-title font-color="white">2017</timeline-title>
      <timeline-item font-color="white" :hollow="true">
        Angewandte Informatik B. Sc (Applied Computer Science) @ Hochschule Rhein-Main, Wiesbaden
      </timeline-item>
      <timeline-title font-color="white">2012</timeline-title>
    </timeline>
  </section>
</template>

<script>
import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline';

export default {
  name: 'CvSection',
  components: {
    Timeline,
    TimelineItem,
    TimelineTitle,
  },
};
</script>
