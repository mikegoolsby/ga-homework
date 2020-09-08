const express = require('express');
const app = express();
const port = 3000;

app.get('/greeting', (req, res) => {
    res.send('Hello, friend')
})

app.get('/greeting/:name', (req, res) => {
    res.send(`Wow, good to see ya, ${req.params.name}`)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    let realPct = req.params.tipPercentage * .01
    let tip = req.params.total * realPct
    res.send(`Please leave $${tip} as a tip`)
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})