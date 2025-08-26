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
      break;
    case 0:
      console.log("Saindo...");
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
  let camposPreenchidos =
    nomeContato != "" && numeroTelefone != "" && emailContato != "";

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
          contatos[i][1].includes(numeroTelefone) ||
          contatos[i][2].includes(emailContato)
        ) {
          return alert("Contato já cadastrado!");
        }
      }

      alert("Cadastro realizado com sucesso!");
      return contatos.push([nomeContato, numeroTelefone, emailContato]);
    }

    return alert(
      `Algum dos campos está inválido! Verifique e preencha corretamente. ${
        !emailValido ? `O email ${emailContato} é inválido!` : ""
      } \n ${!telefoneValido ? `O telefone ${numeroTelefone} é inválido!` : ""}`
    );
  }

  return alert(`Todos os campos devem ser preenchidos!`);
}

function listarContatos() {
  if (contatos.length === 0) {
    alert("Nenhum contato cadastrado!");
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
function removerContato() {}
