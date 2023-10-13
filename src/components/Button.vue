<template>
    <button :class="customClass">
      <slot/>
      <i :class="icon" v-if=checkIcon></i>
      {{ name ? name : "" }}
    </button>
</template>

<script>
export default {
    name:"ButtonPage",
    props: {
      name: {
        type: String,
        required: false
      },
      icon: {
        type: Object, 
        required: false,
        default: () => ({classIcon:"", checkIcon: false})
      },
      customClass: {
        type: Array,
        default: () => []
      }
    }
}
</script>

<style scope>
button{
    cursor: pointer;
    -webkit-appearance: button;
    background-color: transparent;
    background-image: none;
    font-family: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    margin: 0;
    padding: 0;
}

.inline-flex{
    display: inline-flex;
}

.items-center {
    align-items: center;
}

.justify-center{
    justify-content: center;
}

.gap-1\.5 {
    gap: 0.375rem;
}

.rounded {
    border-radius: 0.25rem;
}

.text-sm{
    font-size: .875rem;
    line-height: 1.25rem;
}

.font-medium {
    font-weight: 500;
}
</style>