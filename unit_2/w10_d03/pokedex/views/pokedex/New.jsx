const React = require("react");
const Layout = require('../Layout.jsx')

class New extends React.Component {
    render() {
        return(
            <Layout>
                <form action="/poke/" method="post">
                    <label>
                        <input type="text" placeholder="Name" class="input-group-text" name="name"/>
                        <input type="text" placeholder="Type" class="input-group-text" name="type" />
                        <input type="text" placeholder="HP" class="input-group-text" name="hp" />
                        <input type="text" placeholder="Attack" class="input-group-text" name="attack" />
                        <input type="text" placeholder="Defense" class="input-group-text" name="defense" />
                        <input type="submit" class="btn btn-info" value="Create Pokemon"></input>
                    </label>
                </form>
            </Layout>
        )
    }
}

module.exports = New