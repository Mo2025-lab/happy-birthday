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
    crawl.style.visibility = 'visible';
  }, 10000);

  setTimeout(() => {
    document.getElementById('duck').style.display = 'block';
    document.getElementById('virtual-cake').style.display = 'flex';
    document.getElementById('bday-track').currentTime = 60;
    document.getElementById('bday-track').play();
  }, 10000);
}

// Start on page load
window.addEventListener('load', () => {
  startCelebration();
});

