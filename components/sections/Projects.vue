<template>
  <!-- eslint-disable prettier/prettier -->
  <section class="flex flex-col justify-center">
    <IntersectionObserver @on-change="onIntersect">
      <h1>Experience</h1>
      <div class="flex flex-col gap-8 lg:gap-12 stagger">
        <div class="card">
          <h2>Applications</h2>
          <p>
            Most of my time working at the companies mentioned in my CV I was working
            on Frontend Development of multiple Web Applications. The topics varied
            from digitalization of education systems to automation for fintech
            companies. After building up strong knowledge in the web development
            especially Frontend my responsibilities included the evaluation and set up
            of frontend technologies, and ensuring the maintainability and code
            quality of software solutions.
          </p>
        </div>
        <div class="card">
          <h2>Websites</h2>
          <p>
            Over the course of working at Zweischneider I enjoyed working on multiple
            Websites with a high quality standard regarding the user experience as
            well as the code. As a team we went without ready to go UI Frameworks to
            create custom outstanding experiences tailored to the customers wishes and
            corporate design.
          </p>
        </div>
        <div class="card">
          <h2>CMS</h2>
          <p>
            When it comes to Content Management I preferred working with headless
            content management systems like
            <a href="https://kontent.ai/" target="blank">Kontent</a>
            or
            <a href="https://craftcms.com/" target="blank">CraftCMS</a>
            which scale better in a world of multi channel content consumption.
          </p>
        </div>
      </div>
    </IntersectionObserver>
  </section>
</template>

<script>
import IntersectionObserver from 'vue-intersection-observer';

export default {
  name: 'Projects',
  components: {
    IntersectionObserver,
  },
  methods: {
    onIntersect({ isIntersecting }) {
      if (isIntersecting) {
        this.$anime({
          targets: '.stagger .card',
          opacity: 1,
          easing: 'easeInOutQuad',
          delay: this.$anime.stagger(250),
          duration: 500,
        });
      } else {
        this.$anime({
          targets: '.stagger .card',
          opacity: 0,
          easing: 'easeInOutQuad',
          delay: this.$anime.stagger(250, { direction: 'reverse' }),
          duration: 500,
        });
      }
    },
  },
};
</script>

<style scoped>
.card {
  @apply nm-concave-primary rounded-lg p-4 opacity-0;

  @screen lg {
    @apply max-w-4xl;
  }

  &:nth-child(even) {
    @apply ml-auto nm-convex-primary;
  }
}
</style>
