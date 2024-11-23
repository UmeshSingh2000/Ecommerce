const express = require('express')
const router = express.Router()
const {getProduct} = require('../Controllers/productsControllers')

router.get('/products',getProduct)

module.exports = router;