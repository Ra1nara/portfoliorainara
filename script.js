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
      "type": "triangle"
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

function iniciarCarrossel(carrossel) {
  const container = carrossel.querySelector('.carrosselContainer');
  const items = carrossel.querySelectorAll('.carrosselItem');
  const prevBtn = carrossel.querySelector('.prev');
  const nextBtn = carrossel.querySelector('.next');

  let index = 0;

  function mostrarItem(i) {
    container.style.transform = `translateX(${-i * 100}%)`;
  }

  prevBtn.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : items.length - 1;
    mostrarItem(index);
  });

  nextBtn.addEventListener('click', () => {
    index = (index < items.length - 1) ? index + 1 : 0;
    mostrarItem(index);
  });
}

// Ativa todos os carrosséis
document.querySelectorAll('.carrossel').forEach(c => iniciarCarrossel(c));

function exibir(containerSelector, cardSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const cards = container.querySelectorAll(cardSelector);

  cards.forEach(card => {
    const infop = card.querySelector('.infop');
    const titulo = card; // elemento clicável

    if (titulo && infop) {
      titulo.addEventListener('click', () => {
        infop.classList.toggle('visivel');
        infop.classList.toggle('oculto');
      });
    }
  });
}

// Ativando em #projetos
exibir('#projetos', '.box');

// Ativando em #services
exibir('#services', '.service-card');



document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flip');
  });
});

// ano automático
document.getElementById('year').textContent = newDate().getFullYear();
// voltar ao topo suave
document.querySelector('.to-top').addEventListene('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



  