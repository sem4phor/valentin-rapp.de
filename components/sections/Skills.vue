<template>
  <!-- eslint-disable -->
  <section class="flex flex-col lg:flex-row-reverse items-center justify-center">
    <div class="max-w-xl nm-concave-primary p-8 rounded-lg">
      <h1>Skills</h1>
      <p class="mb-2">
        In my four years working as a software developer I learned about many
        technologies, methods and principles especially in the javascript world.
        To highlight some of them:
      </p>
      <p class="text-orange font-serif">
        Vue, JAM Stack, UX, Scrum, TailwindCSS, Git, GraphQL, AWS, CSS, React, Nuxt,
        Typescript, NodeJS, CI/CD
      </p>
    </div>
    <div id="myCanvasContainer" class="my-auto lg:mr-20">
      <canvas width="750" height="750" id="myCanvas" style="width: 100%">
        <ul>
          <li>
            <a @click.prevent title="JAMstack">
              <img src="~assets/skill-cloud-logos/jamstack.svg" width="60px" height="60px" />
            </a>
          </li>
          <li>
            <a @click.prevent title="UX">
              <img src="~assets/skill-cloud-logos/ux.png" width="60px" height="60px" />
            </a>
          </li>
          <li>
            <a @click.prevent title="Scrum">
              <img src="~assets/skill-cloud-logos/scrum.png" width="60px" height="60px" />
            </a>
          </li>
          <li>
            <a @click.prevent title="TailwindCSS">
              <img src="~assets/skill-cloud-logos/tailwind.svg" width="60px" height="60px" />
            </a>
          </li>
          <li>
            <a @click.prevent title="Git">
              <img src="~assets/skill-cloud-logos/git.png" width="60px" height="60px" />
            </a>
          </li>
          <li>
            <a @click.prevent title="GraphQL">
              <img src="~assets/skill-cloud-logos/graphql.png" width="40px" height="40px" />
            </a>
          </li>
          <li>
            <a @click.prevent title="AWS">
              <img src="~assets/skill-cloud-logos/aws.png" width="40px" height="40px" />
            </a>
          </li>
          <li>
            <a @click.prevent title="CSS">
              <img src="~assets/skill-cloud-logos/css3.webp" width="40px" height="40px" />
            </a>
          </li>
          <li>
            <a @click.prevent title="React">
              <img src="~assets/skill-cloud-logos/react.png" width="40px" height="40px" />
            </a>
          </li>
          <li>
            <a @click.prevent title="Vue">
              <img src="~assets/skill-cloud-logos/vue.png" width="40px" height="40px" />
            </a>
          </li>
          <li>
            <a @click.prevent title="Typescript">
              <img src="~assets/skill-cloud-logos/typescript.svg" width="40px" height="40px" />
            </a>
          </li>
          <li>
            <a @click.prevent title="Professional Scrum Master">
              <img src="~assets/skill-cloud-logos/psmi.png" width="40px" height="40px" />
            </a>
          </li>
          <li>
            <a @click.prevent title="AWS Certified Cloud Practitioner">
              <img src="~assets/skill-cloud-logos/AWS-CloudPractitioner-2020.png" width="40px" height="40px" />
            </a>
          </li>
        </ul>
      </canvas>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  mounted() {
    try {
      /* eslint-disable */
      TagCanvas.Start('myCanvas', '', {
        tooltip: 'native',
        tooltipDelay: '150',
        clickToFront: 500,
        initial: [0.2, -0.2],
        wheelZoom: false,
        imageMode: 'both',
      });
      /* eslint-enable */
    } catch (e) {
      document.getElementById('myCanvasContainer').style.display = 'none';
    }
  },
};
</script>
