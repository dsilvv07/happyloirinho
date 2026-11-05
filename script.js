// Controle da música de fundo
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
  if (isPlaying) {
    music.pause();
    musicBtn.textContent = '🎵 Tocar Sunshine';
  } else {
    music.play().catch(e => console.log("Erro ao reproduzir áudio:", e));
    musicBtn.textContent = '⏸️ Pausar Música';
  }
  isPlaying = !isPlaying;
});

// Mostrar a mensagem secreta ao clicar no botão
const surpriseBtn = document.getElementById('surprise-btn');
const hiddenMessage = document.getElementById('hidden-message');

surpriseBtn.addEventListener('click', () => {
  hiddenMessage.classList.remove('hidden');
  surpriseBtn.style.display = 'none';
});

// Criar efeito de brilhos/estrelas prateadas no fundo
const starsContainer = document.getElementById('stars');
const numberOfStars = 35;

for (let i = 0; i < numberOfStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  // Tamanho e posições aleatórias
  const size = Math.random() * 3 + 1.5 + 'px';
  star.style.width = size;
  star.style.height = size;
  star.style.left = Math.random() * 100 + 'vw';
  
  // Velocidade e atraso aleatórios
  star.style.animationDuration = Math.random() * 4 + 2 + 's';
  star.style.animationDelay = Math.random() * 3 + 's';

  starsContainer.appendChild(star);
}