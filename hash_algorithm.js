// Studi kasus hash kata sandi

const crypto = require('crypto');

let inputData = "kata_sandi";
let result = "";
const hash = crypto.createHash('sha256');
hash.update(inputData);
result = hash.digest('hex');
console.log(result);