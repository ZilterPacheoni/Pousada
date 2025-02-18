document.addEventListener('DOMContentLoaded', function() {
    // Altura do header fixo (ajuste conforme necessário)
    const headerHeight = document.getElementById('cabecalho').offsetHeight;

    // Seleciona todos os links de navegação
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Previne o comportamento padrão
            e.preventDefault();

            // Remove active de todos os links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Adiciona active ao link clicado
            this.classList.add('active');

            // Pega o id do elemento alvo do link
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calcula a posição considerando o header fixo
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                // Scroll suave para a posição
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Fecha o menu mobile se estiver aberto
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });

    $(document).ready(function() {
        $('#telefone').inputmask('(99) 9 9999-9999');
    });
});
