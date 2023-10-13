<template>
  <div class="hello">
    <header-home />
  </div>
</template>

<script>
import HeaderHome from './HeaderPage.vue'

export default {
  name: 'HelloWorld',

  data(){
    return{
      dat: "Dat"
    } 
  },
  props: {
    msg: String
  },
  components: { HeaderHome }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
