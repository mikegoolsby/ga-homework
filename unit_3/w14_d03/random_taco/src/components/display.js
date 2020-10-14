import React from "react"

const Display = (props) => {
    const {taco} = props
    const loaded = () => {
        return (
            <div>
                <h4>{taco.shell.name}</h4>
                <h4>{taco.mixin.name}</h4>
                <h4>{taco.condiment.name}</h4>
                <p>{taco.mixin.recipe}</p>
            </div>
        )

    }
    return taco.mixin ? loaded() : <h1>Loading...</h1>
}

export default Display