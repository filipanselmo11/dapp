import ExameMedico from '@/contracts/ExameMedico.json';

const options = {
    web3: {
        block: false,
        fallback: {
            type: 'ws',
            url: 'ws://127.0.0.1:8545'
            //url: 'wss://kovan.infura.io/ws/v3/85251234652d4e36b814c3f61c179f1c'
        }
    },
    contracts: [ExameMedico],
    polls: {
        accounts: 15000
    }
}

export default options;