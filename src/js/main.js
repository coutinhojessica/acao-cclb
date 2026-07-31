import { iniciarHeader } from "./header.js";

async function carregarComponentes(id, arquivo) {
  const resposta = await fetch(arquivo);
  const html = await resposta.text();

  document.getElementById(id).innerHTML = html;

  if (id === "header") {
    iniciarHeader();
  }
}

carregarComponentes("header", "./components/header.html");
carregarComponentes("hero", "./components/hero.html");
carregarComponentes("footer", "./components/footer.html");

const slides = document.querySelector(".carousel");
const slidesImagens = document.querySelectorAll(".slides");

const btnEsquerda = document.querySelector(".esquerda");
const btnDireita = document.querySelector(".direita");

let index = 0;

btnEsquerda.addEventListener("click", () => {
  index--;
  if (index < 0) index = slidesImagens.length - 1;
  atualizarCarrossel();
});

btnDireita.addEventListener("click", () => {
  index++;
  if (index > slidesImagens.length - 1) index = 0;
  atualizarCarrossel();
});

const atualizarCarrossel = () => {
  slidesImagens.forEach((slide) => {
    slide.style.transform = `translateX(-${index * 100}%)`;
  });
};

// depoimentos

const videos = document.querySelector(".carousel-videos");
const video = document.querySelectorAll(".video");

const btnEsquerdaVideo = document.querySelector(".esquerda-videos");
const btnDireitaVideo = document.querySelector(".direita-videos");

let indexVideos = 0;

btnEsquerdaVideo.addEventListener("click", () => {
  indexVideos--;
  if (indexVideos < 0) indexVideos = video.length - 1;
  atualizarCarrossel();
});

btnDireitaVideo.addEventListener("click", () => {
  indexVideos++;
  if (indexVideos > video.length - 1) indexVideos = 0;
  atualizarCarrosselVideos();
});

const atualizarCarrosselVideos = () => {
  video.forEach((slide) => {
    slide.style.transform = `translateX(-${indexVideos * 100}%)`;
  });
};
