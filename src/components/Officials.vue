<template>
    <div class="officials-container">
      <div class="section">
        <h2 class="section-title">Punong Barangay</h2>
        <div class="card-grid center">
          <div class="official-card">
            <img src="@/assets/logo.png" alt="Punong Barangay" class="official-img" />
            <h3 class="official-name">EDWIN M. ESPOS</h3>
            <p class="official-role">Punong Barangay</p>
          </div>
        </div>
      </div>
  
      <div class="section">
        <h2 class="section-title">Sangguniang Barangay Members</h2>
        <div class="card-grid center">
          <div class="official-card" v-for="(member, index) in sangguniangMembers" :key="index">
            <img src="@/assets/logo.png" alt="Sangguniang Member" class="official-img" />
            <h3 class="official-name">{{ member.name }}</h3>
            <p class="official-role">Sangguniang Barangay Member</p>
          </div>
        </div>
      </div>
  
      <div class="section">
        <h2 class="section-title">SK Chairperson</h2>
        <div class="card-grid center">
          <div class="official-card">
            <img src="@/assets/logo.png" alt="SK Chairperson" class="official-img" />
            <h3 class="official-name">YZYRA MARIE E. HERNANDEZ</h3>
            <p class="official-role">SK Chairperson</p>
          </div>
        </div>
      </div>
  
      <div class="section">
        <h2 class="section-title">Barangay Secretary</h2>
        <div class="card-grid center">
          <div class="official-card">
            <img src="@/assets/logo.png" alt="Barangay Secretary" class="official-img" />
            <h3 class="official-name">RAQUEL D. BULAONG</h3>
            <p class="official-role">Barangay Secretary</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sangguniangMembers: [
          { name: 'JOEL M. DELOS REYES' },
          { name: 'DINISIO E. VINOYA JR.' },
          { name: 'LETICIA D. FERNANDEZ' },
          { name: 'EARL L. ESCUSA' },
          { name: 'NENITA S. JAO' },
          { name: 'JOSE MARVIN N. OPRIASA' },
          { name: 'ROWELL F. MONTALLA' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Remove scoped limitations for body background */
  :global(body) {
    background-color: #fdf3e7; /* light warm background */
    margin: 0;
  }
  
  /* Container stays centered */
  .officials-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 1rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  /* Section styling */
  .section {
    margin-bottom: 1rem;
  }
  
  .section-title {
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    padding-left: 1rem;
    border-left: 6px solid #ff6f00; /* orange vertical line */
    color: #006400; /* green titles */
    background-color: #fff8f0;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-radius: 4px;
    text-align: left;
  }
  
  /* Grid layout */
  .card-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
  }
  
  .center {
    justify-content: center;
  }
  
  /* Card styling */
  .official-card {
    width: 180px;
    text-align: center;
    padding: 1rem;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .official-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
  
  /* Image styling */
  .official-img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 0.75rem;
    border: 3px solid #ff6f00; /* orange border */
  }
  
  /* Official name stays green */
  .official-name {
    font-size: 1rem;
    font-weight: 600;
    color: #006400; /* dark green */
    margin: 0;
  }
  
  .official-role {
    font-size: 0.9rem;
    color: #666;
    margin-top: 0.25rem;
  }
  </style>
  
  
