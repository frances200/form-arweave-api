const arweave = require("../arweave/ArweaveConnection");

async function handleTransaction (body) {
    let transaction = await createTransaction(body);
    transaction = await signTransaction(transaction);
    await uploadTransaction(transaction);

    const status = await arweave.transactions.getStatus(transaction.id);
    if (!(status.status <= 199 || status.status >= 300))
        return transaction;
    return null;
}

async function createTransaction (body) {
    return await arweave.createTransaction({
        data: JSON.stringify(body)
    }, arweave.configData);
}

async function signTransaction (transaction) {
    await arweave.transactions.sign(transaction, arweave.configData);
    return transaction;
}

async function uploadTransaction (transaction) {
    const uploader = await arweave.transactions.getUploader(transaction);

    while (!uploader.isComplete) {
        await uploader.uploadChunk();
        console.log(`${uploader.pctComplete}% complete, ${uploader.uploadedChunks}/${uploader.totalChunks}`);
    }
}

module.exports = {
    handleTransaction
}
