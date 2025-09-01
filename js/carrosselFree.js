// Lista das imagens + textos correspondentes
const imagens = [
    { src: "images/telas/free1.jpeg", texto: "Não é necessário cadastrar usuário e senha, o aplicativo já inicia na tela de consulta." },
    { src: "images/telas/free2.jpeg", texto: "É possível realizar a consulta pelo nome do produto. A busca inteligente vai limitando as opções enquando você digita o nome da substância." },
    { src: "images/telas/free3.jpeg", texto: "Também é possível pesquisar pelo número ONU do produto e, da mesma forma, a opções vão sendo limitadas enquanto você digita." },
    { src: "images/telas/free4.jpeg", texto: "Quando encontrar o produto é só clicar no botão Buscar. Caso queira limpar o resultado da consulta, basta clicar no botão X, no resultado." },
    { src: "images/telas/free5.jpeg", texto: "Essa tela mostra um resumo do produto, contendo várias informações da substância." },
    { src: "images/telas/free6.jpeg", texto: "Alguns produtos perigosos possuem opções diferentes de grupo de embalagem, quantidades limitadas ou mesmo classe ou subclasse de risco. Clique na opção que desejar." },
    { src: "images/telas/free7.jpeg", texto: "Essa tela apresenta todas as informações necessárias para o transporte do produto perigoso como dados básicos, painel de segurança, rótulos de risco, extintores, EPIs, calços, vestimenta básica, ferramentas e cones" },
    { src: "images/telas/free8.jpeg", texto: "Quando você clica em um rótulo de risco, a imagem aumenta, destacando os detalhes da placa." },
    { src: "images/telas/free9.jpeg", texto: "Quando você clica no botão vermelho com desenho do extintor, a tela mostra quais extintores o veículo deve possuir para o transporte da substância, seja em carga granel ou fracionada." },
    { src: "images/telas/free10.jpeg", texto: "Quando você clica no botão azul claro com desenho do oculos de proteção, a tela mostra quais equipamentos de proteção individual o veículo de possuir dentro da cabine." },
    { src: "images/telas/free11.jpeg", texto: "Quando você clica no botão azul escuro com desenho do pneu, a tela mostra quanto calços o veículo deve possuir e como estes equipamentos devem ser, conforme a legislação." },
    { src: "images/telas/free12.jpeg", texto: "Quando você clica no botão verde com desenho do colete, a tela mostra a vestimenta básica que o motorista e seus auxiliares devem trajar durante o transporte do produto." },
    { src: "images/telas/free13.jpeg", texto: "Quando você clica no botão marrom com desenho do alicate, a tela mostra qual o jogo de ferramentas básico deve existir no veículo." },
    { src: "images/telas/free14.jpeg", texto: "Quando você clica no botão laranja com desenho do cone de trânsito, a tela mostra a quatidade de cones que o veículo deve possuir e quais caracteristicas estes cones devem possuir." }
];

let indiceAtual = 0;

function atualizarCarrossel() {
    const imagem = document.getElementById("img-carousel");
    const texto = document.getElementById("text-carousel");

    imagem.src = imagens[indiceAtual].src;
    texto.textContent = imagens[indiceAtual].texto;
}

function trocarImagem(direcao) {
    indiceAtual += direcao;

    if (indiceAtual < 0) {
        indiceAtual = imagens.length - 1;
    } else if (indiceAtual >= imagens.length) {
        indiceAtual = 0;
    }

    atualizarCarrossel();
}

// Inicializa
document.addEventListener("DOMContentLoaded", atualizarCarrossel);

document.getElementById('btn-free').addEventListener('click', function() {
  alert("Você será redirecionado para a Google Play!");
});
