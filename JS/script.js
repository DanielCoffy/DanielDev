// Acordeão - apenas um aberto por vez
document.addEventListener("DOMContentLoaded", function () {
    const accordionButtons = document.querySelectorAll(".accordion-button");
  
    accordionButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const content = button.nextElementSibling;
  
        // Fecha os outros
        document.querySelectorAll(".accordion-content").forEach((acc) => {
          if (acc !== content) {
            acc.classList.remove("open");
            acc.previousElementSibling.classList.remove("active");
          }
        });
  
        // Alterna atual
        content.classList.toggle("open");
        button.classList.toggle("active");
      });
    });
  
    // Scroll suave ao clicar nos links do menu
    document.querySelectorAll("a.nav-link").forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth"
          });
        }
      });
    });

  // Animação do ícone com id 'animatedIcon'
  document.querySelectorAll('.animatedIcon').forEach((icon) => {
    let intervalId = null;
    let showingAlt = false;
  
    const toggleIcon = () => {
      icon.classList.add('fade-out');
      setTimeout(() => {
        icon.classList.remove('fade-out');
        if (showingAlt) {
          icon.classList.remove('bi-link');
          icon.classList.add('bi-link-45deg');
        } else {
          icon.classList.remove('bi-link-45deg');
          icon.classList.add('bi-link');
        }
        showingAlt = !showingAlt;
      }, 200);
    };
  
    icon.addEventListener('mouseenter', () => {
      if (!intervalId) {
        toggleIcon();
        intervalId = setInterval(toggleIcon, 200);
      }
    });
  
    icon.addEventListener('mouseleave', () => {
      clearInterval(intervalId);
      intervalId = null;
  
      icon.classList.add('fade-out');
      setTimeout(() => {
        icon.classList.remove('fade-out');
        icon.classList.remove('bi-link');
        icon.classList.add('bi-link-45deg');
        showingAlt = false;
      }, 200);
    });
  });
  
});