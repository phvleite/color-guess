const paletas = document.getElementsByClassName('ball');
let placar = 0;

// Gerando as cores
function cor() {
  return (Math.random() * 255).toFixed(0);
}

function valorPaleta() {
  return (Math.random() * 5).toFixed(0);
}

function sortearCor() {
  const paletaSorteada = paletas[valorPaleta()].style.backgroundColor;
  return paletaSorteada.slice(3, paletaSorteada.length);
}

function colorirPaletas() {
  document.getElementById('answer').innerText = 'Escolha uma cor!';
  for (let i = 0; i < paletas.length; i += 1) {
    paletas[i].style.backgroundColor = `rgb(${cor()},${cor()},${cor()})`;
  }
  document.getElementById('rgb-color').innerText = `${sortearCor()}`;
}

function corSelecionada(evento) {
  let paletaSelecionada = evento.target.style.backgroundColor;
  paletaSelecionada = paletaSelecionada.slice(3, paletaSelecionada.length);
  const paletaSorteada = document.getElementById('rgb-color').innerText;
  if (paletaSelecionada === paletaSorteada) {
    document.getElementById('answer').innerText = 'Acertou! Novas cores!';
    document.getElementById('score').innerText = `Placar: ${placar += 3}`;
    return;
  }
  document.getElementById('answer').innerText = 'Errou! Tente novamente.';
  document.getElementById('score').innerText = `Placar: ${placar -= 1}`;
  if (placar < 0) {
    placar = 0;
    document.getElementById('score').innerText = `Placar: ${placar}`;
  }
}

for (let i = 0; i < paletas.length; i += 1) {
  paletas[i].addEventListener('click', corSelecionada);
}

const btIniciarJogo = document.getElementById('reset-game');
btIniciarJogo.addEventListener('click', colorirPaletas);

colorirPaletas();
