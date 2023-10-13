<template>
    <li>
        <button :class="classToggle()" @click="$emit('onCompleted')"> 
            <i v-if="taskItem.completed" class="far fa-check-circle"></i>  
            <i v-else class="far fa-circle"></i>
            {{ taskItem.title }}
        </button>
        <button @click="$emit('onRemoved')">
            <i class="far fa-trash-alt"></i>
        </button>
    </li>
</template>

<script>
import { ref } from 'vue';

export default {
    name: "TaskItem",
    props: {
        task: {
            type: Object,
            required: false,
            default: ()=> ({})
        }
    },
    // eslint-disable-next-line vue/no-setup-props-destructure
    setup({task}) {
        const taskItem = ref(task);

        const classToggle = () => {
            let className = ["toggle"];
            if(task.completed){
                className.push("toggle-completed");
            }

            return className;
        }

        return {taskItem, classToggle}
    } 
}
</script>

<style>

</style>