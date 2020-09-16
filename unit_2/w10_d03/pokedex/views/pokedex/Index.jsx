const React = require('react')
const pokemon = require('../../models/pokemon.js')
const Layout = require('../Layout.jsx')

class Index extends React.Component {
    render(){
        return (
            <Layout title="index">
                <a href="/poke/new"><button class="btn btn-warning btn-lg">Add New Pokemon</button></a>
                <div class="col-md-auto">
                {pokemon.map((pokemon, index) => {
                    return <div className="pokemon">
                        <a href={`poke/${index}`}><img src={pokemon.img}></img></a> 
                        <h3 className="pokemon-name">{pokemon.name}</h3>
                        <a href="/poke/new"><button class="btn btn-success btn-lg">Edit</button></a>
                        </div>
                })}
                </div>
            </Layout>
        )
    }
}

module.exports = Index