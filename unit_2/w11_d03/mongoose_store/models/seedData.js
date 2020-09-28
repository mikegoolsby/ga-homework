const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://mgoolsby1091:pleaseworkthanks@seir-flex-zen.mqfdu.mongodb.net/mongoose-store?retryWrites=true&w=majorityy"

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
    console.log("connected to MongoDB")
})

const Products = require('./products')

const seedData = [
    {
      name: 'Saturn V',
      description: 'Three-stage rocket that carried the first Astronauts to the moon',
      img: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Apollo_11_Launch_-_GPN-2000-000630.jpg',
      price: 185,
      qty: 13
    }, {
      name: 'Space Shuttle',
      description: 'Reusable low orbit spacecraft that landed like a plane',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/STS120LaunchHiRes-edit1.jpg/1200px-STS120LaunchHiRes-edit1.jpg',
      price: 576,
      qty: 5
    }, {
      name: 'Falcon Heavy',
      description: 'Reusable payload rocket, with boosters that land themselves',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Falcon_Heavy_Demo_Mission_%2839337245145%29.jpg/220px-Falcon_Heavy_Demo_Mission_%2839337245145%29.jpg',
      price: 90,
      qty: 6
    }
]

// Products.create(seedData, (err, data) => {
//     console.log(data)
// })