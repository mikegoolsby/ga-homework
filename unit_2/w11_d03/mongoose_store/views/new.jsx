const React = require('react');
const Layout = require('./Layout')

class New extends React.Component {
    render() {
        return (
            <Layout title="Add a New Spacecraft to the Fleet">
                <form action="/home" method="POST">
                    <div class="form-group">
                      Product Name: <input type="text" class="form-control" name="name"/>
                      Description: <input type="text" class="form-control" name="description"/>
                      Link to Image: <input type="text" class="form-control" name="img"/>
                      Price: <input type="text" class="form-control" name="price"/>
                      Available Qty: <input type="text" class="form-control" name="qty"/>
                      <input class="btn btn-primary" type="submit" value="Submit"></input>
                    </div>
                </form>
            </Layout>
        )
    }
}

module.exports = New;