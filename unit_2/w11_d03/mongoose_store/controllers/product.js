const {Router} = require('express')
const router = Router();
const Product = require('../models/products')

router.get('/', (req, res) => {
    res.send('cleared the tower')
})

module.exports = router