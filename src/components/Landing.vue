<template>
  <div id="landing" class="flex-center pt-10">
    <div class="container" style="max-width: 900px">
      <v-row justify="center">
        <v-col cols="12" md="7" class="font-weight-black text-center text-md-start mb-1 mb-md-0">
          <p>I'm</p>
          <p class="blue-grey--text text--darken-3">Awny</p>
          <p class="blue-grey--text text--darken-3">Aboughaly</p>
          <p>Frontend Developer</p>
        </v-col>
        <v-col cols="12" md="5" class="d-flex justify-center" style="height: 350px;">
          <img v-for="img in imgs" :key="img.id"
            :src="`/imgs/${img.image}`"
            :width="205 + (img.id * 35)"
            height="155"
            :style="`margin-top:${0 + ((img.id - 1) * 3)}rem;
                    transform: rotate(${img.rotate}deg);
                    max-width: ${65 + (img.id * 5)}%`"
          />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing",
  data(){
    return {
      imgs: [
        { id: 1, image: "work1.png", rotate: 10 },
        { id: 2, image: "work2.png", rotate: -5 },
        { id: 3, image: "work3.png", rotate: 10 },
        { id: 4, image: "work4.png", rotate: -5 },
        { id: 5, image: "work5.png", rotate: 5 },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
#landing {
  min-height: 100vh;
  p {
    line-height: 4.3rem;
    @media (max-width: 600px){
      line-height: 2.8rem;
    }
    &:not(:first-child, :last-child) {
      font-size: 4rem;
      @media (max-width: 600px){
        font-size: 2.8rem;
      }
    }
    &:first-child, &:last-child {
      color: #b98961;
      font-size: 2.8rem;
      @media (max-width: 600px){
        font-size: 1.8rem;
      }
    }
  }
  img {
    position: absolute;
  }
}
</style>