# 🚀 Página Pressel (Ponte de Alta Conversão) para Vercel

Esta é uma página de **Pré-Venda (Página Ponte)** universal, ultrarrápida (100% Core Web Vitals) e otimizada para tráfego pago (Google Ads, Facebook Ads, TikTok Ads, Taboola).

---

## 📁 Estrutura dos Arquivos

```
pressel-ponte/
├── index.html         # Página principal da pressel ponte
├── style.css          # Estilo visual moderno, responsivo e mobile-first
├── script.js          # Rastreamento de UTMs, data dinâmica e temporizador
├── termos.html        # Termos de Uso (obrigatório para aprovação de anúncios)
├── privacidade.html   # Políticas de Privacidade (obrigatório para anúncios)
├── vercel.json        # Configuração de rotas limpas e segurança na Vercel
└── README.md          # Manual de instruções
```

---

## ⚙️ Como Personalizar Seu Link e Dados

### 1. Alterar o Link de Afiliado / Destino
Abra o arquivo [`script.js`](script.js) e altere a primeira linha:
```javascript
const CONFIG = {
  // 🔗 Coloque o seu link de afiliado aqui:
  targetUrl: "https://seulinkdeafiliado.com",
  ...
};
```
> O script cuidará automaticamente de pegar as suas UTMs do anúncio (ex: `?utm_source=facebook&utm_campaign=natal`) e repassá-las diretamente para o seu link de destino!

### 2. Alterar Textos / Nicho
Abra o arquivo [`index.html`](index.html) e edite:
- **Título da Página (`<title>`):** Linha 7
- **Headline Principal (`<h1>`):** Linha 38
- **Benefícios (`.benefit-item`):** Linhas 58 a 84

---

## 🌐 Como Publicar na Vercel (Passo a Passo Gratuito)

Existem duas formas muito simples de colocar seu site no ar:

### Método 1: Arrastar e Soltar (Sem precisar de Git / Terminal)
1. Acesse **[vercel.com](https://vercel.com)** e crie uma conta gratuita (se ainda não tiver).
2. No seu computador, compacte a pasta `pressel-ponte` em um arquivo `.zip` (ou apenas deixe a pasta pronta).
3. No painel da Vercel, clique em **"Add New..."** > **"Project"**.
4. Se você usa GitHub, pode subir a pasta lá. Se preferir subir diretamente:
   - Você também pode usar a ferramenta oficial da Vercel ou instalar o `vercel cli` se desejar.

### Método 2: Via GitHub (Recomendado para atualizações rápidas)
1. Crie um repositório no seu GitHub (ex: `minha-pressel`).
2. Faça o upload dos arquivos desta pasta para o repositório.
3. No painel da Vercel, clique em **"Import Project"** e selecione o repositório.
4. Clique em **"Deploy"**.
5. Em menos de 10 segundos, seu site estará ativo com link HTTPS gratuito (ex: `minha-pressel.vercel.app`)!

---

## 🎯 Por Que Esta Estrutura Converte Mais?
- **Zero tempo de carregamento:** Por ser HTML/CSS puro, ela carrega instantaneamente no celular do lead (evita desistências por lentidão).
- **Sem risco de bloqueio:** Inclui páginas completas de Termos e Privacidade, além dos avisos legais obrigatórios do Google e Facebook.
- **Pass-through de UTMs:** Você nunca perde o rastreamento da sua comissão na plataforma de afiliados.
