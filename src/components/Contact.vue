<template>
  <div id="contact" class="mt-10 mb-2 pt-10">
    <HeadTitle titleName="Contact" size="1.9" class="mt-6" />
    <v-container>
      <h2 class="text-center">
        Feel free to contact me<span class="hidden-xs-only"> at any time</span>!
      </h2>
      <v-row class="mt-3">
        <v-col
          cols="12"
          sm="6"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <h3 class="text-center text-button">
            You can send me a message by formal way
          </h3>
          <v-form
            ref="form"
            v-model="valid"
            class="mt-3 text-center text-sm-start"
            action="https://formsubmit.co/41e4ccbfa80275be69d3baeafe236dda"
            method="POST"
            target="_blank"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-once="true"
          >
            <v-text-field
              label="Your Name"
              outlined
              dense
              hint="Please write your first name and last name"
              background-color="white"
              color="#3F4E4F"
              name="Name"
              v-model="name"
              :rules="nameRules"
            ></v-text-field>
            <v-text-field
              label="Your Email"
              outlined
              dense
              background-color="white"
              color="#3F4E4F"
              name="Email"
              v-model="email"
              :rules="emailRules"
            ></v-text-field>
            <v-textarea
              outlined
              name="Message"
              label="Your Message"
              dense
              no-resize
              background-color="white"
              color="#3F4E4F"
              v-model="msg"
              :rules="msgRules"
            ></v-textarea>
            <v-btn
              type="submit"
              color="#3F4E4F"
              :dark="valid"
              :disabled="!valid"
              class="me-2 mt-1"
              style="min-width: 114px"
            >
              Submit
              <v-icon right>mdi-email-check-outline</v-icon>
            </v-btn>
            <v-btn
              type="reset"
              color="#A27B5C"
              dark
              @click="resetForm"
              class="me-2 mt-1"
              style="min-width: 114px"
            >
              Reset
              <v-icon right>mdi-trash-can-outline</v-icon>
            </v-btn>
          </v-form>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-once="true"
        >
          <h3 class="text-center text-button">
            Or just chat me by one of the following ways!
          </h3>
          <div
            class="mt-5 mt-sm-8 mx-auto"
            style="width: fit-content"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div class="d-flex align-center align-sm-start me-1 me-sm-3 mb-2">
              <v-icon left color="#A27B5C">mdi-phone</v-icon>
              <div class="d-flex flex-column">
                <span class="font-weight-bold hidden-xs-only">Phone</span>
                <span>+201019103897</span>
              </div>
            </div>
            <div class="d-flex align-center align-sm-start mt-sm-5 mb-2">
              <v-icon left color="#A27B5C">mdi-email</v-icon>
              <div class="d-flex flex-column">
                <span class="font-weight-bold hidden-xs-only">Email </span>
                <a href="mailto:awnyaboughaly@gmail.com" style="color: #000"
                  >awnyaboughaly@gmail.com</a
                >
              </div>
            </div>
          </div>
          <HeadTitle
            titleName="Get in Touch"
            size="1.2"
            class="hidden-xs-only mt-13"
          />
          <div class="text-center mt-5 white-hover">
            <a
              v-for="socialMedia in socialMedias"
              :key="socialMedia.id"
              :href="socialMedia.link"
              :aria-label="socialMedia.icon"
              target="_blank"
            >
              <v-icon class="text-h4 mx-1 onhover" :color="socialMedia.brand">
                mdi-{{ socialMedia.icon }}
              </v-icon>
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import HeadTitle from "./Layout/HeadTitle.vue";
export default {
  name: "Contact",
  components: { HeadTitle },
  data() {
    return {
      valid: false,
      name: "",
      email: "",
      msg: "",
      nameRules: [
        (v) => !!v || `Your Name is required`,
        (v) => (v && v.length >= 3) || `Please write your Name correctly`,
      ],
      emailRules: [
        (v) => !!v || `Your Email is required`,
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      msgRules: [
        (v) => !!v || `Your Message is required`,
        (v) => (v && v.length > 3) || `Please write your Real Message!`,
      ],
      socialMedias: [
        {
          id: "1",
          link: "https://www.facebook.com/AWNYABOUGHALY",
          icon: "facebook",
          brand: "#1877f2",
        },
        {
          id: "2",
          link: "https://m.me/AWNYABOUGHALY",
          icon: "facebook-messenger",
          brand: "#0084ff",
        },
        {
          id: "3",
          link: "https://twitter.com/AWNYABOUGHALY",
          icon: "twitter",
          brand: "#1da1f2",
        },
        {
          id: "4",
          link: "https://www.instagram.com/awnyaboughaly/",
          icon: "instagram",
          brand: "#c13584",
        },
        {
          id: "5",
          link: "https://wa.me/00201019103897",
          icon: "whatsapp",
          brand: "#4aae20",
        },
        {
          id: "6",
          link: "https://www.linkedin.com/in/awnyaboughaly/",
          icon: "linkedin",
          brand: "#0077b5",
        },
      ],
    };
  },
  methods: {
    resetForm() {
      this.name = "";
      this.email = "";
      this.msg = "";
      this.$refs.form.reset();
    },
  },
};
</script>

<style lang="scss">
#contact {
  @media screen and (min-width: 970px) {
    height: 100vh;
    max-height: 800px;
  }
  .v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state)
    > .v-input__control
    > .v-input__slot
    fieldset {
    border: 1px solid #e6e6e6 !important;
  }
  h2 {
    opacity: 0.7;
    color: #3f4e4f;
  }
  h3 {
    color: #a27b5c;
  }
  .white-hover:hover {
    .onhover {
      opacity: 0.3;
    }
  }
  .onhover {
    transition: 0.5s;
  }
  .onhover:hover {
    opacity: 1 !important;
  }
}
</style>
