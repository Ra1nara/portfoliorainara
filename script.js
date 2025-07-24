particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.5,
        "random": false
      },
      "size": {
        "value": 3,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        }
      }
    },
  "retina_detect": true
});
  

// Partículas já configuradas (mantive seu código, não mexi)

const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  nav.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// CARROSSEL - Suporta múltiplos carrosseis na página
document.querySelectorAll('.carrossel').forEach(carrossel => {
  const container = carrossel.querySelector('.carrosselContainer');
  const items = carrossel.querySelectorAll('.carrosselItem');
  const btnPrev = carrossel.querySelector('.prev');
  const btnNext = carrossel.querySelector('.next');
  const totalSlides = items.length;
  let index = 0;

  btnNext.addEventListener('click', () => {
    index = (index + 1) % totalSlides;
    container.style.transform = `translateX(-${index * 100}%)`;
  });

  btnPrev.addEventListener('click', () => {
    index = (index - 1 + totalSlides) % totalSlides;
    container.style.transform = `translateX(-${index * 100}%)`;
  });
});



  