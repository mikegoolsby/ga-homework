const {Router} = require('express')
const router = Router()
const pokemon = require("../models/pokemon")

router.get('/', (req, res) => {
    res.render("pokedex/Index.jsx", {pokemon})
})

module.exports = router