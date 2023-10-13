<template>
  <div class="container">
    <div class="task">
      <div class="title">
        <h1>To Do List</h1>
      </div>
      <div class="form">
        <input type="text" placeholder="New Task" v-model="newTask" />
        <button @click="onAddItem">
          <i class="fas fa-plus"></i>
        </button>
      </div>
      <div class="taskItems">
        <ul>
          <TaskItem 
            v-bind:task="task" 
            v-for="task in taskList" 
            :key="task.id"
            @onCompleted="onCompletedItem(task.id)" 
            @onRemoved="onRemovedItem(task.id)"         
            />
        </ul>
      </div>
      <div class="clearBtns">
        <button @click="onClearCompleted">Clear completed</button>
        <button @click="onClearAll">Clear all</button>
      </div>
      <div class="pendingTasks">
        <span>Pending Tasks:{{ taskList.filter(item=> item.completed==false).length }} </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import TaskItem from './TaskItem.vue';

export default {
    name: "TaskTodo",
    props:{
      tasks: {
        type: Object,
        required: false,
        // default: ()=> ([])
      }
    },
    // eslint-disable-next-line vue/no-setup-props-destructure
    setup({tasks}) {
      const taskList = ref(tasks)
      const newTask = ref("");

      const onCompletedItem = (id)=>{
        taskList.value.map((item)=>{
          if(item.id == id){
            item.completed = !item.completed;
          }
        });
      }

      const onAddItem = ()=>{
        let id;
        if(taskList.value.length>0)
          id = taskList.value[taskList.value.length-1].id + 1;
        else
         id = 1

        taskList.value.push({
          id,
          title: newTask.value,
          completed: false,
        })

        newTask.value = "";
      }

      const onRemovedItem = (id) => {
        const listItem = taskList.value.filter(item=> !(item.id==id));
        taskList.value = listItem;
      }

      const onClearCompleted = ()=>{
        const listItem = taskList.value.filter(item=> item.completed==false);
        taskList.value = listItem;
      }

      const onClearAll = () => {
        taskList.value = [];
      }

      return{
        newTask,
        taskList,
        onCompletedItem,
        onRemovedItem,
        onAddItem,
        onClearCompleted,
        onClearAll
      };
    },
    components: {TaskItem}
}
</script>

<style>

</style>