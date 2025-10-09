const express = require('express');
const router = express.Router();
const statisticController = require('../controllers/statisticController');

router.get('/revenue', statisticController.revenue);
router.get('/top-products', statisticController.topProducts);

module.exports = router;