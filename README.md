# Search Heroes

Este é um projeto de listagem e detalhamento de heróis utilizando a API da Marvel. O projeto foi desenvolvido com **Next.js** e inclui funcionalidade de ordenação e filtros de favoritos.

## 🚀 Começando

Siga estas instruções para clonar, configurar e rodar o projeto localmente.

### 🛠️ Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (recomenda-se a versão LTS mais recente)
- [Git](https://git-scm.com/)
- Um editor de código, como o [VS Code](https://code.visualstudio.com/)

---

## 📥 Clonando o Repositório

Execute o seguinte comando no terminal para clonar o projeto:
```
git clone https://github.com/felipedeluna/searchHeroes.git
````

Entre na pasta do projeto:

````
cd searchHeroes
````

---

## 📦 Instalando as Dependências
Após clonar o projeto, instale as dependências necessárias executando:

````
npm install
````

Se preferir utilizar Yarn:

````
yarn install
````

---

## 🔧 Configurando Variáveis de Ambiente
As variáveis de ambiente são necessárias para acessar a API da Marvel.

Crie um arquivo chamado .env.local no diretório raiz do projeto.
Insira as seguintes variáveis:

````
MARVEL_PUBLIC_KEY=<SUA_CHAVE_PUBLICA>
MARVEL_PRIVATE_KEY=<SUA_CHAVE_PRIVADA>
````

Substitua <SUA_CHAVE_PUBLICA> e <SUA_CHAVE_PRIVADA> pelos valores da sua conta da API da Marvel.

---

## 🖥️ Executando o Projeto
Para rodar o projeto em ambiente de desenvolvimento, execute:

````
npm run dev
````

Ou, se estiver usando Yarn:

````
yarn dev
````

Acesse o projeto no navegador em:

````
http://localhost:3000
````

---

## 🛠️ Solução de Problemas

Erro 401 na API: Verifique se suas variáveis de ambiente estão corretas e se a chave privada corresponde à chave pública.
Dependências desatualizadas: Execute:

````
npm run clean
npm install
````

Problemas no build: Certifique-se de estar usando uma versão compatível do Node.js.
