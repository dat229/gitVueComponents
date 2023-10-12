<template>
    <div class="input-wrap">
        <label v-if="label" >{{label}}</label>
        <input
            v-bind="$attrs"
            :value="modelValue"
            :name="name"
            :class="cls"
            :style="style"
            @input="$emit('update:modelValue', $event.target.value)"
        >
    </div>
</template>

<script>
    export default {
        props: {
            label : {
                type: String,
                default: ''
            },
            name: {
                type: String,
                default: ''
            },
            style: {
                type: [String, Object],
                default: ''
            },
            cls: {
                type: [String, Object],
                default: '' 
            },
            modelValue: {
                type: [String, Number],
                default: ''
            }
        },
        methods: {
        }
    }
</script>

<style scoped>

label {
    margin: 10px 0;
}

.input-wrap {
  display: flex;
  flex-direction: column;
}

.input-wrap input {
    padding: 10px 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: all .15s cubic-bezier(.4,0,.2,1);
}

.input-wrap input.error:focus-visible{
    outline: none;
    box-shadow: 0 0 0 3px #fff, 0 0 0 5px rgba(255, 131, 131, 0.68);
}

.input-wrap input.error {
    border: 1px solid red
}

.input-wrap input.success:focus-visible{
    outline: 2px solid rgb(85, 211, 85);
}
.input-wrap input.success {
    box-shadow: 0 0 0 3px #fff, 0 0 0 5px rgba(115, 220, 131, 0.68);
}

</style>