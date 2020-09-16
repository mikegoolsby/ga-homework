const express    = require('express');
const app        = express();
const PORT = process.env.PORT || 3000;
const Pokemon    = require('./models/pokemon.js');

const pokeRouter = require('./controllers/poke')

///////////////////////////
// MIDDLEWARE (Functions that run before our routes)
//////////////////////////
app.use(express.static("public")); //Sets Public Folder to be Served Statically (for images/CSS Files)
app.set("view engine", "jsx"); //Tells Express that our View Engine will use .jsx files
app.engine("jsx", require("express-react-views").createEngine()); //Sets our View engine
// Process form data, add it to req.body
app.use(express.urlencoded({extended: true}))
// app.use(methodOverride("_method"))

// Index
app.use('/poke', pokeRouter)


app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})