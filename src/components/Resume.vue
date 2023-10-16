<template>
  <div id="resume" class="d-flex justify-center align-center">
    <v-row style="max-width: 1300px; margin: 0 auto">
      <v-col cols="12" md="6" class="hidden-xs-only mt-5 mt-md-0">
        <HeadTitle titleName="WorksMap" size="1.9" class="mt-6" />
        <v-timeline dense class="pt-0 mt-5">
          <v-timeline-item
            v-for="work in works"
            :key="work.id"
            small
            color="#A27B5C"
            class="pb-3"
            data-aos="fade-right"
            :data-aos-duration="+work.id * 500"
            data-aos-once="true"
          >
            <v-card class="elevation-2 me-sm-12 me-md-0">
              <v-card-title
                class="font-weight-bold brown--text text--darken-1 pt-2 pb-3"
              >
                {{ work.position }}
              </v-card-title>
              <v-card-subtitle class="pb-1"
                >{{ work.company }} | {{ work.year }}</v-card-subtitle
              >
              <v-card-text
                v-for="(task, i) in work.tasks"
                :key="i"
                class="d-flex align-start ps-2 pe-3 pt-0 font-weight-bold blue-grey--text text--darken-4"
                :class="
                  work.tasks.indexOf(task) === work.tasks.length - 1
                    ? 'pb-2'
                    : 'pb-0'
                "
              >
                <v-icon color="#A27B5C">mdi-chevron-right</v-icon>
                <span>{{ task }}</span>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="d-flex flex-column justify-space-between align-center"
      >
        <div class="mt-4 mt-sm-0">
          <HeadTitle titleName="My Skills" size="1.9" class="mt-6" />
          <div class="mt-3 text-center">
            <v-tooltip
              v-for="skill in skills"
              :key="skill.id"
              top
              color="blue-grey darken-3"
              class="brown--text text-darken-1"
            >
              <template v-slot:activator="{ on, attrs }">
                <img
                  v-bind="attrs"
                  v-on="on"
                  :src="`/imgs/skills/${skill.logo}`"
                  :alt="skill.title"
                  width="93"
                  height="90"
                  class="skillIcons"
                  data-aos="fade-left"
                  :data-aos-duration="
                    +skill.id * 300 <= 3000 ? +skill.id * 300 : 3000
                  "
                  data-aos-once="true"
                />
              </template>
              <span class="blue-grey darken-3 pb-0">{{ skill.title }}</span>
            </v-tooltip>
          </div>
        </div>
        <div>
          <HeadTitle titleName="My Resume" size="1.9" class="mt-6" />
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <div class="text-center py-3" style="max-width: 100%">
              I'm passionate about learning and development with a desire to
              apply skills on my works, eager to tackle more complex problems
              and continue to find ways to maximize user efficiency, I just want
              to say that <strong>I enjoy what I do!</strong>
            </div>
            <div class="text-center">
              <v-btn
                outlined
                href="https://drive.google.com/file/d/1DZ2GOTe-OYmZbY1Sv0pQ1EQl3qfmnxRO/view"
                target="_blank"
                plain
                class="previewCV"
              >
                <v-icon left dark>mdi-file-account</v-icon>
                Preview&nbsp;<span class="hidden-xs-only">My CV</span>
              </v-btn>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import HeadTitle from "./Layout/HeadTitle.vue";
export default {
  name: "Resume",
  components: { HeadTitle },
  data() {
    return {
      works: [
        {
          id: 1,
          position: "Frontend Developer",
          company: "@GlobalDirections",
          year: "2022 - present",
          tasks: [
            "translating and bringing to life UI designs into interactive interfaces, giving end users the absolute best experience possible.",
            "Working on projects using Vue, Vuex, vuetify, primeVue and APIs.",
          ],
        },
        {
          id: 2,
          position: "Frontend Developer",
          company: "Freelancer",
          year: "2021 - present",
          tasks: [
            "Creating a responsive landing pages for client",
            "Building websites using Vue.js or React.js.",
          ],
        },
        {
          id: 4,
          position: "Websites Manager",
          company: "Freelancer",
          year: "2011 - 2015",
          tasks: [
            "Overseeing the websites and manage performance.",
            "Facilitate hosting, update website content.",
          ],
        },
      ],
      skills: [
        { id: 1, logo: "html5.png", title: "HTML5" },
        { id: 2, logo: "css3.png", title: "CSS3" },
        { id: 3, logo: "javascript.png", title: "JavaScript" },
        { id: 4, logo: "sass.png", title: "SCSS" },
        { id: 5, logo: "bootstrap.png", title: "Bootstrap" },
        { id: 6, logo: "tailwind.png", title: "Tailwind" },
        { id: 7, logo: "react.png", title: "React.js" },
        { id: 8, logo: "redux.png", title: "Redux" },
        { id: 9, logo: "vue.png", title: "Vue.js" },
        { id: 10, logo: "vuex.png", title: "Vuex" },
        { id: 11, logo: "vuetify.png", title: "Vuetify" },
        { id: 12, logo: "api.png", title: "Rest APIs" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#resume {
  @media screen and (min-width: 960px) {
    height: 100vh;
    max-height: 800px;
  }
  .skillIcons {
    @media (min-width: 960px) and (max-width: 1200px) {
      width: 80px;
      height: 77px;
    }
  }
  .previewCV {
    background-color: white;
    color: #5f4129;
  }
  .previewCV:hover {
    background-color: #a27b5c;
    color: white;
  }
}
</style>
