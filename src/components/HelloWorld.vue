<template>
  <div class="hello">
    Đỗ Quang Duy
    <header-home />
  </div>
</template>

<script>
import HeaderHome from './InputD.vue'

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
