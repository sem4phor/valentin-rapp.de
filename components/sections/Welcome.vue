<template>
  <section
    class="flex flex-col lg:flex-row-reverse items-center justify-evenly relative"
  >
    <!-- name + img -->
    <div>
      <h2 class="w-full text-center text-2xl flex items-center justify-center">
        Valentin Rapp
      </h2>
      <div
        class="nm-concave-primary w-40 h-40 sm:w-52 sm:h-52 lg:w-80 lg:h-80 rounded-full flex justify-center items-center mt-4"
      >
        <div
          class="img nm-inset-primary w-32 h-32 sm:w-40 sm:h-40 lg:w-72 lg:h-72 rounded-full"
        />
      </div>
    </div>
    <div class="w-full max-w-3xl flex flex-col items-center">
      <!-- welcome + console -->
      <div class="w-full mb-8">
        <div class="text-4xl font-bold mb-4">Welcome</div>
        <div class="w-full md:max-w-xl lg:max-w-2xl nm-convex-black h-32 p-4">
          <vue-typer
            class="text-orange font-serif md:hidden"
            :text="[
              'Hello! I am a Software Engeneer from Germany. My speciality and passion is frontend development.',
              'My speciality and passion is frontend development.',
            ]"
            :repeat="0"
            erase-style="clear"
          />
          <vue-typer
            class="text-orange font-serif hidden md:block"
            :text="[
              'Hello! I am a Software Engeneer from Germany. My speciality and passion is frontend development and everything regarding javascript. But I am as well interested in the software development process as a whole.',
            ]"
            :repeat="0"
            erase-style="clear"
          />
        </div>
      </div>
      <!-- buttons -->
      <div class="w-28 lg:w-full display flex flex-col lg:flex-row">
        <ExpandableButton
          text="LinkedIn"
          :icon="LinkedInLogo"
          class="mb-4 lg:mb-0 lg:mr-4"
        />
        <ExpandableButton text="Github" :icon="GithubLogo" />
      </div>
    </div>
  </section>
</template>

<script>
import LinkedInLogo from 'vue-ionicons/dist/logo-linkedin.vue';
import GithubLogo from 'vue-ionicons/dist/logo-github.vue';

// aurora effekt oder neumorphism elemente bei desktop
export default {
  name: 'WelcomeSection',
  created() {
    this.LinkedInLogo = LinkedInLogo;
    this.GithubLogo = GithubLogo;
  },
};
</script>

<style scoped>
.vue-typer >>> .custom.char {
  @apply text-orange;
}

.img {
  background-image: url('~assets/valentin.jpg');
  background-position: center;
  background-size: cover;
}
</style>
