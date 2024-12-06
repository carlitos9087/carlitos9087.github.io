let planeState = 0;

// Animações contínuas
const morphing1 = anime({
  targets: '.morph',
  points: [
    {
      value:
        '108.04 24.86, 213.83 54.99, 284.36 75.08, 354.88 95.16, 425.41 115.25, 460.67 125.29, 443.26 125.29,  408.43 125.29, 356.19 125.29, 286.54 125.29, 216.88 125.29,  112.45 125.2',
    },
    {
      value:
        '112.74 38.93, 217.12 74.42, 286.70 98.08, 356.29 121.73, 425.88 145.39, 460.67 157.22, 443.59 156.64, 409.43 155.49, 358.20 153.75, 289.88 151.44, 221.56 149.13, 119.09 145.67',
    },
  ],
  easing: 'easeInOutQuad',
  duration: 3000,
  loop: true,
  autoplay: false,
});

const morphing2 = anime({
  targets: '.morph2',
  points: [
    {
      value:
        '108.04 24.86, 168.78 0, 256.35 37.59, 314.73 62.65, 373.10 87.70, 446.08 119.03, 460.67 125.29, 425.41 115.25, 354.88 95.16, 284.36 75.08, 213.83 54.99, 108.04 24.86',
    },
    {
      value:
        '112.75 38.96, 184.14 0, 267.10 47.19, 322.40 78.64, 377.71 110.10, 433.02 141.56, 460.67 157.29, 425.88 145.46, 356.29 121.79, 286.71 98.13, 217.13 74.46, 112.75 38.96',
    },
  ],
  easing: 'easeInOutQuad',
  duration: 3000,
  loop: true,
  autoplay: false,
});

const morphing3 = anime({
  targets: '.morph3',
  points: [
    {
      value:
        '0 68.51,  75.31 38.13, 190.92 64.28, 306.53 90.43, 383.60 107.86, 422.13 116.57, 460.67 125.29, 414.60 119.61, 368.54 113.93, 276.40 102.58, 138.20 85.54',
    },
    {
      value:
        '0 100.51, 78.25 57.80, 192.98 87.65, 307.70 117.49, 384.19 137.39, 422.43 147.34, 460.67 157.29, 414.60 151.61, 368.54 145.93, 276.40 134.58, 138.20 117.54',
    },
  ],
  easing: 'easeInOutQuad',
  duration: 3000,
  loop: true,
  autoplay: false,
});
morphing1.play();
morphing2.play();
morphing3.play();

// Função para amassar o avião
function crushPlane() {
  morphing1.pause();
  morphing2.pause();
  morphing3.pause();

  anime({
    targets: '.morph',
    points: [
      { value: "112.74 38.93, 217.12 74.42, 286.70 98.08, 356.29 121.73, 425.88 145.39, 460.67 157.22, 443.59 156.64, 409.43 155.49, 358.20 153.75, 209.88 151.44, 119.09 145.67" },
      { value: "107.64 104.42, 219.43 59.06, 279.35 120.03, 338.55 104.57, 365.59 144.74, 387.78 140.75, 364.89 167.21, 329.89 133.26, 259.82 164.48, 207.11 122.55, 160 175.75" },
    ],
    easing: 'easeInOutQuad',
    duration: 100,
    loop: false,
  });

  anime({
    targets: '.morph2',
    points: [
      { value: "112.75 38.96, 184.14 0, 267.10 47.19, 322.40 78.64, 377.71 110.10, 433.02 141.56, 460.67 157.29, 425.88 145.46,   112.75 38.96" },
      { value: "107.64 104.42, 175.98 48.14, 220.2 57.18, 289.21 109.44, 338.55 104.57, 371.28 146.96, 389.71 141.27, 371.95 159.69, 329.07 130.55" },
    ],
    easing: 'easeInOutQuad',
    duration: 100,
    loop: false,
  });

  anime({
    targets: '.morph3',
    points: [
      { value: "0 100.51, 78.25 57.80, 192.98 87.65, 307.70 117.49, 384.19 137.39, 422.43 147.34, 460.67 157.29, 414.60 151.61, 368.54 145.93, 276.40 134.58, 138.20 117.54" },
      { value: "41.075 182.62, 80.94 125.67, 194.84 76.09, 274.23 130.03, 338.55 104.57, 365.69 145.44, 387.8 140.75, 367.7 154.82, 338.89 114.95, 265.19 152.14, 208.24 102.22" },
    ],
    easing: 'easeInOutQuad',
    duration: 100,
    loop: false,
  });
}

function resumePlane() {
  morphing1.restart();
  morphing2.restart();
  morphing3.restart();
}

function uncrushPlane() {
  // anime({
  //   targets: '.morph',
  //   points: [
  //     { value: "107.64 104.42, 219.43 59.06, 279.35 120.03, 338.55 104.57, 365.59 144.74, 387.78 140.75, 364.89 167.21, 329.89 133.26, 259.82 164.48, 207.11 122.55, 160 175.75" },
  //     { value: "112.74 38.93, 217.12 74.42, 286.70 98.08, 356.29 121.73, 425.88 145.39, 460.67 157.22, 443.59 156.64, 409.43 155.49, 358.20 153.75, 209.88 151.44, 119.09 145.67" },
  //   ],
  //   easing: 'easeInOutQuad',
  //   duration: 100,
  //   loop: false,
  // });

  // anime({
  //   targets: '.morph2',
  //   points: [
  //     { value: "107.64 104.42, 175.98 48.14, 220.2 57.18, 289.21 109.44, 338.55 104.57, 371.28 146.96, 389.71 141.27, 371.95 159.69, 329.07 130.55" },
  //     { value: "112.75 38.96, 184.14 0, 267.10 47.19, 322.40 78.64, 377.71 110.10, 433.02 141.56, 460.67 157.29, 425.88 145.46, 356.29 121.79, 286.71 98.13, 217.13 74.46, 112.75 38.96" },
  //   ],
  //   easing: 'easeInOutQuad',
  //   duration: 100,
  //   loop: false,
  // });

  // anime({
  //   targets: '.morph3',
  //   points: [
  //     { value: "41.075 182.62, 80.94 125.67, 194.84 76.09, 274.23 130.03, 338.55 104.57, 365.69 145.44, 387.8 140.75, 367.7 154.82, 338.89 114.95, 265.19 152.14, 208.24 102.22" },
  //     { value: "0 100.51, 78.25 57.80, 192.98 87.65, 307.70 117.49, 384.19 137.39, 422.43 147.34, 460.67 157.29, 414.60 151.61, 368.54 145.93, 276.40 134.58, 138.20 117.54" },
  //   ],
  //   easing: 'easeInOutQuad',
  //   duration: 100,
  //   loop: false,
  // });
  anime({
    targets: '.morph',
    points: [
      { value: "107.64 104.42, 219.43 59.06, 279.35 120.03, 338.55 104.57, 365.59 144.74, 387.78 140.75, 364.89 167.21, 329.89 133.26, 259.82 164.48, 207.11 122.55, 160 175.75" },
      { value: "112.74 38.93, 217.12 74.42, 286.70 98.08, 356.29 121.73, 425.88 145.39, 460.67 157.22, 443.59 156.64, 409.43 155.49, 358.20 153.75, 209.88 151.44, 119.09 145.67" },
    ],
    easing: 'easeInOutQuad',
    duration: 300,
    loop: false,
  });

  anime({
    targets: '.morph2',
    points: [
      { value: "107.64 104.42, 175.98 48.14, 220.2 57.18, 289.21 109.44, 338.55 104.57, 371.28 146.96, 389.71 141.27, 371.95 159.69, 329.07 130.55" },
      { value: "112.75 38.96, 184.14 0, 267.10 47.19, 322.40 78.64, 377.71 110.10, 433.02 141.56, 460.67 157.29, 425.88 145.46,   112.75 38.96" },
    ],
    easing: 'easeInOutQuad',
    duration: 300,
    loop: false,
  });

  anime({
    targets: '.morph3',
    points: [
      { value: "41.075 182.62, 80.94 125.67, 194.84 76.09, 274.23 130.03, 338.55 104.57, 365.69 145.44, 387.8 140.75, 367.7 154.82, 338.89 114.95, 265.19 152.14, 208.24 102.22" },
      { value: "0 100.51, 78.25 57.80, 192.98 87.65, 307.70 117.49, 384.19 137.39, 422.43 147.34, 460.67 157.29, 414.60 151.61, 368.54 145.93, 276.40 134.58, 138.20 117.54" },
    ],
    easing: 'easeInOutQuad',
    duration: 300,
    loop: false,
  });



}
function togglePlane() {
  if (planeState === 0) {
    crushPlane(); // Amassa o avião
    planeState = 1; // Atualiza para o estado amassado
  } else {
    uncrushPlane(); // Desamassa o avião
    planeState = 0; // Retorna ao estado desamassado
    setTimeout(() => {
      resumePlane(); // Retoma o movimento planar após desamassar
    }, 300); // Aguarda a animação de desamassado antes de planar
  }
}

// Adiciona o evento ao clique no avião
document.getElementById('paperplane').addEventListener('click', togglePlane);


// Adiciona o evento ao clique no avião
const navMenu = document.getElementById('nav-menu');
const menuIcon = document.getElementById('menu-icon'); // Certifique-se de ter esse elemento no HTML
const navItems = document.querySelectorAll('.nav-item');

// Abre/fecha o menu ao clicar no botão
menuIcon.addEventListener('click', (event) => {
  event.stopPropagation(); // Evita que o clique no botão feche o menu
  navMenu.classList.toggle('active');
});

// Fecha o menu ao clicar em um item de navegação
navItems.forEach((item) => {
  item.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (event) => {
  if (!navMenu.contains(event.target) && event.target !== menuIcon) {
    navMenu.classList.remove('active');
  }
});




function ajustarAltura() {
  const alturaVisivel = window.innerHeight;
  document.querySelector("#main").style.height = `${alturaVisivel}px`;
}

// Executa no carregamento e ao redimensionar a tela
ajustarAltura();
window.addEventListener("resize", ajustarAltura);


function animateOnScroll() {
  const hardskill = document.getElementById("hardskill");
  const softskill = document.getElementById("softskill");

  const triggerHeight = window.innerHeight / 1.3;

  if (hardskill.getBoundingClientRect().top < triggerHeight) {
    hardskill.style.animation = "slideInLeft 1s ease-out forwards";
  }

  if (softskill.getBoundingClientRect().top < triggerHeight) {
    softskill.style.animation = "slideInRight 1s ease-out forwards";
  }
}
window.addEventListener("scroll", animateOnScroll);

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  });

  const elements = document.querySelectorAll(".animate");
  elements.forEach((el) => observer.observe(el));
});
