// Seleciona os elementos do DOM (HTML)
const btnMobile = document.querySelector('.btn-mobile');
const btnIcon = document.querySelector('.btn-mobile i');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li a');

// Função para abrir/fechar o menu
function toggleMenu() {
  // Adiciona ou remove a classe 'active' que criamos no CSS
  navLinks.classList.toggle('active');
  
  // Troca o ícone de 'hambúrguer' para 'X'
  if (navLinks.classList.contains('active')) {
    btnIcon.classList.remove('fa-bars');
    btnIcon.classList.add('fa-xmark');
  } else {
    btnIcon.classList.remove('fa-xmark');
    btnIcon.classList.add('fa-bars');
  }
}

// Escuta o clique no botão
btnMobile.addEventListener('click', toggleMenu);

// Fecha o menu automaticamente quando o usuário clica em um link (Sobre, Recursos, etc)
links.forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      toggleMenu();
    }
  });
});
// --- Tracking: Lead no envio do formulário ---
const formContato = document.querySelector('.contato-form');

if (formContato) {
  formContato.addEventListener('submit', (e) => {
    e.preventDefault(); // impede o reload que mataria o evento

    fbq('track', 'Lead', {
      content_name: 'Formulario de contato - TaskFlow'
    });

    formContato.reset();
    alert('Recebido! (laboratório — nada é enviado de verdade)');
  });
}
// --- Tracking: ViewContent quando a seção de recursos aparece na tela ---
const secaoRecursos = document.querySelector('#servicos');

if (secaoRecursos) {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        fbq('track', 'ViewContent', {
          content_name: 'Secao de recursos - TaskFlow',
          content_category: 'landing-page'
        });

        observador.unobserve(entrada.target); // dispara uma vez só
      }
    });
  }, {
    threshold: 0.5 // só conta quando 50% da seção está visível
  });

  observador.observe(secaoRecursos);
}