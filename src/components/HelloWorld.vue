<template>
  <div class="hello">
    Giang Văn Đạt
    <header-home />
  </div>
</template>

<script>
import HeaderHome from './HeaderPage.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: { HeaderHome }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
