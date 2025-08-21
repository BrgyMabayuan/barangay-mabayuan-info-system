<template>
  <div>
    <nav class="nav-bar">
      <div class="hamburger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div :class="['nav-links', { 'open': menuOpen }]">
        <a href="#home" @click="closeMenu">Home</a>
        <a href="#about" @click="closeMenu">About</a>
        <a href="#services" @click="closeMenu">Services</a>
        <a href="#officials" @click="closeMenu">Officials</a>
        <a href="#news" @click="closeMenu">News</a>
        <a href="#contact" @click="closeMenu">Contact</a>
      </div>
    </nav>

    <HomeSection id="home" />
    <AboutSection id="about" />
    <ServicesSection id="services" />
    <OfficialsSection id="officials" />
    <NewsSection id="news" />
    <ContactSection id="contact" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HomeSection from './components/Home.vue'
import AboutSection from './components/About.vue'
import ServicesSection from './components/Services.vue'
import OfficialsSection from './components/Officials.vue'
import NewsSection from './components/News.vue'
import ContactSection from './components/Contact.vue'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem 0;
  background-color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 128, 0, 0.1);
  border-bottom: 2px solid #e0e0e0;
  flex-wrap: wrap;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  position: relative;
  color: #1e3a1e;
  text-decoration: none;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.nav-links a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 0%;
  height: 2px;
  background-color: #28a745;
  transition: width 0.4s steps(10, end);
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-links a:hover {
  color: #ff6f00;
}

/* Hamburger icon hidden on desktop */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 20px;
  cursor: pointer;
}

.hamburger span {
  height: 3px;
  background: #1e3a1e;
  border-radius: 2px;
}

/* Responsive styles */
@media (max-width: 768px) {
  .nav-bar {
    justify-content: space-between;
    padding: 1rem;
  }

  .hamburger {
    display: flex;
  }

  .nav-links {
    flex-direction: column;
    width: 100%;
    display: none;
  }

  .nav-links.open {
    display: flex;
    margin-top: 1rem;
  }

  .nav-links a {
    padding: 0.5rem 0;
    font-size: 1.1rem;
  }
}
</style>
