import React from 'react'
import DivTwo from './divTwo'

class divOne extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <DivTwo {...this.props}/>
            </div>
        )
    }
}

export default divOne