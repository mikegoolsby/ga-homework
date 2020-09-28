const {Router} = require('express');
const Products = require('../models/products');
const router = Router();
const Product = require('../models/products')

router.get('/', (req, res) => {
    Products.find({}, (err, product) => {
        // console.log(product)
        res.render('index', { product })
    })
})

module.exports = router