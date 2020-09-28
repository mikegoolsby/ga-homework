const React = require('react');
const product = require('../models/products')
const Layout = require('./Layout')

class Show extends React.Component {
    render() {
        const {product, index} = this.props
        let junkIndicator = <li>Currently Space Junk - Out of Stock</li>
        if (product.qty > 0) {
            junkIndicator = <div>
            <a href={`/home/buy/${product._id}`}><button type="button" class="btn btn-success">Purchase Spacecraft</button></a>
            <a href={`/home/${product._id}/edit`}><button type="button" class="btn btn-warning">Edit Spacecraft</button></a>
            </div>
        }
        return (
            <Layout>
                <a href="/home"><button type="button" class="btn btn-outline-dark">Back</button></a>
                <div class="d-flex flex-row">
                    <ul key={index} class="p-2">
                    <h3 class="p-2">{product.name}</h3>
                        <a href={`/home/${product._id}`} class="p-2"> <img src={product.img} class="p-2 rounded"></img></a>
                            <li class="p-2">Description: {product.description}</li>
                            <li class="p-2">Cost (per launch): ${product.price}MM</li>
                            {junkIndicator}
                    <form action={`/home/${product._id}?_method=DELETE`} method="POST">
                    <button type="submit" class="btn btn-danger p-2" value="Delete">Delete</button>
                    </form>
                    </ul>
                </div>
            </Layout>
        )
    }
}

module.exports = Show;