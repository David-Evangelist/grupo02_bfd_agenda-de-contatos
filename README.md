# Agenda de Contatos

> Uma agenda simples de contatos que permite cadastrar, listar, buscar, atualizar e remover contatos.

## Sobre

Este projeto é uma agenda de contatos básica, desenvolvida para armazenar informações de contatos em uma matriz. Permite operações essenciais de gerenciamento de contatos, como cadastro, listagem, busca, atualização e remoção.

## Funcionalidades

* **Cadastrar** novos contatos (nome, telefone, email)
* **Listar** todos os contatos cadastrados
* **Buscar** contatos por nome
* **Atualizar** informações de um contato existente
* **Remover** contatos da agenda

## Como Funciona

* O menu principal é exibido dentro de um **laço `while`**, permitindo que o usuário execute várias operações até optar por sair.
* Cada opção do menu é tratada por um **bloco `switch/case`**, facilitando a organização das funcionalidades.
* Os contatos são armazenados em uma **matriz**, permitindo manipulação simples dos dados.

## Tecnologias

* Linguagem: **JavaScript**
* Conceitos: Arrays/matrizes, loops (`while, for`), estruturas condicionais (`switch/case, if/else`), funções

## Uso

1. Execute o projeto
2. O menu será exibido com opções numeradas:

   * 1: Cadastrar contato
   * 2: Listar contatos
   * 3: Buscar contato
   * 4: Atualizar contato
   * 5: Remover contato
   * 0: Sair
3. Escolha a opção desejada e siga as instruções na tela

---
<br/>
<br/>


# 🚀 Guia Básico de Git

Este repositório contém instruções essenciais para trabalhar com **Git** e **GitHub/GitLab/Bitbucket**.
Use-o como referência rápida no dia a dia!

---

## 🔗 Conectar a um repositório remoto

```bash
git remote add origin <URL_DO_REPOSITORIO>
git remote -v   # Verificar repositórios remotos configurados
```

---

## 📥 Clonar um repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

---

## 🔄 Atualizar seu repositório local

```bash
git pull origin main
```

> Troque `main` por `master` ou outro nome de branch, se necessário.

---

## 📤 Enviar suas alterações

1. Adicionar os arquivos modificados:

   ```bash
   git add .
   ```
2. Criar um commit com mensagem:

   ```bash
   git commit -m "Descrição das alterações"
   ```
3. Enviar para o repositório remoto:

   ```bash
   git push origin main
   ```

---

## 🌱 Trabalhando com Branches

* Criar uma nova branch:

  ```bash
  git branch minha-branch
  ```
* Mudar para a branch criada:

  ```bash
  git checkout minha-branch
  ```
* Criar e trocar de branch ao mesmo tempo:

  ```bash
  git checkout -b minha-branch
  ```
* Enviar a branch para o remoto:

  ```bash
  git push origin minha-branch
  ```

---

## 🔧 Comandos úteis

* Verificar o status do repositório:

  ```bash
  git status
  ```
* Listar branches locais:

  ```bash
  git branch
  ```
* Listar todas as branches (locais + remotas):

  ```bash
  git branch -a
  ```

---

📌 **Dica final:** Sempre rode `git pull` antes de começar a trabalhar para manter seu repositório atualizado!

---
