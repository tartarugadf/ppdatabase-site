document.addEventListener("DOMContentLoaded", () => {
  const ptBtn = document.getElementById("ptBtn");
  const enBtn = document.getElementById("enBtn");
  const title = document.getElementById("title");
  const policy = document.getElementById("policyText");
  const navPriv = document.getElementById("navPriv");
  const footerLine1 = document.getElementById("footerLine1");

  const textos = {
    pt: {
      lang: "pt-BR",
      title: "Política de Privacidade",
      navPriv: "Privacidade",
      footer1: "© 2025 PPDataBase — Todos os direitos reservados",
      html: `
        <p>Esta política de privacidade se aplica ao aplicativo <strong>PPDataBase</strong> (doravante referido como “Aplicativo”) para dispositivos móveis, criado por <strong>Tartaruga</strong> (doravante referido como “Provedor de Serviço”) como um serviço suportado por anúncios. Este serviço é fornecido “NO ESTADO EM QUE SE ENCONTRA”.</p>

        <h2>Que informações o Aplicativo obtém e como são usadas?</h2>
        <p>O Aplicativo não obtém nenhuma informação quando você o baixa e usa. Não é necessário registro para utilizar o Aplicativo.</p>

        <h2>O Aplicativo coleta informações precisas de localização em tempo real do dispositivo?</h2>
        <p>Este Aplicativo não coleta informações precisas sobre a localização do seu dispositivo móvel.</p>

        <h2>Terceiros têm acesso às informações obtidas pelo Aplicativo?</h2>
        <p>Como o Aplicativo não coleta nenhuma informação, nenhum dado é compartilhado com terceiros.</p>

        <h2>Quais são meus direitos de opt-out?</h2>
        <p>Você pode interromper toda a coleta de informações pelo Aplicativo facilmente, desinstalando-o. Você pode usar os processos padrão de desinstalação disponíveis em seu dispositivo móvel ou no marketplace de aplicativos.</p>

        <h2>Crianças</h2>
        <p>O Aplicativo não é utilizado para solicitar dados nem direcionar marketing a crianças menores de 13 anos.</p>
        <p>O Provedor de Serviço não coleta conscientemente informações pessoalmente identificáveis de crianças. O Provedor incentiva pais e responsáveis a monitorarem o uso da internet por seus filhos e a orientá-los para nunca fornecer informações pessoais sem permissão.</p>
        <p>Se você acredita que uma criança forneceu informações pessoais ao Provedor de Serviço por meio do Aplicativo e/ou Serviços, entre em contato pelo e-mail <a href="mailto:contato.ppdatabase@gmail.com">contato.ppdatabase@gmail.com</a> para que as medidas necessárias sejam tomadas. Você também deve ter pelo menos 16 anos para consentir com o processamento de suas informações pessoais em seu país (em alguns países, um responsável pode fazê-lo em seu nome).</p>

        <h2>Segurança</h2>
        <p>O Provedor de Serviço se preocupa em proteger a confidencialidade das suas informações. Porém, como o Aplicativo não coleta informações, não há risco de acesso não autorizado aos seus dados.</p>

        <h2>Alterações</h2>
        <p>Esta Política de Privacidade pode ser atualizada periodicamente. O Provedor de Serviço notificará sobre mudanças atualizando esta página com a nova Política de Privacidade. O uso contínuo é considerado aceitação das alterações.</p>
        <p><strong>Esta política de privacidade é válida a partir de 09/05/2025</strong></p>

        <h2>Seu consentimento</h2>
        <p>Ao utilizar o Aplicativo, você consente com o processamento das suas informações conforme descrito nesta Política de Privacidade, agora e conforme alterada pelo Provedor de Serviço.</p>

        <h2>Contato</h2>
        <p>Se você tiver dúvidas sobre privacidade ao usar o Aplicativo, entre em contato pelo e-mail <a href="mailto:contato.ppdatabase@gmail.com">contato.ppdatabase@gmail.com</a>.</p>
      `
    },
    en: {
      lang: "en",
      title: "Privacy Policy",
      navPriv: "Privacy Policy",
      footer1: "© 2025 PPDataBase — All rights reserved",
      html: `
        <p>This privacy policy applies to the <strong>PPDataBase</strong> app (hereby referred to as "Application") for mobile devices that was created by <strong>Tartaruga</strong> (hereby referred to as "Service Provider") as an Ad Supported service. This service is intended for use "AS IS".</p>

        <h2>What information does the Application obtain and how is it used?</h2>
        <p>The Application does not obtain any information when you download and use it. Registration is not required to use the Application.</p>

        <h2>Does the Application collect precise real time location information of the device?</h2>
        <p>This Application does not collect precise information about the location of your mobile device.</p>

        <h2>Do third parties see and/or have access to information obtained by the Application?</h2>
        <p>Since the Application does not collect any information, no data is shared with third parties.</p>

        <h2>What are my opt-out rights?</h2>
        <p>You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.</p>

        <h2>Children</h2>
        <p>The Application is not used to knowingly solicit data from or market to children under the age of 13.</p>
        <p>The Service Provider does not knowingly collect personally identifiable information from children. The Service Provider encourages all children to never submit any personally identifiable information through the Application and/or Services. The Service Provider encourage parents and legal guardians to monitor their children's Internet usage and to help enforce this Policy by instructing their children never to provide personally identifiable information through the Application and/or Services without their permission.</p>
        <p>If you have reason to believe that a child has provided personally identifiable information to the Service Provider through the Application and/or Services, please contact the Service Provider (<a href="mailto:contato.ppdatabase@gmail.com">contato.ppdatabase@gmail.com</a>) so that they will be able to take the necessary actions. You must also be at least 16 years of age to consent to the processing of your personally identifiable information in your country (in some countries we may allow your parent or guardian to do so on your behalf).</p>

        <h2>Security</h2>
        <p>The Service Provider is concerned about safeguarding the confidentiality of your information. However, since the Application does not collect any information, there is no risk of your data being accessed by unauthorized individuals.</p>

        <h2>Changes</h2>
        <p>This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to their Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.</p>
        <p><strong>This privacy policy is effective as of 2025-05-09</strong></p>

        <h2>Your Consent</h2>
        <p>By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by the Service Provider.</p>

        <h2>Contact Us</h2>
        <p>If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at <a href="mailto:contato.ppdatabase@gmail.com">contato.ppdatabase@gmail.com</a>.</p>
      `
    }
  };

  function applyLang(key) {
    const t = textos[key] || textos.pt;
    // Atualiza o atributo lang do documento
    document.documentElement.lang = t.lang;
    // Título, nav e conteúdo
    title.textContent = t.title;
    if (navPriv) navPriv.textContent = t.navPriv;
    policy.innerHTML = t.html;
    if (footerLine1) footerLine1.textContent = t.footer1;
    // Visual de seleção
    ptBtn.classList.toggle("active", key === "pt");
    enBtn.classList.toggle("active", key === "en");
    // Persistência
    try { localStorage.setItem("ppdb_lang", key); } catch(e) {}
  }

  // Carrega preferência, senão tenta pelo <html lang>, default pt
  const saved = (() => { try { return localStorage.getItem("ppdb_lang"); } catch(e) { return null; }})();
  const initial = saved || (document.documentElement.lang.startsWith("en") ? "en" : "pt");
  applyLang(initial);

  ptBtn.addEventListener("click", () => applyLang("pt"));
  enBtn.addEventListener("click", () => applyLang("en"));
});
