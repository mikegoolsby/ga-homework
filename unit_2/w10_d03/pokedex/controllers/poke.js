const {Router} = require('express')
const router = Router()
const pokemon = require("../models/pokemon")

router.get('/', (req, res) => {
    res.render("pokedex/Index.jsx", {pokemon})
})

// New
router.get('/new', (req, res) => {
    res.render("pokedex/New.jsx")
})

// CREATE
router.post('/', (req, res) => {
    pokemon.push(req.body)
    res.redirect('/poke')
})

// Delete
router.delete('/:index/edit', (req, res) => {
    pokemon.splice(req.params.index,1)
    res.redirect("/poke/")
})

// EDIT - Page to update your todo
router.get('/:index/edit', (req, res) => {
    res.render("pokedex/Edit.jsx", {
        pokemon:pokemon[req.params.index],
        index: req.params.index
    })
})

router.put("/:index", (req, res) => {
    pokemon[req.params.index] = req.body;
    res.redirect("/poke/")
})

// +& SHOW ROUTE
router.get("/:index", (req, res) => {
    res.render("pokedex/Show.jsx", {
        pokemon:pokemon[req.params.index],
        index: req.params.index
    })
})

module.exports = router