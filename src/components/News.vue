<template>
    <section class="news-announcements">
      <h2>Barangay News</h2>
  
      <div class="sections-container">
        <!-- News Section -->
        <div class="news-section">
          <h3>📢 News</h3>
          <div class="card-container">
            <div class="news-card" v-for="(item, index) in newsList" :key="index">
              <img :src="item.image" alt="News Image" class="news-img" />
              <div class="news-content">
                <h4>{{ item.title }}</h4>
                <p class="date">{{ item.date }}</p>
                <p>{{ item.content }}</p>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Announcement Section -->
        <!-- <div class="announcements-section">
          <h3>📌 Announcement</h3>
          <div class="announcement-wrapper">
            <div class="announcement-card">
              <h4>{{ announcement.title }}</h4>
              <p class="date">{{ announcement.date }}</p>
              <p>{{ announcement.content }}</p>
            </div>
          </div>
        </div> -->
      </div>
    </section>
  </template>
  
  <script setup>
import ligaImage from '@/assets/liga.jpg'
import helpImage from '@/assets/help.jpg'
import tulongImage from '@/assets/tulong.jpg'
import sagipImage from '@/assets/sagip.jpg'

const newsList = [
  {
    title: 'Juan Fong League',
    date: 'August 23, 2025',
    content: '',
    image: ligaImage
  },
  {
    title: 'BMERU RESPONDING MEDICAL EMERGENCY (ABDOMINAL PAIN)',
    date: 'August 3, 2025 – 8:50PM',
    content: 'PATIENT TRANSPORT TO JLGMH',
    image: helpImage
  },
  {
    title: 'BMERU RESPONDING MEDICAL EMERGENCY (NAMAMANHID ANG KATAWAN)',
    date: 'August 3, 2025 – 5:10PM',
    content: 'PATIENT TRANSPORT TO JLGMH @ OTERO AVENUE PUROK 2',
    image: tulongImage
  },
  {
    title: 'BMERU RESPONDING MEDICAL EMERGENCY (CODE BLUE)',
    date: 'August 2, 2025 – 8:12PM',
    content: `Time Of Call: 8:12PM
Team Arrive: 8:14PM
Team Depart At Scene: 8:20PM
Team Arrive At Hospital: 8:30PM
#47 UPPER GROTTO LANE – PATIENT TRANSPORT TO JLGMH`,
    image: sagipImage
  }
]

const announcement = {
  title: 'Barangay Assembly This August',
  date: 'August 10, 2025',
  content: 'All residents are invited to attend the Barangay Assembly at 3PM in the covered court.'
}
</script>
  
  <style scoped>
  .news-announcements {
    padding: 2rem;
    background: #f2f2f2;
    text-align: center;
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
  