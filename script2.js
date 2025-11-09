        const themeToggle = document.querySelector('.theme-toggle');
        const body = document.body;

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            themeToggle.textContent = '🌙';
        }

        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                themeToggle.textContent = '🌙';
                localStorage.setItem('theme', 'dark');
            } else {
                themeToggle.textContent = '☀️';
                localStorage.setItem('theme', 'light');
            }
        });