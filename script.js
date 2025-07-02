// Wait 60 seconds, then show the cake
setTimeout(() => {
  document.querySelector('.star-wars').style.display = 'none';
  const cake = document.getElementById('cake');
  cake.style.display = 'flex';
}, 60000); // 60 seconds
