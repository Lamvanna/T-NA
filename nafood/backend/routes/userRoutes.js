const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.listUsers);
router.patch('/:id', userController.updateUser);
router.patch('/:id/toggle', userController.toggleStatus);

module.exports = router;