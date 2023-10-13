<template>
    <div class="upload-container">
      <label for="file-upload">Chọn một file để tải lên:</label>
      <input type="file" id="file-upload" @change="handleFileUpload" />
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      handleFileUpload(event) {
        const file = event.target.files[0]; // Lấy file từ sự kiện change
        // Ở đây bạn có thể thực hiện xử lý với file như tải lên máy chủ hoặc hiển thị thông tin về file.
        console.log('Đã chọn file:', file);
      }
    }
  };
  </script>
  
  <style scoped>
  .upload-container {
    text-align: center; /* Căn giữa theo chiều ngang */
    margin-bottom: 20px; /* Khoảng cách dưới */
  }
  
  /* Bổ sung các kiểu CSS khác nếu cần */
  </style>
  