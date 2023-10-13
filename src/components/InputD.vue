  <template>

    <div class="container">
    
      <h1>Input</h1>
      <TextD />
      <SelectD />
      <DateD />
      <Text2D />
      <CheckboxD />
      <UploadFileD />      
  </div>

  </template>
  
  <script>
  import TextD from './TextD.vue';
  import SelectD from './SelectD.vue';
  import DateD from './DateD.vue';
  import Text2D from './Text2D.vue';
  import CheckboxD from './CheckboxD.vue';
  import UploadFileD from './UploadFileD.vue';

  export default {
    name: 'InputD',
    components: {
    TextD, SelectD, DateD, Text2D, CheckboxD, UploadFileD
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
  