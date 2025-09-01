const contatos = [];

let nomeContato = "";
let numeroTelefone = "";
let emailContato = "";

do {
  menuInterativo = prompt(
    ">>> MENU <<<\n 1- Cadastrar contato\n 2- Listar contatos\n 3- Buscar contato\n 4- Atualizar contato\n 5- Remover contato\n 0- Sair do Menu\n ESCOLHA UMA OPÇÃO:"
  );

  switch (menuInterativo) {
    case "1":
      cadastrarContato();

      break;
    case "2":
      listarContatos();
      break;
    case "3":
      buscarContato();
      break;
    case "4":
      atualizarContato();
      break;
    case "5":
      removerContato();
      break;
    case "0":
      console.log("Saindo...");
      alert("Saindo...");
      break;
    default:
      alert("Valor inválido! Tente novamente.");
      break;
  }
} while (menuInterativo !== "0");

// ##### <<< FUNÇÕES >>> #####

function cadastrarContato() {
  nomeContato = prompt("Digite seu nome completo: ")
    .toUpperCase()
    .replace(/\s+/g, " ");

  numeroTelefone = prompt(
    "Digite seu número de telefone com DDD (somente números):"
  )
    .replace(/\s+/g, "")
    .replace("(", "")
    .replace(")", "")
    .replace("-", "");

  emailContato = prompt("Digite o seu email: ")
    .toUpperCase()
    .replace(/\s+/g, "");

  // << VALIDANDO AS CONDIÇÕES >>

  if (camposPreenchidos()) {
    if (
      validarEmail(emailContato) &&
      validarTelefone(numeroTelefone) &&
      validarNome(nomeContato)
    ) {
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
        !validarEmail(emailContato) ? `O email ${emailContato} é inválido!` : ""
      } \n ${
        !validarTelefone(numeroTelefone)
          ? `O telefone ${numeroTelefone} é inválido!`
          : ""
      }`
    );
  }

  return alert(`Por favor, preencha todos os campos para cadastrar o contato.`);
}

function listarContatos() {
  if (contatos.length === 0) {
    return alert("Nenhum contato cadastrado ainda!");
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
  if (contatos.length === 0) {
    return alert("Nenhum contato cadastrado ainda!");
  }

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

function atualizarContato() {
  if (contatos.length === 0) {
    return alert("Nenhum contato cadastrado ainda!");
  }

  let contatoASerAtualizado = prompt(
    `Qual o EMAIL do contato que deseja atualizar? `
  ).toUpperCase();

  let encontrado = false;

  for (let i = 0; i < contatos.length; i++) {
    if (contatos[i][2] === contatoASerAtualizado) {
      encontrado = true;

      let campoASerAtualizado = prompt(
        `Qual campo deseja atualizar?\n 1- Nome\n 2- Telefone\n 3- Email\n 0- Cancelar`
      );
      switch (campoASerAtualizado) {
        case "1":
          let novoNome = prompt("Digite o novo nome: ")
            .toUpperCase()
            .replace(/\s+/g, " ");

          if (validarNome(novoNome)) {
            contatos[i][0] = novoNome;
            console.log("\n###  Contato atualizado com sucesso!  ###\n\n");
            listarContatos();
          } else {
            alert(`O nome ${novoNome} é inválido!`);
          }
          break;

        case "2":
          let novoTelefone = prompt("Digite o novo telefone: ")
            .replace(/\s+/g, "")
            .replace("(", "")
            .replace(")", "")
            .replace("-", "");

          if (validarTelefone(novoTelefone)) {
            contatos[i][1] = novoTelefone;
            console.log("\n###  Contato atualizado com sucesso!  ###\n\n");
            listarContatos();
          } else {
            alert(`O telefone ${novoTelefone} é inválido!`);
          }
          break;

        case "3":
          let novoEmail = prompt("Digite o novo email: ")
            .toUpperCase()
            .replace(/\s+/g, "");

          if (validarEmail(novoEmail)) {
            contatos[i][2] = novoEmail;
            console.log("\n###  Contato atualizado com sucesso!  ###\n\n");
          } else {
            alert(`O email ${novoEmail} é inválido!`);
          }
          listarContatos();
          break;
        case "0":
          alert(`Operação cancelada!`);
          break;
        default:
          alert(`Opção inválida!`);
      }
    }
  }

  if (!encontrado) {
    alert(`Contato não encontrado!`);
  }
}

function removerContato() {
  if (contatos.length === 0) {
    return alert("Nenhum contato cadastrado ainda!");
  }

  let contatoASerRemovido = prompt(
    "Digite o email do contato para ser removido da lista: "
  )
    .replace(/\s+/g, "")
    .toUpperCase();

  let encontrado = false;

  for (let i = 0; i < contatos.length; i++) {
    if (contatos[i][2] === contatoASerRemovido) {
      contatos.splice(i, 1);
      alert(`${contatoASerRemovido} foi removido da lista.`);
      encontrado = true;

      console.log("\n ### Lista atualizada de contatos: ###\n\n");
      listarContatos();
    }
  }

  if (!encontrado) {
    alert(`Email do contato: ${contatoASerRemovido} não encontrado na lista.`);
  }
}

// #### <<<< VALIDAÇÃO DOS VALORES >>>> ####

function camposPreenchidos() {
  return nomeContato && numeroTelefone && emailContato;
}

function validarEmail(email) {
  return email && email.includes("@") && email.slice(-4) === ".COM";
}

function validarTelefone(telefone) {
  return telefone && telefone.length === 11 && !isNaN(telefone);
}

function validarNome(nome) {
  return nome && isNaN(nome);
}
