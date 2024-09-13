let a, b;
let saida = document.getElementById("saida");

// Solicita o nome e o sobrenome do usuário
a = prompt("Digite o nome:");
b = prompt("Digite o sobrenome:");

// Inicializa a variável `b` com um espaço e o sobrenome
b = " " + b;

// Atualiza o conteúdo da saída com o nome e o sobrenome
saida.innerHTML = a + "<br>" + b;
