//Tela de Carregamento

setTimeout(() => {
    const telaCarregamento = document.getElementById('tela-carregamento');
    telaCarregamento.style.transition = 'opacity 1s';
    telaCarregamento.style.opacity = 0;
    setTimeout(() => {
      telaCarregamento.style.display = 'none';
    }, 500);
  }, 1000);

