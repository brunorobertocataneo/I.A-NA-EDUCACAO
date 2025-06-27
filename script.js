// Função para scroll suave para seções
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Navegação mobile
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
});

// Header transparente no scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Animação de entrada dos elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observar elementos para animação
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .content-item, .app-card, .challenge-card, .future-card');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// Chat interativo
const chatMessages = [
    {
        question: "Como a IA pode ajudar na educação?",
        answer: "A IA pode personalizar o aprendizado, automatizar avaliações, fornecer tutoria 24/7 e criar experiências educacionais mais interativas e adaptativas."
    },
    {
        question: "Quais são as principais vantagens?",
        answer: "As principais vantagens incluem personalização do aprendizado, avaliação automatizada, feedback instantâneo, e a capacidade de atender diferentes estilos de aprendizagem."
    },
    {
        question: "A IA vai substituir os professores?",
        answer: "Não! A IA é uma ferramenta que complementa o trabalho dos professores, permitindo que eles se foquem em aspectos mais humanos do ensino como mentoria e desenvolvimento socioemocional."
    },
    {
        question: "Como funciona a personalização?",
        answer: "A IA analisa o desempenho do aluno, identifica padrões de aprendizado, dificuldades e preferências, ajustando automaticamente o conteúdo e ritmo de ensino para cada indivíduo."
    },
    {
        question: "Quais são os desafios?",
        answer: "Os principais desafios incluem desigualdade de acesso à tecnologia, necessidade de formação dos professores, e questões de privacidade e segurança dos dados dos alunos."
    }
];

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (message === '') return;
    
    // Adicionar mensagem do usuário
    addMessage(message, 'user');
    input.value = '';
    
    // Simular resposta da IA
    setTimeout(() => {
        const response = getAIResponse(message);
        addMessage(response, 'bot');
    }, 1000);
}

function addMessage(text, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    const icon = sender === 'bot' ? 'fas fa-robot' : 'fas fa-user';
    
    messageDiv.innerHTML = `
        <i class="${icon}"></i>
        <div class="message-content">
            ${text}
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getAIResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Verificar se há uma resposta específica
    for (let chat of chatMessages) {
        if (lowerMessage.includes(chat.question.toLowerCase().split(' ').slice(0, 3).join(' '))) {
            return chat.answer;
        }
    }
    
    // Respostas padrão baseadas em palavras-chave
    if (lowerMessage.includes('oi') || lowerMessage.includes('olá') || lowerMessage.includes('hello')) {
        return "Olá! Sou seu assistente educacional. Como posso ajudar você hoje?";
    }
    
    if (lowerMessage.includes('ia') || lowerMessage.includes('inteligência artificial')) {
        return "A Inteligência Artificial na educação é uma tecnologia que personaliza o aprendizado, automatiza tarefas e cria experiências educacionais mais eficientes e adaptativas.";
    }
    
    if (lowerMessage.includes('personalização') || lowerMessage.includes('personalizar')) {
        return "A personalização na educação com IA permite que cada aluno tenha um percurso de aprendizado único, baseado em suas necessidades, ritmo e estilo de aprendizagem.";
    }
    
    if (lowerMessage.includes('professor') || lowerMessage.includes('professores')) {
        return "Os professores continuam sendo essenciais! A IA é uma ferramenta que os ajuda a focar no que realmente importa: o desenvolvimento humano e a mentoria dos alunos.";
    }
    
    if (lowerMessage.includes('futuro') || lowerMessage.includes('tendência')) {
        return "O futuro da educação com IA inclui ambientes híbridos, aprendizado mais personalizado, e o desenvolvimento de habilidades essenciais para o século 21.";
    }
    
    return "Interessante pergunta! A IA na educação é um campo em constante evolução. Posso ajudar você com informações sobre personalização, aplicações práticas, ou desafios da tecnologia educacional.";
}

// Permitir envio com Enter
document.addEventListener('DOMContentLoaded', function() {
    const chatInput = document.getElementById('chatInput');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
});

// Contador de estatísticas animado
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Efeito de parallax suave
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-card');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Tooltip para elementos interativos
function createTooltip(element, text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = text;
    tooltip.style.cssText = `
        position: absolute;
        background: #333;
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 14px;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s;
        pointer-events: none;
        white-space: nowrap;
    `;
    
    element.addEventListener('mouseenter', function(e) {
        document.body.appendChild(tooltip);
        const rect = element.getBoundingClientRect();
        tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
        tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
        tooltip.style.opacity = '1';
    });
    
    element.addEventListener('mouseleave', function() {
        tooltip.style.opacity = '0';
        setTimeout(() => {
            if (tooltip.parentNode) {
                tooltip.parentNode.removeChild(tooltip);
            }
        }, 300);
    });
}

// Adicionar tooltips aos botões
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        const text = button.textContent.trim();
        createTooltip(button, `Clique para ${text.toLowerCase()}`);
    });
});

// Efeito de digitação para o título
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Aplicar efeito de digitação ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 500);
    }
});

// Modal para informações detalhadas
function createModal(title, content) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s;
    `;
    
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 20px;
        max-width: 500px;
        width: 90%;
        max-height: 80vh;
        overflow-y: auto;
        transform: scale(0.7);
        transition: transform 0.3s;
    `;
    
    modalContent.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <h3 style="margin: 0; color: #1e293b;">${title}</h3>
            <button onclick="this.closest('.modal').remove()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #64748b;">&times;</button>
        </div>
        <div style="color: #64748b; line-height: 1.6;">${content}</div>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Animar entrada
    setTimeout(() => {
        modal.style.opacity = '1';
        modalContent.style.transform = 'scale(1)';
    }, 10);
    
    // Fechar ao clicar fora
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Adicionar funcionalidade de modal aos cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.feature-card, .app-card, .challenge-card');
    cards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            const content = this.querySelector('p').textContent;
            createModal(title, content);
        });
    });
});

// Efeito de hover 3D para cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.feature-card, .app-card, .challenge-card, .future-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
});

// Smooth scroll para links internos
document.addEventListener('DOMContentLoaded', function() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
});

