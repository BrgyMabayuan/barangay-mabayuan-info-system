<template>
    <section class="news-announcements">
      <h2>Barangay News</h2>
  
      <div class="sections-container"> 
        <!-- Announcement Section -->
        <div class="announcements-section">
          <h3>📌 Announcement</h3>
          <div class="announcement-wrapper">
            <div class="announcement-card">
              <h4>{{ announcement.title }}</h4>
              <p class="date">{{ announcement.date }}</p>
              <p>{{ announcement.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
import ligaImage from '@/assets/liga.jpg'
import helpImage from '@/assets/help.jpg'
import tulongImage from '@/assets/tulong.jpg'
import sagipImage from '@/assets/sagip.jpg'

const announcement = {
  title: 'Barangay Assembly This August',
  date: 'August 10, 2025',
  content: 'residents are invited to attend the Barangay Assembly at 3PM in the covered court.'
}
</script>
  
  <style scoped>
  .news-announcements {
  padding: 1.5rem 1rem; /* reduce vertical padding */
  background: #f2f2f2;
  text-align: center;
  margin-bottom: 0; /* remove unwanted bottom margin */
}
  
  .sections-container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
  }
  
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 1rem;
  }
  
  .news-card {
    background: white;
    border-radius: 10px;
    overflow: hidden;
    width: 300px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;
  }
  
  .news-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
  
  .news-img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }
  
  .news-content {
    padding: 1rem;
  }
  
  .announcement-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
  
  .announcement-card {
    background: white;
    border-radius: 10px;
    padding: 1.5rem;
    width: 100%;
    max-width: 600px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  
  .announcement-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
  
  h2 {
    margin-bottom: 1rem;
    color: #003366;
  }
  
  h3 {
    color: #444;
    margin-bottom: 0.5rem;
  }
  
  .date {
    font-size: 0.85rem;
    color: #777;
    margin-bottom: 0.5rem;
  }
  </style>
  
