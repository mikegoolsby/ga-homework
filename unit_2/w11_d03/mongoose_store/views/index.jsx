const React = require('react')
const product = require('../models/seedData')
const Layout = require('./Layout')

class Index extends React.Component {
    render() {
        const {product, index} = this.props
        return (
            <Layout>
                <button type="button" class="btn btn-info">Add Space Vehicle</button>
                {product.map((product, index) => {
                    let junkIndicator = <li>Currently Space Junk - Out of Stock</li>
                    if (product.qty > 0) {
                        junkIndicator = <li>Not yet space junk. Currently {product.qty} in stock.</li>
                    }
                    return (
                        <div class="row">
                        <ul key={index} >
                        <li>{product.name}</li>
                        <a href={`/products/${product._id}`}> <img src={product.img}></img></a>
                            <li>Description: {product.description}</li>
                            <li>Cost (per launch): ${product.price}MM</li>
                            {junkIndicator}
                        </ul>
                        </div> 
                    )
                })}
            </Layout>
        )
    }
}

module.exports = Index;