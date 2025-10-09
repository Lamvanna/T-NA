const express = require('express');
const router = express.Router();
const bannerController = require('../controllers/bannerController');

router.get('/', bannerController.list);
router.post('/', bannerController.create);

module.exports = router;