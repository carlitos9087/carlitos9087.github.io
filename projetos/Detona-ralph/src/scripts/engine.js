const state = {
    view: {
      squares: document.querySelectorAll(".square"),
      enemy: document.querySelector(".enemy"),
      timeLeft: document.querySelector("#time-left"),
      score: document.querySelector("#score"),
      health: document.querySelector("#helth"),
    },
    values: {
      gameVelocity: 1000,
      hitPosition: 0,
      result: 0,
      curretTime: 30,
      lives: 3, 
    },
    actions: {
      timerId: setInterval(randomSquare, 1000),
      countDownTimerId: setInterval(countDown, 1000),
    },
  };
  
  function countDown() {
    state.values.curretTime--;
    state.view.timeLeft.textContent = state.values.curretTime;
  
    if (state.values.curretTime <= 0) {
      clearInterval(state.actions.countDownTimerId);
      clearInterval(state.actions.timerId);
  
      if (state.values.result <= 0) {
        decreaseLives();
      }
  
      if (state.values.result > 0) {
        playSound("ele vence");
      } else {
        playSound("o que eu errei");
      }
  
      setTimeout(() => {
        alert("Game Over! O seu resultado foi: " + state.values.result);
      }, 1000);
    }
  }
  
  function decreaseLives() {
    if (state.values.lives > 0) {
      state.values.lives--;
      state.view.health.textContent = `x${state.values.lives}`;
  
      if (state.values.lives === 0) {
        // Game over logic quando vidas chegam a zero
        alert("Você perdeu todas as vidas! Fim de jogo.");
      }
    }
  }
  
  function playSound(audioName) {
    let audio = new Audio(`./src/audios/${audioName}.m4a`);
    audio.volume = 0.3;
    audio.play();
  }
  
  function randomSquare() {
    state.view.squares.forEach((square) => {
      square.classList.remove("enemy");
    });
  
    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
  }
  
  function addListenerHitBox() {
    state.view.squares.forEach((square) => {
      square.addEventListener("mousedown", () => {
        if (square.id === state.values.hitPosition) {
          state.values.result++;
          state.view.score.textContent = state.values.result;
          state.values.hitPosition = null;
          playSound("hit");
        } else {
          // Se não for a posição correta
          state.values.result--;
          state.view.score.textContent = state.values.result;
          playSound("Quack");
        }
      });
    });
  }

  document.querySelector("#restart-button").addEventListener("click", restartGame);

function restartGame() {
  // Limpa os timers existentes para evitar execuções múltiplas
  clearInterval(state.actions.timerId);
  clearInterval(state.actions.countDownTimerId);

  // Reinicia os valores do jogo
  state.values.result = 0;
  state.values.curretTime = 30; // Tempo inicial do jogo
  state.view.score.textContent = state.values.result;
  state.view.timeLeft.textContent = state.values.curretTime;

  // Reinicia os timers e recomeça o jogo
  state.actions.timerId = setInterval(randomSquare, 1000);
  state.actions.countDownTimerId = setInterval(countDown, 1000);

  // Opcional: mensagem de reinício ou som de início
  playSound("restart");
}



  function initialize() {
    addListenerHitBox();

  }
  
  initialize();