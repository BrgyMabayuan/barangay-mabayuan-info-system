<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="contact-item">
          <strong>Contact Number:</strong>
          <span>(047) 602-3900</span>
        </div>
        <div class="contact-item">
          <strong>Facebook:</strong>
          <a href="https://www.facebook.com/MakabagongBarangayMabayuan" target="_blank" rel="noopener noreferrer">
            facebook.com/MakabagongBarangayMabayuan
          </a>
        </div>
        <div class="contact-item">
          <strong>Email:</strong>
          <a href="mailto:BarangayMabayuan2018@gmail.com">BarangayMabayuan2018@gmail.com</a>
        </div>
      </div>
      <div class="footer-bottom">
        © {{ new Date().getFullYear() }} Barangay Mabayuan, Olongapo City. All rights reserved.
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Contact',
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #2c3e50;
    color: #fff;
    padding: 2rem 1rem;
    text-align: center;
  }
  
  .footer-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    font-size: 0.9rem;
    margin-bottom: 1rem;
    text-align: left;
  }
  
  .contact-item {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
  
  .contact-item a {
    color: #ecf0f1;
    text-decoration: none;
  }
  
  .contact-item a:hover {
    text-decoration: underline;
  }
  
  .footer-bottom {
    font-size: 0.9rem;
    color: #bdc3c7;
    border-top: 1px solid #7f8c8d;
    padding-top: 1rem;
    margin-top: 1rem;
  }
  </style>
  