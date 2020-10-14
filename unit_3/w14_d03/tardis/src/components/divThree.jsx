import React from 'react'

class divThree extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const changeIt = this.props.changeIt
        const tardis = this.props.tardis

        return (
            <div>
                <h3 onClick={() => {
                    changeIt(tardis.name)
                }}>{tardis.name}</h3>
            </div>
        )
    }
}

export default divThree