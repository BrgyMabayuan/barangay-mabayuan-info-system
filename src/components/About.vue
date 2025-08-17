<template>
    <section class="about-section">
      <div class="container">
        <h2 class="section-title">Barangay Mandate</h2>
        <p class="section-text">
          BARANGAY MABAYUAN is mandated to deliver timely, efficient, and accessible public
          service to all stakeholders in accordance with the principles of transparency, accountability,
          and responsiveness. As provided under Republic Act No. 9485 or the Anti-Red Tape Act of
          2007, the agency shall ensure that frontline services are delivered with integrity, guided by
          the values of professionalism and public trust.
        </p>
  
        <h2 class="section-title">Vision</h2>
        <p class="section-text">
          Making our goals within our reach, a sustainable growth for people’s welfare for Barangay
          Mabayuan will make a better place to live in, where our youths are empowered and God
          loving future Leaders and a well-off citizen united together for a common purpose of
          attaining human leadership that shall ultimately result for a better quality of life.
        </p>
  
        <h2 class="section-title">Mission</h2>
        <p class="section-text">
          To work with unity and cooperation among the barangay residents in the attainment of
          progress and good management of their own resources and to strengthened the
          organization in this community, where the delivery of social services is improved while the
          infrastructure facilities is enhanced. To strengthened the coordination and relationship of
          Barangay Mabayuan with different agencies both the National Government, the Local
          Government Unit and the Private Sectors.
        </p>
      </div>
    </section>
  </template>
  
  <style scoped>
  .about-section {
  padding: 60px 20px;
  background-color: #f0f4f8; /* soft base */
  font-family: 'Courier New', Courier, monospace;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  animation: fadeIn 1s ease-in-out;
}

.section-title {
  color: #ff6f00; /* deep green text */
  font-size: 2rem;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  border-left: 6px solid #28a745; /* vibrant green line */
  padding-left: 12px;
}

.section-text {
  font-size: 1.1rem;
  color: #2e4d2e; /* soft greenish text */
  line-height: 1.6;
  text-align: justify;
}
  
  /* Subtle fade-in animation */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  