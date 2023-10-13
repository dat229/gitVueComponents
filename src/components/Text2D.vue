<template>
    <div class="row">
      <div class="input-container">
        <input v-model="price" type="text" placeholder="Giá tiền" />
        <span class="currency">VNĐ</span>
      </div>
      <div class="input-container">
        <i class="search-icon"></i>
        <input v-model="searchTerm" type="text" placeholder="Tìm kiếm" />
      </div>
      <div class="input-container">
        <input type="text" placeholder="" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        price: '', // Dữ liệu của ô giá tiền
        searchTerm: '' // Dữ liệu của ô tìm kiếm
      };
    }
  };
  </script>
  
  <style scoped>
  .row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .input-container {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
  }
  
  .currency {
    margin-left: 5px;
  }
  
  .search-icon {
   /* background-image: url('path/to/search-icon.png'); */
    width: 20px;
    height: 20px;
    background-size: cover;
    margin-right: 5px;
  }
  </style>
  