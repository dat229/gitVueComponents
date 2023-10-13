<template>
  <task-todo v-bind:tasks="tasks"></task-todo>
</template>

<script>
import { ref } from 'vue';
import TaskTodo from '../components/TaskTodo.vue';

export default {
    name: 'HomePage',
    setup(){
        const tasks = ref([
        {
          id: 1,
          title: "Learn Vue JS",
          completed: true,
        },
        {
          id: 2,
          title: "Watch netflix",
          completed: true,
        },
        {
          id: 3,
          title: "Go shopping",
          completed: false,
        },
        {
          id: 4,
          title: "Learn guitar",
          completed: false,
        },
        {
          id: 5,
          title: "Send email",
          completed: false,
        },
      ])

      return {tasks}
    },
    components: {TaskTodo}
}
</script>