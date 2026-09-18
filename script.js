/**
 * CONFIGURAÇÃO DA SUA PRESSEL (PÁGINA PONTE)
 * Altere a URL abaixo para o seu link de afiliado, checkout ou página de vendas oficial.
 */
const CONFIG = {
  // 🔗 Coloque aqui o seu link de afiliado / destino:
  targetUrl: "https://seusiteoficial.com",

  // ⏱️ Duração do temporizador em minutos:
  timerMinutes: 15,

  // 📧 Email de suporte que aparecerá no rodapé:
  contactEmail: "suporte@seusite.com"
};

document.addEventListener("DOMContentLoaded", () => {
  initDateUpdater();
  initUtmPreserver();
  initCountdownTimer(CONFIG.timerMinutes);
  initContactLink();
});

/**
 * 1. Atualiza dinamicamente a data de hoje na barra de aviso e o ano no rodapé
 */
function initDateUpdater() {
  const dateElement = document.getElementById("current-date");
  const yearElement = document.getElementById("year");

  const today = new Date();
  
  // Formata a data por extenso em português (ex: 18 de Setembro)
  const options = { day: "numeric", month: "long" };
  const formattedDate = today.toLocaleDateString("pt-BR", options);

  if (dateElement) {
    dateElement.textContent = formattedDate;
  }

  if (yearElement) {
    yearElement.textContent = today.getFullYear();
  }
}

/**
 * 2. Captura todos os parâmetros de rastreamento (UTMs, src, sck, etc.)
 * e os repassa automaticamente para o link do botão de destino.
 */
function initUtmPreserver() {
  const ctaLink = document.getElementById("main-cta-link");
  if (!ctaLink) return;

  try {
    // URL base configurada
    const destinationUrl = new URL(CONFIG.targetUrl);
    
    // Parâmetros atuais da página de pressel (ex: do anúncio no Facebook/Google)
    const currentParams = new URLSearchParams(window.location.search);

    // Repassa cada parâmetro recebido para o link de destino
    currentParams.forEach((value, key) => {
      destinationUrl.searchParams.set(key, value);
    });

    // Atualiza o link do botão
    ctaLink.href = destinationUrl.toString();
  } catch (error) {
    console.warn("Erro ao configurar URL de destino:", error);
    ctaLink.href = CONFIG.targetUrl;
  }
}

/**
 * 3. Temporizador de Urgência Regressivo
 */
function initCountdownTimer(minutes) {
  const minutesEl = document.getElementById("timer-minutes");
  const secondsEl = document.getElementById("timer-seconds");

  if (!minutesEl || !secondsEl) return;

  let totalSeconds = minutes * 60;

  const interval = setInterval(() => {
    totalSeconds--;

    if (totalSeconds <= 0) {
      clearInterval(interval);
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      return;
    }

    const currentMinutes = Math.floor(totalSeconds / 60);
    const currentSeconds = totalSeconds % 60;

    minutesEl.textContent = String(currentMinutes).padStart(2, "0");
    secondsEl.textContent = String(currentSeconds).padStart(2, "0");
  }, 1000);
}

/**
 * 4. Tratamento do link de contato no rodapé
 */
function initContactLink() {
  const contactLink = document.getElementById("contact-link");
  if (contactLink) {
    contactLink.addEventListener("click", (e) => {
      e.preventDefault();
      alert(`Para suporte ou dúvidas sobre esta ponte de redirecionamento, envie um e-mail para: ${CONFIG.contactEmail}`);
    });
  }
}
