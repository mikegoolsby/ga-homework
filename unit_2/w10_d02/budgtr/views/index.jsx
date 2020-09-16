const React = require("react");
const Layout = require("./components/Layout.jsx")
const budget = require("../models/budget.js");

const bankAccount = budget.reduce((accumulator, item) => {
    return accumulator += Number(item.amount)
}, 0)

const changeColor = (bankAccount) => {
    if (bankAccount > 0) {
        return (
            <h2 style={{color: 'green'}}>Your bank account total is: ${bankAccount}</h2>
        )
    } else {
        return (
            <h2 style={{color: 'red'}}>Your bank account total is: ${bankAccount}</h2>
        )
    }
}

class index extends React.Component {
    render() {
        const {budget, index} = this.props
       return (
           <Layout title="index">
               <h1>Budgtr</h1>
               <h2><a href={`/new`}>Add</a> a new Budget Event</h2>
               <div>
                   {changeColor(bankAccount)}
               </div>
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