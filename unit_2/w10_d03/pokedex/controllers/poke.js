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
//DELETE
// router.delete('/:index', (req, res) => {
//     todos.splice(req.params.index,1)
//     res.redirect("/todo/")
// })
// EDIT - Page to update your todo
// router.get('/:index/edit', (req, res) => {
//     res.render("todo/edit.jsx", {
//         index: req.params.index,
//         todo: todos[req.params.index]
//     })
// })
//Update - takes info from form and updates todo
// router.put("/:index", (req, res) => {
//     todos[req.params.index] = req.body;
//     res.redirect("/todo/")
// })
// +& SHOW ROUTE
router.get("/:index", (req, res) => {
    res.render("pokedex/Show.jsx", {
        pokemon:pokemon[req.params.index],
        index: req.params.index
    })
})

module.exports = router