<template>
  <section class="home-section">
    <div class="left-content">
      <div class="hero">
        <h1 class="typewriter">
          Welcome to <span class="highlight">BMIS</span>
        </h1>
        <p class="subtitle bold">
          Barangay Mabayuan Information System
        </p>
        <p class="subtitle">
          The official website of Barangay Mabayuan, Olongapo City.
        </p>
      </div>
    </div>

    <div class="right-map">
      <iframe
        class="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15426.183303720605!2d120.2921!3d14.8442!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396712b3c0ac67d%3A0x8bcbf1036010eaae!2sBarangay%20Mabayuan%2C%20Olongapo%2C%20Zambales!5e0!3m2!1sen!2sph!4v1667548760000!5m2!1sen!2sph"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
</template>

<style scoped>
.home-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: calc(100vh - 104px);
  padding: 2rem;
  background: 
    linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(233, 245, 233, 0.8)),
    url('@/assets/mabayuan.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-family: 'Courier New', Courier, monospace;
  gap: 2rem;
}

.left-content {
  flex: 1;
  text-align: left;
  padding-left: 3rem;
}

.right-map {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.map-iframe {
  width: 100%;
  height: 450px;
  border: 2px solid #1e3a1e;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.hero h1 {
  font-size: 2.8rem;
  margin-bottom: 0.5rem;
  color: #1e3a1e;
}

.highlight {
  color: #ff6f00;
}

.subtitle {
  font-size: 1.2rem;
  color: #2e4d2e;
  margin-top: 0.3rem;
}

.bold {
  font-weight: bold;
}

.typewriter {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid #28a745;
  animation: typing 2.5s steps(30, end) forwards, blink 0.75s step-end infinite;
  font-size: 2.2rem;
  max-width: fit-content;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink {
  0%, 100% {
    border-color: #28a745;
  }
  50% {
    border-color: transparent;
  }
}

/* RESPONSIVE STYLES */
@media (max-width: 768px) {
  .home-section {
    flex-direction: column;
    padding: 2rem 1rem;
    text-align: center;
  }

  .left-content {
    padding-left: 0;
    text-align: center;
  }

  .typewriter {
    font-size: 2rem;
  }

  .hero h1 {
    font-size: 2.4rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .map-iframe {
    height: 300px;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 2rem;
  }

  .typewriter {
    font-size: 1.6rem;
  }

  .map-iframe {
    height: 250px;
  }

  .subtitle {
    font-size: 0.95rem;
  }
}
</style>
