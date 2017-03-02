import React from 'react';

class Travel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {location: [] };
    }

    render() {
        return(
            <div>
                <h3>Lets Travel</h3>
            </div>
        )
    }
}

export default Travel;