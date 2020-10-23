const express = require('express')
const app = express()
const {PORT, SECRET} = process.env
const { MONGODB_URI, DB_NAME } = process.env
const bookmarkdController = require('./controllers/bookmarkd')
const mongoose = require('mongoose')
const cors = require('cors')

// Mongo setup
mongoose.connect(`${MONGODB_URI}${DB_NAME}`, {
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