const React = require("react");
const Layout = require("./components/Layout.jsx")
const budget = require("../models/budget.js");

class index extends React.Component {
    render() {
       return (
           <Layout>
               <h1>Budgtr</h1>
               <table>
                   {budget.map((budget) => {
                        return <tr>
                            <td>{[budget.date]}</td>
                            <td><a href="#">{[budget.name]}</a></td>
                            <td>{[budget.from]}</td>
                            <td>{[budget.amount]}</td>
                        </tr>
                    })}
               </table>
           </Layout>
       ) 
    }
}
module.exports = index