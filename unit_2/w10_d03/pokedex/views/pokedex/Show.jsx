const React = require("react");
const Layout = require('../Layout.jsx')

class Show extends React.Component{
    render() {
        const {pokemon} = this.props
        return(
            <Layout>
                <ul class="list-group">
                    <li class="list-group-item">Name: {pokemon.name}</li>
                    <li class="list-group-item">Type: {pokemon.type}</li>
                    <li class="list-group-item">HP: {pokemon.stats.hp}</li>
                    <li class="list-group-item">Attack: {pokemon.stats.attack}</li>
                    <li class="list-group-item">Defense: {pokemon.stats.defense}</li>
                </ul>
            </Layout>
        )
    }
}

module.exports = Show