const React = require('react')
const product = require('../models/seedData')
const Layout = require('./Layout')

class Index extends React.Component {
    render() {
        const {product, index} = this.props
        return (
            <Layout>
                <h1 class="d-flex justify-content-center">Intergalactic Buyer's Hub</h1>
                <a href="/home/new"><button type="button" class="btn btn-info">Add to the Fleet</button></a>
                <div class="d-flex flex-row">
                {product.map((product, index) => {
                    let junkIndicator = <li>Currently Space Junk - Out of Stock</li>
                    if (product.qty > 0) {
                        junkIndicator = <li>Not yet space junk. Currently {product.qty} in stock.</li>
                    }
                    return (
                        <div class="row p-2" id="index">
                        <ul key={index} >
                        <h3>{product.name}</h3>
                        <a href={`/home/${product._id}`}> <img src={product.img} class="rounded"></img></a>
                            <li>Description: {product.description}</li>
                            <li>Cost (per launch): ${product.price}MM</li>
                            {junkIndicator}
                        </ul>
                        </div> 
                    )
                })}
                </div>
            </Layout>
        )
    }
}

module.exports = Index;