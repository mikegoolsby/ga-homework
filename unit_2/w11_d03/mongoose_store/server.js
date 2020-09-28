const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const PORT = process.env.PORT || 3000;

const productsRouter = require('./controllers/product')

const mongoURI = "mongodb+srv://mgoolsby1091:pleaseworkthanks@seir-flex-zen.mqfdu.mongodb.net/mongoose-store?retryWrites=true&w=majorityy"

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
    console.log("connected to MongoDB")
})

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use('/home', productsRouter)

app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
})