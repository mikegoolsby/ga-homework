const express = require('express');
const app = express();
const port = 3000;

app.get('/greeting', (req, res) => {
    res.send('Hello, friend')
})

app.get('/greeting/:name', (req, res) => {
    res.send(`Wow, good to see ya, ${req.params.name}`)
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})