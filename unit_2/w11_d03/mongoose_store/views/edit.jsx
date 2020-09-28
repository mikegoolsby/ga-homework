const React = require('react');
const Layout = require('./Layout')

class Edit extends React.Component {
    render() {
        const product = this.props.data;
        return (
            <Layout title="Edit Spacecraft">
                <div>
                    <form action={`/home/${product._id}?_method=PUT`} method="POST">
                    <div class="form-group">
                      Product Name: <input type="text" class="form-control" name="name" defaultValue={this.props.name}/>
                      Description: <input type="text" class="form-control" name="description" defaultValue={this.props.description}/>
                      Link to Image: <input type="text" class="form-control" name="img" defaultValue={this.props.img}/>
                      Price: <input type="text" class="form-control" name="price" defaultValue={this.props.price}/>
                      Available Qty: <input type="text" class="form-control" name="qty" defaultValue={this.props.qty}/>
                      <input class="btn btn-primary" type="submit" value="Submit"></input>
                    </div>
                    </form>
                </div>
            </Layout>
        )
    }
}

module.exports = Edit;