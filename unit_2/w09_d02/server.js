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

const magicEightBallResponses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/magic/:phrase', (req, res) => {
    let randomRes = Math.floor(Math.random() * magicEightBallResponses.length)
    res.send(`
    ${req.params.phrase}
    <h1>${magicEightBallResponses[randomRes]}<h1>
    `)
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})