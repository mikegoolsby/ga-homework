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
                <div className="main">
                    <ul key={index}>
                    <li>{product.name}</li>
                        <a href={`/home/${product._id}`}> <img src={product.img}></img></a>
                            <li>Description: {product.description}</li>
                            <li>Cost (per launch): ${product.price}MM</li>
                            {junkIndicator}
                    </ul>
                    <form action={`/home/${product._id}?_method=DELETE`} method="POST">
                    <button type="submit" class="btn btn-danger" value="Delete">Delete</button>
                    </form>
                </div>
            </Layout>
        )
    }
}

module.exports = Show;