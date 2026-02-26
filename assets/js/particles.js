'use strict';

(function () {
  var canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  var ctx = canvas.getContext('2d');
  var particles = [];
  var mouseX = -1e5;
  var mouseY = -1e5;
  var animationId = null;

  var config = {
    count: 120,
    fallSpeed: 0.02,
    influenceRadius: 120,
    forceStrength: 2.5,
    damping: 0.92,
    sizeMin: 1,
    sizeMax: 2.5,
    opacity: 0.1
  };

  function resize() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    if (particles.length === 0) initParticles();
    else {
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        if (p.x > w) p.x = Math.random() * w;
        if (p.y > h) p.y = Math.random() * h;
      }
    }
  }

  function initParticles() {
    particles = [];
    var w = canvas.width;
    var h = canvas.height;
    for (var i = 0; i < config.count; i++) {
      var fall = Math.random() * 0.05;
      var op = Math.random() * 0.25;
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: 0,
        vy: 0,
        size: config.sizeMin + Math.random() * (config.sizeMax - config.sizeMin),
        fallSpeed: config.fallSpeed + fall,
        opacity: config.opacity + op
      });
    }
  }

  function run() {
    var w = canvas.width;
    var h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];

      p.vy += p.fallSpeed;

      var dx = p.x - mouseX;
      var dy = p.y - mouseY;
      var dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < config.influenceRadius && dist > 0) {
        var force = (1 - dist / config.influenceRadius) * config.forceStrength;
        p.vx += (dx / dist) * force;
        p.vy += (dy / dist) * force;
      }

      p.vx *= config.damping;
      p.vy *= config.damping;
      p.x += p.vx;
      p.y += p.vy;

      if (p.y > h + 5) {
        p.y = -2;
        p.x = Math.random() * w;
        p.vy = 0;
        p.vx *= 0.3;
      }
      if (p.y < -5) p.y = h + 2;
      if (p.x > w + 5) p.x = -2;
      if (p.x < -5) p.x = w + 2;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,0,0,' + p.opacity + ')';
      ctx.fill();
    }

    animationId = requestAnimationFrame(run);
  }

  function onMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }

  function onMouseLeave() {
    mouseX = -1e5;
    mouseY = -1e5;
  }

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseleave', onMouseLeave);
  window.addEventListener('resize', resize);

  resize();
  run();
})();
