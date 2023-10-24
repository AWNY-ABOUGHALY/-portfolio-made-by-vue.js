<template>
  <div id="projects" class="my-10 pt-6">
    <HeadTitle titleName="Some Projects" size="1.9" class="mt-6" />
    <v-container class="mt-5">
      <v-row justify="center">
        <v-col
          v-for="project in projects"
          :key="project.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          class="content"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1500"
        >
          <v-card
            class="card rounded-lg overflow-hidden mx-auto"
            @dblclick="fillAndShow(project)"
            @mouseenter="project.pageHover = true"
            @mouseleave="project.pageHover = false"
          >
            <img
              :src="`/imgs/${project.screenShot}`"
              width="100%"
              :alt="project.screenShot.slice(0, -4)"
              :style="
                project.pageHover ? `top: ${project.pageHeight}` : 'top: 0px'
              "
            />
            <div
              class="cardInfo d-flex flex-column justify-center align-center"
            >
              <h4 data-aos="fade-right" data-aos-once="true">
                {{ project.title }}
              </h4>
              <span
                class="desc text-center"
                data-aos="fade-right"
                data-aos-once="true"
              >
                {{ project.subTitle }}
              </span>
              <HeadTitle
                titleName="Skills Used"
                size="1"
                class="HeadTitle my-2"
                data-aos="fade-left"
                data-aos-once="true"
              />
              <div class="skillsIcon">
                <img
                  v-for="(icon, i) in project.icons"
                  :alt="icon.slice(0, -4)"
                  :key="i"
                  :src="`/imgs/skills/${icon}`"
                  width="32"
                  height="30"
                  data-aos="zoom-in"
                  data-aos-duration="500"
                  :data-aos-delay="1000 + 500 * i"
                  data-aos-once="true"
                />
              </div>
            </div>
            <template>
              <v-btn
                color="#A27B5C"
                dark
                icon
                plain
                @click="fillAndShow(project)"
                class="viewIcon rounded-tl-xl rounded-tr-0 rounded-br-0 rounded-bl-0"
              >
                <v-icon>mdi-open-in-new</v-icon>
              </v-btn>
            </template>
          </v-card>
        </v-col>
        <v-dialog v-model="dialog" width="500" overlay-opacity="0.2">
          <v-card class="mx-auto">
            <v-carousel show-arrows-on-hover hide-delimiters height="250">
              <v-carousel-item
                v-for="(image, i) in projectToShow.images"
                :key="i"
                :src="`/imgs/${image}`"
                :alt="image.slice(0, -4)"
              ></v-carousel-item>
            </v-carousel>
            <v-card-title>
              <h5 class="brown--text text-darken-1">
                {{ projectToShow.title }}
              </h5>
            </v-card-title>
            <v-card-subtitle class="pb-2">
              {{ projectToShow.subTitle }}
            </v-card-subtitle>
            <v-card-text class="pb-2">
              <img
                v-for="(icon, i) in projectToShow.icons"
                :key="i"
                :alt="icon.slice(0, -4)"
                :src="`/imgs/skills/${icon}`"
                width="32"
                height="30"
                data-aos="zoom-in"
                data-aos-duration="500"
                :data-aos-delay="1500 + 500 * i"
                data-aos-once="true"
              />
            </v-card-text>
            <v-card-actions class="d-flex flex-wrap">
              <v-btn
                @click="dialog = false"
                :href="projectToShow.preview"
                target="_blank"
                color="#3F4E4F"
                text
                v-if="projectToShow.preview"
              >
                <span>Preview</span>
                <v-icon right>mdi-open-in-new</v-icon>
              </v-btn>
              <v-btn
                color="brown lighten-2"
                class="ms-0"
                text
                @click="dialog = false"
              >
                <span>Close</span>
                <v-icon right>mdi-window-close</v-icon>
              </v-btn>
              <v-spacer />
              <v-btn icon @click="show = !show">
                <v-icon>{{
                  show ? "mdi-chevron-up" : "mdi-chevron-down"
                }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show">
                <v-divider />
                <v-card-text>
                  {{ projectToShow.description }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import HeadTitle from "./Layout/HeadTitle.vue";
import Projects from "../data/Projects";
export default {
  name: "Portfolio",
  components: { HeadTitle },
  data() {
    return {
      show: false,
      dialog: false,
      projectToShow: {},
      projects: Projects,
    };
  },
  methods: {
    fillAndShow(project) {
      this.projectToShow = project;
      this.dialog = true;
    },
  },
};
</script>

<style lang="scss" scoped>
#projects {
  @media screen and (min-width: 960px) {
    max-height: 900px;
  }
  .card {
    width: 250px;
    height: 200px;
    max-width: 100%;
    position: relative;
    border: 7px solid #fff;
    box-shadow: 0px 1px 3px -1px #000000a8;
    transition: 0.4s;
    > img {
      position: absolute;
      z-index: 0;
      filter: blur(2px);
      transition: top 1.5s, filter 1s 0.6s;
    }
    &:hover {
      box-shadow: 0px 1px 5px 1px #0000004b;
      scale: 1.03;
      > img {
        filter: blur(0px);
        transition: top 6s 1.2s, filter 1s 0.5s;
      }
    }
    .cardInfo {
      position: absolute;
      width: 100%;
      height: 110%;
      left: 0;
      top: 0;
      background-color: #ffffffd3;
      z-index: 1;
      transition: background-color 0.5s 0.6s;
      &:hover {
        background-color: #ffffff00;
        transition: background-color 0.3s 0.5s;
      }
      h4,
      .desc {
        position: relative;
        right: 0;
      }
      h4 {
        color: #a27b5c;
        transition: 1s 0.6s;
      }
      .desc {
        font-size: 0.9rem;
        font-weight: 500;
        color: #3f4e4f;
        transition: 1.5s 0.6s;
      }
      &:hover h4,
      &:hover .desc {
        right: 100%;
        transition: 1.5s;
      }
      .HeadTitle,
      .skillsIcon {
        position: relative;
        left: 0;
        transition: 1.5s 0.6s;
      }
      &:hover .HeadTitle,
      &:hover .skillsIcon {
        left: 100%;
        transition: 1.5s;
      }
    }
    .viewIcon {
      position: absolute;
      right: -6px;
      bottom: -6px;
      background-color: white;
      z-index: 555;
    }
  }
}
</style>
