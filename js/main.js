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