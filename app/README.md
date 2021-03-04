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

### Ganache e Truffle 

Para instalar essas duas ferramentas, no terminal, execute:

npm i -g truffle@nodeLTS;

npm i -g ganache-cli.


### Pacotes

Os pacotes dessa aplicação, se encontram nos arquivos package.json, na raiz, do diretório app, deste projeto.

