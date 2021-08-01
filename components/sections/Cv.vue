<template>
  <section class="flex flex-col justify-center lg:max-w-6xl">
    <!-- eslint-disable -->
    <IntersectionObserver @on-change="onIntersect">
      <h1>CV</h1>
      <timeline timeline-theme="lightsteelblue">
        <timeline-title font-color="white" class="font-bold font-serif">Now!</timeline-title>
        <timeline-item font-color="white" :hollow="true">
          Software Engineer @
          <a href="http://www.sva.de" target="_blank">SVA GmbH</a>
        </timeline-item>
        <timeline-title font-color="white" class="font-bold font-serif">2020</timeline-title>
        <timeline-item font-color="white" :hollow="true">
          Frontend Engineer @
          <a href="http://www.zweischneider.de" target="_blank">Zweischneider GmbH</a>
        </timeline-item>
        <timeline-title font-color="white" class="font-bold font-serif">2017</timeline-title>
        <timeline-item font-color="white" :hollow="true">
          Angewandte Informatik B.Sc. (Applied Computer Science) @ Hochschule Rhein-Main, Wiesbaden
        </timeline-item>
        <timeline-title font-color="white" class="font-bold font-serif">2012</timeline-title>
      </timeline>
    </IntersectionObserver>
  </section>
</template>

<script>
import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline';
import IntersectionObserver from 'vue-intersection-observer';

export default {
  name: 'CvSection',
  ssr: false,
  components: {
    Timeline,
    TimelineItem,
    TimelineTitle,
    IntersectionObserver,
  },
  methods: {
    onIntersect({ isIntersecting }) {
      if (isIntersecting) {
        this.$anime({
          targets: ['.timeline .timeline-title', '.timeline .timeline-item'],
          opacity: 1,
          easing: 'easeInOutQuad',
          delay: this.$anime.stagger(250),
          duration: 500,
        });
        this.$anime({
          targets: '.timeline .timeline-circle',
          scale: 1,
          easing: 'easeInOutQuad',
          delay: this.$anime.stagger(250),
          duration: 500,
        });
      } else {
        this.$anime({
          targets: ['.timeline .timeline-title', '.timeline .timeline-item'],
          opacity: 0,
          easing: 'easeInOutQuad',
          delay: this.$anime.stagger(250, { direction: 'reverse' }),
          duration: 500,
        });
        this.$anime({
          targets: '.timeline .timeline-circle',
          scale: 0,
          easing: 'easeInOutQuad',
          delay: this.$anime.stagger(250),
          duration: 500,
        });
      }
    },
  },
};
</script>
