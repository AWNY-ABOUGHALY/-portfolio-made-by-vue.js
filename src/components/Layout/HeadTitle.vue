<template>
  <div class="headtitle text-center">
    <span
      class="pb-1 text-uppercase font-weight-bold"
      :style="`font-size: ${size}rem;`"
    >
      {{ titleName }}
    </span>
  </div>
</template>

<script>
export default {
  name: "HeadTitle",
  props: ["titleName", "size"],
};
</script>

<style lang="scss" scoped>
.headtitle {
  span {
    border-bottom: 3px solid #a27b5c;
    color: #3f4e4f;
  }
}
</style>
