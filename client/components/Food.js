import React from 'react';

class Food extends React.Component{
    constructor(props) {
        super(props);
        this.state = {foodItem: []}
    }

    render() {
        return(
            <div>
                <h3>This is Food</h3>
            </div>
        )
    }
}

export default Food;