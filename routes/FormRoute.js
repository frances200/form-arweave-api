const express = require('express');
const router = express.Router();
const controller = require('../controllers/FormController');

router.get('/', controller.fetchFormData);
router.get('/:id', controller.fetchFormDataById);
router.get('/transaction/:id', controller.fetchFormDataByTransactionId);
router.post('/', controller.postFormData);
router.put('/transaction/:id', controller.updateByTransactionId);
router.put('/:id', controller.updateByRowId);
router.delete('/:id', controller.deleteByRowId);
router.delete('/transaction/:id', controller.deleteByTransactionId);

module.exports = router;
