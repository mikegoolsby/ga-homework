import React from 'react';
import DivThree from './divThree'

class divTwo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const Props = this.props
        return (
            <div>
                <DivThree {...Props}/>
            </div>
        )
    }
}

export default divTwo