// JavaScript para a Lógica
// . O Segmento: FinTech (Banco Digital)

    // Startup: "ContaSimples"
    // Contexto: Um neobank (banco digital) focado em microempreendedores (MEIs) e freelancers. Eles não são um banco para o público geral.
    // O Problema (A Dor): O time de suporte está sobrecarregado com as mesmas perguntas 24/7. Os clientes são leigos em finanças e têm medo
    // de fazer algo errado.
    // Missão do Chatbot: Atuar como um "filtro" de suporte (tira-dúvidas). Ele deve responder perguntas como: "Como gero um boleto?", "PJ 
    // pode ter cartão de crédito?", "Quanto tempo demora o PIX?", "Qual a taxa da maquininha?". 
    // O link estratégico é para a "página de abertura de conta PJ".


        // --- Este é o nosso "Banco de Dados" Falso ---
        // Usamos um objeto JavaScript onde a "chave" é a pergunta
        // e o "valor" é a resposta.
        const respostasDoBot = {
            "b dia": "Bom dia! Espero que o seu dia seja produtivo. Como posso te ajudar hoje?",
            "boa tarde": "Boa tarde! Tudo bem? Estou aqui para tirar suas dúvidas sobre a ContaSimples.",
            "boa noite": "Boa noite! Seja bem-vindo à ContaSimples. Posso te ajudar com alguma dúvida?",

            "oi": "Olá! Seja bem-vindo à ContaSimples. Como posso te ajudar hoje?",
            "ola": "Olá! Que bom ter você por aqui. Como posso ajudar?",
            "valeu": "De nada! Se precisar de mais alguma informação, é só me chamar.",
            "obrigado": "Eu que agradeço! Qualquer dúvida, é só me chamar novamente.",

            "como abro conta pj": "Abrir sua conta PJ na ContaSimples é rápido e sem burocracia. Basta acessar nossa página e seguir o passo a passo.Basta acessar: https://contasimples.com.br/abrir-conta",
            "pj pode ter cartão de crédito": "Sim. A ContaSimples oferece cartão de crédito PJ para quem tem conta ativa, ideal para controlar os gastos do seu negócio.",
            "como gero boleto": "Para gerar um boleto, entre no app da ContaSimples e vá em 'Cobranças' → 'Gerar Boleto'. Informe o valor, data de vencimento e pronto.",
            "quanto tempo demora o pix": "O PIX na ContaSimples é instantâneo. O valor cai em até 10 segundos, 24 horas por dia, inclusive fins de semana. ",
            "tem taxa de manutenção": "Não. A ContaSimples é livre de tarifas mensais e sem custo de abertura. https://contasimples.com.br/abrir-conta",
            "qual a taxa da maquininha": "As taxas variam conforme o tipo de pagamento: débito a partir de 1,39% e crédito a partir de 2,99%. ",
            "posso emitir nota fiscal": "Sim. É possível integrar sua ContaSimples ao sistema de emissão de notas fiscais ou usar o módulo próprio da plataforma. ",
            "quanto tempo pra compensar boleto": "Os boletos pagos compensam normalmente em até 1 dia útil. ",
            "sou mei posso abrir conta pj": "Sim. A ContaSimples é feita para MEIs e freelancers que querem separar as finanças pessoais das profissionais.",
            "a conta vem com cartão físico": "Sim. Ao abrir sua conta PJ, você recebe um cartão físico e também um virtual para usar em compras online. ",

            "nao entendi": "Desculpe, não consegui entender muito bem sua pergunta. Pode reformular ou ser um pouco mais específico?",
            "repete": "Claro! Posso repetir sim. Qual parte você quer que eu explique novamente?",
            "falar com atendente": "Entendo. Nosso atendimento humano está disponível em horário comercial. Enquanto isso, posso tentar resolver sua dúvida?",
            "humano": "Posso te conectar a um atendente, mas antes, me diz rapidamente sobre o que é sua dúvida pra eu direcionar melhor?",
            "nao to conseguindo acessar": "Sinto muito por isso. Tente fechar e abrir novamente o app ou verificar sua conexão. Se o problema continuar, posso te passar o link do suporte técnico. Deseja?",
            "sim": "Claro. Aqui está: https://contasimples.com.br/abrir-conta.",
            "erro": "Parece que algo deu errado. Você pode me contar o que está aparecendo na tela pra eu tentar te ajudar melhor?",
            "ajuda": "Claro! Me diga qual dúvida você tem sobre a ContaSimples que eu te explico passo a passo.",
            "nao sei": "Tudo bem. Posso te ajudar a entender. Me diz o que você está tentando fazer agora na ContaSimples."
            };
        // --- Fim do Banco de Dados ---
        const resposta = 'Abra sua conta PJ na ContaSimples: https://contasimples.com.br/abrir-conta';


        // 1. Pegar os elementos do HTML que vamos usar
        const chatContainer = document.getElementById('chat-container');
        const userInput = document.getElementById('user-input');
        const sendBtn = document.getElementById('send-btn');

        // 2. Adicionar um "ouvinte" para o clique no botão
        sendBtn.addEventListener('click', processarMensagem);

        // 3. Adicionar um "ouvinte" para a tecla "Enter"
        userInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                processarMensagem();
            }
        });

        // 4. Função principal que processa a mensagem
        function processarMensagem() {
            const prompt = userInput.value; // Pega o texto digitado
            if (prompt.trim() === "") return; // Não faz nada se estiver vazio

            // A. Adiciona a mensagem do usuário na tela
            adicionarMensagem(prompt, 'user-message');

            // B. Limpa o campo de digitação
            userInput.value = "";

            // C. Pega a resposta do Bot
            // Usamos .toLowerCase() para ignorar maiúsculas/minúsculas
            const promptFormatado = prompt.toLowerCase().trim();
            const resposta = obterRespostaDoBot(promptFormatado);

            // D. Adiciona a resposta do bot na tela (com um pequeno atraso para simular "pensamento")
            setTimeout(() => {
                adicionarMensagem(resposta, 'bot-message');
            }, 500); // 500ms = meio segundo
        }

        // 5. Função que encontra a resposta no "banco de dados"
        function obterRespostaDoBot(prompt) {
            if (respostasDoBot[prompt]) {
                return respostasDoBot[prompt]; // Retorna a resposta se a pergunta exata for encontrada
            } else {
                // Resposta padrão se não entender
                return "Desculpe, não entendi essa pergunta. Minhas respostas são limitadas. Tente 'olá' ou 'o que você faz?'.";
            }
        }
        function adicionarMensagem(texto, classeCSS) {
    const divMensagem = document.createElement('div');
    divMensagem.classList.add('message');
    divMensagem.classList.add(classeCSS);

    // Expressão regular detecta links (https:// ou http://)
    const partes = texto.split(/(https?:\/\/[^\s]+)/g);

    partes.forEach(parte => {
        if (parte.match(/^https?:\/\//)) {
            const link = document.createElement('a');
            link.href = parte;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = parte;
            link.style.color = "#007bff"; // opcional: cor azul tipo link
            link.style.textDecoration = "underline";
            divMensagem.appendChild(link);
        } else {
            divMensagem.appendChild(document.createTextNode(parte));
        }
    });

    chatContainer.appendChild(divMensagem);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}