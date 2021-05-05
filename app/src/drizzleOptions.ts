import ExameMedico from '@/contracts/ExameMedico.json';

const options = {
    web3: {
        block: false,
        fallback: {
            type: 'ws',
            //url: 'ws://127.0.0.1:8545'
            url: 'wss://ropsten.infura.io/ws/v3/' + process.env.INFURA_KEY
        }
    },
    contracts: [ExameMedico],
    polls: {
        accounts: 15000
    }
}

export default options;