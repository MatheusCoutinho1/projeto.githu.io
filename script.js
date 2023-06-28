// Função para redirecionar para a página de controle de empréstimo ao reservar
function reservar() {
    // Obtém as informações do livro atual
    const livroInfoContainer = document.getElementById('livro-info');
    const titulo = livroInfoContainer.querySelector('.book-title').textContent;
    const autor = livroInfoContainer.querySelector('.book-author').textContent;
    const ano = livroInfoContainer.querySelector('.book-year').textContent;
  
    // Cria um objeto com as informações do livro
    const livroReservado = {
      titulo: titulo,
      autor: autor,
      ano: ano
    };
  
    // Verifica se já existe uma lista de livros reservados no armazenamento local
    let livrosReservados = JSON.parse(localStorage.getItem('livrosReservados'));
    if (!livrosReservados) {
      livrosReservados = [];
    }
  
    // Adiciona o livro à lista de livros reservados
    livrosReservados.push(livroReservado);
  
    // Atualiza a lista de livros reservados no armazenamento local
    localStorage.setItem('livrosReservados', JSON.stringify(livrosReservados));
  
    // Redireciona para a página de controle de empréstimo
    window.location.href = 'controle-emprestimo.html';
  }
  document.addEventListener('DOMContentLoaded', function() {
    function adicionarSemana(dataDevolucao) {
      var data = new Date(dataDevolucao);
      data.setDate(data.getDate() + 6);
      var dia = data.getDate().toString().padStart(2, '0');
      var mes = (data.getMonth() + 2).toString().padStart(2, '0');
      var ano = data.getFullYear();
      return dia + '/' + mes + '/' + ano;
    }
  
    function alterarDataDevolucao(button) {
      var linha = button.parentNode.parentNode;
      var dataDevolucao = linha.cells[2].textContent;
      var novaDataDevolucao = adicionarSemana(dataDevolucao);
      linha.cells[2].textContent = novaDataDevolucao;
    }
  
    var botoesAlterar = document.getElementsByClassName('editar-devolucao');
    for (var i = 0; i < botoesAlterar.length; i++) {
      botoesAlterar[i].addEventListener('click', function () {
        alterarDataDevolucao(this);
      });
    }
  });
  
  