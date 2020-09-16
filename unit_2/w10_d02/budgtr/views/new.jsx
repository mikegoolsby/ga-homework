const React = require('react');
const Layout = require("./components/Layout.jsx");

class New extends React.Component {
    render() {
        const {budget, index} = this.props
        return (
            <Layout>
                <h1>Add a new Budget Event</h1>
                <a href="/budgets">Go Back</a>
                <form action="/new" method="post">
                    <label>
                    <input type="text" placeholder="date" name="date"></input>
                    <input type="text" placeholder="name"name="name"></input>
                    <input type="text" placeholder="amount"name="amount"></input>
                    <input type="text" placeholder="from"name="from"></input>
                    <input type="submit" value="Add"></input>
                    </label>
                </form>
            </Layout>
        )
    }
}

module.exports = New