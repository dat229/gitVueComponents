<template>

    <div class="text-inputs">
      <input v-model="input1" type="text" placeholder="new value" />
      <input v-model="input2" type="text" placeholder="Input value" />
      <input v-model="input3" type="text" placeholder="Input value" />
    </div>

  </template>
  
  <script>
  export default {
    data() {
      return {
        input1: '', // Dữ liệu của ô văn bản 1
        input2: '', // Dữ liệu của ô văn bản 2
        input3: '',  // Dữ liệu của ô văn bản 3
      };
    }
  };
  </script>
  
  <style scoped>
  .text-inputs {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .text-inputs input {
    width: calc(20% - 10px); /* Sử dụng 33.33% của chiều rộng của container và trừ đi khoảng cách giữa các ô */
  }

  </style>
  