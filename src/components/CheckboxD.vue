<template>
    <div class="checkbox-rows">
      <!-- Hàng 1 -->
      <div class="checkbox-row">
        <div class="checkbox-container">
          <input type="checkbox" v-model="checkbox1" class="round-checkbox" />
        </div>
        <div class="checkbox-container">
          <input type="checkbox" v-model="checkbox2" class="round-checkbox" />
        </div>
        <div class="checkbox-container">
          <input type="checkbox" v-model="checkbox3" class="round-checkbox" />
        </div>
        <div class="checkbox-container">
          <input type="checkbox" v-model="checkbox4" class="square-checkbox" /> 
            Are you agree
        </div>
        <div class="checkbox-container">
          <input type="checkbox" v-model="checkbox5" class="round-checkbox" />
        </div>
      </div>
  
      <!-- Hàng 2 -->
      <div class="checkbox-row">
        <div class="checkbox-container">
          <input type="checkbox" v-model="checkbox6" class="square-checkbox" />
        </div>
        <div class="checkbox-container">
          <input type="checkbox" v-model="checkbox7" class="square-checkbox" />
        </div>
        <div class="checkbox-container">
          <input type="checkbox" v-model="checkbox8" class="square-checkbox" />
        </div>
        <div class="checkbox-container">
          <input type="checkbox" v-model="checkbox9" class="round-checkbox" />
        </div>
      </div>
  
      <!-- Hàng 3 -->
      <div class="checkbox-row">
        <div class="checkbox-container"></div>
        <div class="checkbox-container"></div>
        <div class="checkbox-container"></div>
        <div class="checkbox-container"></div>
        <div class="checkbox-container">
          <input type="checkbox" v-model="checkbox10" class="round-checkbox" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        checkbox5: false,
        checkbox6: false,
        checkbox7: false,
        checkbox8: false,
        checkbox9: false,
        checkbox10: false
      };
    }
  };
  </script>
  
  <style scoped>
  .checkbox-rows {
    margin-bottom: 20px;
  }
  
  .checkbox-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .checkbox-container {
    margin-right: 10px;
  }
  
  .round-checkbox {
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }
  
  .square-checkbox {
    width: 20px;
    height: 20px;
  }
  </style>
  