// import React from 'react';
import React from 'react';
import Form from './Form';
import Career from './Career';
import Travel from './Travel';
import Food from './Food';
import Bucket from './Bucket';

class Buckets extends React.Component {
    constructor(props) {
        super(props);
        this.state = { buckets: [] };
    }

    componentDidMount() {
        $.ajax({
            url: '/buckets',
            type: 'GET'
        }).done( buckets => {
            this.setState({ buckets })
        });
    }

    addBucket = (name) => {
        $.ajax({
            url: '/buckets',
            type: 'POST',
            data: {name}
        }).done(bucket => {
            this.setState({ buckets: [...this.state.buckets, bucket]})
        });
    }

    render () {
        console.log("count buckets:" + this.state.buckets.length);
        let buckets = this.state.buckets.map( bucket => {
            return(
                <Bucket
                    key={bucket._id}
                    {...bucket}
                />
            )
        });
        return(
            <div>
                <Form add={this.addBucket} placeholder="Add Bucket" />
                <div className="row">
                    {buckets}
                </div>
                <div className="divider">
                </div>
                {/*<Career />
                <Travel />
                <Food /> */}
            </div>
        )
    }
}

export default Buckets;