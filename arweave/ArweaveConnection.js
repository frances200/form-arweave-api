const Arweave = require('arweave');
const fs = require('fs');

const rawData = fs.readFileSync('./arweave/keyfile.json');
const configData = JSON.parse(rawData);

const arweave = Arweave.init({
    host: 'arweave.net',
    protocol: 'https',
    port: 443
});

arweave.configData = configData;

module.exports = arweave;
