const React = require("react");
const budget = require("../models/budget.js");
const Layout = require("./components/Layout.jsx");

class Show extends React.Component {
    render() {
        const {item, index} = this.props
        return(
            <Layout>
                <h1>{item.name}</h1>
                <a href="/budgets">Go Back</a>
                <h2>Date</h2>
                <h3>{item.date}</h3>
                <h2>From</h2>
                <h3>{item.from}</h3>
                <h2>Amount</h2>
                <h3>{item.amount}</h3>
            </Layout>
        )
    }
}

module.exports = Show