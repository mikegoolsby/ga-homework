const React = require("react");
const Layout = require('../Layout.jsx')

class Show extends React.Component{
    render() {
        const {pokemon, index} = this.props
        return(
            <Layout>
                <a href="/poke" class="badge badge-info">Go Back</a>
                <ul class="list-group">
                    <li class="list-group-item">Name: {pokemon.name}</li>
                    <li class="list-group-item">Type: {pokemon.type}</li>
                    <li class="list-group-item">HP: {pokemon.stats.hp}</li>
                    <li class="list-group-item">Attack: {pokemon.stats.attack}</li>
                    <li class="list-group-item">Defense: {pokemon.stats.defense}</li>
                </ul>
                <form action={`/poke/${index}?_method=DELETE`} method="post">
                    <button type="submit" class="btn btn-danger" value="Delete">Delete</button>
                </form>
            </Layout>
        )
    }
}

module.exports = Show