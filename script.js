// script.js

const btnMensagem = document.getElementById("btnMensagem");
const mensagem = document.getElementById("mensagem");

btnMensagem.addEventListener("click", () => {
  mensagem.innerHTML =
    "O agronegócio sustentável combina inovação, produtividade e preservação ambiental.";
});

const formContato = document.getElementById("formContato");
const resposta = document.getElementById("resposta");

formContato.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;

  resposta.innerHTML = `Obrigado pelo contato, ${nome}! Em breve responderemos sua mensagem.`;

  formContato.reset();
});
