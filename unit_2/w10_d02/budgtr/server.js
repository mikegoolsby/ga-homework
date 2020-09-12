const express = require("express"); // brings in express library

const app = express(); // creates application object

const PORT = process.env.PORT || 3000; // default to 3000 unless one is defined elswhere


////////////////////
// Middleware
////////////////////
app.use(express.static("public")); //Sets Public Folder to be Served Statically (for images/CSS Files)
app.set("view engine", "jsx"); //Tells Express that our View Engine will use .jsx files
app.engine("jsx", require("express-react-views").createEngine()); //Sets our View engine
////////////////////
// Routes and routers
////////////////////
app.get('/', (req, res) => {
    res.send('<h3>Hello</h3>')
})

app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
})