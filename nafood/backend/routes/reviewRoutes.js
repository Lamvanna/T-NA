const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

router.get('/', reviewController.list);
router.post('/', reviewController.create);

module.exports = router;