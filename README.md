## Implementação do Smart Contract

Foi usado a ferramenta Truffle Framework para o desenvolvimento do smart contract.
Essa ferramenta é usada para fazer testes e deploy de contratos inteligentes.
A estrutura do projeto que é iniciado usando o Truffle é a seguinte:

-> contracts/ - é o diretório onde fica os contratos inteligentes, os contratos são codificados em Solidity, https://docs.soliditylang.org/en/v0.8.2/
-> migrations/ - é o diretório onde fica os scripts de migração, que são responsáveis pelo deploy do contrato inteligente, eles são codificados em JavaScript
-> test/ - é o diretório onde fica os testes para os métodos que foram definidos nos contratos inteligentes, esses testes também são feitos em JavaScript.
-> truffle-config.js -> é o arquivo de configuração do projeto, nesse arquivo ficam tipos de rede onde o  contrato inteligente será publicado, nesse arquivo contém tipos de compiladores e outras configurações específicas. Para mais informações, acesse: truffleframework.com/docs/advanced/configuration. Nesse projeto, foi configurado o deploy na rede de teste Kovan.

O arquivo em específico deste trabalho é o ExameMedico.sol, que é o contrato inteligente que foi desenvolvido.
O arquivo está usando um intervalo de versões do solidity, que é pragma solidity >=0.5.0 <0.7.0, especificamente.

O contrato, tem uma estrutura declarada, que se chama Exame, que contém os seguintes atributos: 
-> enderecoDoConteudo - conteúdo do arquivo do IPFS, que serve para identificar o arquivo que foi enviado.
-> nome - nome do exame.
-> data - data de envio do exame

O contrato contém um mapemento de endereços: mapping(address => Exame[]) exames, é um mapeamento de endereços de cada exame e é atribuito ao objeto exames. Onde esse endereço é relacionado ao paciente.

O contrato contém o método enviarInfo, que esse método envia as informações para a rede blockchain, esse método recebe como parâmetro, o endereco de conteudo, o nome e data. Essas informações são inseridas no vetor de exames, indexado pelo [msg.sender], que é o endereço do contrato que está sendo feita a interação. 

O método obterInfo, é o método que retorna as informações que foram enviadas, esse método recebe como parâmetro um indíce, que será informado dinamicamente quando for feita uma função em JavaScript no front end da aplicação descentralizada, que fará a chamada para esse método no contrato inteligente.

o método tamExames, é o método que retorna o tamanho do vetor de exames, ele pega o length do endereço do contrato que está sendo feita a interação.

o método obterEnderecoDoPaciente, é o método que retornar um endereço específico de um paciente.

Para fazer o deploy do contrato inteligente, rode o seguinte comando:

truffle migrate

Por padrão ele irá pegar a rede de desenvolvimento, que se encontra no arquivo de configuração do projeto. Se for feito o deploy é uma rede específica, basta adicionar a flag --network, com o nome da rede. Por exemplo:

truffle migrate --network kovan.

Após a execução do comando acima, será criado uma pasta chamada build/, que é a pasta que contém o contrato inteligente no formato de JSON RPC, que serve, para ser feita a interação com o front end.

Após ser feito o deploy do contrato, use o comando abaixo para mover a pasta build, que contem o json RPC, do contrato. Para a pasta do front end
ln -s ../../build/contracts app/src/contracts(Só funciona para distribuições Linux)



### Ganache e Truffle

Para instalar essas duas ferramentas que foram usadas para o desenvolvimento desse contrato inteligente, execute: 

npm i -g truffle@nodeLTS;

npm i -g ganache-cli.