  const contato=[];                    
         let menuInterativo;
         
        do {
          menuInterativo = Number(prompt(">>>MENU<<<\n\n 1- Cadastrar contato\n 2- Listar contatos\n 3- Buscar contato\n 4- Atualizar contato\n 5- Remover contato\n 0- Sair\n\n ESCOLHA UMA OPÇÃO:"
        ));
             
      switch (menuInterativo) {
        case 1:   
          cadastrarContato()                  
          alert("Cadastro realizado com sucesso!");
          break;
          case 2:
            console.log(contato)
          break;
          case 0:
           alert('Encerrado')
        break
        case 3:
          break;
        case 4:
          break;
        case 5:
          break;
        
        default:
            
      }

     }while(menuInterativo !==0)
    
      function cadastrarContato() {
       
         let nomeContato = prompt("Digite seu nome completo: ").toUpperCase();
        let numeroTelefone = prompt("Digite seu número de telefone com DDD:");
        let emailContato = prompt("Digite o seu email: ").toUpperCase();
         
       contato.push([nomeContato, numeroTelefone, emailContato]) ;
         
      } 