// 使用Canvas实现基础粒子效果
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3 + 1,
    speedX: Math.random() * 2 - 1,
    speedY: Math.random() * 2 - 1
  });
}

// 在JS中添加触摸事件支持
window.addEventListener('touchmove', function(e) {
    mouse.x = e.touches[0].clientX;
    mouse.y = e.touches[0].clientY;
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  particles.forEach(particle => {
    particle.x += particle.speedX;
    particle.y += particle.speedY;
    
    // 边界检测
    if(particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
    if(particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
    
    ctx.fillStyle = 'rgba(118, 202, 248, 0.8)';
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fill();
  });
  
  requestAnimationFrame(animate);
}
animate();