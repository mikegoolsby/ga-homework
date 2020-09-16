const React = require("react");
const Layout = require("./components/Layout.jsx")
const budget = require("../models/budget.js");

class index extends React.Component {
    render() {
        const {budget, index} = this.props
       return (
           <Layout>
               <h1>Budgtr</h1>
               <h2><a href={`/new`}>Add</a> a new Budget Event</h2>
               
               <table>
                   {budget.map((budget, index) => {
                        return <tr>
                            <td>{budget.date}</td>
                            <td><a href={`/budgets/${index}`}>{budget.name}</a></td>
                            <td>{budget.from}</td>
                            <td>{budget.amount}</td>
                        </tr>
                    })}
               </table>
           </Layout>
       ) 
    }
}
module.exports = index