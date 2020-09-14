const React = require("react");
const Layout = require("./components/Layout.jsx")
const Budget = require("../models/budget.js")

class index extends React.Component {
    render() {
       return (
           <Layout>
               <h1>Hello from index</h1>
               {/* <table>
                   <tr>{this.props.date}</tr>
               </table> */}
           </Layout>
       ) 
    }
}

module.exports = index