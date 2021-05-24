import IPFS from 'ipfs-http-client';

//const ipfs=new IPFS({host:'ipfs.infura.io',port:5001,protocol:'https'});
const ipfs = new IPFS('http://localhost:5001/');
export default ipfs;