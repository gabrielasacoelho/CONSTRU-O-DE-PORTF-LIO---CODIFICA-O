const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Variável para armazenar o tema atual (em memória)
let currentTheme = 'light';

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '🌙';
        currentTheme = 'dark';
    } else {
        themeToggle.textContent = '☀️';
        currentTheme = 'light';
    }
});

// Efeito de marca texto
window.addEventListener('DOMContentLoaded', () => {
    const heroH1 = document.querySelector('.hero-content h1');
    
    if (heroH1) {
        // Pega o texto original
        const originalText = heroH1.textContent;
        
        // Cria o novo HTML com os destaques
        const newHTML = originalText
            .replace('Gabriela Coelho', '<span style="background: linear-gradient(to bottom, transparent 50%, #FFD700 50%); padding: 0 4px;">Gabriela Coelho</span>')
            .replace('desenvolvedora web', '<span style="background: linear-gradient(to bottom, transparent 50%, #FF69B4 50%); padding: 0 4px;">desenvolvedora web</span>');
        
        // Aplica o novo HTML
        heroH1.innerHTML = newHTML;
    }
});
