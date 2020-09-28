const {Router} = require('express');
const Products = require('../models/products');
const router = Router();
const Product = require('../models/products')

// Index
router.get('/', (req, res) => {
    Products.find({}, (err, product) => {
        res.render('index', { product })
    })
})

// New
router.get('/new', (req, res) => {
    res.render('new')
})

// Delete
router.delete("/:id", (req, res) => {
    Products.findByIdAndRemove(req.params.id, (err, data) => {
        res.redirect("/home")
    })
})

// Edit
router.get("/:id/edit", (req, res) => {
    Products.findById(req.params.id, (err, product) => {
        res.render('edit', {data: product})
    })
})

// Create
router.post('/', (req, res) => {
    Products.create(req.body, (err, product) => {
        res.redirect('/home');
    })
})

// Update
router.put("/:id", (req, res) => {
    Products.findByIdAndUpdate(req.params.id, req.body, (err, product) => {
        res.redirect("/home");
    })
})

//Show
router.get('/:id', (req, res) => {
    Products.findById(req.params.id, (err, product) => {
        res.render('show', { product });
    })
})

// Purchase
router.get("/buy/:id", (req, res) => {
    Products.findById(req.params.id, (err, product) => {
        product.qty--;
        Product.findByIdAndUpdate(req.params.id, product, () => {
            res.redirect("/home")
        })
    })
})
module.exports = router