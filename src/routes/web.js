const express = require('express');
const { getHomepage } = require('../controllers/homeController')
const { getABC } = require('../controllers/homeController')
const { getPresent111 } = require('../controllers/homeController')
const router = express.Router();

// router.Method('/route',handler)

router.get('/', getHomepage);
router.get('/abc', getABC);
router.get('/present111', getPresent111)

module.exports = router;