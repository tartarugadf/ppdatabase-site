document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const messageField = document.getElementById("message");
  const charCount = document.getElementById("charCount");

  // Contador de caracteres
  messageField.addEventListener("input", () => {
    charCount.textContent = messageField.value.length;
  });

  // Intercepta envio para mostrar alerta e limpar campos
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita o envio imediato

    const nome = form.name.value.trim();
    const email = form.email.value.trim();
    const assunto = form.subject.value;
    const mensagem = form.message.value.trim();

    if (!nome || !email || !assunto || !mensagem) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Abre cliente de e-mail com dados preenchidos
    const mailtoLink = `mailto:contato.ppdatabase@gmail.com?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(
      `Nome: ${nome}\nEmail: ${email}\n\n${mensagem}`
    )}`;

    window.location.href = mailtoLink;

    // Limpa o formulário e contador
    form.reset();
    charCount.textContent = "0";

    alert("Mensagem preparada no seu cliente de e-mail. Verifique antes de enviar.");
  });
});
