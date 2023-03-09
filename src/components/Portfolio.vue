<template>
  <div id="portfolio" class="pt-10">
    <HeadTitle titleName="Portfolio" size="1.9" class="mt-6"/>
    <v-container class="mt-5">
      <v-row justify="center">
        <v-col
          v-for="project in projects" :key="project.id" 
          cols="12" sm="6" md="4" lg="3" class="content"
          data-aos="fade-up" data-aos-duration="1500"
        >
          <v-card class="card rounded-lg overflow-hidden mx-auto"
            @dblclick="fillAndShow(project)"
            @mouseenter="project.pageHover = true"
            @mouseleave="project.pageHover = false"
          >
            <img :src="`/imgs/${project.screenShot}`"
              width="100%" :alt="project.screenShot.slice(0,-4)"
              :style="project.pageHover ? `top: ${project.pageHeight}` : 'top: 0px'"
            />
            <div class="cardInfo d-flex flex-column justify-center align-center">
              <h4 data-aos="fade-right">{{ project.title }}</h4>
              <span class="desc text-center" data-aos="fade-right">{{ project.subTitle }}</span>
              <HeadTitle titleName="Skills Used" size="1" class="HeadTitle my-2" data-aos="fade-left"/>
              <div class="skillsIcon">
                <img
                  v-for="icon,i in project.icons"
                  :alt="icon.slice(0,-4)"
                  :key="i" :src="`/imgs/skills/${icon}`"
                  width="32" height="30" data-aos="zoom-in"
                  data-aos-duration="500" :data-aos-delay="1000+(500*i)" data-aos-once="true"
                />
              </div>
            </div>
            <template>
              <v-btn
                color="#A27B5C"
                dark icon plain
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
                v-for="image,i in projectToShow.images"
                :key="i"
                :src="`/imgs/${image}`"
                :alt="image.slice(0,-4)"
              ></v-carousel-item>
            </v-carousel>
            <v-card-title>
              <h5 class="brown--text text-darken-1">{{ projectToShow.title }}</h5>
            </v-card-title>
            <v-card-subtitle class="pb-2">
              {{ projectToShow.subTitle }}
            </v-card-subtitle>
            <v-card-text class="pb-2">
              <img v-for="icon,i in projectToShow.icons"
                :key="i" :alt="icon.slice(0,-4)"
                :src="`/imgs/skills/${icon}`"
                width="32" height="30"
                data-aos="zoom-in" data-aos-duration="500" :data-aos-delay="1500+(500*i)" data-aos-once="true"
              />
            </v-card-text>
            <v-card-actions class="d-flex flex-wrap">
              <v-btn
                @click="dialog = false"  
                :href="projectToShow.preview" target="_blank"
                color="#3F4E4F" text
                v-if="projectToShow.preview"
              >
                <span>Preview</span>
                <v-icon right>mdi-open-in-new</v-icon>
              </v-btn>
              <v-btn color="brown lighten-2" class="ms-0" text @click="dialog = false">
                <span>Close</span>
                <v-icon right>mdi-window-close</v-icon>
              </v-btn>
              <v-spacer/>
              <v-btn icon @click="show = !show">
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show">
                <v-divider/>
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
import HeadTitle from './Layout/HeadTitle.vue'
export default {
  name: "Portfolio",
  components: { HeadTitle },
  data(){
    return {
      show: false,
      dialog: false,
      projectToShow: {},
      projects: [
        {
          id: 1,
          title: "Lusion",
          subTitle: "E-Commerce with React.js",
          screenShot: "lusion.png",
          icons: ['html5.png','css3.png','bootstrap.png','react.png'],
          images: [
            'lusion_1.png',
            'lusion_2.png',
            'lusion_3.png',
            'lusion_4.png',
            'lusion_5.png',
            'lusion_6.png',
            'lusion_7.png',
            'lusion_8.png',
            'lusion_9.png',
            'lusion_10.png',
          ],
          preview: "https://lusion-e-commerce-with-cpanel-reactjs.vercel.app",
          description: "built with React.js, and APIs to Json Server as Backend, Notice: to post data, edit or delete it by APIs you need to preview the local version with fully functionality that linked with json server, so that version on github just to view product and add or delete from cart!",
          pageHover: false,
          pageHeight: "-350px",
        },
        {
          id: 2,
          title: "Shopping Cart Example",
          subTitle: "Shopping Cart Simple Example",
          screenShot: "React-Shopping-Cart.png",
          icons: ['html5.png','css3.png','react.png'],
          images: [
            'React-Shopping-Cart_1.png',
            'React-Shopping-Cart_2.png',
            'React-Shopping-Cart_3.png',
            'React-Shopping-Cart_4.png',
          ],
          preview: "https://shopping-cart-react-five.vercel.app",
          description: "Just training to make React Simple Example for Shopping Cart with fully responsive.",
          pageHover: false,
          pageHeight: "-770px",
        },
        {
          id: 3,
          title: "My Vue Portfolio",
          subTitle: "My Portfolio with Vue.js",
          screenShot: "Vue-Portfolio.png",
          icons: ['html5.png','sass.png','vue.png','vuetify.png'],
          images: [
            'Vue-Portfolio_1.png',
            'Vue-Portfolio_2.png',
            'Vue-Portfolio_3.png',
            'Vue-Portfolio_4.png',
          ],
          preview: "https://awny-aboughaly-portfolio.vercel.app",
          description: "No need to press on preview button because it's the website you in right now! please note that my Portfolio designed with Vue.js & Vuetify with fully responsive.",
          pageHover: false,
          pageHeight: "-248px",
        },
        {
          id: 4,
          title: "My React Portfolio",
          subTitle: "My Portfolio with React.js",
          screenShot: "React-Portfolio.png",
          icons: ['html5.png','css3.png','bootstrap.png','react.png'],
          images: [
            'React-Portfolio_1.png',
            'React-Portfolio_2.png',
            'Under.jpg',
          ],
          preview: "",
          description: "That website designed with React.js but still under construction and very soon will be launched",
          pageHover: false,
          pageHeight: "0px",
        },
        {
          id: 5,
          title: "Student Center",
          subTitle: "Website designed by vuetify",
          screenShot: "Student-Center.png",
          icons: ['html5.png','sass.png','vue.png','vuetify.png'],
          images: [
            'Student-Center_1.png',
            'Student-Center_2.png',
            'Student-Center_3.png',
            'Student-Center_4.png',
          ],
          preview: "https://student-center-websitebyvue-nine.vercel.app",
          description: "This website Created and designed as per the client required.",
          pageHover: false,
          pageHeight: "-965px",
        },
        {
          id: 6,
          title: "Fast Food",
          subTitle: "fully responsive without bootstrap",
          screenShot: "fast-food.png",
          icons: ['html5.png','css3.png'],
          images: [
            'fast-food_1.png',
            'fast-food_2.png',
            'fast-food_3.png',
            'fast-food_4.png',
          ],
          preview: "https://fully-responsive-fast-food-website-pure-html-css.vercel.app",
          description: "Just training to make a responsive website by using pure HTML and CSS without bootstrap or any other framework.",
          pageHover: false,
          pageHeight: "-665px",
        },
        {
          id: 7,
          title: "Watches",
          subTitle: "fully responsive without bootstrap",
          screenShot: "Watches.png",
          icons: ['html5.png','css3.png'],
          images: [
            'Watches_1.png',
            'Watches_2.png',
            'Watches_3.png',
            'Watches_4.png',
          ],
          preview: "https://watches-purecss-without-bootstrap.vercel.app",
          description: "Just training to make a responsive website by using pure HTML and CSS without bootstrap or any other framework.",
          pageHover: false,
          pageHeight: "-270px",
        },
        {
          id: 8,
          title: "The Town",
          subTitle: "fully responsive without bootstrap",
          screenShot: "The-Town.png",
          icons: ['html5.png','css3.png'],
          images: [
            'The-Town_1.png',
            'The-Town_2.png',
            'The-Town_3.png',
            'The-Town_4.png',
          ],
          preview: "https://thetown-purecss-without-bootstrap.vercel.app",
          description: "For training to build website without bootstrap with fully responsive on all devices, that was in beginning of my way in this field.",
          pageHover: false,
          pageHeight: "-265px",
        },
        {
          id: 9,
          title: "Cara",
          subTitle: "E-Commerce Website Pure JS",
          screenShot: "Cara.png",
          icons: ['html5.png','css3.png','bootstrap.png','javascript.png'],
          images: [
            'Cara_1.png',
            'Cara_2.png',
            'Cara_3.png',
            'Cara_4.png',
            'Cara_5.png',
            'Cara_6.png',
            'Cara_7.png',
            'Cara_8.png',
            'Cara_9.png',
          ],
          preview: "https://cara-js.vercel.app/",
          description: "Online shopping Website build by Pure JavaScript with Fully responsive on all devices.",
          pageHover: false,
          pageHeight: "-640px",
        },
        {
          id: 10,
          title: "Calculator",
          subTitle: "Calculator with short history",
          screenShot: "Calculator.png",
          icons: ['html5.png','css3.png','bootstrap.png','javascript.png'],
          images: [
            'Calculator_1.png',
            'Calculator_2.png',
            'Calculator_3.png',
          ],
          preview: "https://calculator-eight-jet.vercel.app",
          description: "A calculator with some added features, such as a temporary memory to save the last calculation",
          pageHover: false,
          pageHeight: "-130px",
        },
        {
          id: 11,
          title: "XO Game",
          subTitle: "XO Game with Smart PC Player",
          screenShot: "XO-Game.png",
          icons: ['html5.png','css3.png','bootstrap.png','javascript.png'],
          images: [
            'XO-Game_1.png',
            'XO-Game_2.png',
            'XO-Game_3.png',
          ],
          preview: "https://xo-game-lovat.vercel.app",
          description: "Feel like you are playing with a real person, because the app is able to know what you choose! and trying to block the path and choose the cell that prevents your victory.",
          pageHover: false,
          pageHeight: "-260px",
        },
        {
          id: 12,
          title: "Currency Exchange",
          subTitle: "App with calculating the amount",
          screenShot: "Currency-Exchange.png",
          icons: ['html5.png','css3.png','bootstrap.png','javascript.png','api.png'],
          images: [
            'Currency-Exchange_1.png',
            'Currency-Exchange_2.png',
            'Currency-Exchange_3.png',
            'Currency-Exchange_4.png',
          ],
          preview: "https://currency-exchange-virid.vercel.app/",
          description: "See the updated currency exchange rates, by choosing two currencies then pressing on the exchange button, Also by Clicking on the Gold Arrow you can go and back between Exchange Rate and EXC calculator Pages",
          pageHover: false,
          pageHeight: "-205px",
        },
      ],
    }
  },
  methods: {
    fillAndShow(project){
      this.projectToShow = project;
      this.dialog = true;
    }
  }
}
</script>

<style lang="scss" scoped>
#portfolio {
  min-height: 100vh;
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
      h4, .desc {
        position: relative;
        right: 0;
      }
      h4 {
        color: #A27B5C;
        transition: 1s 0.6s;
      }
      .desc {
        font-size: 0.9rem;
        font-weight: 500;
        color: #3F4E4F;
        transition: 1.5s 0.6s;
      }
      &:hover h4, &:hover .desc {
        right: 100%;
        transition: 1.5s;
      }
      .HeadTitle, .skillsIcon {
        position: relative;
        left: 0;
        transition: 1.5s 0.6s;
      }
      &:hover .HeadTitle, &:hover .skillsIcon {
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