const database = require('../database/DBConnection');

module.exports = {
    fetchFormData: callback => {
        const sql = `SELECT * FROM formdata`;
        database.query(sql, (err, result) => {
            callback(err, result);
        })
    },

    fetchFormDataById: (id, callback) => {
        const sql = `SELECT * FROM formdata WHERE id = ?`;
        const values = [id];
        database.query(sql, values, (err, result) => {
            callback(err, result);
        })
    },

    fetchFormDataByTransactionId: (id, callback) => {
        const sql = `SELECT * FROM formdata WHERE transaction_id = ?`;
        const values = [id];
        database.query(sql, values, (err, result) => {
            callback(err, result);
        })
    },

    insertFormData: (body, transaction_id, callback) => {
        const sql = `INSERT INTO formdata (transaction_id, user_id, question_id, chapter_name, textfield_1, textfield_2, optional_1, optional_2, optional_3, optional_4, optional_5) VALUES (?)`;
        const values = [transaction_id, body.user_id, body.question_id, body.chapter_name, body.textfield_1, body.textfield_2, body.optional_1, body.optional_2, body.optional_3, body.optional_4, body.optional_5];
        database.query(sql, [values], (err, result) => {
            callback(err, result);
        });
    },

    updateByRowId: (id, body, callback) => {
        const sql = `UPDATE formdata SET user_id = ?, question_id = ?, chapter_name = ?, textfield_1 = ?, textfield_2 = ?, optional_1 = ?, optional_2 = ?, optional_3 = ?, optional_4 = ?, optional_5 = ? WHERE id = ?`
        const values = [body.user_id, body.question_id, body.chapter_name, body.textfield_1, body.textfield_2, body.optional_1, body.optional_2, body.optional_3, body.optional_4, body.optional_5, id];
        database.query(sql, values, (err, result) => {
            callback(err, result);
        });
    },

    updateByTransactionId: (id, body, callback) => {
        const sql = `UPDATE formdata SET user_id = ?, question_id = ?, chapter_name = ?, textfield_1 = ?, textfield_2 = ?, optional_1 = ?, optional_2 = ?, optional_3 = ?, optional_4 = ?, optional_5 = ? WHERE transaction_id = ?`
        const values = [body.user_id, body.question_id, body.chapter_name, body.textfield_1, body.textfield_2, body.optional_1, body.optional_2, body.optional_3, body.optional_4, body.optional_5, id];
        database.query(sql, values, (err, result) => {
            callback(err, result);
        });
    },

    deleteByRowId: (id, callback) => {
        const sql = `DELETE FROM formdata WHERE id = ?`;
        const values = [id];
        database.query(sql, [values], (err, result) => {
            callback(err, result);
        });
    },

    deleteByTransactionId: (id, callback) => {
        const sql = `DELETE FROM formdata WHERE transaction_id = ?`;
        const values = [id];
        database.query(sql, [values], (err, result) => {
            callback(err, result);
        });
    }
}
