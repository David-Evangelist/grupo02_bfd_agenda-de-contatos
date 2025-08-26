const contatos = [];

let nomeContato = "";
let numeroTelefone = "";
let emailContato = "";

do {
  menuInterativo = Number(
    prompt(
      ">>> MENU <<<\n 1- Cadastrar contato\n 2- Listar contatos\n 3- Buscar contato\n 4- Atualizar contato\n 5- Remover contato\n 0- Sair do Menu\n ESCOLHA UMA OPÇÃO:"
    )
  );

  switch (menuInterativo) {
    case 1:
      cadastrarContato();
      alert("Cadastro realizado com sucesso!");
      break;
    case 2:
      listarContatos();
      break;
    case 3:
      buscarContato();
      break;
    case 4:
      break;
    case 5:
      remover();
      break;
    case 0:
      alert("Finalizado com sucesso");
      break;
    default:
      console.log("Valor inválido! Tente novamente.");
      break;
  }
} while (menuInterativo !== 0);

// <<< FUNÇÕES >>>
function cadastrarContato() {
  nomeContato = prompt("Digite seu nome completo: ").toUpperCase();
  numeroTelefone = prompt("Digite seu número de telefone com DDD:");
  emailContato = prompt("Digite o seu email: ").toUpperCase();

  return contatos.push([nomeContato, numeroTelefone, emailContato]);
}

function listarContatos() {
  if (contatos.length === 0) {
    console.log("Nenhum contato cadastrado!");
  }

  for (let i = 0; i < contatos.length; i++) {
    if (contatos.length != null) {
      console.log(`>> Contato ${i + 1}`);
      console.log(`Nome: ${contatos[i][0]}`);
      console.log(`Telefone: ${contatos[i][1]}`);
      console.log(`Email: ${contatos[i][2]}`);
      console.log("--------");
    }
  }
}

function buscarContato() {
  let nomeBusca = prompt("Digite o nome que deseja buscar: ");
  let encontrado = false;

  for (let i = 0; i < contatos.length; i++) {
    if (contatos[i][0].toLowerCase() === nomeBusca.toLowerCase()) {
      console.log(
        `Contato encontrado no índice: ${i}\n Nome: ${contatos[i][0]}\n Telefone: ${contatos[i][1]}\n Email: ${contatos[i][2]}`
      );
      encontrado = true;
    }
  }
  if (!encontrado) {
    console.log("Nenhum contato encontrado com esse nome!");
  }
}

function atualizarContato() {}

function remover() {
  let removerContato = prompt(
    "Digite o nome do contato para ser removido da lista:"
  ).toUpperCase();
  let encontrado = false;

  for (let i = 0; i < contatos.length; i++) {
    if (contatos[i][0] === removerContato) {
      contatos.splice(i, 1);
      console.log(`${removerContato} foi removido da lista.`);
      encontrado = true;
      break;
    }
  }

  if (!encontrado) {
    console.log(`Contato ${removerContato} não encontrado na lista.`);
  }

  console.log("Lista atualizada de contatos:");
  listarContatos();
}
