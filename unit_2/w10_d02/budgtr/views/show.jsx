const React = require("react");
const budget = require("../models/budget.js");
const Layout = require("./components/Layout.jsx");

class Show extends React.Component {
    render() {
        const {item, index} = this.props
        return(
            <Layout>
                <h3>{item.from}</h3>
                <a href="/budgets">Go Back</a>
            </Layout>
        )
    }
}

module.exports = Show