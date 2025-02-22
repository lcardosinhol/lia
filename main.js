document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Verifica se há um tema salvo
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Mostra mensagem de carregamento
            const btn = form.querySelector('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
            btn.disabled = true;

            // Coleta os dados do formulário
            const templateParams = {
                from_name: form.name.value,
                from_email: form.email.value,
                message: form.message.value
            };

            // Envia o email usando EmailJS
            emailjs.send('service_id', 'template_id', templateParams)
                .then(function() {
                    // Mensagem de sucesso
                    alert('Mensagem enviada com sucesso!');
                    form.reset();
                }, function(error) {
                    // Mensagem de erro
                    alert('Erro ao enviar mensagem. Por favor, tente novamente.');
                    console.error('EmailJS error:', error);
                })
                .finally(function() {
                    // Restaura o botão
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                });
        });
    }
}); 