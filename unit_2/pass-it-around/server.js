const express = require('express');
const app = express();
const port = 3000;

let bottlesOfBeer = 99;

app.get('/', (req, res) => {

    res.send(`
    ${bottlesOfBeer} bottles of beer on the wall
    <br>
    <a href="http://localhost:3000/98">take one down, pass it around</a>
    `)
})

app.get('/:number', (req, res) => {
    bottlesOfBeer--;
    if (bottlesOfBeer > 0) {
        res.send(`
        ${bottlesOfBeer} bottles of beer on the wall
        <br>
        <a href="http://localhost:3000/${bottlesOfBeer}">take one down, pass it around</a>
        `)
    } else {
        bottlesOfBeer = 99;
        res.send(`<a href="http://localhost:3000/">back to home page</a>`)
    }
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})