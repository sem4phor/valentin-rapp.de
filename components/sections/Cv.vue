<template>
  <section class="flex flex-col justify-center lg:max-w-6xl">
    <!-- eslint-disable -->
    <h1>CV</h1>
    <timeline timeline-theme="lightsteelblue">
      <timeline-title font-color="white" class="font-bold font-serif">Now!</timeline-title>
      <timeline-item font-color="white" :hollow="true">
        Software Engeneer @
        <a href="http://www.sva.de" target="_blank">SVA GmbH</a>
      </timeline-item>
      <timeline-title font-color="white" class="font-bold font-serif">2020</timeline-title>
      <timeline-item font-color="white" :hollow="true">
        Frontend Engeneer @
        <a href="http://www.zweischneider.de" target="_blank">Zweischneider GmbH</a>
      </timeline-item>
      <timeline-title font-color="white" class="font-bold font-serif">2017</timeline-title>
      <timeline-item font-color="white" :hollow="true">
        Angewandte Informatik B. Sc (Applied Computer Science) @ Hochschule Rhein-Main, Wiesbaden
      </timeline-item>
      <timeline-title font-color="white" class="font-bold font-serif">2012</timeline-title>
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
