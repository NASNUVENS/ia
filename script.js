// Dados das perguntas do quiz
const quizQuestions = [
    {
        id: 1,
        question: "Qual família olfativa você prefere?",
        options: [
            { id: "citrico", label: "Cítrico/Fresco", value: "citrico" },
            { id: "floral", label: "Floral", value: "floral" },
            { id: "oriental", label: "Oriental/Especiado", value: "oriental" },
            { id: "amadeirado", label: "Amadeirado", value: "amadeirado" },
            { id: "sem_preferencia", label: "Não sei/Sem preferência", value: "sem_preferencia" }
        ]
    },
    {
        id: 2,
        question: "Para qual ocasião você busca um perfume?",
        options: [
            { id: "dia_trabalho", label: "Dia a dia/Trabalho", value: "dia_trabalho" },
            { id: "eventos_noite", label: "Eventos especiais/Noite", value: "eventos_noite" },
            { id: "lazer", label: "Lazer/Casual", value: "lazer" },
            { id: "romantico", label: "Encontro romântico", value: "romantico" },
            { id: "todas_ocasioes", label: "Para todas as ocasiões", value: "todas_ocasioes" }
        ]
    },
    {
        id: 3,
        question: "Qual a intensidade de perfume que você prefere?",
        options: [
            { id: "suave", label: "Suave/Discreto", value: "suave" },
            { id: "moderado", label: "Moderado", value: "moderado" },
            { id: "intenso", label: "Intenso/Marcante", value: "intenso" }
        ]
    },
    {
        id: 4,
        question: "Você prefere perfumes mais frescos ou mais quentes?",
        options: [
            { id: "fresco", label: "Fresco", value: "fresco" },
            { id: "quente", label: "Quente", value: "quente" },
            { id: "ambos", label: "Ambos", value: "ambos" },
            { id: "sem_preferencia_temp", label: "Não sei/Sem preferência", value: "sem_preferencia_temp" }
        ]
    },
    {
        id: 5,
        question: "Qual estação do ano você associa ao perfume ideal?",
        options: [
            { id: "primavera_verao", label: "Primavera/Verão (quente)", value: "primavera_verao" },
            { id: "outono_inverno", label: "Outono/Inverno (frio)", value: "outono_inverno" },
            { id: "todas_estacoes", label: "Todas as estações", value: "todas_estacoes" }
        ]
    },
    {
        id: 6,
        question: "Você se identifica mais com qual estilo?",
        options: [
            { id: "classico", label: "Clássico/Elegante", value: "classico" },
            { id: "moderno", label: "Moderno/Criativo", value: "moderno" },
            { id: "casual", label: "Casual/Despojado", value: "casual" },
            { id: "sedutor", label: "Sedutor/Misterioso", value: "sedutor" },
            { id: "romantico_delicado", label: "Romântico/Delicado", value: "romantico_delicado" }
        ]
    },
    {
        id: 7,
        question: "Qual tipo de nota olfativa te agrada mais?",
        options: [
            { id: "frutas_citricas", label: "Frutas cítricas (limão, laranja, bergamota)", value: "frutas_citricas" },
            { id: "flores", label: "Flores (rosa, jasmim, lírio)", value: "flores" },
            { id: "especiarias", label: "Especiarias (canela, pimenta, cravo)", value: "especiarias" },
            { id: "madeiras", label: "Madeiras (sândalo, cedro, vetiver)", value: "madeiras" },
            { id: "doces", label: "Notas doces (baunilha, caramelo)", value: "doces" },
            { id: "aquaticas", label: "Notas aquáticas/oceânicas", value: "aquaticas" }
        ]
    },
    {
        id: 8,
        question: "Você prefere um perfume que deixe um rastro marcante ou algo mais próximo à pele?",
        options: [
            { id: "alta_projecao", label: "Deixa rastro (alta projeção)", value: "alta_projecao" },
            { id: "baixa_projecao", label: "Mais intimista (baixa projeção)", value: "baixa_projecao" },
            { id: "moderada_projecao", label: "Moderado", value: "moderada_projecao" }
        ]
    },
    {
        id: 9,
        question: "Qual gênero de perfume você procura?",
        options: [
            { id: "feminino", label: "Feminino", value: "feminino" },
            { id: "masculino", label: "Masculino", value: "masculino" },
            { id: "unissex", label: "Unissex", value: "unissex" }
        ]
    },
    {
        id: 10,
        question: "Qual a sua faixa etária?",
        options: [
            { id: "ate_25", label: "Até 25 anos", value: "ate_25" },
            { id: "26_40", label: "26 a 40 anos", value: "26_40" },
            { id: "acima_40", label: "Acima de 40 anos", value: "acima_40" }
        ]
    }
];

// Banco de dados de perfumes (substitua com seus produtos reais)
const perfumeDatabase = [
    {
        id: 1,
        name: "Sabah Al Ward",
        description: "Perfume árabe floral com notas de rosa e especiarias orientais.",
        price: "R$ 379,90",
        image: "images/sabah_al_ward.jpg", // Placeholder - SUBSTITUA PELA IMAGEM REAL
        tags: ["floral", "oriental", "feminino", "intenso", "quente", "romantico", "eventos_noite"],
        url: "https://www.nasnuvensperfumes.com.br/produtos/sabah-al-ward" // SUBSTITUA PELO LINK REAL
    },
    {
        id: 2,
        name: "Fakhar",
        description: "Floral amadeirado elegante e sofisticado para mulheres modernas.",
        price: "R$ 399,90",
        image: "images/fakhar.jpg", // Placeholder - SUBSTITUA PELA IMAGEM REAL
        tags: ["floral", "amadeirado", "feminino", "moderado", "classico", "dia_trabalho"],
        url: "https://www.nasnuvensperfumes.com.br/produtos/fakhar" // SUBSTITUA PELO LINK REAL
    },
    {
        id: 3,
        name: "Royal Amber",
        description: "Fresco e sofisticado, perfeito para o dia a dia.",
        price: "R$ 79,90",
        image: "images/royal_amber.jpg", // Placeholder - SUBSTITUA PELA IMAGEM REAL
        tags: ["citrico", "fresco", "unissex", "suave", "moderno", "dia_trabalho", "frutas_citricas"],
        url: "https://www.nasnuvensperfumes.com.br/produtos/royal-amber-decants" // SUBSTITUA PELO LINK REAL
    },
    {
        id: 4,
        name: "Yara",
        description: "Perfume árabe doce e envolvente, com notas gourmand que conquistam.",
        price: "R$ 49,90",
        image: "images/yara.jpg", // Placeholder - SUBSTITUA PELA IMAGEM REAL
        tags: ["doces", "oriental", "feminino", "moderado", "romantico_delicado", "todas_ocasioes"],
        url: "https://www.nasnuvensperfumes.com.br/produtos/yara-decants" // SUBSTITUA PELO LINK REAL
    },
    {
        id: 5,
        name: "1 Million",
        description: "Perfume masculino marcante e sedutor, símbolo de luxo e poder.",
        price: "R$ 619,90",
        image: "images/1_million.jpg", // Placeholder - SUBSTITUA PELA IMAGEM REAL
        tags: ["especiarias", "amadeirado", "masculino", "intenso", "sedutor", "eventos_noite"],
        url: "https://www.nasnuvensperfumes.com.br/produtos/1-million" // SUBSTITUA PELO LINK REAL
    },
    {
        id: 6,
        name: "Light Blue",
        description: "Fresco e aquático, perfeito para o verão e ocasiões casuais.",
        price: "R$ 599,90",
        image: "images/light_blue.jpg", // Placeholder - SUBSTITUA PELA IMAGEM REAL
        tags: ["aquaticas", "citrico", "unissex", "suave", "casual", "primavera_verao", "frutas_citricas"],
        url: "https://www.nasnuvensperfumes.com.br/produtos/light-blue" // SUBSTITUA PELO LINK REAL
    },
    {
        id: 7,
        name: "Chloé",
        description: "Floral feminino delicado e romântico, elegância em estado puro.",
        price: "R$ 689,90",
        image: "images/chloe.jpg", // Placeholder - SUBSTITUA PELA IMAGEM REAL
        tags: ["flores", "floral", "feminino", "suave", "romantico_delicado", "classico"],
        url: "https://www.nasnuvensperfumes.com.br/produtos/chloe" // SUBSTITUA PELO LINK REAL
    },
    {
        id: 8,
        name: "Invictus",
        description: "Perfume masculino esportivo e energético, para homens vencedores.",
        price: "R$ 519,90",
        image: "images/invictus.jpg", // Placeholder - SUBSTITUA PELA IMAGEM REAL
        tags: ["aquaticas", "fresco", "masculino", "moderado", "casual", "moderno"],
        url: "https://www.nasnuvensperfumes.com.br/produtos/invictus" // SUBSTITUA PELO LINK REAL
    },
    {
        id: 9,
        name: "Good Girl",
        description: "Perfume feminino sedutor e misterioso, para mulheres confiantes.",
        price: "R$ 59,90",
        image: "images/good_girl.jpg", // Placeholder - SUBSTITUA PELA IMAGEM REAL
        tags: ["doces", "oriental", "feminino", "intenso", "sedutor", "eventos_noite"],
        url: "https://www.nasnuvensperfumes.com.br/produtos/good-girl-decants" // SUBSTITUA PELO LINK REAL
    },
    {
        id: 10,
        name: "Libre",
        description: "Perfume feminino moderno e libertador, para mulheres independentes.",
        price: "R$ 869,90",
        image: "images/libre.jpg", // Placeholder - SUBSTITUA PELA IMAGEM REAL
        tags: ["floral", "amadeirado", "feminino", "moderado", "moderno", "todas_ocasioes"],
        url: "https://www.nasnuvensperfumes.com.br/produtos/libre" 
    }
];

// Variáveis de estado
let currentQuestion = 0;
let answers = {};

// Elementos DOM
const quizContainer = document.getElementById("quiz-container" );
const resultsContainer = document.getElementById("results-container");
const questionTitle = document.getElementById("question-title");
const optionsContainer = document.getElementById("options-container");
const questionNumber = document.getElementById("question-number");
const progressPercentage = document.getElementById("progress-percentage");
const progressFill = document.querySelector(".progress-fill");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const perfumesContainer = document.getElementById("perfumes-container");
const restartButton = document.getElementById("restart-btn");
const shopButton = document.getElementById("shop-btn");

// Inicializar o quiz
function initQuiz() {
    showQuestion(currentQuestion);
    updateProgress();
    
    // Event listeners
    prevButton.addEventListener("click", prevQuestion);
    nextButton.addEventListener("click", nextQuestion);
    restartButton.addEventListener("click", restartQuiz);
    shopButton.addEventListener("click", () => {
        window.location.href = "https://www.nasnuvensperfumes.com.br";
    } );
}

// Mostrar pergunta atual
function showQuestion(questionIndex) {
    const question = quizQuestions[questionIndex];
    questionTitle.textContent = question.question;
    
    // Limpar opções anteriores
    optionsContainer.innerHTML = "";
    
    // Adicionar novas opções
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.className = "option-button";
        if (answers[question.id] === option.value) {
            button.classList.add("selected");
        }
        
        button.innerHTML = `
            <span>${option.label}</span>
            ${answers[question.id] === option.value ? 
                `<div class="option-indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 0 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                    </svg>
                </div>` 
                : ""}
        `;
        
        button.addEventListener("click", ( ) => {
            selectOption(question.id, option.value);
        });
        
        optionsContainer.appendChild(button);
    });
    
    // Atualizar estado dos botões
    prevButton.disabled = questionIndex === 0;
    nextButton.disabled = !answers[question.id];
    
    if (questionIndex === quizQuestions.length - 1) {
        nextButton.textContent = "Ver Resultado";
    } else {
        nextButton.textContent = "Próxima";
    }
}

// Selecionar uma opção
function selectOption(questionId, value) {
    answers[questionId] = value;
    showQuestion(currentQuestion);
    nextButton.disabled = false;
}

// Ir para a próxima pergunta
function nextQuestion() {
    if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
        updateProgress();
    } else {
        showResults();
    }
}

// Voltar para a pergunta anterior
function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
        updateProgress();
    }
}

// Atualizar a barra de progresso
function updateProgress() {
    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;
    questionNumber.textContent = `Pergunta ${currentQuestion + 1} de ${quizQuestions.length}`;
    progressPercentage.textContent = `${Math.round(progress)}% completo`;
}

// Mostrar resultados
function showResults() {
    // Calcular recomendações
    const recommendations = calculateRecommendations();
    
    // Esconder quiz e mostrar resultados
    quizContainer.style.display = "none";
    resultsContainer.style.display = "block";
    
    // Limpar container de perfumes
    perfumesContainer.innerHTML = "";
    
    // Adicionar perfumes recomendados
    recommendations.forEach((perfume, index) => {
        const perfumeCard = document.createElement("div");
        perfumeCard.className = "perfume-card";
        
        perfumeCard.innerHTML = `
            <div class="perfume-image-container">
                <img src="${perfume.image}" alt="${perfume.name}" class="perfume-image">
                ${index === 0 ? 
                    `<div class="badge">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.105 21.26c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006Z" clip-rule="evenodd" />
                        </svg>
                        Top Match
                    </div>` 
                    : ""}
            </div>
            <div class="perfume-info">
                <h3 class="perfume-name">${perfume.name}</h3>
                <p class="perfume-description">${perfume.description}</p>
                <p class="perfume-price">${perfume.price}</p>
                <div class="perfume-actions">
                    <a href="${perfume.url}" target="_blank" class="btn btn-primary">Ver Produto</a>
                </div>
            </div>
        `;
        
        perfumesContainer.appendChild(perfumeCard );
    });
}

// Calcular recomendações com base nas respostas
function calculateRecommendations() {
    // Algoritmo de recomendação
    const scoredPerfumes = perfumeDatabase.map(perfume => {
        let score = 0;
        
        // Calcular pontuação com base nas tags que correspondem às respostas
        Object.values(answers).forEach(answer => {
            if (perfume.tags.includes(answer)) {
                score += 1;
            }
        });
        
        return { ...perfume, score };
    });
    
    // Ordenar por pontuação e pegar os 3 melhores
    return scoredPerfumes
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
}

// Reiniciar o quiz
function restartQuiz() {
    currentQuestion = 0;
    answers = {};
    quizContainer.style.display = "block";
    resultsContainer.style.display = "none";
    showQuestion(currentQuestion);
    updateProgress();
}

// Iniciar o quiz quando a página carregar
document.addEventListener("DOMContentLoaded", initQuiz);
