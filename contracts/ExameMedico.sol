pragma solidity >=0.5.0 <0.7.0;

contract ExameMedico {
    constructor() public {}

    struct Exame {
        string endConteudo;
        string name;
        string data;
    }


    mapping(address => Exame[]) exames;

    function set(
        string memory _endConteudo,
        string memory _name,
        string memory _data
    ) public {
        exames[msg.sender].push(
            Exame({endConteudo: _endConteudo, name: _name, data: _data})
        );
    }

    function get(uint256 _index)
        public
        view
        returns (
            string memory,
            string memory,
            string memory
        )
    {
        Exame memory exame = exames[msg.sender][_index];
        return (exame.endConteudo, exame.name, exame.data);
    }

    function getTam() public view returns (uint256) {
        return exames[msg.sender].length;
    }

    function getEndPaciente() public view returns(address) {
      return msg.sender;
    }
}
