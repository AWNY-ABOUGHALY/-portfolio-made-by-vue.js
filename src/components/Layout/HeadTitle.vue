<template>
  <div class="headtitle text-center">
    <span class="pb-1 text-uppercase font-weight-bold" :style="`font-size: ${size}rem;`">
      {{ titleName }}
    </span>
  </div>
</template>

<script>
export default {
  name: "",
  props: ["titleName","size"]
}
</script>

<style lang="scss" scoped>
.headtitle {
  span {
    border-bottom: 3px solid #A27B5C;
    color: #3F4E4F;
  }
}
</style>