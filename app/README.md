# app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### IPFS

Para instalar o ipfs, veja (https://docs.ipfs.io/how-to/command-line-quick-start/#install-ipfs).

Para configurar o ipfs pra funcionar localmente, execute no terminal os seguintes comandos:

ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["http://localhost:8081", "https://webui.ipfs.io", "http://127.0.0.1:5001"]'
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["POST"]'



### Pacotes

Os pacotes dessa aplicação, se encontram nos arquivos package.json, na raiz, do diretório app, deste projeto.

Para instalá-los é só executar o npm install.

#### Estrutura do Projeto

O projeto front end dessa aplicação foi feita em Vue jS, https://vuejs.org/.

A aplicação tem o nome de app. Sua estrutura é a seguinte

app/
    public/
    src/
        assets/
        components/
        contracts/
        router/
        store/
        views/
        App.vue
        decs.d.ts
        drizzleOptions.ts
        main.ts
        shims-tsx.d.ts
        shims-vue.d.ts


No arquivo drizzleOptions, contém toda a configuração de interação do contrato inteligente e o front end.
Foi usado a biblioteca @drizzle/vue-plugin, que é uma biblioteca responsável por fazer a interface do contrato inteligente com o projeto do Vue. Mais informações, https://github.com/trufflesuite/drizzle/blob/develop/packages/vue-plugin/README.md.

No main.ts, tem alguns módulos importantes da aplicação.

No diretório router, contém as rotas das páginas da aplicação.

No diretório store, contém dois arquivos, que são o index.ts e ipfs.ts.

No index.ts, contém a configuração do Vuex, https://vuex.vuejs.org/

No ipfs.ts, contém a configuração do Ipfs, onde é instanciado uma rede local para o Ipfs.

No diretório views, contém os arquivos, HomaPage, Médico, Paciente.

No arquivo de HomePage, contém a tela inicial da aplicação.

No arquivo de Médico, contém a tela do Médico, na parte de script tem a propriedade ...computed, onde ela usa o Vuex, para chamar a instancia do contrato inteligente. Por exemplo no método verificarPaciente, que é um método que recebe o endereço do paciente, pelo instancia do drizzle. Onde ele chama o método do contrato inteligente, o obtertEnderecoDoPaciente.

No arquivo de Paciente, contém a tela do Paciente, na parte de template, tem uma tag, a tag <drizzle-account/>, que é a tag responsável pelo endereço do paciente que foi definido pelo contrato inteligente. Na parte de script, existem alguns métodos. O obterExames, esse método, faz a chamada ao contrato inteligente, através do drizzle, para acessar os métodos tamExames e obterInfo, que foram codificados no contrato inteligente, para mostrar os dados em uma tabela no front end.

O método onSubmit, ele é responsável por enviar o arquivo para o ipfs, e chamar o arquivo enviarInfo, do contrato inteligente, através do drizzle. É declarado, um atributo chamado ipfsService, que ele recebe a instância do ipfs, para usar o método add.

O método handleFileChange, é responsável, por pegar o arquivo do computador. Essa função recebe um evento, que no caso é o arquivo que foi selecionado pelo usuário.





