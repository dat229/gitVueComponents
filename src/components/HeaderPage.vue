<template>
  <div>
    <Button 
      name='link'
      :customClass="[ 'inline-flex', 'items-center', 'justify-center', 'gap-1.5',
                      'rounded', 'text-sm', 'font-medium', 'outline-none', 'transition-colors',
                      'text-primary-link', 'bg-transparent', 'text-primary', 
                      'h-9', 'px-4', 'py-2','border-primary','text-decoration-line-underline-hover']"
    >
      <likeHight/>
    </Button>

    <Button 
      name='Primary'
      :customClass="[ 'inline-flex', 'items-center', 'justify-center', 'gap-1.5',
                      'rounded', 'text-sm', 'font-medium', 'outline-none', 'transition-colors',
                      'text-primary-foreground', 'bg-primary', 'text-primary', 
                      'h-9', 'px-4', 'py-2','border-primary']"
    ></Button>

    <Button 
      name='Button'
      :customClass="[ 'inline-flex', 'items-center', 'justify-center', 'gap-1.5',
                      'rounded', 'text-sm', 'font-medium', 'outline-none', 'transition-colors',
                      'bg-transparent', 'text-primary-green', 
                      'h-9', 'px-4', 'py-2','border-primary']"
    ></Button>

    <Button 
      name='Disable'
      :customClass="[ 'inline-flex', 'items-center', 'justify-center', 'gap-1.5',
                      'rounded', 'text-sm', 'font-medium', 'outline-none', 'transition-colors',
                      'text-primary-foreground', 'bg-disabled', 
                      'h-9', 'px-4', 'py-2','border-none', 'disabled']"
    ></Button>

    <Button 
      :customClass="[ 'inline-flex', 'items-center', 'justify-center', 'gap-1.5',
                      'rounded', 'text-sm', 'font-medium', 'outline-none', 'transition-colors',
                      'text-primary-foreground', 'bg-primary', 
                      'w11','h11']"
    >
      <template v-slot>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">
        <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
      </template>
    </Button>

    <Button 
      :customClass="[ 'inline-flex', 'items-center', 'justify-center', 'gap-1.5',
                      'rounded', 'text-sm', 'font-medium', 'outline-none', 'transition-colors',
                      'text-primary-foreground', 'bg-primary', 
                      'w10','h10']"
    >
      <template v-slot>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">
        <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
      </template>
    </Button>

    <Button 
      :customClass="[ 'inline-flex', 'items-center', 'justify-center', 'gap-1.5',
                      'rounded', 'text-sm', 'font-medium', 'border-primary',
                      'text-primary-foreground', 'w9','h9']"
    >
      <template v-slot>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">
        <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
      </template>
    </Button>

  </div>
</template>

<script>
import Button from './Button.vue';
import likeHight from '../assets/img/img.vue'

export default {
  name: 'HeaderHome',
  components: {Button, likeHight}
}
</script>

<style></style>
