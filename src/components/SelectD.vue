<template>

    <div class="select-inputs">
      <select v-model="selectedOption1">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <select v-model="selectedOption2">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <select v-model="selectedOption3">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>

  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedOption1: 'option1', // Dữ liệu của ô chọn 1
        selectedOption2: 'option1', // Dữ liệu của ô chọn 2
        selectedOption3: 'option1',  // Dữ liệu của ô chọn 3
      };
    }
  };
  </script>
  
  <style scoped>
  .select-inputs {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  }

  .select-inputs select {
  width: calc(33.33% - 10px); /* Sử dụng 33.33% của chiều rộng của container và trừ đi khoảng cách giữa các ô */
  }


  </style>
  