const express = require('express')
const app = express()
const PORT = 3000
const bookmarkdController = require('./controllers/bookmarkd')
// const session = require("express-session");
// const MongoStore = require("connect-mongo")(session);
const mongoose = require('mongoose')
const cors = require('cors')
require("dotenv").config();

// Mongo setup
mongoose.connect(`mongodb+srv://mgoolsby1091:pleaseworkthanks@seir-flex-zen.mqfdu.mongodb.net/bookmarkd?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
    console.log("Bookmarkd is connected to Mongo")
});


// Middleware
app.use(express.json()); //use .json(), not .urlencoded()
app.use(cors())
app.use('/bookmarkd', bookmarkdController)

app.listen(PORT, () => {
    console.log(`Bookmarkd API running on PORT ${PORT}`)
})