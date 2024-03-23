<template>
    <div class="popup-overlay">
      <div class="popup-content">
        <!-- นี่คือส่วนที่จะแสดงหน้าที่ต้องการในป๊อปอัพ -->
        dwadwkandkjabdkjab
        <!-- เช่น ข้อความ รูปภาพ หรือ Component อื่นๆ -->
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Popup',
  };
  </script>
  
  <style scoped>
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .popup-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
  }
  </style>
  