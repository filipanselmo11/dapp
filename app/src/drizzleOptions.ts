import ExameMedico from '@/contracts/ExameMedico.json';

const options = {
    web3: {
        block: false,
        fallback: {
            type: 'ws',
            url: 'ws://127.0.0.1:8545'
            //url: 'wss://kovan.infura.io/ws/v3/8bbd63ff707c486fba45bc2017a35db0'
        }
    },
    contracts: [ExameMedico],
    polls: {
        accounts: 15000
    }
}

export default options;