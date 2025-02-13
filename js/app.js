// Day Configuration
const days = {
    1: { // Rose Day
      theme: 'rose',
      title: '🌹 Rose Day',
      color: '#ff69b4',
      animation: 'petals'
    },
    2: { // Propose Day
      theme: 'propose',
      title: '💍 Propose Day',
      color: '#ff4757',
      animation: 'sparkles'
    },
    // ... Add other days
  };
  
  let currentDay = 1;
  
  // Initialize Day
  function loadDay(dayNumber) {
    const dayConfig = days[dayNumber];
    
    // Update progress dots
    document.querySelectorAll('.progress-dot').forEach(dot => {
      dot.classList.toggle('active', dot.dataset.day <= dayNumber);
    });
  
    // Load day-specific content
    const container = document.getElementById('dayContainer');
    container.innerHTML = `
      <div class="theme-animation ${dayConfig.animation}"></div>
      <h1>${dayConfig.title}</h1>
      <div class="interactive-element"></div>
    `;
  
    // Update theme colors
    document.documentElement.style.setProperty('--primary', dayConfig.color);
    document.documentElement.style.setProperty('--secondary', darkenColor(dayConfig.color, 20));
  }
  
  // Navigation Controls
  document.querySelector('.prev-btn').addEventListener('click', () => {
    if (currentDay > 1) loadDay(--currentDay);
  });
  
  document.querySelector('.next-btn').addEventListener('click', () => {
    if (currentDay < 8) loadDay(++currentDay);
  });
  
  // Initial Load
  loadDay(1);