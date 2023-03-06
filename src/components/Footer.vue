<template>
  <footer class="d-flex justify-center align-center white--text pa-2">
    <div class="text-center">
      All Rights Reserved &copy; {{ new Date().getFullYear() }}
      | <span class="hidden-xs-only">Designed and developed by&nbsp;</span>
      <strong>Awny Aboughaly</strong>
    </div>
  </footer>
</template>

<script>

</script>

<style lang="scss" scoped>
footer {
  height: fit-content;
  background-color: #956a49;
  @media (max-width: 959px){
    div {
      font-size: 0.9rem;
    }
  }
}
</style>