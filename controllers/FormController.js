const dao = require('../dao/FormDAO');
const transactionController = require('./TransactionController');

exports.fetchFormData = (req, res, next) => {
    dao.fetchFormData((err, result) => {
        if(err) return next(new Error('Error while fetching database data'));
        if (result.length === 0) return res.status(200).send({ message: 'Table is empty' });

        res.status(200).send(result);
    });
}

exports.fetchFormDataById = (req, res, next) => {
    const { id } = req.params;

    dao.fetchFormDataById(id, (err, result) => {
        if (err) return next(new Error('Error while fetching database data'));
        if (result.length === 0) return res.status(404).send({ message: 'Row not found' });

        res.status(200).send(result);
    });
}

exports.fetchFormDataByTransactionId = (req, res, next) => {
    const { id } = req.params;

    dao.fetchFormDataByTransactionId(id, (err, result) => {
        if(err) return next(new Error('Error while fetching database data'));
        if (result.length === 0) return res.status(404).send({ message: 'Row not found' });

        res.status(200).send(result);
    });
}

exports.postFormData = async (req, res, next) => {
    const { body } = req;

    const transaction = await transactionController.handleTransaction(body);
    if (!transaction)
        return next(new Error('Transaction not correctly sent to Arweave, data not stored in database.'));

    dao.insertFormData(body, transaction.id, (err, result) => {
        if (err) return next(new Error('Error while inserting data into database'));

        res.status(200).send({
            message: '1 record inserted'
        });
    });
}

exports.deleteByTransactionId = async (req, res, next) => {
    const { id } = req.params;

    dao.deleteByTransactionId(id, (err, result) => {
        if (err) return next(new Error('Failed to delete row'));
        if (!result.affectedRows) return res.status(200).send({ message: 'No rows affected' });

        res.status(200).send({
            message: 'record deleted'
        });
    });
}

exports.deleteByRowId = async (req, res, next) => {
    const { id } = req.params;

    dao.deleteByRowId(id, (err, result) => {
        if (err) return next(new Error('Failed to delete row'));
        if (!result.affectedRows) return res.status(200).send({ message: 'No rows affected' });

        res.status(200).send({
            message: 'record deleted'
        });
    });
}

exports.updateByTransactionId = async (req, res, next) => {
    const { body } = req;
    const id = req.params.id;

    dao.updateByTransactionId(id, body, (err, result) => {
        if (err) return next(new Error('Failed to update row'));
        if (!result.affectedRows) return res.status(200).send({ message: 'No rows affected' });

        res.status(200).send({
            message: 'record updated'
        });
    });
}

exports.updateByRowId = async (req, res, next) => {
    const { body } = req;
    const id = req.params.id;

    dao.updateByRowId(id, body, (err, result) => {
        if (err) return next(new Error('Failed to update row'));
        if (!result.affectedRows) return res.status(200).send({ message: 'No rows affected' })

        res.status(200).send({
            message: 'record updated'
        });
    });
}
