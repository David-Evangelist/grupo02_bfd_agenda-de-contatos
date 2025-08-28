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
      removerContato();
      break;
    case 0:
      console.log("Saindo...");
      alert("Saindo...");
      break;
    default:
      alert("Valor inválido! Tente novamente.");
      break;
  }
} while (menuInterativo !== 0);

// <<< FUNÇÕES >>>
function cadastrarContato() {
  nomeContato = prompt("Digite seu nome completo: ").toUpperCase();
  numeroTelefone = prompt("Digite seu número de telefone com DDD:");
  emailContato = prompt("Digite o seu email: ").toUpperCase();

  // ARMAZENANDO AS CONDIÇÕES PARA VALIDAÇÃO
  let camposPreenchidos = nomeContato && numeroTelefone && emailContato;

  let emailValido =
    emailContato.includes("@") && emailContato.includes(".com".toUpperCase());

  let telefoneValido = numeroTelefone.length === 11 && !isNaN(numeroTelefone);

  // << VALIDANDO AS CONDIÇÕES >>
  // Verifica se não há campos vazios
  if (camposPreenchidos) {
    // Verifica se email e telefone são válidos
    if (emailValido && telefoneValido) {
      // Verifica se já existe contato com mesmo telefone ou email
      for (let i = 0; i < contatos.length; i++) {
        if (
          contatos[i][1] === numeroTelefone ||
          contatos[i][2] === emailContato
        ) {
          return alert(
            `Já existe um contato cadastrado com o mesmo telefone ou email!`
          );
        }
      }

      alert("Cadastro realizado com sucesso!");
      return contatos.push([nomeContato, numeroTelefone, emailContato]);
    }

    return alert(
      `Algum dos campos está inválido! Verifique e preencha corretamente.\n ${
        !emailValido ? `O email ${emailContato} é inválido!` : ""
      } \n ${!telefoneValido ? `O telefone ${numeroTelefone} é inválido!` : ""}`
    );
  }

  return alert(`Por favor, preencha todos os campos para cadastrar o contato.`);
}

function listarContatos() {
  if (contatos.length === 0) {
    alert("Nenhum contato cadastrado!");
  }

  for (let i = 0; i < contatos.length; i++) {
    if (contatos.length != null) {
      console.log(
        `>> Contato ${i + 1}\n Nome: ${contatos[i][0]}\n Telefone: ${
          contatos[i][1]
        }\n Email: ${contatos[i][2]}`
      );
      console.log("--------");
    }
  }
}

function buscarContato() {
  let nomeBusca = prompt("Digite o nome que deseja buscar: ");
  let encontrado = false;

  for (let i = 0; i < contatos.length; i++) {
    if (contatos[i][0].toLowerCase().includes(nomeBusca.toLowerCase())) {
      console.log(
        `Contato encontrado no índice: ${i}\n Nome: ${contatos[i][0]}\n Telefone: ${contatos[i][1]}\n Email: ${contatos[i][2]}`
      );
      encontrado = true;
    }
  }
  if (!encontrado) {
    alert("Nenhum contato encontrado com esse nome!");
  }
}

function atualizarContato() {}

function removerContato() {
  let contatoASerRemovido = prompt(
    "Digite o email do contato para ser removido da lista: "
  );
  let encontrado = false;

  for (let i = 0; i < contatos.length; i++) {
    if (contatos[i][2].toUpperCase() === contatoASerRemovido.toUpperCase()) {
      contatos.splice(i, 1);
      alert(`${contatoASerRemovido} foi removido da lista.`);
      encontrado = true;

      console.log("Lista atualizada de contatos:");
      listarContatos();
    }
  }

  if (!encontrado) {
    alert(`Email do contato: ${contatoASerRemovido} não encontrado na lista.`);
  }
}
