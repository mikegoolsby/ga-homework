const express = require("express"); // brings in express library
const { reduce } = require("./models/budget.js");

const app = express(); // creates application object

const PORT = process.env.PORT || 3000; // default to 3000 unless one is defined elswhere

const budget = require("./models/budget.js")

////////////////////
// Middleware
////////////////////
app.use(express.static("public")); //Sets Public Folder to be Served Statically (for images/CSS Files)
app.set("view engine", "jsx"); //Tells Express that our View Engine will use .jsx files
app.engine("jsx", require("express-react-views").createEngine()); //Sets our View engine
app.use(express.urlencoded({ extended: true }));
////////////////////
// Routes and routers
////////////////////
app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>')
})

app.get('/budgets', (req, res) => {
    res.render('./index.jsx', { budget })
    const totalAmt = budget.reduce((total, item) => {
        return totalAmt += Number(item.amount)
    }, 0)
})

app.get('/budgets/:index', (req, res) => {
    res.render('./show.jsx', {
        item:budget[req.params.index],
        index: req.params.index
    })
})

app.get('/new', (req, res) => {
    res.render('./new.jsx')
})

app.post('/new', (req, res) => {
    // res.send(res.body)
    budget.push(req.body)
    res.redirect('/budgets')
})

app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
})