//Tela de Carregamento

setTimeout(() => {
    const telaCarregamento = document.getElementById('tela-carregamento');
    telaCarregamento.style.transition = 'opacity 1s';
    telaCarregamento.style.opacity = 0;
    setTimeout(() => {
      telaCarregamento.style.display = 'none';
    }, 0);
  }, 0);

//menu overlay

var OpenMenu = document.getElementById("open-menu");

OpenMenu.addEventListener("click", function() {
  document.getElementById("overlay").style.display = "flex";
});

document.addEventListener("click", function(event) {
  if (event.target != OpenMenu && event.target.parentNode != OpenMenu) {
    document.getElementById("overlay").style.display = "none";
  }
});

document.querySelectorAll(".dropdown a").forEach(function(el) {
  el.addEventListener("click", function() {
    var dropdown = el.parentNode.querySelector(".dropdown-content");
    dropdown.classList.toggle("active");
  });
});
