const React = require("react");
const pokemon = require("../../models/pokemon.js");
const Layout = require('../Layout.jsx')

class Edit extends React.Component {
    render(){
        const {pokemon, index} = this.props
        return(
            <Layout>
                <a href="/poke" class="badge badge-info">Go Back</a>
                <form action={`/poke/${index}?_method=PUT`} method="post">
                    <label>
                        <input type="text" placeholder="Name" class="input-group-text" name="name" value={pokemon.name}/>
                        <input type="text" placeholder="Type" class="input-group-text" name="type" value={pokemon.type}/>
                        <input type="text" placeholder="HP" class="input-group-text" name="hp" value={pokemon.stats.hp}/>
                        <input type="text" placeholder="Attack" class="input-group-text" name="attack" value={pokemon.stats.attack}/>
                        <input type="text" placeholder="Defense" class="input-group-text" name="defense" value={pokemon.stats.defense}/>
                        <input type="submit" class="btn btn-danger" value="Save Changes"></input>
                    </label>
                </form>
            </Layout>
        )
    }
}

module.exports = Edit