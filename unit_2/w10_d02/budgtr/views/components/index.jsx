const React = require("react");
const Layout = require("../Layout.jsx")
const Budget = require("./models/budget.js")

class index extends React.Component {
    render() {
       return (
           <Layout>
               <table>
                   <tr>{this.props.date}</tr>
               </table>
           </Layout>
       ) 
    }
}