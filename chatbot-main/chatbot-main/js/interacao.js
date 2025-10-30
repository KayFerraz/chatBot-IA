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
            "olá": "Olá! Seja bem-Vindo a FinTech! Como podemos te ajudar hoje?",
            "bom dia": "Bom dia! Espero que você tenha um ótimo dia!",
            "boa tarde": "Boa tarde! Em que posso ser útil?",
            "b tarde": "Boa tarde! Em que posso ser útil?",
            "boa noite": "Boa noite! Precisa de algo antes de dormir?",
            "oi": "Oi! Tudo bem?",
            "tudo bem?": "Estou funcionando perfeitamente, obrigado por perguntar!",
            "como você está?": "Estou ótimo! Pronto para responder suas perguntas.",
            "o que você faz?": "Eu sou um assistente simples programado para responder perguntas pré-definidas.",
            "quem te criou?": "Fui criado como um exemplo de HTML, CSS e JavaScript.",
            "tchau": "Até logo! Volte sempre."
        };
        // --- Fim do Banco de Dados ---


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

        // 6. Função que cria os balões de chat e os coloca na tela
        function adicionarMensagem(texto, classeCSS) {
            const divMensagem = document.createElement('div'); // Cria uma nova <div>
            divMensagem.classList.add('message');         // Adiciona a classe CSS 'message'
            divMensagem.classList.add(classeCSS);       // Adiciona a classe 'user-message' ou 'bot-message'
            divMensagem.textContent = texto;              // Coloca o texto dentro da div

            chatContainer.appendChild(divMensagem); // Adiciona a nova div ao container do chat

            // Faz a tela rolar para baixo automaticamente para ver a última mensagem
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }