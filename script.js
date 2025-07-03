function launchBalloonPop() {
  const container = document.getElementById('explosion-container');
  for (let i = 0; i < 40; i++) {
    confetti({
      particleCount: 20,
      spread: 120,
      origin: { x: Math.random(), y: Math.random() * 0.4 + 0.3 }
    });
  }
}

function startCelebration() {
  launchBalloonPop();
  setTimeout(() => {
    const crawl = document.getElementById('crawl-container');
    crawl.style.visibility = 'visible'; // Show Star Wars crawl after 10 seconds
  }, 10000);

  setTimeout(() => {
    document.getElementById('duck').style.display = 'block'; // Show dancing duck
    document.getElementById('virtual-cake').style.display = 'flex'; // Show virtual cake
    document.getElementById('bday-track').currentTime = 60; // Start the audio at 1:00 minute
    document.getElementById('bday-track').play(); // Play the song
  }, 10000); // After 10 seconds
}

// Start on page load
window.addEventListener('load', () => {
  startCelebration();
});
