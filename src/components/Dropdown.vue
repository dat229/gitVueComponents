<template>

    <div class="container">
    
      <h1>Dropdown</h1>
      <SelectDrop />     
  </div>

  </template>
  
  <script>
  import SelectDrop from './SelectDrop.vue';


  export default {
    name: 'InputD',
    components: {
    SelectDrop,
  },
  };
  </script>
  
  <style scoped>
 
  .container {
  width: 80%; /* Chiều rộng của khung */
  max-width: 820px; /* Chiều rộng tối đa của khung */
  margin: 0 auto; /* Tự động căn giữa khung theo chiều ngang */
  margin-top: 100px; /* Điều chỉnh khoảng cách từ trên xuống */
  padding: 20px; /* Khoảng cách bên trong khung */
  border: 1px solid #ccc; /* Viền khung */
  border-radius: 8px; /* Bo tròn góc của khung */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Hiệu ứng bóng đổ */
  }

  </style>
  