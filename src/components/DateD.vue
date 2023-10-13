<template>

    <div class="date-pickers">
      <input type="date" v-model="selectedDate1" />
      <input type="date" v-model="selectedDate2" />
      <input type="date" v-model="selectedDate3" />
    </div>

  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedDate1: '', // Dữ liệu của ô chọn ngày 1
        selectedDate2: '', // Dữ liệu của ô chọn ngày 2
        selectedDate3: ''  // Dữ liệu của ô chọn ngày 3
      };
    }
  };
  </script>
  
  <style scoped>
  .date-pickers {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  }

  .date-pickers input {
  width: calc(33.33% - 10px); /* Sử dụng 33.33% của chiều rộng của container và trừ đi khoảng cách giữa các ô */
  }
  </style>
  