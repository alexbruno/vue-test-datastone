# vue-test-simple-admin

Projeto de teste técnico solicitado para um processo seletivo, para oportunidade de trabalho como Dev Frontend Senior.

## Como testar?

A aplicação pode ser testada em: [https://vue-test-simple-admin.netlify.app/](https://vue-test-simple-admin.netlify.app/).

Para verificar a aplicação em ambiente de desenvolvimento, clone este projeto para um diretório local usando o git.

Esta aplicação foi desenvolvida utilizando o [Vite](https://vitejs.dev/), um bundler extremamente rápido e eficiente, que utiliza o [ESBuild](https://esbuild.github.io/) para compilar o código.

Portanto, é uma aplicação Node.js, e para executá-la em modo de desenvolvimento é necessário ter o [Node.js](https://nodejs.org/) instalado na máquina. A versão utilizada para o desenvolvimento foi a v18.18.2, mas qualquer patch da versão 18 deve ser compatível. A versão LTS mais recente é a 20, mas não foi testada neste projeto devido ainda ser recente ter algumas quebras de compatibilidade com as versões anteriores.

Com o Node.js 18 devidamente instalado no ambiente de desenvolvimento, acesse o diretório deste projeto em um terminal de comando e execute os comandos:

```sh
npm i # instala as dependências do projeto
npm start # executa o projeto em modo de desenvolvimento
```

O comando `npm start` executará o servidor de desenvolvimento em uma porta que pode ser acessada em um navegador padrão do sistema, apontando para `http://localhost:[PORTA]/` ou `http://127.0.0.1:[PORTA]/`.

O número da porta atribuída é exibido no terminal, após a execução do comando.

## Navegando pela aplicação

A aplicação é bem simples e visa simular um painel administrativo de um sistema de gerenciamento de produtos e clientes.

A tela inicial da aplicação consiste em uma apresentação simples, descrevendo este objetivo e dando acesso ao login, que também é apenas uma simulação estática mas que permite o acesso ao painel administrativo apenas se o usuário informar o login e senha corretos. (Clique no botão "Ajuda" se precisar)

Dentro do painel, após o login, é possível gerenciar ambas as entidades (produtos e clientes), que foram criadas com estruturas bem básicas, de acordo com os requisitos solicitados para este teste.

## Como executar os testes unitários

Para executar os testes unitários, basta executar o comando `npm t` no terminal, dentro do diretório do projeto. Este comando executará os testes unitários e exibirá o resultado no terminal.

Este comando está configurado para executar os testes em modo "watch", ou seja, sempre que um arquivo for alterado, os testes serão executados novamente. Para encerrar a execução dos testes, basta pressionar `Ctrl+C` no terminal ou simplesmente teclar `q`.

Os testes unitários são feitos utilizando o [Vitest](https://vitest.dev/) combinado ao [Vue Test Utils](https://test-utils.vuejs.org/), que são bibliotecas oficiais do ecossistema Vite e Vue.js.

## Estrutura do projeto

A estrutura do projeto é bem simples, e segue o padrão de projetos Vue.js criados com o [Vue CLI](https://cli.vuejs.org/), com algumas pequenas adaptações.

Todo o código-fonte da aplicação está no diretório `./src/` e os testes unitários estão no diretório `./src/tests/`.

Abaixo, um resumo das principais bibliotecas utilizadas no projeto:

- [Vue.js](https://vuejs.org/) - Framework JavaScript
- [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript
- [Vite](https://vitejs.dev/) - Bundler e servidor de desenvolvimento
- [Vue Router](https://router.vuejs.org/) - Biblioteca de roteamento para aplicações Vue.js
- [VueUse](https://vueuse.org/) - Biblioteca de utilitários para Vue.js
- [PostCSS](https://postcss.org/) - Ferramenta para transformação de CSS (pós-processador CSS)
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS (utilizado em conjunto com o PostCSS)
- [Vue Test Utils](https://test-utils.vuejs.org/) - Biblioteca oficial para testes unitários de aplicações Vue.js
- [Vitest](https://vitest.dev/) - Biblioteca oficial para execução de testes unitários de aplicações Vite
