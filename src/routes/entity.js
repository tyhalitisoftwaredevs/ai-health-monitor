const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createEntity, getEntities, updateEntity, deleteEntity } = require('../controllers/entityController');
router.post('/', auth, createEntity);
router.get('/', getEntities);
router.put('/:id', auth, updateEntity);
router.delete('/:id', auth, deleteEntity);
module.exports = router;