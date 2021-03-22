pragma solidity >=0.5.0 <0.7.0;

contract ExameMedico {
    constructor() public {}

    struct Exame {
        string enderecoDoConteudo;
        string nome;
        string data;
    }


    mapping(address => Exame[]) exames;

    function enviarInfo(
        string memory _enderecoDoConteudo,
        string memory _nome,
        string memory _data
    ) public {
        exames[msg.sender].push(
            Exame({enderecoDoConteudo: _enderecoDoConteudo, nome: _nome, data: _data})
        );
    }

    function obterInfo(uint256 _index)
        public
        view
        returns (
            string memory,
            string memory,
            string memory
        )
    {
        Exame memory exame = exames[msg.sender][_index];
        return (exame.enderecoDoConteudo, exame.nome, exame.data);
    }

    function tamExames() public view returns (uint256) {
        return exames[msg.sender].length;
    }

    function obterEnderecoDoPaciente() public view returns(address) {
      return msg.sender;
    }
}
