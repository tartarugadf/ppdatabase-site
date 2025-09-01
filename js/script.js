// Função para adicionar confirmação de redirecionamento
function confirmarRedirecionamento(url) {
  const resposta = confirm("Deseja ir para a Google Play Store?");

  if (resposta) {
    window.location.href = url; // Redireciona para a URL fornecida
  } else {
    console.log("O usuário escolheu não ir para a Google Play.");
  }
}

// Adicionando o evento de clique para os botões de download
document.getElementById('btnPlay').addEventListener('click', function(event) {
  event.preventDefault(); // Previne o redirecionamento imediato
  confirmarRedirecionamento("https://play.google.com/store/search?q=ppdatabase&c=apps&hl=pt_BR");
});

document.getElementById('btnFree').addEventListener('click', function(event) {
  event.preventDefault();
  confirmarRedirecionamento("https://play.google.com/store/apps/details?id=com.turtle.ppdatabase.free");
});

document.getElementById('btnPro').addEventListener('click', function(event) {
  event.preventDefault();
  confirmarRedirecionamento("https://play.google.com/store/apps/details?id=com.turtle.ppdatabase.pro");
});

