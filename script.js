// Carrega prompt com nome do usuário depois de carregar a página

// Função para exibir o prompt e mostrar o alerta
window.onload = function exibirNome() {
  var nome = prompt('Hey, qual o seu nome?'); //receber/armazenar o nome do usuário
  var mensagem =
    'Olá, ' +
    nome +
    '! Bem-vindo! Meu nome é Elisandra, futura desenvolvedora Full Stack.';
  alert(mensagem);
};
